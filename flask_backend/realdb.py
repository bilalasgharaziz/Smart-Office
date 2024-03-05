from flask import Flask, jsonify
from flask_cors import CORS
import pyrebase
import time
from datetime import datetime , timedelta
import schedule
import threading

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

# Configuration of the Firebase Database
firebase_config = {
        "apiKey": "AIzaSyB0QrN6GnqUIU9eZQnRC5P-_v_9YFsBPi8",
        "authDomain": "madlab-fdc58.firebaseapp.com",
        "databaseURL": "https://madlab-fdc58-default-rtdb.europe-west1.firebasedatabase.app",
        "projectId": "madlab-fdc58",
        "storageBucket": "madlab-fdc58.appspot.com",
        "messagingSenderId": "622870313815",
        "appId": "1:622870313815:web:7797870e1a5df259a2dc12",
        "measurementId": "G-T26L6N1CG0"
}

# Configuration for the Firebase Database to store aggregate data
aggregate_firebase_config = {
        "apiKey": "AIzaSyAZJwJGIWBm0h2DsqnRDoUSIU_q2ZdahqU",
        "authDomain": "madlab-b4557.firebaseapp.com",
        "databaseURL": "https://madlab-b4557-default-rtdb.europe-west1.firebasedatabase.app",
        "projectId": "madlab-b4557",
        "storageBucket": "madlab-b4557.appspot.com",
        "messagingSenderId": "743801590573",
        "appId": "1:743801590573:web:0c2822b5ba1a2a6d9e39a4",
        "measurementId": "G-4918G0V4G3"
}

# Initialize Firebase
firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()

Agg_firebase = pyrebase.initialize_app(aggregate_firebase_config)
Agg_db = Agg_firebase.database()

# Get reference to root nodes
root_ref = db.get()

def calculate_active_duration():
    """
    Calculates the active duration of each sensor

    Returns:
        dict: A dictionary containing the active duration for each sensor,
            with sensor names as keys and a list of dictionaries with containing "start" and "end" times when sensor was active
    """
    active_duration_dict = {}

    # Iterate through each sensor node in the database
    for parent_node in root_ref.each():

        active_duration = []  # Initialize active duration for the current sensor
        sensors = db.child(parent_node.key()).get()
        sorted_sensors = sorted(sensors.each(), key=lambda x: x.val().get('timestamp'))

        # Extract values and timestamps
        values = [sensor.val().get("sensorValue") for sensor in sorted_sensors]
        timestamps = [sensor.val().get('timestamp') for sensor in sorted_sensors]

        start = None  # Initialize 

        # Iterate through the sorted sensor data
        for i, val in enumerate(values):

            if val == 1:
                if start is None:
                    start = i
            elif start is not None:
                end = i - 1
                if end - start + 1 >= 24: #24 as 24 consecutive 1 entries imply sensor active for 2 mins - 1 entry every 5 seconds
                    active_duration.append({"start": timestamps[start], "end": timestamps[end]})
                start = None

        # Check for consecutive ones at the end of the list
        if start is not None:
            end = len(values) - 1
            if end - start + 1 >= 24: #24 as 24 consecutive 1 entries imply sensor active for 2 mins - 1 entry every 5 seconds
                active_duration.append({"start": timestamps[start], "end": timestamps[end]})

        active_duration_dict[parent_node.key()] = active_duration

    return active_duration_dict
        

def write_active_duration_to_database(active_duration_dict):
    """
    Write the active duration data to a new Firebase database with the date as the parent node.
    """

    # Get the date in the format YYYY-MM-DD
    date = datetime.utcnow() - timedelta(days=1)
    formatted_date = date.strftime("%Y-%m-%d")
    # Write active duration data to the new database under date
    Agg_db.child(formatted_date).set(active_duration_dict)
    


def clear_database():

    # Calculate active duration of each sensor every day
    active_duration = calculate_active_duration()
    # Write active duration data to a Aggregate database with the date as the parent node
    write_active_duration_to_database(active_duration)
    # Clear the database
    db.remove()
    print("Database cleared at", datetime.utcnow())

# Schedule the database clearing task every day at 03:00 hours
schedule.every().day.at("03:00").do(clear_database)

# Run the scheduled task in a separate thread
def run_scheduler():
    while True:
        schedule.run_pending()
        time.sleep(1)

scheduler_thread = threading.Thread(target=run_scheduler)
scheduler_thread.start()

def get_sensor_status(parent_node):
    """
    Get the status of a sensor based on its last update.

    Parameters:
    - parent_node (str): The parent node representing a sensor.

    Returns:
    - status (dict): Status of the sensor with keys 'available','recently_vacated' and 'unavailable' 
    and their respective values

    """

    sensors = db.child(parent_node).get()
    sorted_sensors = sorted(sensors.each(), key=lambda x: x.val().get('timestamp'), reverse=True)
    
    # Extract values and timestamps
    values = [sensor.val().get("sensorValue") for sensor in sorted_sensors]

    threshold_0 = 0.70 #threshold to detect recently vacated and availabile
    time_available = 40 #time in minutes for checking if available
    time_recent = 20 #time in minutes for checking if recently vacated

    threshold_1 = 0.95
    time_unavailable = 2 #time in minutes for checking if available

    if (values[:time_unavailable*12].count(1)/time_unavailable)>threshold_1:
        return {'available':0,'recently_vacated':0, 'unavailable':1}
    
    elif ((values[:time_available*12].count(0)/time_available*12) > threshold_0 and len(values)>time_available*12): # 12 - no of entries per minute
        return {'available':1,'recently_vacated':0, 'unavailable':0}
        
    elif (values[:time_recent*12].count(0)/time_recent*12) > threshold_0: # 12 - no of entries per minute
        return {'available':0,'recently_vacated':1, 'unavailable':0}

    
@app.route('/Sensors')
def index():

    sensor_status_dict = {}

    for parent_node in root_ref.each():
        status  = get_sensor_status(parent_node.key())
        sensor_status_dict[parent_node.key()] = status

    return jsonify(sensor_status_dict)


@app.route('/active_duration')
def active_duration():
   
    active_duration = calculate_active_duration()
    write_active_duration_to_database(active_duration)
    return jsonify(active_duration)


if __name__ == '__main__':
    app.run(debug=True)
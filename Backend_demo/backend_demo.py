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
        "apiKey": "AIzaSyB0HI642fdfSGqJz44mMc2aBY7g6wqbkf4",
        "authDomain": "sensor-data-5e262.firebaseapp.com",
        "databaseURL": "https://sensor-data-5e262-default-rtdb.europe-west1.firebasedatabase.app",
        "projectId": "sensor-data-5e262",
        "storageBucket": "sensor-data-5e262.appspot.com",
        "messagingSenderId": "588213869479",
        "appId": "1:588213869479:web:6fcd2d0e0c904d42f7f482",
        "measurementId": "G-WE4Y73G2CB"
}

# Configuration for the Firebase Database to store aggregate data
aggregate_firebase_config = {
        "apiKey": "AIzaSyDHiGf_IdS5ad65CsCMag4sEKXbZzElMOA",
        "authDomain": "aggregate-data-f1d35.firebaseapp.com",
        "databaseURL": "https://aggregate-data-f1d35-default-rtdb.europe-west1.firebasedatabase.app",
        "projectId": "aggregate-data-f1d35",
        "storageBucket": "aggregate-data-f1d35.appspot.com",
        "messagingSenderId": "501508528814",
        "appId": "1:501508528814:web:26818072020fad163deb3f",
        "measurementId": "G-62FGH06G7R"
}

# Initialize Firebase
firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()

Agg_firebase = pyrebase.initialize_app(aggregate_firebase_config)
Agg_db = Agg_firebase.database()

def calculate_active_duration():
    """
    Calculates the active duration of each sensor

    Returns:
        dict: A dictionary containing the active duration for each sensor,
            with sensor names as keys and a list of dictionaries with containing "start" and "end" times when sensor was active
    """

    # Get reference to root nodes
    root_ref = db.get()
    active_duration_dict = {}

    # Iterate through each sensor node in the database
    for parent_node in root_ref.each():

        active_duration = []  # Initialize active duration for the current sensor
        sensors = db.child(parent_node.key()).child("Sensor_Status").get()
        sorted_sensors = sorted(sensors.each(), key=lambda x: x.val().get('timestamp'))

        # Extract values and timestamps
        values = [sensor.val().get("sensorValue") for sensor in sorted_sensors]
        timestamps = [sensor.val().get('timestamp') for sensor in sorted_sensors]

        start = None  # Initialize 

        active_time = 2 #min time in mins sensor should return 1 to be classified as unavailable

        # Iterate through the sorted sensor data
        for i, val in enumerate(values):

            if val == 1:
                if start is None:
                    start = i
            elif start is not None:
                end = i - 1
                if end - start + 1 >= active_time*12: #12- no of entries per sec
                    active_duration.append({"start": timestamps[start], "end": timestamps[end]})
                start = None

        # Check for consecutive ones at the end of the list
        if start is not None:
            end = len(values) - 1
            if end - start + 1 >= active_time*12: #12- no of entries per sec
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
    #initialize 
    availableStatus = recentlyVacatedStatus = unavailableStatus = 0

    #Get Status directly from database
    sensors = db.child(parent_node).child("Led_Status").get()
    if (sensors.val().get("availableStatus")==True):
        availableStatus =1 
    if (sensors.val().get("recentlyVacatedStatus")==True):
        recentlyVacatedStatus =1 
    if (sensors.val().get("unavailableStatus")==True):
        unavailableStatus =1 
    
    status = {'available': availableStatus, 'recently_vacated': recentlyVacatedStatus, 'unavailable': unavailableStatus}
    return status



@app.route('/Sensors')
def index():
    # Get reference to root nodes
    root_ref = db.get()
    sensor_status_dict = {}
    try:
        for parent_node in root_ref.each():
            status  = get_sensor_status(parent_node.key())
            sensor_status_dict[parent_node.key()] = status

        return jsonify(sensor_status_dict)
    except:
        return {'Error':'Database empty'}

@app.route('/active_duration')
def active_duration():

    active_duration = calculate_active_duration()
    write_active_duration_to_database(active_duration)
    return jsonify(active_duration)


if __name__ == '__main__':
    app.run(debug=True)

import pyrebase
import time

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

firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()

minutes = 45
entries_per_min = 12

#define how the sensor data should be simulated
for i in range(1, minutes*entries_per_min):

    if 2*12 <i <= 4 * 12:
        data = {'sensorValue': 1, 'timestamp': time.time()} #Sensor simulated to be active between minutes 2 and 4
    else:
        data = {'sensorValue': 0, 'timestamp': time.time()}  #Sensor simulated to be inactive otherwise

    db.child("ESP1").child("Sensor_Status").push(data)
     # Introduce a 5-second delay before the next push
    time.sleep(5)

import pyrebase
from datetime import datetime, timedelta
import time

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

firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()

past_45_minutes = timedelta(minutes=45).total_seconds()


for i in range(1, int(past_45_minutes)):
    if 2*12 <i <= 4 * 12:
        data = {'sensorValue': 1, 'timestamp': time.time()} #Sensor simulated to be active between minutes 2 and 4
    else:
        data = {'sensorValue': 0, 'timestamp': time.time()}  #Sensor simulated to be inactive otherwise

    db.child("ESP9").push(data)
     # Introduce a 5-second delay before the next push
    time.sleep(5)

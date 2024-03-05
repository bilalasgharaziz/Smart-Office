This Python script is designed to simulate sensor data and push it to a Firebase Realtime Database using the Pyrebase library. The simulated data includes a sensor value and a timestamp, and it is pushed to the specified location in the Firebase database.

Requirements:

Make sure you have Python installed on your system. Additionally, install the Pyrebase library by running the following command:

pip install pyrebase

Configuration:

Before running the script, you need to provide your Firebase project configuration. Update the firebase_config dictionary with your own Firebase project credentials. This includes the apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, and measurementId.

firebase_config = {
    "apiKey": "YOUR_API_KEY",
    "authDomain": "YOUR_AUTH_DOMAIN",
    "databaseURL": "YOUR_DATABASE_URL",
    "projectId": "YOUR_PROJECT_ID",
    "storageBucket": "YOUR_STORAGE_BUCKET",
    "messagingSenderId": "YOUR_MESSAGING_SENDER_ID",
    "appId": "YOUR_APP_ID",
    "measurementId": "YOUR_MEASUREMENT_ID"
}

Usage:

Adjust the simulation parameters according to your requirements. The minutes variable determines the total duration of the simulation, and entries_per_min specifies how many sensor data entries should be simulated per minute.

The main loop simulates sensor data based on the specified conditions. In the provided example, the sensor is simulated to be active between minutes 2 and 4. Adjust this logic based on your specific use case

Adjust the delay (time.sleep(5)) between data pushes based on your requirements.


Running the Script:

Execute the script using the following command:

	python db_simulation.py


Author:
Khalil Umer Acharath Parakkatmutteri
This is the demo version of the Flask backend code that is in sync with the LED_status. We have reduced the time threshold for demo purpose.

Flask application monitors the status of sensors stored in a Firebase Realtime Database. The application determines the availability of each sensor based on its last update and provides the status along with the time difference since the last update.


Getting Started
---------------
To run this application, you need to have Python installed on your machine. Additionally, you should install the required Python packages listed in the requirements.txt



Configuration
-------------

The firebase_config dictionary takes in the configuration details of the Firebase Database in use.


Firebase Setup
--------------

Make sure the Firebase Realtime Database is up and running and have the necessary permissions to read sensor data.


Running the Application
-----------------------

You can run the Flask application using the following command:

		python backend_demo.py

The application will start running on http://127.0.0.1:5000/ by default.


API Endpoint
------------

The application exposes an API endpoint at /Sensors that provides the status of all sensors. You can access this endpoint by visiting 'http://127.0.0.1:5000/Sensors' in your browser.

You can also check the list of active times at the api endpoint - 'http://127.0.0.1:5000/active_duration'



Sensor Status Logic
-------------------

The sensor status is taken directly from the database.

Author 
------

Khalil Umer Acharath Parakkatmutteri

This Flask application monitors the status of sensors stored in a Firebase Realtime Database. The application determines the availability of each sensor based on its last updates and also tracks the active sensor time frame


Getting Started
---------------
To run this application, you need to have Python installed on your machine. Additionally, you should install the required Python packages listed in the requirements.txt


Configuration
-------------

The firebase_config dictionary takes in the configuration details of the Firebase Database in use. Upadte the firebase configeration with your configeration details.


Firebase Setup
--------------

Make sure the Firebase Realtime Database is up and running and have the necessary permissions to read sensor data.


Running the Application
-----------------------

You can run the Flask application using the following command:

		python backend.py

The application will start running on http://127.0.0.1:5000/ by default.


API Endpoint
------------

The application exposes an API endpoint at /Sensors that provides the status of all sensors. You can access this endpoint by visiting 'http://127.0.0.1:5000/Sensors' in your browser.

The application also exposes an API endpoint at /active_duration that provides list of all active timeframes of the sensor. You can access this endpoint by visiting http://127.0.0.1:5000/active_duration.


Sensor Status Logic
-------------------

The sensor status is determined based on the sensor value of the last 40 minutes. 
	If 1 for 95% of 2 mins in last 20 mins - unavailable
	
	else if 1 for 95% of 2 mins in last 40 mins - recently_vacated

	else - available
		

Author 
------

Khalil Umer Acharath Parakkatmutteri

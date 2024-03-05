Getting Started
---------------
To run this code, you need to have Aurdino Ide installed on your machine. Additionally, you should install the required libraries and Boards mentioned in requirements.txt

Firebase Setup
--------------
Make sure the Firebase Realtime Database is up and running and have the necessary permissions to sned sensor data to Firebase.

Sensor Data Collection
--------------
The code continuously reads sensor readings from an LD2410B sensor, which is typically used for human presence detection.

Firebase Integration
--------------
It connects to a Firebase Realtime Database to store and share the sensor data.

Timestamp Collection
--------------
It fetches accurate timestamps from an NTP server and incorporates them into the sensor data.

Data Sending
--------------
It formats sensor readings and timestamps into JSON objects and sends them to designated paths within the Firebase database at regular intervals.

Error Handling
--------------
It includes mechanisms to handle potential errors during data transmission to Firebase, providing informative error messages.

Author 
------
Divakara Mankalale Prashanth
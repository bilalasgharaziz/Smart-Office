#include <WiFi.h>
#include <FirebaseESP32.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

#define FIREBASE_HOST "https://sensor-data-5e262-default-rtdb.europe-west1.firebasedatabase.app/"  // Firebase database host
#define FIREBASE_AUTH "AIzaSyB0HI642fdfSGqJz44mMc2aBY7g6wqbkf4"                                    // Firebase authentication token
//Change the credentials based non the network
#define WIFI_SSID "Galaxy S20 FE 5G 5DB9"                                                           // WiFi SSID
#define WIFI_PASSWORD "beyp6644"                                                                    // WiFi Password

const char* ntpServer = "pool.ntp.org";
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

int LD2410_PIN = 16;
int size = 48;
int readings[48]; // Array to store last 2 minutes (48 readings)

int readingsCount = 0;

FirebaseData firebaseData;
FirebaseJson json;

struct CountDetails {
  int count1;
  int count0;
};

void setup()
{
  Serial.begin(115200);
  pinMode(LD2410_PIN, INPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);           // Begin Firebase connection
  Firebase.reconnectWiFi(true);                           // Reconnect WiFi if disconnected

  Firebase.setReadTimeout(firebaseData, 1000 * 60);       // Set Firebase read timeout to 1 minute (max 15 minutes)
  Firebase.setwriteSizeLimit(firebaseData, "tiny");       // Set Firebase write size limit to "tiny" (1s)

  timeClient.begin();                                     // Begin NTP client
  Serial.println("------------------------------------");
  Serial.println("Connected...");
}

void loop()
{
  timeClient.update();                                    // Update NTP client time
  long timestamp = timeClient.getEpochTime();             // Get current timestamp
  int ld2410Value = digitalRead(LD2410_PIN);              // Read LD2410 sensor value

  // Update the readings array and count
  updateReadings(ld2410Value);

  // Get sensor status based on conditions
  int availableStatus=0;
  int recentlyVacatedStatus=0;
  int unavailableStatus=0;
  availableStatus = checkAvailableStatus();
  if(availableStatus!=1)
  {
    recentlyVacatedStatus = checkRecentlyVacatedStatus();
    if(recentlyVacatedStatus!=1)
    {
    unavailableStatus = checkUnavailableStatus();
    }
  }

  // Send the LED status to Firebase
  // Set the path according to the requirement, the same path needs to be set in the other code to blink the status LEDs
  String led_path1 = "/ESP1/Led_Status/availableStatus";
  String led_path2 = "/ESP1/Led_Status/recentlyVacatedStatus";
  String led_path3 = "/ESP1/Led_Status/unavailableStatus";
  json.set("sensorValue", ld2410Value);
  json.set("timestamp", timestamp);
  String sensor_path = "/ESP1/Sensor_Status";

  // Push sensor status and LED status to Firebase
  if (Firebase.pushJSON(firebaseData, sensor_path, json)) 
  {
    Serial.println("Sensor status sent successfully!");
  } else 
  {
    Serial.println("Error sending data!");
    Serial.println(firebaseData.errorReason());
  }
  if (Firebase.setBool(firebaseData, led_path1, availableStatus)&& (Firebase.setBool(firebaseData, led_path2, recentlyVacatedStatus)&& (Firebase.setBool(firebaseData, led_path3, unavailableStatus)))) 
  {
    Serial.println("LED status sent to Firebase");
  } else 
  {
    Serial.println("Failed to send data to Firebase");
    Serial.println("Error: " + firebaseData.errorReason());
  }

  delay(5000);
}

void updateReadings(int value)
{
  // Shift values in the array, most recent values at the beginning of the array, last element discarded
  for (int i = size-1; i >= 1; i--) 
  {
    readings[i] = readings[i - 1];
  }

  // Store the new value
  readings[0] = value;
  Serial.println();

  readingsCount = min(readingsCount + 1, 48);
  Serial.print("readingsCount is: ");
  Serial.println(readingsCount);
}

int countOccupiedReadings()
{
  int occupiedCount = 0;
  for (int i = 0; i < readingsCount; i++) {
    if (readings[i] == HIGH) {
      occupiedCount++;
    }
  }
  return occupiedCount;
}

CountDetails countEqualAdjacentElements(int readings[], int size) {
  CountDetails result = {0, 0};

  for (int i = 1; i < size/2; i++) {
    if (readings[i] == readings[i - 1] && readings[i] == 1) {
      result.count1++;
    } else {
      result.count0++;
    }
  }
  return result;
}

int checkUnavailableStatus()
{
 CountDetails countDetails = countEqualAdjacentElements(readings, size);
  if (countDetails.count1 > 10) {
    return 1;      // Unavailable
  } else {
    return 0;
  }
}

int checkRecentlyVacatedStatus()
{
  int count_1=0;
  int count_0=0;
  for (int i = 1; i < size/4; i++) {
    if (readings[i] == readings[i - 1] && readings[i] == 1) {
      count_1++;
    } else {
      count_0++;
    }
  }
  
  if (count_0 >= ((size/4)/2)&& (count_1 >=((size/4)/4) && count_1<= ((size/4)/2)))  {
    return 1;
  } else {
    return 0;
  }
}

int checkAvailableStatus()
{

  CountDetails countDetails = countEqualAdjacentElements(readings, size);
  if (countDetails.count0 > 10) {
    return 1;         // Available
  } else {
    return 0;
  }
}


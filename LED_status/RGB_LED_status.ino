#include <WiFi.h>                     // Including the WiFi library for ESP32
#include <FirebaseESP32.h>            // Including the Firebase library for ESP32
#include <NTPClient.h>                // Including the NTPClient library
#include <WiFiUdp.h>                  // Including the WiFiUdp library
#include <vector>                     // Including the vector library
#include <esp_system.h>               // Including the ESP system library

#define FIREBASE_HOST "https://sensor-data-5e262-default-rtdb.europe-west1.firebasedatabase.app/"  // Firebase database host
#define FIREBASE_AUTH "AIzaSyB0HI642fdfSGqJz44mMc2aBY7g6wqbkf4"                                    // Firebase authentication token

#define RED_PIN1 5            // GPIO pin for controlling red color of LED1
#define GREEN_PIN1 18         // GPIO pin for controlling green color of LED1
#define BLUE_PIN1 19          // GPIO pin for controlling blue color of LED1

#define RED_PIN2 26          // GPIO pin for controlling red color of LED2
#define GREEN_PIN2 27        // GPIO pin for controlling green color of LED2
#define BLUE_PIN2 14         // GPIO pin for controlling blue color of LED2

//Change the credentials based non the network
#define WIFI_SSID "Galaxy S20 FE 5G 5DB9"        // WiFi SSID
#define WIFI_PASSWORD "beyp6644"                 // WiFi Password

FirebaseData firebaseData;         // Object to handle Firebase operations
FirebaseJson json;                 // JSON object for Firebase

// Setup function to initialize the program
void setup() {
  Serial.begin(115200);                     // Initialize serial communication
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);    // Connect to WiFi
  Serial.print("Connecting to Wi-Fi");
  
  while (WiFi.status() != WL_CONNECTED) {   // Wait for WiFi connection
    Serial.print(".");
    delay(300);
  }
  
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);     // Begin Firebase connection
  Firebase.reconnectWiFi(true);                     // Reconnect WiFi if disconnected
  
  // Set Firebase read timeout to 1 minute (max 15 minutes)
  Firebase.setReadTimeout(firebaseData, 1000 * 60);
  // Set Firebase write size limit to "tiny" (1s)
  Firebase.setwriteSizeLimit(firebaseData, "tiny");
  
  // Enable classic request mode for GET and POST requests
  Firebase.enableClassicRequest(firebaseData, true);
  
  Serial.println("------------------------------------");
  Serial.println("Connected...");
}

// Loop function for main program execution
void loop() {
  //Declare and initialize variables to store the retrived data from Firebase
  bool LED_green1 = 'false';      
  bool LED_yellow1= 'false'; 
  bool LED_red1 =   'false';

  bool LED_green2 = 'false';
  bool LED_yellow2= 'false'; 
  bool LED_red2 =   'false';

  // Read sensor value from Firebase for first ESP setup
  if (Firebase.getBool(firebaseData,"/ESP1/Led_Status/availableStatus")){
     LED_green1 = firebaseData.boolData();
     }
  else if (Firebase.getBool(firebaseData,"/ESP1/Led_Status/recentlyVacatedStatus")){
     LED_yellow1 = firebaseData.boolData();
     }
  else if (Firebase.getBool(firebaseData,"/ESP1/Led_Status/unavailableStatus")){
     Serial.println(LED_red1);
     }
  else{
      Serial.println("Not able to retrive data");
      }
    
    // Update LED based on sensor value
    if(LED_green1 == true) {
      blinkLED1(0, 255, 0);     // Green for free
    }else if(LED_yellow1 == true){
      blinkLED1(255, 255, 0);   // Yellow for recently vacated
    }else if (LED_red1 == true) {
      blinkLED1(255, 0, 0);     // Red for occupied
    }

  // Read sensor value from Firebase for first ESP setup
  if (Firebase.getBool(firebaseData,"/ESP2/Led_Status/availableStatus")){
     LED_green2 = firebaseData.boolData();
     }
  else if (Firebase.getBool(firebaseData,"/ESP2/Led_Status/recentlyVacatedStatus")){
     LED_yellow2 = firebaseData.boolData();
     }
  else if (Firebase.getBool(firebaseData,"/ESP2/Led_Status/unavailableStatus")){
     Serial.println(LED_red2);}
  else{
      Serial.println("Not able to retrive data");
      }
    
    // Update LED based on sensor value
    if (LED_green2 == true) {
      blinkLED2(0, 255, 0);     // Green for free
    } if(LED_yellow2 == true){
      blinkLED2(255, 255, 0);   // Yellow for recently vacated
    }if (LED_red2 == true) {
      blinkLED2(255, 0, 0);     // Red for occupied
    }
}

// Function to control LED1 colors
void blinkLED1(int red, int green, int blue) {
    analogWrite(RED_PIN1, red);
    analogWrite(GREEN_PIN1, green);
    analogWrite(BLUE_PIN1, blue);
}

// Function to control LED2 colors
void blinkLED2(int red, int green, int blue) {
    analogWrite(RED_PIN2, red);
    analogWrite(GREEN_PIN2, green);
    analogWrite(BLUE_PIN2, blue);  
}

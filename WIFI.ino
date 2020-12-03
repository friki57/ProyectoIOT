
#include <FirebaseESP32.h>
#include <ESP8266WiFi.h>

#define WIFI_SSID "erick"
#define WIFI_PASSWORD "contraseña"


void conexion(){
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
}

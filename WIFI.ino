//Librerias
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
//Constantes
//const char* ssid     = "COMTECO-95265803";
//const char* password = "JBEMZ70607";
const char* ssid     = "Erick";
const char* password = "contrasena";
String pubString;
const char* host     = "104.129.131.178";
float temperatura   = 0;
const int httpPort   = 80;

//Funciones
void conectarWiFi()
{//Esta funcion conecta al wifi asignado en constantes
   //WiFi.persistent( false );
   WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
      delay(2000);
      Serial.print("." + String(WiFi.status()));
    }
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
}


int contador = 0;
//Envio de datos al servidor por http
void POST(String uno, String dos, String piso){
  WiFiClient client;//libreria
  if (!client.connect(host,httpPort)) {
    //reconectar
        contador = contador +1;
        //contador para esperar seg y si no envia reintenta
        Serial.println("connection failed");
        //Mensaje de conexión fallida :V
        if(contador>=5)
        {
          conectarWiFi();
          //VOlver a conectar al wifi
          contador = 0;
          //Reinicio de contador por si da error
        }
        return;
   }
   else
   {
    Serial.println("Tendría que estar conectado");
    //SI llega aqui esta conectado :V
   }
  //Creación de cabeceras http para el envio de datos al servidor.
  pubString = "{}";
  String pubStringLength = String(pubString.length(), DEC);
  Serial.println("Requesting POST: ");

  client.println("POST /Post/"+piso+"?uno=" + uno+ "&dos="+dos+" HTTP/1.1");
  client.println("Content-Type: application/json");
  client.println("Connection: close");
  client.print("Content-Length: ");
  client.println(pubStringLength);
  client.println();
  client.print(pubString);
  client.println();
}

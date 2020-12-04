#include <NewPing.h>
#define distanciaMaxima 200
const int piso = 1;
const int PinesSensores[4][2] = {
    {D0,D1},
    {D2,D3},
    {D4,D5},
    {D6,D7}
  };
/*
NewPing sensores[] = {
  NewPing(1, 2, 3),
  NewPing(3, 4, 3),
  NewPing(5, 6, 3),
  NewPing(7, 8, 3),
};

int numeroSensores = sizeof(PinesSensores)/sizeof(PinesSensores[0]);
*/
  NewPing Sensor1(PinesSensores[0][0],PinesSensores[0][1],distanciaMaxima);
  NewPing Sensor2(PinesSensores[1][0],PinesSensores[1][1],distanciaMaxima);
  NewPing Sensor3(PinesSensores[2][0],PinesSensores[2][1],distanciaMaxima);
  NewPing Sensor4(PinesSensores[3][0],PinesSensores[3][1],distanciaMaxima);
void setup() {
  Serial.begin(9600);
  Serial.println("Inicio");
  //Serial.println(String(PinesSensores[0][0]));
  /*
  for (int i = 0; i < numeroSensores; i++)
  {
    sensores[i] = NewPing(PinesSensores[i][0], PinesSensores[i][1], distanciaMaxima);
  }
  */
}

void loop() {
  delay(5000);
  Serial.println("...");
  int medida = -1;
  medida = Sensor1.ping_median();
  Serial.print("Distancia: ");
  Serial.print(String(medida) + " " + String(medida/US_ROUNDTRIP_CM));
  Serial.println("cm");
  int medida1 = medida;
  medida = -1;
  medida = Sensor2.ping_median();
  Serial.print("Distancia: ");
  Serial.print(String(medida) + " " + String(medida/US_ROUNDTRIP_CM));
  Serial.println("cm");
  int medida2 = medida;
  POST(String(medida1),String(medida2),String(piso));
  /*
  int medidas[numeroSensores];
  memset( medidas, 0, numeroSensores);
  for (int i = 0; i < numeroSensores; i++)
  {
    
  }
  */
}

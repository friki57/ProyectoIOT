#include <NewPing.h>
#define distanciaMaxima 200

const int PinesSensores[4][2] = {
    {D0,D1},
    {D2,D3},
    {D4,D5},
    {D6,D7}
  };

NewPing sensores[] = {
  NewPing(1, 2, 3),
  NewPing(3, 4, 3),
  NewPing(5, 6, 3),
  NewPing(7, 8, 3),
};

int numeroSensores = sizeof(PinesSensores)/sizeof(PinesSensores[0]);
void setup() {
  Serial.begin(9600);
  for (int i = 0; i < numeroSensores; i++)
  {
    sensores[i] = NewPing(PinesSensores[i][0], PinesSensores[i][1], distanciaMaxima);
  }
}

void loop() {
  delay(1000);
  int medidas[numeroSensores];
  memset( medidas, 0, numeroSensores);
  for (int i = 0; i < numeroSensores; i++)
  {
    medidas[i] = sensores[i].ping_median();
    Serial.print("Distancia: ");
    Serial.print(String(medidas[i]));
    Serial.println("cm");
  }
}

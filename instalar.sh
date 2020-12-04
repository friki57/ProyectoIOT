#!/bin/bash

# codigo para clonar automaticamente el repositorio de github

pm2 stop proyectoIOT
rm proyectoIOT -r
git clone https://github.com/friki57/proyectoIOT.git
cd proyectoIOT
npm i
pm2 start src/proyectoIOT.js


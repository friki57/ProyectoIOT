import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createTopTabNavigator } from '@react-navigation/material-top-tabs';
import Piso_one from '../View/Estacionamiento/Piso1';
import Piso_two from '../View/Estacionamiento/Piso1';
import Piso_three from '../View/Estacionamiento/Piso1';
import Piso_four from '../View/Estacionamiento/Piso1';

const Tab = createBottomTabNavigator();   //Abajo
//const Tab = createTopTabNavigator();   //Arriba


export default class NavegacionAbajo extends React.Component {
  render()
  {
    console.disableYellowBox = true; 
    return (

        <Tab.Navigator>
          <Tab.Screen name="Piso1" component={Piso_one} />
          <Tab.Screen name="Piso2" component={Piso_two} />
          <Tab.Screen name="Piso3" component={Piso_three} />
          <Tab.Screen name="Piso4" component={Piso_four} />
          
        </Tab.Navigator>

    );
  }
}
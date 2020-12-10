import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createTopTabNavigator } from '@react-navigation/material-top-tabs';
import Piso_one from '../View/Estacionamiento/Piso1';
import Piso_two from '../View/Estacionamiento/Piso2';
import Piso_three from '../View/Estacionamiento/Piso3';

const Tab = createBottomTabNavigator();   //Abajo
//const Tab = createTopTabNavigator();   //Arriba


export default class NavegacionAbajo extends React.Component {
  render()
  {
    console.disableYellowBox = true; 
    return (

        <Tab.Navigator>
          <Tab.Screen style={{fontSize: 25, fontWeight:'bold',}} name="Floor One" component={Piso_one} />
          <Tab.Screen name="Floor Two" component={Piso_two} />
          <Tab.Screen name="Floor Three" component={Piso_three} />
          
          
        </Tab.Navigator>

    );
  }
}
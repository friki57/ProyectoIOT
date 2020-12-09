import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';


import NavegacionDesplegable from "./NavegacionDesplegable";


import Inicio from '../View/Home/HomeScreen';
import WelcomeScreen from '../View/Onboarding/WelcomeScreen';
import TaskScreen from '../View/Onboarding/TaskScreen';

const Stack = createStackNavigator();
export default class NavegacionPrincipal extends React.Component {
  render()
  {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{
                headerShown: false
            }}
            />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
                headerShown: false
            }}
            />
          <Stack.Screen
            name="Task"
            children={TaskScreen}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="Desplegables"
            component={NavegacionDesplegable}
            options={{
                headerShown: false
            }}
            />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
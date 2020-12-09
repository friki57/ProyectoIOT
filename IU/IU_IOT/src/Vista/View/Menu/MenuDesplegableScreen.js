import React, { Component } from "react";
import { View, Text, Alert } from 'react-native';

import HomeScreem from '../Home/HomeScreen';
import FormBauScreem from '../FormularioNew/FormRegistroScreen';
import FormSolScreem from '../FormularioNew/FormRegSolScreen';
import FormTransScreem from '../FormularioNew/FormRegTransScreen';
import FormRegUsScreem from '../FormularioNew/FormRegUs';
//import NavegacionPilaPrueba from "./NavegacionPilaPrueba";
//import NavegacionAbajo from "./NavegacionAbajo";
import AboutScreem from '../Onboarding/AboutScreen';
import TaskScreen from '../Onboarding/TaskScreen';
import WelcomeScreen from '../Onboarding/WelcomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserScreen from '../AppUser/UserScreen';

const Drawer = createDrawerNavigator();

function NavegacionPrincipal() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="UserScreen" component={UserScreen} 
      options={{
        title: 'App Main',
      }} />
      <Drawer.Screen name="Registro por Bautizo" component={FormBauScreem} />
      <Drawer.Screen name="Registro por Solicitud" component={FormSolScreem} />
      <Drawer.Screen name="Registro por Transferencia" component={FormTransScreem} />
      <Drawer.Screen name="Registro de Usuarios" component={FormRegUsScreem} />

      <Drawer.Screen name="Welcome Screen" component={WelcomeScreen} />
      <Drawer.Screen name="TaskScreem" component={TaskScreen} />
      <Drawer.Screen name="AboutScreen" component={AboutScreem} />

    </Drawer.Navigator>
  );
}
export default NavegacionPrincipal;
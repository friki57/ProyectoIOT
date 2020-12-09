/*import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../View/Home/HomeScreen';
import FormularioRegBau from '../View/FormularioNew/FormRegistroScreen';
import FormularioRegSol from '../View/FormularioNew/FormRegSolScreen';
//import MenuScreen from '../View/Menu/MenuScreen';
import WelcomeScreen from '../View/Onboarding/WelcomeScreen';
import TaskScreen from '../View/Onboarding/TaskScreen';
import AboutScreen from '../View/Onboarding/AboutScreen';
import LoginScreen from '../View/Login/LoginScreen';
import NavegacionDesplegable from "../View/Menu/MenuDesplegableScreen";

const Stack = createStackNavigator();

function mainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuUsuario"
          children={NavegacionDesplegable}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default mainNavigator;
*/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Text, Image } from 'react-native';
import Images from '../Config/images';

import Inicio from '../View/Home/HomeScreen';
import WelcomeScreen from '../View/Onboarding/WelcomeScreen';
import TaskScreen from '../View/Onboarding/TaskScreen';
//import AboutScreen from '../View/Onboarding/AboutScreen';
import LoginScreen from '../View/Login/LoginScreen';
import Perfil from '../View/FormularioNew/FormRegSolScreen';
import NavegacionDesplegable from "../View/Menu/MenuDesplegableScreen";
import Home from '../View/Home/HomeScreen';

import SplashScreen from '../View/Splash/SplashScreen';
import InicioScreen from '../View/AppUser/Inicio';
import MisionVision from '../View/AppUser/MisionVision';
import PastoresScreen from '../View/AppUser/Pastores';
import ResScreen from '../View/AppUser/ResponsabilidadSocial';
import PerfilScreen from '../View/AppUser/MiPerfil';
/*



      

      <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container} >
          <Image source={{
            uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
            height: 60,
            width: 60,

          }}
            resizeMode='center'
            style={{ borderRadius: 30 }}
          />
          <Text style={{ marginTop: 20, color: 'white' }}> SmarthHome</Text>
          <Text style={{ fontSize: 9, marginBottom: 20, color: 'white' }} > Destrosaalmas1@gmail.com</Text>

        </View>
        <DrawerItem
          component={FormularioRegSol}
          options={{ title: 'App Main' }}
          name='App'
          label='Dashboard'
          labelStyle={{ marginLeft: 0, color: '#000' }}
        />

      </DrawerContentScrollView>
    </View>
*/
const Stack = createStackNavigator();
const StackScreen = ({ route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Task"
        component={TaskScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Login"
        component={LoginScreen}
        initialParams={{ route }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const Drawer = new createDrawerNavigator();
const DrawerScreen = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={InicioScreen}

        options={{ title: 'Home' }}
      /><Drawer.Screen
      name='MiPerfil'
      component={PerfilScreen}

      options={{ title: 'Mi Perfil' }}
    />
      <Drawer.Screen
        name='MisionVision'
        component={MisionVision}
        options={{ title: 'Mision y Vision' }}
      />
      <Drawer.Screen
        name='Pastores'
        component={PastoresScreen}
        options={{ title: 'Pastores' }}
      />
      <Drawer.Screen
        name='ResSocial'
        component={ResScreen}
        options={{ title: 'Responsabilidad Social' }}
      />
      <Drawer.Screen
        name='Perfil'
        component={Perfil}
        options={{ title: 'Modficar Perfil' }}
      />
    </Drawer.Navigator>
  );
}

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 3000);
  }, []);
  return (
    <MainStack.Navigator headerMode="none">
      {isLoading ? (<MainStack.Screen name="Loading" component={SplashScreen} />)
        : isLogged ?
          (<MainStack.Screen name="DrawerNavigator" component={DrawerScreen} />)
          : (<MainStack.Screen name="LoginRegister" component={StackScreen} initialParams={{ setIsLogged }} />)}
    </MainStack.Navigator>
  );
}

const mainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
export default mainNavigator;


/*

export default class NavegacionPrincipal extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Desplegables"
            children={NavegacionDesplegable}
            options={{
              title: "Desplegable"
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
*/
/*

*/

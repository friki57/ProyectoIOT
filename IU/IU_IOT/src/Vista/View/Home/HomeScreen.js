import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import Colors from '../../Config/Colors';
import Descripcion from '../../Components/Onboarding/Description';
import Images from '../../Config/images';
import Constans from '../../Config/Constans';
import ButtonFooter from '../../Components/Onboarding/Button';

const HomeScreenInicio = ({navigation}) => {
  console.disableYellowBox = true;
  return (
    <ImageBackground source={Images.IMGFONDO3} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Descripcion
          Titulo={Constans.STRING.TITULOHOME}
          Contenido={Constans.STRING.CONTENIDOHOME}
        />
      </View>
      <View style={styles.boton}>
        <ButtonFooter
          Accion={Constans.STRING.NETX}
          onPress={() => { navigation.navigate('Welcome'); }}
        />
      </View>
    </ImageBackground>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 430,
  },
  boton: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom:10,
  },
});
export default HomeScreenInicio;
/*
<View style={styles.container}>
       <Onboarding
           //source={Images.FONDO3}
           Titulo={Constants.STRING.TITULO3}
           Contenido={Constants.STRING.CONTENIDO3}
           onPressPrev={() => {navigation.navigate('Task');}}
           onPressNext={() => { }}
       ></Onboarding>
   </View>
*/
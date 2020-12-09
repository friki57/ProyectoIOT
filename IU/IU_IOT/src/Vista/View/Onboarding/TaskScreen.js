import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import Constants from '../../Config/Constans';
import Images from '../../Config/images';
import Colors from '../../Config/Colors';

import Onboarding from '../../Components/Onboarding/OnboardingFactory';

const FormRegScreen = ({ navigation, route }) => {
    console.disableYellowBox = true;
    return (
        <ImageBackground source={Images.IMGFONDO2} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
            <Onboarding
            //source={Images.FONDO2}
            Titulo={Constants.STRING.TITULO3}
            Contenido={Constants.STRING.CONTENIDO3}
            onPressPrev={()=>{navigation.navigate('Welcome');}}
            onPressNext={()=>{navigation.navigate('Desplegables');}}
            ></Onboarding>
        </View>
        </ImageBackground>
    );

};

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
    },
});
export default FormRegScreen;


import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import Constants from '../../Config/Constans';
import Images from '../../Config/images';
import Colors from '../../Config/Colors';

import Onboarding from '../../Components/Onboarding/OnboardingFactory';


const FormRegScreen = ({ navigation }) => {
    console.disableYellowBox = true;
    return (
        <ImageBackground source={Images.VISTA1} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <Onboarding
                    //source={Images.FONDO3}
                    Titulo={Constants.STRING.TITULO3}
                    Contenido={Constants.STRING.CONTENIDO3}
                    onPressPrev={() => {navigation.navigate('Task');}}
                    onPressNext={() => { }}
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


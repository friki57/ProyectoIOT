import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Colors from '../../Config/Colors';
import Images from '../../Config/images';

const SplashScreen = () => {
    return (
      
        <View style={styles.container}>
            <Image source={Images.SPLASH} style={styles.image}></Image>
            
        </View>
       
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
    },
    image:{
        width:320,
        height:320,
    },
});
export default SplashScreen;
//<Text style={styles.text}>Loading Screen !!!</Text>
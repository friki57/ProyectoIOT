import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../Config/Colors';
import Images from '../../Config/images';

const Inicio = () => {
    console.disableYellowBox = true;
    return (
        <ImageBackground source={Images.USERPAS} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                
                <Text style={styles.contenido}>{global.iglesia.Pastores}</Text>
                <Text style={styles.text}>{global.iglesia.Nombre}</Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: Colors.dark2,
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    text: {
        color: Colors.white,
        fontSize: 30,
        marginTop:400,
    },
    contenido: {
        textAlign:'center',
        width: '80%',
        color: Colors.white,
        fontSize: 20,
        marginTop: 15,
    },
});
export default Inicio;
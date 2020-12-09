import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../Config/Colors';
import Images from '../../Config/images';

const Inicio = () => {
    console.disableYellowBox = true;
    console.log("Inicio Usuario-------------" + JSON.stringify(global.usuario.usuario));
    console.log("Iglesia----" + JSON.stringify(global.iglesia));
    console.log("Nombre------" + (global.usuario.usuario.Nombre));
    return (
        <ImageBackground source={Images.USERINICIO} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <Text style={styles.text}>{global.iglesia.Nombre}</Text>
                <Text style={styles.contenido}>{global.iglesia.Descripcion}</Text>
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
        marginTop: 450,
    },
    text: {
        color: Colors.white,
        fontSize: 30,
    },
    contenido: {
        textAlign:'center',
        width: '80%',
        color: Colors.white,
        fontSize: 20,
    },
});
export default Inicio;
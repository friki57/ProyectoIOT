import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../Config/Colors';
import Images from '../../Config/images';

const Inicio = () => {
    console.disableYellowBox = true;
    return (
        <ImageBackground source={Images.USERMV} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.TituloMision}>Misión</Text>
                    <View style={styles.Mision}>
                        <Text style={styles.textcontenido}>"{global.iglesia.Mision}"</Text>
                    </View>
                </View>
                <View style={styles.ContenedorVision}>
                    <Text style={styles.TituloVision}>Visión</Text>
                    <View style={styles.Vision}>
                        <Text style={styles.textcontenidoMision}>"{global.iglesia.Vision}"</Text>
                    </View>
                </View>
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
    },
    TituloMision: {
        color: Colors.white,
        marginTop: 200,
        fontSize: 30,
        //Adelia Regular
        fontFamily: 'Gotham Bold',
    },
    ContenedorVision: {
        alignItems: 'flex-end',
    },
    TituloVision: {
        color: Colors.white,
        marginTop: 50,
        fontFamily: 'Gotham Bold',
        fontSize: 30,

    },
    Mision: {
        width: '60%',
    },
    Vision: {
        width: '60%',
    },
    textcontenido: {
        color: Colors.white,
        fontSize: 15,
        fontFamily: 'Gotham Book',
    },
    textcontenidoMision: {
        color: Colors.white,
        fontSize: 15,
        fontFamily: 'Gotham Book',
        textAlign: 'right'
    },
});
export default Inicio;
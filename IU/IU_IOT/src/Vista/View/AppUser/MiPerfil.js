import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Colors from '../../Config/Colors';
import Images from '../../Config/images';

const Inicio = () => {
    console.disableYellowBox = true;
    return (
        <ImageBackground source={Images.USERPERFIL} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
         
                <Text style={styles.contenido}>{"Nombre: "+ global.usuario.usuario.Nombre}</Text>
                <Text style={styles.contenido}>{"Apellidos: "+ global.usuario.usuario.Apellido_Paterno +' '+global.usuario.usuario.Apellido_Materno}</Text>
                
                <Text style={styles.contenido}>{"Genero: "+ global.usuario.usuario.Genero}</Text>
                <Text style={styles.contenido}>{"Celular: "+ global.usuario.usuario.Contacto}</Text>
                <Text style={styles.contenido}>{"Correo Electronico: "+ global.usuario.usuario.Email}</Text>
                <Text style={styles.contenido}>{"Fecha de Nacimiento: "+ global.usuario.usuario.Fecha_Nacimiento}</Text>
                <Text style={styles.contenido}>{"Lugar de Nacimiento: "+ global.usuario.usuario.Lugar_Nacimiento}</Text>
                <Text style={styles.contenido}>{"Profesion: "+ global.usuario.usuario.Profesion}</Text>
                <Text style={styles.contenido}>{"Direccion: "+ global.usuario.usuario.Direccion}</Text>
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
        marginTop: 170,
    },
    text: {
        color: Colors.white,
        fontSize: 30,
        marginTop:400,
    },
    contenido: {
        textAlign:'left',
        width: '80%',
        color: Colors.white,
        fontSize: 20,
    },
    image:{
        width:250,
        height:250,
    },
});
export default Inicio;
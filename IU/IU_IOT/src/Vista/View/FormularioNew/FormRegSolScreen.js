import React, { useState } from 'react';
import { StyleSheet, ToastAndroid, View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';

import Constants from '../../Config/Constans';
import Images from '../../Config/images';
import Colors from '../../Config/Colors';

import DismissKeyboard from '../../Components/DismissKeyboard';

import TextInput from '../../Components/Input';
import EmailInput from '../../Components/EmailTextField';
import SelectInput from '../../Components/Select';
import ButtonInput from '../../Components/Button';
import DateInput from '../../Components/DateInput';

import Fetch from '../../Components/utils/Fetch';

const ModificarInformacion = () => {
    console.disableYellowBox = true;

    const [nombre, setNombre] = useState(global.usuario.usuario.Nombre);
    const [apellidoPaterno, setApp] = useState(global.usuario.usuario.Apellido_Paterno);
    const [apellidoMaterno, setApm] = useState(global.usuario.usuario.Apellido_Materno);
    const [genero, setGenero] = useState(global.usuario.usuario.Genero);
    const [contacto, setContacto] = useState(global.usuario.usuario.Contacto);
    const [email, setEmail] = useState(global.usuario.usuario.Email);
    const [fecha, setFecha] = useState(global.usuario.usuario.Fecha_Nacimiento);
    const [lugar, setLugar] = useState(global.usuario.usuario.Lugar_Nacimiento);
    const [profesion, setProfesion] = useState(global.usuario.usuario.Profesion);
    const [direccion, setDireccion] = useState(global.usuario.usuario.Direccion);

    const _onPressLogin = () => {
        Fetch("/Movile/ModMembresia/" + global.usuario.usuario._id, (res) => {
            if (res.jala == "si") {
                ToastAndroid.show(res.mensage, ToastAndroid.SHORT);
                Fetch("/LoginMovil", (res) => {
                    if (res.jala != "no") {
                        global.usuario = res;
                        console.log(res);
                    }
                }, { ci: global.usuario.usuario.Ci, contra: global.usuario.usuario.Contraseña }, "POST");
            }
        }, {

            Nombre: nombre,
            Apellido_Paterno: apellidoPaterno,
            Apellido_Materno: apellidoMaterno,
            Genero: genero,
            Contacto: contacto,
            Email: email,
            Fecha_Nacimiento: fecha,
            Lugar_Nacimiento: lugar,
            Profesion: profesion,
            Direccion: direccion,
        }, "POST")
    }
    return (
        <DismissKeyboard >
            <KeyboardAvoidingView
                behavior="height"
                enabled
                style={styles.container}
            >
                <ScrollView>
                    <View style={styles.container} >
                        <SafeAreaView>
                            <Text style={styles.text}> {Constants.STRING.REGSOL}</Text>
                            <View style={styles.form}>
                                <TextInput
                                    onChangeText={(newnombre) => { setNombre(newnombre); }}
                                    source={Images.USERNAME}
                                    placeholder={Constants.STRING.NOMBRE}
                                    value={global.usuario.usuario.Nombre}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <TextInput
                                    onChangeText={(newapp) => { setApp(newapp); }}
                                    source={Images.USERNAME}
                                    placeholder={Constants.STRING.APELLIDOP}
                                    value={global.usuario.usuario.Apellido_Paterno}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <TextInput
                                    onChangeText={(newapm) => { setApm(newapm); }}
                                    source={Images.USERNAME}
                                    placeholder={Constants.STRING.APELLIDOM}
                                    value={global.usuario.usuario.Apellido_Materno}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <TextInput
                                    onChangeText={(newgenero) => { setGenero(newgenero); }}
                                    source={Images.GENERO}
                                    placeholder={Constants.STRING.GENERO}
                                    value={global.usuario.usuario.Genero}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <TextInput
                                    source={Images.CONTACTO}
                                    onChangeText={(newcont) => { setContacto(newcont); }}
                                    placeholder={Constants.STRING.CONTACTO}
                                    value={global.usuario.usuario.Contacto}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <TextInput
                                    source={Images.EMAIL}
                                    onChangeText={(newemail) => { setEmail(newemail); }}
                                    value= {global.usuario.usuario.Email}
                                    placeholder={Constants.STRING.EMAIL}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <TextInput
                                    onChangeText={(newfecha) => { setFecha(newfecha); }}
                                    value= {global.usuario.usuario.Fecha_Nacimiento}
                                    source={Images.CALENDAR}
                                    placeholder={Constants.STRING.FECHA_NAC}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <TextInput
                                    onChangeText={(newlugar) => { setLugar(newlugar); }}
                                    value= {global.usuario.usuario.Lugar_Nacimiento}
                                    source={Images.LUGAR}
                                    placeholder={Constants.STRING.LUGAR}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>

                                <TextInput
                                    onChangeText={(newprofesion) => { setProfesion(newprofesion); }}
                                    value= {global.usuario.usuario.Profesion}
                                    source={Images.PROFESION}
                                    placeholder={Constants.STRING.PROFESION}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <TextInput
                                    onChangeText={(newdireccion) => { setDireccion(newdireccion); }}
                                    value= {global.usuario.usuario.Direccion}
                                    source={Images.LUGAR}
                                    placeholder={Constants.STRING.DIRECCION}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>
                                <View style={styles.buton}>
                                    <ButtonInput
                                        onPress={_onPressLogin}
                                    />
                                </View>
                            </View>
                        </SafeAreaView>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </DismissKeyboard>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.dark2,
        justifyContent: 'space-between',
    },
    form: {
        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
        //width: '80%',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
    },
    buton: {
        alignItems: 'center',
        margin: 10,
    },


});
export default ModificarInformacion;
/*
<TextInput
                                onChangeText={_onChangeTextUsername}
                                source={Images.CI}
                                placeholder={Constants.STRING.CI}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>

                            <TextInput
                                    onChangeText={_onChangeTextApellidoMaterno}
                                    source={Images.NUMERO}
                                    placeholder={Constants.STRING.NUMREGCIV}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>

                                 <TextInput
                                    onChangeText={_onChangeTextApellidoMaterno}
                                    source={Images.IGLESIA}
                                    placeholder={Constants.STRING.IGLESIA}
                                    secureTextEntry={false}
                                    autoCorrect={false}>
                                </TextInput>



------------------------------







                                
*/
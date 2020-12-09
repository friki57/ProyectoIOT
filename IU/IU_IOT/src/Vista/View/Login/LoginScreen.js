import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Alert,
    ToastAndroid
} from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';
import EmailTextField from '../../Components/login/EmailTextField';
import DismissKeyboard from '../../Components/login/DismissKeyboard';

import Utils from '../../Components/utils/utils';
import Constants from '../../Config/Constans';
import Colors from '../../Config/Colors';
import Images from '../../Config/images';

import Fetch from '../../Components/utils/Fetch';

const LoginScreen = ({ navigation, route }) => {
    console.disableYellowBox = true;

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const _validateEmailAddress = () => {
        let isValidEmail = Utils.isValidField(email);
        isValidEmail
            ? setErrorEmail('')
            : setErrorEmail(Constants.STRING.EMAIL_ERROR);
        return isValidEmail;
    };

    const _validatePassword = () => {
        let isValidPassword = Utils.isValidField(password);
        isValidPassword
            ? setErrorPassword('')
            : setErrorPassword(Constants.STRING.PASSWORD_ERROR);
        return isValidPassword;
    };
    const _onPressLogin = () => {
        let emailData = _validateEmailAddress();
        let passwordData = _validatePassword();
        //console.log("--------------------------------------------------")
        //Get
        Fetch("/Prueba", (res) => {
            //console.log("Respuesta ", res)
        })
        //Post
        Fetch("/PruebaPost", (res) => {
            //console.log("RespuestaPost", res)
        }, { hola: "holas", num: 6 }, "POST")

        if (emailData && passwordData) {

            Fetch("/LoginMovil", (res) => {
                //console.log("RespuestaPost", res)
                if (res.jala == "no") {
                    ToastAndroid.show(res.mensage, ToastAndroid.SHORT);
                }
                else {
                    ToastAndroid.show(res.mensage, ToastAndroid.SHORT);
                    
                    //console.log("Usuario: " + res);
                    global.usuario = res ;

                   Fetch("/VerDatosIglesia", (iglesia) =>{
                    global.iglesia = iglesia;

                    route.params.route.params.setIsLogged(true);
                   }, {idIglesia: res.usuario.Iglesia }, "POST");
                   
                }
            }, { ci: email, contra: password }, "POST");
        } else {
            Alert.alert(Constants.STRING.EMPTY_TITLE, Constants.STRING.EMPTY_VALUES);
        }
        /* if (emailData && passwordData) {
             route.params.route.params.setIsLogged(true);
         } else {
             Alert.alert(Constants.STRING.EMPTY_TITLE, Constants.STRING.EMPTY_VALUES);
         }*/
    };

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView
                style={stylesLoginScreen.container}
                behavior="height"
                enabled>
                <View style={stylesLoginScreen.container}>
                    <SafeAreaView>
                        <LogoLogin style={stylesLoginScreen.logo} />
                        <View style={stylesLoginScreen.form}>
                            <EmailTextField
                                onChangeText={(email) => {
                                    setEmail(email);
                                }}
                                onEndEditing={_validateEmailAddress}
                                error={errorEmail}
                                source={Images.EMAIL}
                                placeholder={Constants.STRING.CI}
                                secureTextEntry={false}
                                autoCorrect={false}
                            />
                            <TextInputLogin
                                onChangeText={(password) => {
                                    setPassword(password);
                                }}
                                onEndEditing={_validatePassword}
                                error={errorPassword}
                                source={Images.USERNAME}
                                placeholder={Constants.STRING.PASSWORD}
                                secureTextEntry={true}
                                autoCorrect={false}
                            />
                            <View >
                                <ButtonLogin
                                    isLoading={isLoading}
                                    onPress={_onPressLogin}
                                    titleButton={Constants.STRING.TITLE_BUTTON}
                                />
                            </View>

                        </View>
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    );
}

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {

        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {

        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
    },
});
export default LoginScreen;
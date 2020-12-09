import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';

import imgUsername from '../../images/username.png';
import imgPassword from '../../images/pass.png';

import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

export default class TransferenciasScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:''
        };

        
    }
    _onPress() {
        console.log('button preset..!!!');
        console.log(this.state.username);
        console.log(this.state.password);
        
    }
    
    render() {
        return (
            <View style={stylesLoginScreen.container}>
                
                <View style={stylesLoginScreen.form}>
                <Text style={stylesLoginScreen.text}> {Constans.REGTRANS}</Text>
                
                    <TextInputLogin
                        onChangeText={this._onChangeTextUsername}
                        source={imgUsername}
                        placeholder={Constans.CI} 
                        secureTextEntry={false}
                        autoCorrect={false}>
                    </TextInputLogin>
                    <TextInputLogin
                        onChangeText={this._onChangeTextUsername}
                        source={imgUsername}
                        placeholder={Constans.FECHA_TRANS} 
                        secureTextEntry={false}
                        autoCorrect={false}>
                    </TextInputLogin>
                    
                    <ButtonLogin
                        onPress={this._onPress}
                        titleButton={Constans.TITLE_BUTTON_ENVIAR}>
                    </ButtonLogin>
                </View>
            </View>
        );
    }
}

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
    },
    text:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:20,
    },
});

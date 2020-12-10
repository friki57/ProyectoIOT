import React, { Component } from "react";
import { View, Text, Alert, Button, Image, ImageBackground } from 'react-native';
import Images from '../../Config/images'

var contador = 0;

export default class Pruebas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valorprueba: 0,
            imagen_sensor1: Images.HAYAUTO,
            estado_sensor1: "DISPONIBLE",
            imagen_sensor2: Images.HAYAUTO,
            estado_sensor2: "DISPONIBLE",
        };
        this._onPress = this._onPress.bind(this);

    }
    _onPress() {
        contador = contador + 1;
        if (contador % 2 == 0) {
            this.setState(previo => ({
                valorprueba: contador,
                imagen_sensor1: Images.HAYAUTO,
                estado_sensor1: "NO DISPONIBLE",
                imagen_sensor2: Images.NOHAYAUTO,
                estado_sensor2: "DISPONIBLE"
            }));
        }
        else {
            this.setState(previo => ({
                valorprueba: contador,
                imagen_sensor1: Images.NOHAYAUTO,
                estado_sensor1: "DISPONIBLE",
                imagen_sensor2: Images.HAYAUTO,
                estado_sensor2: "NO DISPONIBLE"
            }));
        }



    }
    render() {


        return (
            <ImageBackground  source={Images.SPLASFLOOR} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Image source={Images.LINE} style={{ height: 30 }}></Image>
                    <View>
                        <Image source={this.state.imagen_sensor1} style={{ height: 200, width: 350 }} ></Image>
                        <Text>{this.state.estado_sensor1}</Text>
                    </View>
                    <Image source={Images.LINE} style={{ height: 30 }}></Image>
                    <View>
                        <Image source={this.state.imagen_sensor2} style={{ height: 200, width: 350 }} ></Image>
                        <Text>{this.state.estado_sensor2}</Text>
                    </View>
                    <Image source={Images.LINE} style={{ height: 30 }}></Image>
                    
                </View>
              
            </ImageBackground>
        );
    }
}
/*
  <Text>{this.state.valorprueba} </Text>
                    <Button onPress={this._onPress} title="Hola"></Button>
*/
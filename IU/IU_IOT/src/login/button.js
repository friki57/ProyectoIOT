import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Constants from './constans';



export default class Boton extends Component{
    constructor(props){
        super(props);
        
        this._onPress=this._onPress.bind(this);

    }
    _onPress(){
        console.log('Click..!!!');
        console.log(this.props.pass);
        console.log(this.props.username);
        const n1=this.props.num1;
        const n2 =this.props.num2;
        const res = n1+n2;
        console.log('respuesta:' +res);
        
    }
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button} onPress={this._onPress}>
                    <Text style={styles.text}>{Constants.TITLE_BUTTON} 
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -95,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1CD3D',
        height: Constants.DEFAULT_MARGIN_BUTTON,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: Constants.DEFAULT_MARGIN_BUTTON,
        width: Constants.DEFAULT_MARGIN_BUTTON,
        marginTop: -Constants.DEFAULT_MARGIN_BUTTON,
        borderWidth: 1,
        borderColor: '#F035E0',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
});

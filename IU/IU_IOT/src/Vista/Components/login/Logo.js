import React, { Component } from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';


import Images from '../../Config/images';
export default class Logo extends Component {
  constructor(props)
  {
    console.log(props.text);
    super(props);
  }

  render() {
    /*let pic = {
      uri: 'https://www.cocinista.es/download/bancorecursos/recetas/chorizo-argentino2.jpg'
    };*/
    return (
      <View style={styles.container}>
        <Image source={Images.LOGO} style={styles.image}></Image>
        <Text style={styles.text}> Login</Text>
        
      </View>
    );
 }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:250,
        height:250,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        
        fontSize: 25,
    },
});

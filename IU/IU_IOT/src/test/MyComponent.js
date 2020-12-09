import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

export default class componente extends Component {
  constructor(props)
  {
    console.log(props.text);
    super(props);
  }

  render() {
    /*let pic = {
      uri: 'https://www.cocinista.es/download/bancorecursos/recetas/chorizo-argentino2.jpg'
    };
    
    <Image source={pic} style={{width: 193, height: 110}}/>
    */

    return (
      <View>
        <Text style={styles.Text}> {this.props.text} </Text>
        
      </View>
    );
 }
}
const styles = StyleSheet.create({
  
  text:{
      color:'black',
      fontWeight:'bold',
      backgroundColor:'transparent',
      marginTop:20,
  },
});
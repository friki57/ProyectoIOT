import React from 'react';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native';
//import { Button, Layout } from '@ui-kitten/components';
import Colors from '../Config/Colors';
const ButtonInput = ({onPress}) => {
  return (
    <View style={styles.container} level='1'>

      <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text
          style={styles.text}>{'Enviar'}
        </Text>
      </TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  button: {
    width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,0.7)',
  },text: {
    color: Colors.white,
    textAlign: 'center',
    height: 20,
},

});
export default ButtonInput;
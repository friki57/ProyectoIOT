import React from 'react';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native';

import Colors from '../../Config/Colors';

const ButtonInput = ({Accion,onPress}) => {
  return (
    <View style={styles.container} level='1'>

      <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text
          style={styles.text}>{Accion}
        </Text>
      </TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 130,
  },
  button: {
    width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        borderRadius: 50,
        borderColor: Colors.white,
        //borderWidth: 1,

  },text: {
    color: Colors.white,
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold',
},

});
export default ButtonInput;
import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

import Colors from '../Config/Colors';
import Constants from '../Config/Constans';


const EmailTextField = ({ source, onChangeText, onEndEditing, placeholder, secureTextEntry, autoCorrect }) => {
  return (
    <View>
      
      <Image
        style={styles.inlineImg}
        source={source} />
      <View style={styles.textFieldView}>
        <TextInput
          style={styles.textField}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          selectionColor={Colors.blue}
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent">

        </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textField: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    borderColor: Colors.white,
    borderRadius: 15,
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    paddingLeft: 40,
  },
  textFieldView: {
    marginBottom: 5,
    margin: 1,
  },
  errorText: {
    fontSize: 12,
    color: Colors.red,
    marginBottom: -5,
    marginHorizontal: 20,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 10,
    top: 9,
  },
});

export default EmailTextField;

/*
<Text style={styles.errorText} />
*/
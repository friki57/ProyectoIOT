import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

import ButtonIcon from '../../Components/ButtonIcon';
//import FirebasePlugin from '../../Plugins/firebase/Firebase';

import Colors from '../../Config/Colors';
import Images from '../../Config/images';

const AppScreen = ({navigation}) => {
  console.disableYellowBox = true;
  const onPressSetting = () => {
    navigation.navigate('MenuUsuario');
  };

  const onPressLogout = () => {
    navigation.navigate('Login')
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonIcon imageSrc={Images.SETTING} onPressButton={onPressSetting}/>
      ),
      headerRight: () => (
        <ButtonIcon imageSrc={Images.LOGOUT} onPressButton={onPressLogout}/>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <Text>App Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
  },
});

export default AppScreen;

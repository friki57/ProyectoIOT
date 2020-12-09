import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';

import Constants from '../../Config/Constans';
import Images from '../../Config/images';
import Colors from '../../Config/Colors';

import DismissKeyboard from '../../Components/DismissKeyboard';

import TextInput from '../../Components/Input';
import EmailInput from '../../Components/EmailTextField';
import SelectInput from '../../Components/Select';
import ButtonInput from '../../Components/Button';
import DateInput from '../../Components/DateInput';

const FormRegScreen = ({ _onChangeTextUsername, _onChangeTextPassword }) => {
    return (
        <DismissKeyboard>
            
            <KeyboardAvoidingView style={styles.container}>
                <View >
                    <SafeAreaView>
                        <Text style={styles.text}> {Constants.STRING.REGUS}</Text>
                        <View style={styles.form}>
                            <TextInput
                                onChangeText={_onChangeTextUsername}
                                source={Images.CI}
                                placeholder={Constants.STRING.CI}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextPassword}
                                source={Images.PROFESION}
                                placeholder={Constants.STRING.CARGO}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextPassword}
                                source={Images.PASSWORD}
                                placeholder={Constants.STRING.PASS}
                                secureTextEntry={true}
                                autoCorrect={false}>
                            </TextInput>
                            <View style={styles.buton}>
                                <ButtonInput></ButtonInput>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
            
        </DismissKeyboard>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.dark2,
        
    },
    form: {
        //width: '80%',
        //marginTop:60,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    buton: {
        alignItems: 'center',
        margin: 5,
    },
});
export default FormRegScreen;
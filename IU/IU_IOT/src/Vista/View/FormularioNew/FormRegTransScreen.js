import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView,ScrollView } from 'react-native';

import Constants from '../../Config/Constans';
import Images from '../../Config/images';
import Colors from '../../Config/Colors';

import DismissKeyboard from '../../Components/DismissKeyboard';

import TextInput from '../../Components/Input';
import EmailInput from '../../Components/EmailTextField';
import SelectInput from '../../Components/Select';
import ButtonInput from '../../Components/Button';
import DateInput from '../../Components/DateInput';

const FormRegScreen = ({ _onChangeTextUsername, _onChangeTextPassword, _onChangeTextApellidoMaterno,onChangeTextEmail,validateEmailAddress }) => {
    return (
        <DismissKeyboard>
            <ScrollView> 
            <KeyboardAvoidingView style={styles.container}>
                
            
                <View >
                    
                        <Text style={styles.text}> {Constants.STRING.REGTRANSFERENCIA}</Text>
                        
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
                                source={Images.USERNAME}
                                placeholder={Constants.STRING.NOMBRE}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.USERNAME}
                                placeholder={Constants.STRING.APELLIDOP}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.USERNAME}
                                placeholder={Constants.STRING.APELLIDOM}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.GENERO}
                                placeholder={Constants.STRING.GENERO}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.CONTACTO}
                                placeholder={Constants.STRING.CONTACTO}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <EmailInput
                                source={Images.EMAIL}
                                onChangeText={onChangeTextEmail}
                                onEndEditing={validateEmailAddress}
                                placeholder={Constants.STRING.EMAIL}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </EmailInput>
                            
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.CALENDAR}
                                placeholder={Constants.STRING.FECHA_NAC}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.LUGAR}
                                placeholder={Constants.STRING.LUGAR}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.NUMERO}
                                placeholder={Constants.STRING.NUMREGCIV}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.PROFESION}
                                placeholder={Constants.STRING.PROFESION}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.LUGAR}
                                placeholder={Constants.STRING.DIRECCION}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.IGLESIA}
                                placeholder={Constants.STRING.IGLESIA}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.IGLESIA}
                                placeholder={Constants.STRING.IGLESIA}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.IGLESIA}
                                placeholder={Constants.STRING.IGLESIA}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.IGLESIA}
                                placeholder={Constants.STRING.IGLESIA}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            <TextInput
                                onChangeText={_onChangeTextApellidoMaterno}
                                source={Images.IGLESIA}
                                placeholder={Constants.STRING.IGLESIA}
                                secureTextEntry={false}
                                autoCorrect={false}>
                            </TextInput>
                            
                            <View style={styles.buton}>
                                <ButtonInput></ButtonInput>
                            </View>
                        </View>
                        
                    
                </View>
                
            </KeyboardAvoidingView>
            </ScrollView>
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
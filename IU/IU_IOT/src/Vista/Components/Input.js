import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
//import { Input, Layout, Icon } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import Colors from '../Config/Colors';
import Constants from '../Config/Constans';


const TextInputForm = ({ source, onChangeText, secureTextEntry, autoCorrect, placeholder, value }) => {
    return (
        <View >
            <Image
                style={styles.inlineImg}
                source={source} />
            <View style={styles.container}>
                <TextInput
                    onChangeText={onChangeText}
                    style={styles.input}
                    placeholder={placeholder}
                    defaultValue={value}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={autoCorrect}
                    placeholderTextColor={Colors.white}
                    underlineColorAndroid="transparent"
                />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        margin: 1,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: 'center',
        borderColor: Colors.white,
        borderRadius: 15,
        height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
        width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
        paddingLeft: 40,

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
export default TextInputForm;


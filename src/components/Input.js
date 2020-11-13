import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Login = ({placeholder, secureTextEntry, onChangeText}) => {

    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 4,
        width: "100%",
        padding: 12,
        marginBottom: 16

    }
})

export default Login;
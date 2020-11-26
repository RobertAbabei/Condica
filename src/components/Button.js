import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Login = ({title, disabled, onPress}) => {

    return (
        <TouchableOpacity 
            style={[styles.container, disabled && {backgroundColor: 'rgba(0, 0, 0, 0.12)'}]} 
            disabled={disabled}
            onPress={onPress}
            >
                <Text style={[styles.text, disabled && {color: 'rgba(0, 0, 0, 0.12)'}]}>
                    {title}
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#192d3e",
        padding: 8,
        margin: 4,
        minWidth: 150,
        borderRadius: 8,
    },
    text: {
        color: "white",
        fontSize: 16,
        textAlign: "center"
    }
})

export default Login;
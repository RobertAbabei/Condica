import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Login = ({title}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.container}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#192d3e",
        color: "white",
        padding: 4,
        minWidth: 150,
        textAlign: "center",
        borderRadius: 8,
        fontSize: 16
    },
    text: {
        color: "white"
    }
})

export default Login;
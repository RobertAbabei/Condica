import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';


const Login = ({value, placeholder, secureTextEntry, onChangeText, rightIcon}) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
            />
            { rightIcon && (
                <View style={styles.iconContainer}>
                    {rightIcon}
                </View>
            )}
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 4,
    },
    input: {
        flex: 5,
        padding: 12,

    },
    iconContainer: {
        // backgroundColor: "gray",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {

    }
})

export default Login;
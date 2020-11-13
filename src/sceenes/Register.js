import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, KeyboardAvoidingView,  StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import logo from '../assets/condica_logo.png';
import Input from '../components/Input';
import Button from '../components/Button';

const Register = () => {

    const [checkbox, setCheckbox] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.header} >
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.loginText}>CREATE AN ACCOUNT</Text>
            </View>

            
            <KeyboardAvoidingView behavior="padding" style={styles.inputsContainer}>
                <Input placeholder="Email *" />
                <Input placeholder="Password *" />
                <Input placeholder="Password ( Confirm ) *" />

                <Button 
                    title="CREATE AN ACCOUNT"
                />
            </KeyboardAvoidingView>



            <View style={styles.createAccountContainer}>
                <Text>Already have an account ?</Text>
                <TouchableOpacity>
                    <Text style={styles.highlightedText}>Create an account</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 32
    },
    header:{
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100
    },
    loginText: {
        fontSize: 22
    },
    inputsContainer: {
        width: "100%",
        marginTop: 32
    },
    createAccountContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 16
    },
    highlightedText: {
        color: "#61dafb"
    }
})

export default Register;
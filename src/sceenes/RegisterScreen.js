import React, { useEffect, useState } from 'react';
import {View, Text, Image, TouchableOpacity, KeyboardAvoidingView,  StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import logo from '../assets/condica_logo.png';
import Input from '../components/Input';
import Button from '../components/Button';

const RegisterScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordCofirm] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [registerBtnDisabled, setRegisterBtnDisabled] = useState(true);

    useEffect(() => {

        console.log("email: ", email);
        console.log("password: ", password);
        console.log("passwordConfirm: ", passwordConfirm);

        if (email == "" || password == "" || passwordConfirm == "") {
            if (registerBtnDisabled == false) {
                setRegisterBtnDisabled(true);
            }
        }
        else {
            if (password !== passwordConfirm) {
                setRegisterBtnDisabled(true);
            }
            else {
                setRegisterBtnDisabled(false);
            }
        }

    }, [email, password, passwordConfirm]);

    const handleLogInPress = () => {
        navigation.pop();
    }

    return (
        <View style={styles.container}>

            <View style={styles.header} >
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.loginText}>CREATE AN ACCOUNT</Text>
            </View>

            
            <KeyboardAvoidingView behavior="padding" style={styles.inputsContainer}>
                <Input placeholder="Email *" onChangeText={setEmail}/>
                <Input placeholder="Password *" secureTextEntry onChangeText={setPassword}/>
                <Input placeholder="Password ( Confirm ) *" secureTextEntry onChangeText={setPasswordCofirm}/>

                <Button 
                    title="CREATE AN ACCOUNT"
                    disabled={registerBtnDisabled}
                />
            </KeyboardAvoidingView>



            <View style={styles.createAccountContainer}>
                <Text>Already have an account ?</Text>
                <TouchableOpacity onPress={handleLogInPress}>
                    <Text style={styles.highlightedText}>Log in</Text>
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

export default RegisterScreen;
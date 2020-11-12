import React, {useState} from 'react';
import {View, Text, Image, KeyboardAvoidingView, TouchableOpacity,StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Input from '../components/Input';
import Button from '../components/Button';
import logo from '../assets/condica_logo.png';

const Login = () => {

    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.header} >
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.loginText}>LOGIN TO YOUR ACCOUNT</Text>
            </View>


            <View style={styles.inputsContainer}>
                <Input 
                    placeholder="Email*"
                />
                <Input 
                    placeholder="Password*"
                    secureTextEntry
                />
            </View>

            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0}>

                <View style={styles.helperContainer}>
                    <View style={styles.rememberMeContainer}>
                        <CheckBox 
                            disabled={false}
                            value={rememberMe}
                            onValueChange={setRememberMe}
                        />
                        <Text>Remember me</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.highlightedText}>Forgot password</Text>
                    </TouchableOpacity>
                </View>

                <Button title="Login"/>

            </KeyboardAvoidingView>

            <View style={styles.createAccountContainer}>
                <Text>Don't have an account ?</Text>

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
        paddingHorizontal: 16
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
    helperContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: 50
    },
    rememberMeContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    createAccountContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24
    },
    highlightedText: {
        color: "#61dafb"
    }
})

export default Login;
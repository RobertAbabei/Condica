import React, {useEffect, useState} from 'react';
import {View, Text, Image, KeyboardAvoidingView, TouchableOpacity,StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import * as authActions from '~/auth/actions';

import Input from '~/components/Input';
import Button from '~/components/Button';
import logo from '~/assets/condica_logo.png';
import InfoPopUp from 'components/utils/InfoPopUp';

const EMAIL_KEY = "@email";

const LoginSreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
    const [passSecureTextEntry, setPassSecureTextEntry] = useState(true);

    const dispatch = useDispatch();

    const EyeSlashIcon = (
        <Icon
            name="eye-slash" 
            size={30} 
            color="lightgray"
            onPress={() => setPassSecureTextEntry(!passSecureTextEntry)}
        />
    );

    const EyeIcon = (
        <Icon
            name="eye" 
            size={30} 
            color="lightgray"
            onPress={() => setPassSecureTextEntry(!passSecureTextEntry)}
        />
    );

    useEffect(() => {
        const getData = async () => {
            try {
                const email = await AsyncStorage.getItem(EMAIL_KEY);

                if (email) {
                    setEmail(email);
                    setRememberMe(true);
                }
                
            } catch (e) {
                console.log("Error trying to read data from storage");
            }
        }

        getData();
    }, []);

    useEffect(() => {

        if (email == "" || password == "") {
            setLoginBtnDisabled(true);
        }
        else {
            if (loginBtnDisabled == true) {
                setLoginBtnDisabled(false);   
            }
        }

    }, [email, password]);

    const handleCreateAccountPress = (event) => {
        navigation.navigate('Register');
    }

    const handleLogin = (event) => {
        dispatch(authActions.submitLogin(email, password));
    }

    const handleCheckBoxClick = (value) => {
        setRememberMe(value);

        if (value && email != "") {
            storeEmail(email);
        }
        else if (!value) {
            removeItem(EMAIL_KEY)
        }
    }

    const storeEmail = async (value) => {
        try {
            await AsyncStorage.setItem(EMAIL_KEY, email);
        } catch (e) {
            console.log("Error trying to store the email to storage");
        }
    }

    const removeItem = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (e) {
            console.log("Error trying to remove item from storage")
            return false;
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.header} >
                <Image style={styles.logo} source={logo}/>
                <Text style={styles.loginText}>LOGIN TO YOUR ACCOUNT</Text>
            </View>


            <View style={styles.inputsContainer}>
                <Input
                    value={email}
                    placeholder="Email*"
                    onChangeText={setEmail}
                />
                <Input 
                    placeholder="Password*"
                    onChangeText={setPassword}
                    secureTextEntry={passSecureTextEntry}
                    rightIcon={passSecureTextEntry ? EyeSlashIcon : EyeIcon}
                />
            </View>

            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0}>

                <View style={styles.helperContainer}>
                    <View style={styles.rememberMeContainer}>
                        <CheckBox 
                            disabled={false}
                            value={rememberMe}
                            onValueChange={handleCheckBoxClick}
                        />
                        <Text>Remember me</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.highlightedText}>Forgot password</Text>
                    </TouchableOpacity>
                </View>

                <Button title="LOGIN" disabled={loginBtnDisabled} onPress={handleLogin}/>

            </KeyboardAvoidingView>

            <View style={styles.createAccountContainer}>
                <Text>Don't have an account ?</Text>

                <TouchableOpacity onPress={handleCreateAccountPress}>
                    <Text style={styles.highlightedText}>Create an account</Text>
                </TouchableOpacity>
            </View>

            <InfoPopUp />
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

export default LoginSreen;
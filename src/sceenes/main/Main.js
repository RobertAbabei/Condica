import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/sceenes/LoginScreen';
import Register from '~/sceenes/RegisterScreen';

import HomeScreen from '~/sceenes/HomeScreen';

const Stack = createStackNavigator();

const Main = () => {

    const authReducer = useSelector(state => state.authReducer.user);
    const { firebaseUser } = authReducer;

    console.log("MAIN -- authReducer: ", authReducer);
    console.log("MAIN -- firebaseUser: ", firebaseUser);

    return (
        <NavigationContainer>
            {
                firebaseUser != null && firebaseUser != undefined? (
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator headerMode="none" >
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </Stack.Navigator>
                )
            }

        </NavigationContainer>
    )
}

export default Main;
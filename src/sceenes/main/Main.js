import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '~/sceenes/LoginScreen';
import Register from '~/sceenes/RegisterScreen';

import HomeScreen from '~/sceenes/HomeScreen';
import ProifleScreen from '~/sceenes/ProfileScreen';

const MainStack = createStackNavigator();
const Main_BottomTabNavigator =  createBottomTabNavigator();

const Main = () => {

    const authReducer = useSelector(state => state.authReducer.user);
    const { firebaseUser } = authReducer;

    // console.log("MAIN -- authReducer: ", authReducer);
    // console.log("MAIN -- firebaseUser: ", firebaseUser);

    return (
        <NavigationContainer>
            {
                firebaseUser != null && firebaseUser != undefined ? (
                    <Main_BottomTabNavigator.Navigator>
                        <Main_BottomTabNavigator.Screen name="Home" component={HomeScreen} />
                        <Main_BottomTabNavigator.Screen name="Profile" component={ProifleScreen} />
                    </Main_BottomTabNavigator.Navigator>
                ) : (
                    <MainStack.Navigator headerMode="none" >
                        <MainStack.Screen name="Login" component={Login} />
                        <MainStack.Screen name="Register" component={Register} />
                    </MainStack.Navigator>
                )
            }

        </NavigationContainer>
    )
}

export default Main;
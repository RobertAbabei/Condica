import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';

import Login from './src/sceenes/LoginScreen';
import Register from './src/sceenes/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    
        <NavigationContainer>
              <Stack.Navigator headerMode="none" >
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
              </Stack.Navigator>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;
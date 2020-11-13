import React from 'react';
import {View, StyleSheet} from 'react-native';

import Login from './src/sceenes/Login';
import Register from './src/sceenes/Register';

const App = () => {

  return (
    <View style={styles.container}>
        <Register />
    </View>
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
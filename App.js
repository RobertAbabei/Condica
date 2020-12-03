import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from '~/store';

import Main from '~/sceenes/main/Main';
import Auth from '~/auth/Auth';



const App = () => {

  return (
        <Provider store={store}>
            <Auth>
                <Main />
            </Auth>
        </Provider>


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
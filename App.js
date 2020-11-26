import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '~/auth/reducers';

import Main from '~/sceenes/main/Main';
import Auth from '~/auth/Auth';


const reducers = combineReducers({
    authReducer
})
const store = createStore(reducers, applyMiddleware(thunk));




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
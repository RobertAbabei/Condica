import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '~/auth/reducers';
import messageReducer from './reducers/message.reducer';

const reducers = combineReducers({
    authReducer,
    messageReducer
})
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
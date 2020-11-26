import * as Actions from '../actions';

const initialState = {
    firebaseUser: null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_FIREBASE_USER: 
            return {
                ...initialState,
                firebaseUser: action.payload
            };
        default:
            return state
    }
}

export default user;
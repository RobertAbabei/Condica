import firebaseService from '~/services/firebase/firebaseService';
import * as messageActions from '~/store/actions/message.actions';

export const SET_FIREBASE_USER = '[USER] SET FIREBASE USER';
export const LOGOUT_USER = '[USER] LOGOUT USER';
export const REGISTER_SUCCESS = '[USER] REGISTER SUCCESS';

export function setFirebaseUser(user) {
    return {
        type: SET_FIREBASE_USER,
        payload: user
    }
}

export function logoutUser() {
    return (dispatch, getState) => {

        firebaseService.signOut();

        //console.log(getState())
    }
}

export function submitLogin(email, password) {
    if (!firebaseService.auth) {
        console.warn("Firebase service didn't initialize, check your configuration");

        return () => false;
    }

    console.log(email);
    console.log(password);

    return dispatch =>
        firebaseService.auth.signInWithEmailAndPassword(email, password)
        .then(() => {

        })
        .catch(error => {
            console.log("ERROR: ", error);
            dispatch(messageActions.showMessage({
                message: "Invalid email or password",
                autoHideDuration: 4000
            }))
        })
}

export function registerUser(email, password) {
    if (!firebaseService.auth) {
        console.warn("Firebase service didn't initialize, check your configuration");

        return () => false;
    }

    return dispatch =>
        firebaseService.auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
            const uid = response.user.uid;

            return {
                type: REGISTER_SUCCESS
            }
        })
        .catch(error => {
            console.log("ERROR: ", error);
            dispatch(messageActions.showMessage({
                message: error.message,
                autoHideDuration: 4000
            }))
        })
}
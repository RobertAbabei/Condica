import firebaseService from '~/services/firebase/firebaseService';

export const SET_FIREBASE_USER = '[USER] SET FIREBASE USER';
export const LOGOUT_USER = '[USER] LOGOUT USER';

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

    firebaseService.auth.signInWithEmailAndPassword(email, password)
        .then(() => {

        })
        .catch(error => {

        })
}
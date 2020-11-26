import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config';

class FirebaseService {
    init(success) {
        if (firebase.apps.length) {
            success(false);
            return;
        }

        firebase.initializeApp(config);
        this.auth = firebase.auth();
        console.log("initializing firebase service...");
        success(true);
    }

    onAuthStateChanged = callback => {
		if (!this.auth) {
			return;
		}
		this.auth.onAuthStateChanged(callback);
    };
    
    signOut = () => {
        console.log(this.auth);
		if (!this.auth) {
			return;
        }
        
		this.auth.signOut();
	};
}

const instance = new FirebaseService();

export default instance;
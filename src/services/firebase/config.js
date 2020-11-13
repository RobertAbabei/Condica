import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRtguRtrp9hF_TlofavpQj-UDaw3ltv5E",
    authDomain: "condica-92f99.firebaseapp.com",
    databaseURL: "https://condica-92f99.firebaseio.com",
    projectId: "condica-92f99",
    storageBucket: "condica-92f99.appspot.com",
    messagingSenderId: "302735662992",
    appId: "1:302735662992:web:067b0b677a084603ac1d15"
  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };
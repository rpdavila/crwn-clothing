import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAKHRQS5KUiYkBrslFx0qG7_ui6hETB7DI",
  authDomain: "crown-db-fb71c.firebaseapp.com",
  projectId: "crown-db-fb71c",
  storageBucket: "crown-db-fb71c.appspot.com",
  messagingSenderId: "1012823162603",
  appId: "1:1012823162603:web:0049aa9b1046e651ef88ae",
  measurementId: "G-3DETJP35WL"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { firestore } from 'firebase/firestore';
// import { auth } from 'firebase/auth';


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3sB1tFuj0GfysycsCzzmLrsxcxMA008U",
  authDomain: "awesome-store-123.firebaseapp.com",
  projectId: "awesome-store-123",
  storageBucket: "awesome-store-123.appspot.com",
  messagingSenderId: "592809956385",
  appId: "1:592809956385:web:013254acb889095ec0ff60",
  measurementId: "G-DFYZFBWRYB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

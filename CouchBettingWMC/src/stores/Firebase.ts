// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

import firebase from "firebase/compat";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMA6JF0Fo-4G6FV_iWDTdQLUOp2u1f7zg",
    authDomain: "couch-betting.firebaseapp.com",
    projectId: "couch-betting",
    storageBucket: "couch-betting.appspot.com",
    messagingSenderId: "172390749466",
    appId: "1:172390749466:web:c33d1b8c44d845838f88a3",
    measurementId: "G-WJF78P69YT"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider;

export const db = getFirestore(app);





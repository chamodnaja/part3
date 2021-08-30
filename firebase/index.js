import firebase from 'firebase/app'

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCAvexJfD6M2PRbRXhqZpZSBYV0PNY2iKo",
    authDomain: "school-app-ffee6.firebaseapp.com",
    projectId: "school-app-ffee6",
    storageBucket: "school-app-ffee6.appspot.com",
    messagingSenderId: "663641883036",
    appId: "1:663641883036:web:a6608ed24805e727fec859",
    measurementId: "G-EX5P6069SX"
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore()
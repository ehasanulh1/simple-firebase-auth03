// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQpR2kMXSPkl_1grjy8ovrEOaYQ6R7uYU",
    authDomain: "simple-firebase-auth03.firebaseapp.com",
    projectId: "simple-firebase-auth03",
    storageBucket: "simple-firebase-auth03.appspot.com",
    messagingSenderId: "1085329919533",
    appId: "1:1085329919533:web:6a9f8d1b598510d052f2a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
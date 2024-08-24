// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiYnLMXf2amlPkeAIF89QJG6_BLjFNn9c",
    authDomain: "skilful-courage-399307.firebaseapp.com",
    projectId: "skilful-courage-399307",
    storageBucket: "skilful-courage-399307.appspot.com",
    messagingSenderId: "1022790454641",
    appId: "1:1022790454641:web:5bc39529d16860a9eebad0",
    measurementId: "G-SXSSL93MCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7u0m-NyWc0L3NXrdipY007eAQMa7Yylw",
  authDomain: "audiophile-e690d.firebaseapp.com",
  projectId: "audiophile-e690d",
  storageBucket: "audiophile-e690d.appspot.com",
  messagingSenderId: "396067147329",
  appId: "1:396067147329:web:bed89c4cda43adf83840c0",
  measurementId: "G-LSWYQBPS44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
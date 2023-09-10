// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxg6Ei_bDWWuyMUdJWGN2WRv666HNUNpY",
  authDomain: "netflix-gpt-5a29c.firebaseapp.com",
  projectId: "netflix-gpt-5a29c",
  storageBucket: "netflix-gpt-5a29c.appspot.com",
  messagingSenderId: "974310633822",
  appId: "1:974310633822:web:0497d5d340a709333b9fcf",
  measurementId: "G-LGS2B4E504",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

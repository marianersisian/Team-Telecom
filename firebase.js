// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2M1-U7taJzaF6qo9eMcB5-zFpA9ckKNM",
  authDomain: "team-telecom.firebaseapp.com",
  projectId: "team-telecom",
  storageBucket: "team-telecom.firebasestorage.app",
  messagingSenderId: "162441133283",
  appId: "1:162441133283:web:889dbc440b462b99d419d6",
  measurementId: "G-FEKDPNN8VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
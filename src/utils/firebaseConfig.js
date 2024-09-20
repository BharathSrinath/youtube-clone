// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNV6ZuzLfua1deP0c02_unBc3vJnOEvpg",
  authDomain: "clone-3621d.firebaseapp.com",
  projectId: "clone-3621d",
  storageBucket: "clone-3621d.appspot.com",
  messagingSenderId: "976972013634",
  appId: "1:976972013634:web:d63c7aa59ac3ef16890ddb",
  measurementId: "G-QP79Y0E60V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
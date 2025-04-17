// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwJIbo2IbPAdgUxYcSR_496mcdvkt9hhM",
  authDomain: "chayenthaitea-7f23f.firebaseapp.com",
  projectId: "chayenthaitea-7f23f",
  storageBucket: "chayenthaitea-7f23f.firebasestorage.app",
  messagingSenderId: "514812329655",
  appId: "1:514812329655:web:431b789e6e3c500360d732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
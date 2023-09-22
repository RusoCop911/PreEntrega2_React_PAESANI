// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKX2q3VX6J-YQtpDkdQZh2G4a-4BG7XC8",
  authDomain: "shooting-range911.firebaseapp.com",
  projectId: "shooting-range911",
  storageBucket: "shooting-range911.appspot.com",
  messagingSenderId: "882509544760",
  appId: "1:882509544760:web:59dc28f849e1b2637b95cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
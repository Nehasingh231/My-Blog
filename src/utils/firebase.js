
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS9y7xdrgFBkl7fHU0gsnFYVdiQR5xC54",
  authDomain: "bloom-and-glow.firebaseapp.com",
  projectId: "bloom-and-glow",
  storageBucket: "bloom-and-glow.appspot.com",
  messagingSenderId: "853460144418",
  appId: "1:853460144418:web:7f6512464234eb9be1157b",
  measurementId: "G-G04YZJYS1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();



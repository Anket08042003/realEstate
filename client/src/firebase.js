// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "realestate-22b98.firebaseapp.com",
  projectId: "realestate-22b98",
  storageBucket: "realestate-22b98.appspot.com",
  messagingSenderId: "984484276721",
  appId: "1:984484276721:web:18fe38d1890270b5eb3c50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
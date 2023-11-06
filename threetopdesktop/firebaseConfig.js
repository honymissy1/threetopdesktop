// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPK8yjBQVBPggAgU0dy7gr9gVntoAfcho",
  authDomain: "threetop-backend-1.firebaseapp.com",
  projectId: "threetop-backend-1",
  storageBucket: "threetop-backend-1.appspot.com",
  messagingSenderId: "382312807732",
  appId: "1:382312807732:web:5fa949b4cef37096377961",
  measurementId: "G-MVB5ZFD3EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
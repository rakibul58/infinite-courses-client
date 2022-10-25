// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPLQ45ZSFh5jMuNhAu4_jwlnQ87bDkRA4",
  authDomain: "infinit-courses.firebaseapp.com",
  projectId: "infinit-courses",
  storageBucket: "infinit-courses.appspot.com",
  messagingSenderId: "920346257648",
  appId: "1:920346257648:web:3cda405de9d44bf675fa35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
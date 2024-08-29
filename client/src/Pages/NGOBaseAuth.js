// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9M0yx_CwBoJeefLf04OqD4xMYfevaKqQ",
  authDomain: "nfc-regex-1234.firebaseapp.com",
  projectId: "nfc-regex-1234",
  storageBucket: "nfc-regex-1234.appspot.com",
  messagingSenderId: "964791214926",
  appId: "1:964791214926:web:99fedbbafa8a030a37741f",
  measurementId: "G-HF8YE16HJ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };

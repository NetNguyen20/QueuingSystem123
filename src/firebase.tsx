// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5gHYxFP21fdGf9JR3WdQE5jY2V3TnTbA",
  authDomain: "queuingsystem-b9e52.firebaseapp.com",
  projectId: "queuingsystem-b9e52",
  storageBucket: "queuingsystem-b9e52.appspot.com",
  messagingSenderId: "215932044947",
  appId: "1:215932044947:web:6510a0a8eff06e51ae6f66",
  measurementId: "G-971V5M64LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
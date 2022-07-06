import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig ={
    apiKey: "AIzaSyC-wKcOh5r-IH2BvThh77VKpi8dn3pDI3M",
    authDomain: "queuing-system-c306a.firebaseapp.com",
    projectId: "queuing-system-c306a",
    storageBucket: "queuing-system-c306a.appspot.com",
    messagingSenderId: "1090307079990",
    appId: "1:1090307079990:web:1fae0fd8941f7e13aabd97"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

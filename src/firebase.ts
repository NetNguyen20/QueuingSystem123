import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';

const firebaseConfig ={
    apiKey: "AIzaSyC-wKcOh5r-IH2BvThh77VKpi8dn3pDI3M",
    authDomain: "queuing-system-c306a.firebaseapp.com",
    projectId: "queuing-system-c306a",
    storageBucket: "queuing-system-c306a.appspot.com",
    messagingSenderId: "1090307079990",
    appId: "1:1090307079990:web:1fae0fd8941f7e13aabd97"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
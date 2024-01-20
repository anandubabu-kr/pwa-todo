// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9i9oxJU5_54uq5Nyldi2gBOqpxCk5Ps4",
    authDomain: "eternal-psyche-211507.firebaseapp.com",
    projectId: "eternal-psyche-211507",
    storageBucket: "eternal-psyche-211507.appspot.com",
    messagingSenderId: "269365273902",
    appId: "1:269365273902:web:b9a1deb91edee5610d86bf",
    measurementId: "G-PBTL11D2QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default { db, auth }
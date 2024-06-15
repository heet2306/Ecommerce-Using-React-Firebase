// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSZKvpm2MGkOelPgQUlbavP2AwadZPQVU",
    authDomain: "e-alien.firebaseapp.com",
    projectId: "e-alien",
    storageBucket: "e-alien.appspot.com",
    messagingSenderId: "578964763269",
    appId: "1:578964763269:web:6f67c68789a03bdd986fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
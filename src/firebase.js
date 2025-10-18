import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCVKS-CDc3y_ZLC3xp7Stm7_E1ikfvFAOA",
    authDomain: "firstproject-6fc5f.firebaseapp.com",
    projectId: "firstproject-6fc5f",
    storageBucket: "firstproject-6fc5f.firebasestorage.app",
    messagingSenderId: "730850285765",
    appId: "1:730850285765:web:80e19101bf91c4684738ac",
    measurementId: "G-746PS30K7X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
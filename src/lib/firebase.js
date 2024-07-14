import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "hi-app-69f62.firebaseapp.com",
    projectId: "hi-app-69f62",
    storageBucket: "hi-app-69f62.appspot.com",
    messagingSenderId: "746850375406",
    appId: "1:746850375406:web:563afce00c35d2daa9c5ff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
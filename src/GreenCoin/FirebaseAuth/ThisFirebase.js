// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB35WiqFKRQ7yRswaTEBSweAk2gZqjrNp0",
  authDomain: "authenticate-af6e8.firebaseapp.com",
  projectId: "authenticate-af6e8",
  storageBucket: "authenticate-af6e8.appspot.com",
  messagingSenderId: "780299264298",
  appId: "1:780299264298:web:8d34cb71a7aed9200c7e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
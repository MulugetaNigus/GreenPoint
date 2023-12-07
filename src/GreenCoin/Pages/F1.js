// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth , GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAlPsHsttpBHDQi72RHZBU7oi6q639TnQg",
  authDomain: "points-75b05.firebaseapp.com",
  projectId: "points-75b05",
  storageBucket: "points-75b05.appspot.com",
  messagingSenderId: "616222776702",
  appId: "1:616222776702:web:a5cc463bfded13b461672f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth  = getAuth(app);
export const provider = new GoogleAuthProvider();
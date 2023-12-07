// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGPSmavYP_uW40xJR21yanpAtnBuGPYfs",
  authDomain: "productstore-26942.firebaseapp.com",
  projectId: "productstore-26942",
  storageBucket: "productstore-26942.appspot.com",
  messagingSenderId: "944922758672",
  appId: "1:944922758672:web:878fe8119ecb2131444495"
};

const app = initializeApp(firebaseConfig);
export const dbs = getFirestore(app);
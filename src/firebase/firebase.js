import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAwuY4z_d2unMMwdpgYzWP2kWwwyFsk6cg",
  authDomain: "reactpro-f51d1.firebaseapp.com",
  projectId: "reactpro-f51d1",
  storageBucket: "reactpro-f51d1.appspot.com",
  messagingSenderId: "428980748346",
  appId: "1:428980748346:web:b29fac6b5c2b936f7f7503"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3HeLmGvDldAtVnaE_coP7QplnbhEB7SM",
  authDomain: "vite-contact-72f82.firebaseapp.com",
  projectId: "vite-contact-72f82",
  storageBucket: "vite-contact-72f82.firebasestorage.app",
  messagingSenderId: "522252600572",
  appId: "1:522252600572:web:0c641576edd57e3d150379",
  measurementId: "G-0L7M2R1VBE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
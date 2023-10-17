// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzR8qWFXW_BXLDgBVCuc4oOb6BWRZcdUg",
  authDomain: "blogapp-4b60d.firebaseapp.com",
  projectId: "blogapp-4b60d",
  storageBucket: "blogapp-4b60d.appspot.com",
  messagingSenderId: "203747395312",
  appId: "1:203747395312:web:df550419c2efa526c62435",
  measurementId: "G-Z743S446PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
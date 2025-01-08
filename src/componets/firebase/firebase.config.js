// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByf3v-B4DrGR4J-bVH-1QAbNP6UpdgMv8",
  authDomain: "user-email-password-register.firebaseapp.com",
  projectId: "user-email-password-register",
  storageBucket: "user-email-password-register.firebasestorage.app",
  messagingSenderId: "1019113808065",
  appId: "1:1019113808065:web:aeb9fb4cf3dac6191c3440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

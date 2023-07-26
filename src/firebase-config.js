// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, EmailAuthProvider, FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, OAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw0ZmeLa4yU41HjpN5j0k2tHuO8Dp3iYs",
  authDomain: "balisongsales.firebaseapp.com",
  projectId: "balisongsales",
  storageBucket: "balisongsales.appspot.com",
  messagingSenderId: "207181157900",
  appId: "1:207181157900:web:2153a27f4d07fc463c0029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export let googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const yahooProvider = new OAuthProvider('yahoo.com');
export const emailProvider = new EmailAuthProvider();
        
googleProvider.setCustomParameters({
  prompt: 'select_account'
});


// Firebase storage reference
export const storage = getStorage(app);
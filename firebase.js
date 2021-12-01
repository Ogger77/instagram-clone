// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsRDqfBfgdcivnfoc8oy6onkxgxgWN7Nk",
  authDomain: "instagram-clone-78560.firebaseapp.com",
  projectId: "instagram-clone-78560",
  storageBucket: "instagram-clone-78560.appspot.com",
  messagingSenderId: "51831082001",
  appId: "1:51831082001:web:0e09a6b2c41fb3743235b0",
};

// Initialize Firebase
// only one intsane of firebaseConfig can be run at one times
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

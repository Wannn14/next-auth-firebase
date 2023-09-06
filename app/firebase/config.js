// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDyNaX1N6YEn0x66-Qp7QNuIEghezhHiE",
  authDomain: "next-auth-cb414.firebaseapp.com",
  projectId: "next-auth-cb414",
  storageBucket: "next-auth-cb414.appspot.com",
  messagingSenderId: "541001766580",
  appId: "1:541001766580:web:74487fd257315c8a4669e1",
};

// export default firebase_app;

// const app = firebase.initializeApp(firebaseConfig);

// export const auth = app.auth();
// export const db = app.firestore();
// export const storage = app.storage();

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

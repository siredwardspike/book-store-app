// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc-owGx59C-of3MPXkR58SVwdpxVHcyuY",
  authDomain: "book-store-ea010.firebaseapp.com",
  projectId: "book-store-ea010",
  storageBucket: "book-store-ea010.appspot.com",
  messagingSenderId: "93101506647",
  appId: "1:93101506647:web:94644258d1947f917ee312",
  measurementId: "G-0ESSX60ZQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db};
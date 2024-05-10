import { auth, db } from "./config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { get } from "firebase/database";
import { doc, setDoc, collection, addDoc, deleteDoc } from "firebase/firestore";

async function register(email, password, userName, _imageurl) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await sendEmailVerification(auth.currentUser, {
    handleCodeInApp: true,
    url: "http://book-store-ea010.firebaseapp.com/",
  });

  const userRef = doc(db, "users", cred.user.uid);

  await setDoc(userRef, {
    userName: userName,
    email: email,
    imageurl: _imageurl,
    uid: cred.user.uid,
  });

  

  return cred;
}

async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  if (!cred.user.emailVerified) {
    throw new Error("not emailVerified");
  }
  return cred;
}

async function resetPass(email) {
  await sendPasswordResetEmail(auth, email);
}

export { register, login, resetPass };

import { auth, db } from "./config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { get } from "firebase/database";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

async function register(email, password, userName) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(auth.currentUser, {
    handleCodeInApp: true,
    url: "http://book-store-ea010.firebaseapp.com/",
  });

  const userRef = doc(db, "users", cred.user.uid);
  await setDoc(userRef, {
    userName: userName,
    email: email,
    uid: cred.user.uid,
  });
  const cartref = collection(db, userRef, "cart");
  await addDoc(cartref, {
    date: Date.now().toString(),
    book: { bookname: "7mo", author: "7amokasha" },
  });
  const favref = collection(db, userRef, "Fav");
  await addDoc(favref, {
    date: Date.now().toString(),
    book: { bookname: "7mo", author: "7amokasha" },
  });

  return cred;
}

export { register };

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxhi2B8yGoAYia9GgeZhUnTv1JNCT8npg",
  authDomain: "linkdin-clone-441b1.firebaseapp.com",
  projectId: "linkdin-clone-441b1",
  storageBucket: "linkdin-clone-441b1.appspot.com",
  messagingSenderId: "300506042693",
  appId: "1:300506042693:web:1a9862ff47a9473ef5ee2c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

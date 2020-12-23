import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtE8MHxb8c4EdVWPiC-AAzI_y4gASMvZg",
  authDomain: "clone-e2868.firebaseapp.com",
  projectId: "clone-e2868",
  storageBucket: "clone-e2868.appspot.com",
  messagingSenderId: "1071216114223",
  appId: "1:1071216114223:web:b439be70617e211f4ba4da",
  measurementId: "G-TRJ3C0DQ3S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

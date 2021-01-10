import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAVJqTe3Tcr1G6U0NxFsinzHPQPkaNkM4",
  authDomain: "amaclone-4e671.firebaseapp.com",
  projectId: "amaclone-4e671",
  storageBucket: "amaclone-4e671.appspot.com",
  messagingSenderId: "1033482924127",
  appId: "1:1033482924127:web:1ffb2aecc4e875afe9abea",
  measurementId: "G-DEJH4BPY3Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

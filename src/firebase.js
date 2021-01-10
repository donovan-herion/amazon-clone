import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-B0vyCqEZc9Sq01aiiEPGrvhYL8cMA-w",
  authDomain: "amaclone-8c301.firebaseapp.com",
  projectId: "amaclone-8c301",
  storageBucket: "amaclone-8c301.appspot.com",
  messagingSenderId: "420834494970",
  appId: "1:420834494970:web:db2598a1f1bff8be62bc43",
  measurementId: "G-SLK02E6J1T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

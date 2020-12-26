import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKFbDyjDv7yOfUoZwCb78-9KuQ8wA5-lM",
  authDomain: "amaclone-673b4.firebaseapp.com",
  projectId: "amaclone-673b4",
  storageBucket: "amaclone-673b4.appspot.com",
  messagingSenderId: "968180254889",
  appId: "1:968180254889:web:8695bc467a234384db41b8",
  measurementId: "G-JTCZCB0FRP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB960mHWIxOAc46D3tZeiHiw7Ln0xBs4kA",
  authDomain: "whats-app-clone-180a0.firebaseapp.com",
  databaseURL: "https://whats-app-clone-180a0-default-rtdb.firebaseio.com",
  projectId: "whats-app-clone-180a0",
  storageBucket: "whats-app-clone-180a0.appspot.com",
  messagingSenderId: "873732291505",
  appId: "1:873732291505:web:9bbb996e039db38bc39b90",
  measurementId: "G-0JB3PT634G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOQhC52w6xaVSTeq9DdFBE2gr3IwesBwA",
  authDomain: "todoist-27a92.firebaseapp.com",
  projectId: "todoist-27a92",
  storageBucket: "todoist-27a92.appspot.com",
  messagingSenderId: "643385807209",
  appId: "1:643385807209:web:e87362c9a2e0bc471b6df8",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = getFirestore(app);

export { auth, db };

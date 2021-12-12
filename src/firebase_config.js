import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAFFSyz-qBllBjBu3WmA6LVBMLvynq60xg",
  authDomain: "todo-fee4d.firebaseapp.com",
  projectId: "todo-fee4d",
  storageBucket: "todo-fee4d.appspot.com",
  messagingSenderId: "15857449880",
  appId: "1:15857449880:web:361274de2ab4651aaf89ed"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

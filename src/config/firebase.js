import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACkgjEvKS6P8OLWilqtacDnn-Rug-gJug",
  authDomain: "todo-app-be48f.firebaseapp.com",
  projectId: "todo-app-be48f",
  storageBucket: "todo-app-be48f.appspot.com",
  messagingSenderId: "273979901628",
  appId: "1:273979901628:web:597ee220fec89792e932b9",
  measurementId: "G-ZYXYGT2JJ2"
};

export const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKQwLQZiUyI3pcHakqLzISoJaZpa0ndIo",
  authDomain: "react-native-project-c9ea6.firebaseapp.com",
  projectId: "react-native-project-c9ea6",
  storageBucket: "react-native-project-c9ea6.appspot.com",
  messagingSenderId: "727640725487",
  appId: "1:727640725487:web:a3c1e618182f7df119881a",
  measurementId: "G-Z76YXVFJWJ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
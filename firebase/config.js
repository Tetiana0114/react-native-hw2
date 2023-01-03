import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKQwLQZiUyI3pcHakqLzISoJaZpa0ndIo",
  authDomain: "react-native-project-c9ea6.firebaseapp.com",
  databaseURL: "https://react-native-project-c9ea6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-project-c9ea6",
  storageBucket: "react-native-project-c9ea6.appspot.com",
  messagingSenderId: "727640725487",
  appId: "1:727640725487:web:a3c1e618182f7df119881a",
  measurementId: "G-Z76YXVFJWJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
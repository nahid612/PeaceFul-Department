// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDejqDud0WN-kj_yaqVyBUZjxBWXFiV1eY",
  authDomain: "peaceful-department.firebaseapp.com",
  projectId: "peaceful-department",
  storageBucket: "peaceful-department.appspot.com",
  messagingSenderId: "332467542233",
  appId: "1:332467542233:web:10037bfb26f3b86dcb86c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth
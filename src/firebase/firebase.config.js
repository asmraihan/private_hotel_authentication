// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMvbYbM7EqJUmUERJdZArr6lJzWQuCDws",
  authDomain: "private-hotel-auth.firebaseapp.com",
  projectId: "private-hotel-auth",
  storageBucket: "private-hotel-auth.appspot.com",
  messagingSenderId: "696141951630",
  appId: "1:696141951630:web:a580925ba65a8e56944fdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app /* //TODO: dont forget to export app as default */
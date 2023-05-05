// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ewDg68fMY9gkg-2_46jmudc3KIoiPCk",
  authDomain: "thrifthub-54ba8.firebaseapp.com",
  projectId: "thrifthub-54ba8",
  storageBucket: "thrifthub-54ba8.appspot.com",
  messagingSenderId: "79055798396",
  appId: "1:79055798396:web:520e943cf655483a4589f9",
  measurementId: "G-W2Z6BW4S6Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a function to handle the login form submission
function handleLogin() {
  // Get the email and password from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sign in the user with the email and password
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log(email, password);
      // The user is signed in, redirect them to the home page
      window.location.href = "marketplace.html";
    })
    .catch((error) => {
      // The user failed to sign in, display an error message
      console.log(error);
      alert('error');
    });
}

// Add an event listener to the login button
document.getElementById("btnlogin").addEventListener("click", handleLogin);

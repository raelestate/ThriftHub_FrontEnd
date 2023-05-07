// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
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
const db = getFirestore(app);

const userRef = collection(db, 'user');

let userData = [];

getDocs(userRef)
  .then((snapshot) => {
    userData = [];
    snapshot.docs.forEach((doc) => {
      userData.push({ ...doc.data() });
    });
    console.log(userData);
  })
  .catch((err) => {
    console.log(err.message);
  });

//login

const form = document.getElementById('login_form');
form.addEventListener('submit', function(event){
  // const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
    if(userData !== email && userData !== password){
      window.location.href = "marketplace.html";
    }
});

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
  // import {
  //   getAuth,
  //   signInWithEmailAndPassword,
  // } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
  
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
    measurementId: "G-W2Z6BW4S6Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
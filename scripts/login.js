  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
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

  var auths = firebase.auth();
// Get a reference to the login form
var loginForm = document.getElementById('login_form');

// Add an event listener to the login form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the user's email and password from the form
  var email = loginForm.email.value;
  var password = loginForm.password.value;
  
  // Sign in the user with the provided email and password
  auths.signInWithEmailAndPassword(email, password)
    .then(function() {
      // If the sign-in was successful, redirect the user to the dashboard
      window.location.href = "/dashboard.html";
    })
    .catch(function(error) {
      // If there was an error during sign-in, display the error message to the user
      alert(error.message);
    });
});




// Add a button to the form that calls the sendFormDataToServer() function
const submitButton = document.getElementById('submit');
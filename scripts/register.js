  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
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

// Create a collection in Firestore to store the data.
// Create a document in the collection to store the data from the HTML form.

const form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('test')
  const firstName = document.querySelector('input[name="first_name"]').value;
  const lastName = document.querySelector('input[name="last_name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const age = document.querySelector('input[name="age"]').value;
  const dob = document.querySelector('input[name="dob"]').value;
  const phonenumber = document.querySelector('input[name="phonenumber"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const confirmPassword = document.querySelector('input[name="confirm_password"]').value;
  
  if (document.querySelector('input[name="password"]').value.length < 8) {
      alert('Please enter a password that is at least 8 characters long.');
      event.preventDefault();
      return;
      }
    // Check if the passwords match
    if (password !== confirmPassword) {
      alert("The passwords do not match.");
      return;
    }

    // Check if the email address is valid
    if (
      !/^([\w-]+(?:.[\w-]+)@[\w-]+(?:.[\w-]+))$/.test(
        document.querySelector('input[name="email"]').value
      ))
    {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }
    // Write the data to Firestore
    const collectionRefference = collection(db, `${username}`);
    console.log(username);
    addDoc(collectionRefference,{
      firstName,
      lastName,
      address,
      age,
      dob,
      phonenumber,
      username,
      email,
      password,
    })
    .then(()=>{
      alert('Credentials Submitted, Redirecting to Login');
    })
        // Create a timer that will run after 5 seconds
    const timer = setTimeout(() => {
      // Redirect the user to the login page
      window.location.href = "login.html";
    }, 5000);
  });


// Add a button to the form that calls the sendFormDataToServer() function
const submitButton = document.getElementById('submit');
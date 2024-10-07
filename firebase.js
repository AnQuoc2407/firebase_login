// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF8Ivy2pT4hb08PNMHRnQgltM5Q-qWXgw",
  authDomain: "pxl-jsa-2024-66482.firebaseapp.com",
  projectId: "pxl-jsa-2024-66482",
  storageBucket: "pxl-jsa-2024-66482.appspot.com",
  messagingSenderId: "650776596030",
  appId: "1:650776596030:web:f98c1177ca5c8459c58b6f",
  measurementId: "G-B4QB96ZPGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();



const sign_up_btn = document.getElementById("signup-btn");
const user_email = document.getElementById("email-input");
const user_password = document.getElementById("password-input");
const user_password_confirm = document.getElementById("password-confirm");

var signupEmail, signupPassword, signupPasswordConfirm

sign_up_btn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = user_email.value;
  signupPassword = user_password.value;
  signupPasswordConfirm = user_password_confirm.value;

  if (signupPassword != signupPasswordConfirm) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupPassword == "" ||
    signupPasswordConfirm == "" ||
    signupEmail == ""
  ) {
    window.alert("Please fill out the required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          window.alert("Signup successful");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
  } else {
    window.alert("Please check something");
  }
});

// if (isVerified) {
//   createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       window.alert("Signup successful");
//       console.log(user);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// }
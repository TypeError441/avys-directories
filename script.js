import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"
import { firebaseConfig } from "./utils/config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

$(document).ready(function() {
    $(".directories").hide();
    $(".login").show();

    $(".login > .submit").click(function() {

    });
});

// auth.currentUser
// createUserWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//     const user = userCredential.user;
// })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });

// signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//     const user = userCredential.user;
// })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });
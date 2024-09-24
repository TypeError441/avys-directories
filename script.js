import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js'
import { firebaseConfig } from './utils/config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        return user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return "Error " + errorCode + ": " + errorMessage;
    });
}
function login(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        return user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return "Error " + errorCode + ": " + errorMessage;
    });
}
function enterDirectory(directory) { location.href = "./sites/" + directory; }

$(document).ready(function() {
    $(".directories").hide();
    $(".login").show();

    $(".login > .submit").click(function() {

    });
});
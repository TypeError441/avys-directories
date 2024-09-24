import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyATqdN5VIW0QvXl3jQQ1ev9mrCEdr-edhM",
    authDomain: "avys-directories.firebaseapp.com",
    projectId: "avys-directories",
    storageBucket: "avys-directories.appspot.com",
    messagingSenderId: "164736308154",
    appId: "1:164736308154:web:fed9592f94094a072d4383",
    measurementId: "G-B38541VHW0"
};
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
function enter(directory) { location.href = "./sites/" + directory; }

$(function() {
    $(".directories").hide();
    $(".login").show();

    $(".login > .submit").click(function() {

    });
});
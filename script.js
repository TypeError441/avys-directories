import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"
import { firebaseConfig } from "./utils/config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

$(document).ready(function() {
    if(localStorage.getItem("email") != null && localStorage.getItem("password") != null) {
        signInWithEmailAndPassword(auth, localStorage.getItem("email"), localStorage.getItem("password"))
        .then((userCredential) => {
            const user = userCredential.user;
            $(".login").hide();
            $(".register").hide();

            $(".directories").show();
        })
    } else {
    $(".directories").hide();
    $(".login").show();
    $(".login > .errorText").hide();
    $(".register").hide();
    $(".register > .errorText").hide();

    $(".login > .submit").click(function() {
        signInWithEmailAndPassword(auth, $(".login > input[type='email']").val(), $(".login > input[type='password']").val())
        .then((userCredential) => {
            const user = userCredential.user;
            $(".login").hide();
            $(".register").hide();
            localStorage.setItem("email", $(".login > input[type='email']").val());
            localStorage.setItem("password", $(".login > input[type='password']").val());

            $(".directories").show();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            $(".register > .errorText").html(errorMessage);
            $(".register > .errorText").show();
        });
    });

    $(".register > .submit").click(function() {
        createUserWithEmailAndPassword(auth, $(".login > input[type='email']").val(), $(".login > input[type='password']").val())
        .then((userCredential) => {
            const user = userCredential.user;
            $(".login").hide();
            $(".register").hide();
            localStorage.setItem("email", $(".login > input[type='email']").val());
            localStorage.setItem("password", $(".login > input[type='password']").val());

            $(".directories").show();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            $(".register > .errorText").html(errorMessage);
            $(".register > .errorText").show();
        });
    });
    }

    $(".exit").click(function() {
        signOut(auth).then(() => {});
        
        localStorage.setItem("email", null);
        localStorage.setItem("password", null);

        $(".directories").hide();
        $(".login").show();
        $(".login > .errorText").hide();
        $(".register").hide();
        $(".register > .errorText").hide();
    });
});

// auth.currentUser
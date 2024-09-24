import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"
import { firebaseConfig } from "./utils/config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Login and log out
$(document).ready(function() {
    $(".directories").hide();
    $(".login").hide();
    $(".login > .errorText").hide();
    $(".register").hide();
    $(".register > .errorText").hide();

    signInWithEmailAndPassword(auth, localStorage.getItem("email"), localStorage.getItem("password"))
    .then((userCredential) => {
        const user = userCredential.user;
        $(".login").hide();
        $(".register").hide();

        $(".directories").show();
    })
    .catch((error) => { $(".login").show(); });
    
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

set(ref(database, 'sites/sigma/users/' + auth.currentUser.uid), {
    name: "Rizzler",
});
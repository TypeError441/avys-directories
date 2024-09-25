import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"
import { firebaseConfig } from "./utils/config.js";

// Initialize firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Login and log out
$(document).ready(function() {
    $(".directories").hide();
    $(".login").hide();
    $(".login > .errorText").hide();
    $(".register").hide();
    $(".register > .errorText").hide();

});

set(ref(database, 'sites/test/users/'), {
    name: "TestUser",
});
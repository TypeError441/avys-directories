import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"
import { firebaseConfig } from "./utils/config.js";


$(function() {
    // Initialization
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    if(localStorage.getItem("uuid") == null) localStorage.setItem("uuid", crypto.randomUUID());

    set(ref(database, 'sites/test/users/' + localStorage.getItem("uuid")), {
        name: "User " + localStorage.getItem("uuid"),
    });
});


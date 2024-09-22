var msgs = ""

var firebaseConfig = {
    apiKey: "AIzaSyDPE9gj2lYQfmLrlw5Wi8sDCNaAaog04mE",
    authDomain: "doctorapp-acd3b.firebaseapp.com",
    databaseURL: "https://doctorapp-acd3b-default-rtdb.firebaseio.com",
    projectId: "doctorapp-acd3b",
    storageBucket: "doctorapp-acd3b.appspot.com",
    messagingSenderId: "500119242143",
    appId: "1:500119242143:web:2bd9139d89a3b3680ca9aa",
    measurementId: "G-V7VDGWB29T"
};

firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/" + localStorage.getItem("roomName")).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if(childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                msg = "<div>" + message_data + "</div>"
                if(!msgs.includes(msg)) {
                    msgs += msg;
                }
                document.getElementById("output").innerHTML = msgs;
            }
        });
    });
}
getData();

function sendMessage(message) {
    firebase.database().ref("/").child(localStorage.getItem("roomName")).update ({
        msg: localStorage.getItem('name') + ': ' + message
    });
    document.getElementById("msginput").value = "";
}
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

document.getElementById('username').innerHTML = 'Hello, ' + localStorage.getItem('name') + '!';

function logOut() {
    localStorage.removeItem('name');
    window.location.replace('index.html');
}
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            row = "<div class='roomName' id='" + Room_names + "' onclick='joinRoom(this.id)'>" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();


function joinRoom(room) {
    localStorage.setItem('roomName', room);
    window.location.replace('page.html');
    firebase.database().ref("/").child(room).update ({
        msg: localStorage.getItem('name') + ' joined the group.'
    });
}

function createRoom(room) {
    localStorage.setItem('roomName', room);
    row = "<div class='roomName' id='" + room + "' onclick='joinRoom(this.id)'>" + room + "</div><hr>";
    document.getElementById("output").innerHTML += row;
}

function addUser() {
    localStorage.setItem('name', document.getElementById('name').value);
    window.location.replace("chatterapp.html");
}
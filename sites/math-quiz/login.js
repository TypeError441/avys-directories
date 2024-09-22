function addPlayers() {
    localStorage.setItem("player01", document.getElementById('loginInput01').value);
    localStorage.setItem("player02", document.getElementById('loginInput02').value);
    window.location = 'game.html';
}
var canvas = document.getElementById("canvas01");
var canvas2D = canvas.getContext("2d");
var color;
var mouseX;
var mouseY;

color = "blue";
makeCircle(180, 330);
color = "yellow";
makeCircle(240, 370);
color = "black";
makeCircle(300, 330);
color = "green";
makeCircle(360, 370);
color = "red";
makeCircle(420, 330);
function makeCircle (x, y) {
    canvas2D.beginPath();
    canvas2D.strokeStyle = color;
    canvas2D.lineWidth = 2;
    canvas2D.arc(x, y, 40, 0, 2 * Math.PI);
    canvas2D.stroke();
}
var canvas = document.getElementById("canvas");
var canvas2D = canvas.getContext("2d");

var car01Width = 120;
var car01Height = 70;
var car01sprite = "car01.png";
var car01x = 10;
var car01y = 10;

var car02Width = 120;
var car02Height = 70;
var car02sprite = "car02.png";
var car02x = 10;
var car02y = 100;

var BG = "racing.jpg";
var key;

window.addEventListener("keydown", keyPressed);

drawCars();

function keyPressed(event) {
    key = event.keyCode;
    console.log("The keycode of what they pressed is '" + key + "'.");
    if(key == '87') {
        move(0, 1);
    } else if(key == '65') {
        move(1, 1);
    } else if(key == '83') {
        move(2, 1);
    } else if(key == '68') {
        move(3, 1);
    } else if(key == '38') {
        move(0, 2);
    } else if(key == '37') {
        move(1, 2);
    } else if(key == '40') {
        move(2, 2);
    } else if(key == '39') {
        move(3, 2);
    }
}

function move(direction, carID) {
    if(carID == 1) {
        if(direction == 0) {
            if(car01y >= 0) {
                car01y -= 10;
                drawBG();
                drawCars();
            }
        } else if(direction == 1) {
            if(car01x >= 0) {
                car01x -= 10;
                drawBG();
                drawCars();
            }
        } else if(direction == 2) {
            if(car01y <= 500) {
                car01y += 10;
                drawBG();
                drawCars();
            }
        } else if(direction == 3) {
            if(car01x <= 700) {
                car01x += 10;
                drawBG();
                drawCars();
            } else {
                document.getElementById("gameStatus").innerHTML = "Car 1 Won!";
            }
        }
    } else if(carID == 2) {
        if(direction == 0) {
            if(car02y >= 0) {
                car02y -= 10;
                drawBG();
                drawCars();
            }
        } else if(direction == 1) {
            if(car02x >= 0) {
                car02x -= 10;
                drawBG();
                drawCars();
            }
        } else if(direction == 2) {
            if(car02y <= 500) {
                car02y += 10;
                drawBG();
                drawCars();
            }
        } else if(direction == 3) {
            if(car02x <= 700) {
                car02x += 10;
                drawBG();
                drawCars();
            } else {
                document.getElementById("gameStatus").innerHTML = "Car 2 Won!";
            }
        }
    }
}

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = drawBG;
    background_imgTag.src = BG;

    car01_imgTag = new Image();
    car01_imgTag.src = car01sprite;

    car02_imgTag = new Image();
    car02_imgTag.onload = drawCars;
    car02_imgTag.src = car02sprite;
}

function drawBG() {
    canvas2D.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function drawCars() {
    canvas2D.drawImage(car01_imgTag, car01x, car01y, car01Width, car01Height)
    canvas2D.drawImage(car02_imgTag, car02x, car02y, car02Width, car02Height);
}

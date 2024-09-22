var canvas, video;
var harry, peter;

function preload() {
    harry = loadSound('assets/sounds/harry.mp3');
    peter = loadSound('assets/sounds/peter.mp3');
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 400);
}
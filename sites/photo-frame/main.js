let video;
let tintColor;
function setup() {
    let canvas = createCanvas(1280, 720);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    noStroke();

    fill(0, 200, 255);
    rect(235, 100, 25, 450);
    rect(1040, 100, 25, 450);
    rect(300, 50, 790, 25);
    rect(300, 590, 790, 25);

    fill(0, 255, 200);
    ellipse(250, 60, 100, 100);
    ellipse(250, 600, 100, 100);
    ellipse(1050, 60, 100, 100);
    ellipse(1050, 600, 100, 100);
    
    image(video, 325, 100, 640, 480);
}

function takeSnapshot() {
    save("avyukth.png");
}
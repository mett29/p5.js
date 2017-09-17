function preload() {
    tick = loadSound('clock-ticking.mp3');
}

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    tick.loop();
}

function draw() {

    background(0);    
    translate(200, 200);
    rotate(-90);

    var h = hour();
    var m = minute();
    var s = second();

    strokeWeight(8);
    noFill();
    stroke(255, 100, 150);
    let secondAngle = map(s, 0, 59, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    stroke(150, 100, 255);
    let minuteAngle = map(m, 0, 59, 0, 360);
    arc(0, 0, 280, 280, 0, minuteAngle);

    stroke(150, 255, 100);
    let hourAngle = map(h % 12, 0, 11, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);

    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(150, 100, 255);
    line(0, 0, 75, 0);
    pop();

    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0, 0, 50, 0);
    pop();

}
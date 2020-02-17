let colors = ['#000039', '#091463', '#00CCFF'];
function setup() {
    let myCanvas = createCanvas(800,600);
    myCanvas.position(250, 50);
    myCanvas.class('container');
    angleMode(DEGREES);
    frameRate(1);
    strokeWeight(8);
    noFill();
}


function draw() {
    clear();
    push();
    translate(width/2, height/2);
    rotate(-90);
    //Seconds
    stroke(colors[0]);
    const secondAngle = map(second(), 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);
    push();
    rotate(secondAngle);
    line(0, 0, 100, 0);
    pop();
    //Minutes
    stroke(colors[1]);
    const minuteAngle = map(minute(), 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minuteAngle);
    push();
    rotate(minuteAngle);
    line(0, 0, 75, 0);
    pop();
    //Hours
    stroke(colors[2]);
    const hourAngle = map(hour() % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);
    push();
    rotate(hourAngle);
    line(0, 0, 50, 0);
    pop();

    stroke(255);
    point(0, 0);
    pop();
}
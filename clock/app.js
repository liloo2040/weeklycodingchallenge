function setup() {
    translate(400, 300);
    frameRate(1);
    strokeWeight(8);
    noFill();
}


function loop() {
    clear();
    push();
    rotate(-90);
    //Seconds
    stroke(163, 88, 109);
    const secondAngle = map(second(), 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);
    push();
    rotate(secondAngle);
    line(0, 0, 100, 0);
    pop();
    //Minutes
    stroke(92, 74, 114);
    const minuteAngle = map(minute(), 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minuteAngle);
    push();
    rotate(minuteAngle);
    line(0, 0, 75, 0);
    pop();
    //Hours
    stroke(243, 176, 90);
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
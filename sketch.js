
let segments = [];
let lvl = 0;

function setup() {
    createCanvas(600, 700);

    let a = createVector(100, 200);
    let b = createVector(500, 200);
    let c = createVector(300, 545);
    let s1 = new Segment(a, b);
    let s2 = new Segment(b, c);
    let s3 = new Segment(c, a);

    segments.push(s1);
    segments.push(s2);
    segments.push(s3);

}

function addAll(arr1, arr2) {
    for (let s of arr1) {
        arr2.push(s);
    }
}

function mousePressed() {
    let nextGeneration = [];

    lvl += 1;

    for (let s of segments) {
        let children = s.generate();
        nextGeneration = nextGeneration.concat(children);
    }

    segments = nextGeneration;
}

function draw() {
    background(255);

    noStroke();
    switch (lvl) {
        case 0:
        case 1:
        case 2: fill(0, 200, 0); break;
        case 3:
        case 4: fill(0, 0, 255); break;
        case 5:
        case 6: fill(255, 0, 0); break;
        default: fill(255, 0, 0);
    }

    textSize(32);
    text("Recusrion level: " + lvl, width / 4, 50);

    fill(0);
    text("Segment count: " + segments.length, width / 4, height - 50);


    beginShape();
    for (let s of segments) {
        vertex(s.a.x, s.a.y);
    }
    fill(255, 150, 150);
    endShape(CLOSE);
}
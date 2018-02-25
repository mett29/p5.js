var cols, rows;
var scl = 20;
var w = 3000;
var h = 2000;

var flying = 0;

var terrain = [];

var img;

function setup() {
    createCanvas(1200, 800, WEBGL);
    img = loadImage("texture.jpg");
    cols = w / scl;
    rows = h/ scl;

    for (var x = 0; x < cols; x++) {
        terrain[x] = [];
        for (var y = 0; y < rows; y++) {
        terrain[x][y] = 0; //specify a default value for now
        }
    }
}

function draw() {
    flying -= 0.009;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, -50, 50);
        xoff += 0.2;
        }
        yoff += 0.2;
    }

    background(0);
    translate(0, 50);
    rotateX(PI/3);
    //fill(200,200,200, 50);
    translate(-w/2, -h/2);
    for (var y = 0; y < rows-1; y++) {
        beginShape(TRIANGLE_STRIP);
        texture(img);
        for (var x = 0; x < cols; x++) {
            let u = map(x, 0, cols, 0, 1);
            let v1 = map(y, 0, rows, 0, 1);
            vertex(x*scl, y*scl, terrain[x][y], u, v1);
            let v2 = map(y+1, 0, rows, 0, 1);
            vertex(x*scl, (y+1)*scl, terrain[x][y+1], u, v2);
        }
        endShape(CLOSE);
    }
}
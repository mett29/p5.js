Shuttle shuttle;
Bullet[] bullets;

float grid = 50;

void setup() {
  size(600, 600);
  shuttle = new Shuttle(width/2-grid/2, height-grid, grid);
  
  final int n = 8;
  bullets = new Bullet[n];
  for (int i = 0; i < n; i++) {
     bullets[i] = new Bullet(random(0, 500), 0, 20, 20, random(1, 4)); 
  }
}

void draw() {
  background(0);
  shuttle.check(bullets);
  shuttle.update();
  shuttle.show();
  
  for (Bullet b : bullets) {
    b.update();
    b.show();
  }
}

void keyPressed() {
  if (keyCode == UP) {
    shuttle.move(0, -1);
  } else if (keyCode == DOWN) {
    shuttle.move(0, 1);
  } else if (keyCode == RIGHT) {
    shuttle.move(1, 0);
  } else if (keyCode == LEFT) {
    shuttle.move(-1, 0);
  }
}
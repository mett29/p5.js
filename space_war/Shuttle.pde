class Shuttle extends Rectangle {
  
  float score = 0;
  
  Shuttle(float x, float y, float w) {
    super(x, y, w, w);
  }
  
  void update() {
    score += 1;
  }
  
  void show() {
    fill(255);
    rect(x, y, w, w);
    text(score, 10, 30);
  }
  
  void move(float xdir, float ydir) {
    x += xdir * grid;
    y += ydir * grid;
  }
  
  void check(Bullet[] bullets) {
    for (Bullet b : bullets) {
      if (shuttle.collides(b)) {
        score = 0;
      }
    }
    if (shuttle.edges()) {
      score = 0; 
    }
  }
}
class Bullet extends Rectangle {
  
  float speed;
  color c;
  
  int n = 10;
    
  Bullet(float x, float y, float w, float h, float s) {
    super(x, y, w, h);
    speed = s;
    c = color(random(0,255), random(0,255), random(0,255)); 
  }
  
  void update() {
    speed += 0.001;
    y = y + speed;
    if (speed > 0 && y > height+grid) {
      y = -h-grid;
      x = random(0, 500);
    }
  }
  
  void show() {
    fill(c);
    rect(x, y, w, w);
  }
}
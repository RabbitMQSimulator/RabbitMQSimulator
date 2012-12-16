class Transfer {
  float x, y;
  float distX, distY;
  float step = 0.01;
  float pct = 0.0;
  Edge along;
  
  Transfer(Edge along) {
    this.along = along;
    x = along.from.x;
    y = along.from.y;
    this.updateDist();    
  }
  
  void updateDist() {
    distX = along.to.x - along.from.x;
    distY = along.to.y - along.from.y;
  }
  
  void update() {
    updateDist();
    if (pct < 1.0) {
      this.x = along.from.x + (pct * distX);
      this.y = along.from.y + (pct * distY);
    }
  }
  
  void draw() {
    pct += step;
    fill(255);
    ellipse(x, y, 5, 5);
  }
}

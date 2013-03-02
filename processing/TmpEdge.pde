class TmpEdge {
  Node from;
  int toX;
  int toY;
  color edgeColor;

  TmpEdge(Node from, int toX, int toY, color edgeColor) {
    this.from = from;
    this.toX = toX;
    this.toY = toY;
    this.edgeColor = edgeColor;
  }
  
  void mouseDragged() {
    toX = mouseX;
    toY = mouseY;
  }
  
  void draw() {
    stroke(this.edgeColor);
    strokeWeight(0.35);
    line(from.x, from.y, toX, toY);
  }
}

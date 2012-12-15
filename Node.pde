class Node {
  float x, y;
  String label;
  color nodeColor;
  
  Node(String label, color nodeColor) {
     this.label = label;
     this.nodeColor = nodeColor;
     x = random(width);
     y = random(height);
  }
  
  void mouseDragged() {
    x = constrain(mouseX, 0, width);
    y = constrain(mouseY, 0, width);
  }
  
  void draw() {
    fill(this.nodeColor);
    stroke(0);
    strokeWeight(0.5);
    
    //draw node
    ellipse(x, y, 20, 20);
    
    // draw node text
    fill (0);
    textAlign(CENTER, CENTER);
    text(label, x, y);
  }
}

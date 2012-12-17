class ToolbarItem {
  float x, y;
  int type;
  String label;
  color nodeColor;
  
  ToolbarItem(int type, String label, float x, float y) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.label = label;
    nodeColor = colors[type];
  }
  
  boolean isBelowMouse() {
    float closest = 20;
    float d = dist(mouseX, mouseY, this.x, this.y);
    return d < closest;
  }
  
  void mouseDragged() {
    if (isBelowMouse()) {
      tmpNode = newNodeByType(this.type, this.label, this.x, this.y);
    }
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

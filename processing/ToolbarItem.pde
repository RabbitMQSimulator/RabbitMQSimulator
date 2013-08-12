class ToolbarItem {
  float x, y;
  int type;
  int radii;
  String label;
  color nodeColor;
  
  ToolbarItem(int type, String label, float x, float y) {
    this.x = x;
    this.y = y;
    this.radii = 10;
    this.type = type;
    this.label = label;
    this.nodeColor = colors[type];
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
    switch(this.type) {
      case EXCHANGE:
        ExchangeFigure.draw(this.x, this.y, this.nodeColor, 0, 0.5, this.radii, 3);
        break;
      case QUEUE:
        QueueFigure.draw(this.x, this.y, this.nodeColor, 0, 0.5, Q_WIDTH, Q_HEIGHT, 0);
        break;
      case CONSUMER:
        ConsumerFigure.draw(this.x, this.y, this.nodeColor, 0, 0, this.radii, 5, -90);
        break;
      default:
        NodeFigure.draw(this.x, this.y, this.nodeColor, 0, 0.5, this.radii);
    }
    
    // draw node text
    fill (0);
    textAlign(CENTER, CENTER);
    text(label, x, y+labelPadding);
  }
}

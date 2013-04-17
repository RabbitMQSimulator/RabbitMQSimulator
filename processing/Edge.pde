class Edge {
  Node from;
  Node to;
  color edgeColor;
  String bindingKeyLabel = DEFAULT_BINDING_KEY;
  float bkX, bkY;

  Edge(Node from, Node to, color edgeColor) {
    this.from = from;
    this.to = to;
    this.edgeColor = edgeColor;
  }
  
  float middleX() {
    return (from.x + to.x)/2;
  }
  
  float middleY() {
    return (from.y + to.y)/2;
  }
  
  boolean connectedToAnonExchange() {
    return (from.getType() == ANON_EXCHANGE || to.getType() == ANON_EXCHANGE);
  }
  
  void setBindingKey(String bk) {
    bindingKeyLabel = bk == "" ? DEFAULT_BINDING_KEY : bk;
  }
  
  String getBindingKey() {
    return bindingKeyLabel == DEFAULT_BINDING_KEY ? "" : bindingKeyLabel;
  }
  
  void updateBindingKey(String bk) {
    if (to.getType() == EXCHANGE || to.getType() == ANON_EXCHANGE) {
      Exchange x = (Exchange) to;
      String oldBk = getBindingKey();
      if (x.updateBinding(from, oldBk, bk)) {
        setBindingKey(bk);
      }
    }
  }
  
  void remove() {
    Exchange x = (Exchange) to;
    x.removeBinding(from, getBindingKey());
  }
  
  boolean labelClicked() {
    float w = textWidth(bindingKeyLabel) / 2;
    return (mouseX >= middleX() - w && mouseX <= middleX() + w &&
            mouseY >= middleY() - 10 && mouseY <= middleY() + 10);
  }
  
  void draw() {
    if (!advancedMode && connectedToAnonExchange()) {
      return;
    }
    
    stroke(this.edgeColor);
    strokeWeight(edgeStroke);
    line(from.x, from.y, to.x, to.y);
    
    drawArrowHead();
    
    // draw node text
    if ((from.getType() == QUEUE || from.getType() == EXCHANGE) && to.getExchangeType() != FANOUT) {
      fill (0);
      textAlign(CENTER, CENTER);
      text(bindingKeyLabel, middleX(), middleY());
    }
  }
  
  void drawArrowHead() {
    boolean atStart;
    float distance;
    
    switch(from.getType()) {
      case QUEUE:
      case CONSUMER:
      case EXCHANGE:
        atStart = true;
        distance = 0.1;
        break;
      default:
        atStart = false;
        distance = 0.9;
        break;
    }
    
    if (atStart) {
      float x0 = lerp(from.x, to.x, distance);
      float y0 = lerp(from.y, to.y, distance);
      float x1 = to.x;
      float y1 = to.y;
      arrowhead(x0, y0, atan2(y1 - y0, x1 - x0), radians(30), false);
    } else {
      float x0 = from.x;
      float y0 = from.y;
      float x1 = lerp(from.x, to.x, distance);
      float y1 = lerp(from.y, to.y, distance);
      arrowhead(x1, y1, atan2(y0 - y1, x0 - x1), radians(30), false);
    }
  }
}

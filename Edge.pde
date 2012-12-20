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
  
  void updateBindingKey(String bk) {
    println("updateBindingKey: " + bk);
    if (to.getType() == EXCHANGE) {
      Exchange x = (Exchange) to;
      String oldBk = bindingKeyLabel == DEFAULT_BINDING_KEY ? "" : bindingKeyLabel;  
      if (x.updateBinding(from, oldBk, bk)) {
        bindingKeyLabel = bk == "" ? DEFAULT_BINDING_KEY : bk;
      }
    }
  }
  
  boolean labelClicked() {
    float w = textWidth(bindingKeyLabel) / 2;
    return (mouseX >= middleX() - w && mouseX <= middleX() + w &&
            mouseY >= middleY() - 10 && mouseY <= middleY() + 10);
  }
  
  void draw() {
    stroke(this.edgeColor);
    strokeWeight(1);
    line(from.x, from.y, to.x, to.y);
    
    // draw node text
    if (from.getType() == QUEUE || to.getType() == QUEUE) {
      fill (0);
      textAlign(CENTER, CENTER);
      text(bindingKeyLabel, middleX(), middleY());
    }
  }
  

}

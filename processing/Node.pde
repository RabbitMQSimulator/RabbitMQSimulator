abstract class Node {
  float x, y;
  int radii = 10;
  String label;
  color nodeColor;
  
  ArrayList incoming = new ArrayList(); // nodes that connected to this node
  ArrayList outgoing = new ArrayList(); // nodes this node connected to
  
  Node(String label, color nodeColor, float x, float y) {
     this.label = label;
     this.nodeColor = nodeColor;
     this.x = x;
     this.y = y;
  }
  
  abstract int getType();
  abstract boolean accepts(Node n);
  abstract boolean canStartConnection();
  
  String getLabel() {
    return label;
  }
  
  float getX() {
    return x;
  }
  
  float getY() {
    return y;
  }
  
  boolean isBelowMouse() {
    float closest = 20;
    float d = dist(mouseX, mouseY, this.x, this.y);
    return d < closest;
  }
  
  /** 
    endpoint DESTINATION | SOURCE specifies the role of the
    Node n.  
  */
  void connectWith(Node n, int endpoint) {
    if (endpoint == DESTINATION) {
      this.addOutgoing(n);
    } else {
      this.addIncoming(n);
    }
  }
  
  void addIncoming(Node n) {
    incoming.add(n);
  }
  
  void addOutgoing(Node n) {
    outgoing.add(n);
  }
  
  void trasnferArrived(Transfer transfer) {
  }
  
  void transferDelivered(Transfer transfer) {
    println("transferDelivered");
  }
  
  /**
   * Padding from the simulator boundaries
   */
  int padding() {
    return this.radii * 2 + 2;
  }
  
  void mouseDragged() {
    x = constrain(mouseX, TOOLBARWIDTH + padding(), width - padding());
    y = constrain(mouseY, 0 + padding(), height - padding());
  }
  
  void draw() {
    NodeFigure.draw(this.x, this.y, this.nodeColor, 0, nodeStroke, this.radii)
    drawLabel();
  }
  
  void drawLabel() {
      fill (0);
      textAlign(CENTER, CENTER);
      text(getLabel(), x, y+labelPadding);
  }
}

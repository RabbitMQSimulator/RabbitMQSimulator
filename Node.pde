abstract class Node {
  float x, y;
  int radii = 10;
  String label;
  color nodeColor;
  
  // List Nodes connected to this Node
  int incomingCount = 0;
  int outgoingCount = 0;
  Node[] incoming = new Node[100];
  Node[] outgoing = new Node[100];
  
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
  
  void connectWith(Node n, int endpoint) {
    if (endpoint == DESTINATION) {
      this.addOutgoing(n);
    } else {
      this.addIncoming(n);
    }
  }
  
  void addIncoming(Node n) {
    if (incomingCount == incoming.length) {
      incoming = (Node[]) expand(incoming);
    }
    incoming[incomingCount++] = n;
  }
  
  void addOutgoing(Node n) {
    if (outgoingCount == outgoing.length) {
      outgoing = (Node[]) expand(outgoing);
    }
    outgoing[outgoingCount++] = n;
  }
  
  void trasnferArrived(Transfer transfer) {
    println("transferArrived");
  }
  
  void transferDelivered(Transfer transfer) {
    println("transferDelivered");
  }
  
  int padding() {
    return this.radii * 2 + 2;
  }
  
  void mouseDragged() {
    x = constrain(mouseX, TOOLBARWIDTH + padding(), width - padding());
    y = constrain(mouseY, 0 + padding(), height - padding());
  }
  
  void draw() {
    fill(this.nodeColor);
    stroke(0);
    strokeWeight(0.5);
    
    //draw node
    ellipse(x, y, this.radii * 2, this.radii * 2);
    
    // draw node text
    fill (0);
    textAlign(CENTER, CENTER);
    text(label, x, y);
  }
}

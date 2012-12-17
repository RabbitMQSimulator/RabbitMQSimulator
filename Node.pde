class Node {
  float x, y;
  String label;
  color nodeColor;
  String type = "";
  Node[] incoming = new Node[100];
  Node[] outgoing = new Node[100];  
  int incomingCount = 0;
  int outgoingCount = 0;
  
  Node(String label, color nodeColor) {
     this.label = label;
     this.nodeColor = nodeColor;
     x = random(width);
     y = random(height);
  }
  
  String getType() {
    return type;
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
  
  void mouseDragged() {
    x = constrain(mouseX, 0, width);
    y = constrain(mouseY, 0, height);
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

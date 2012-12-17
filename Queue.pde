class Queue extends Node implements IConnectable {
  int type = QUEUE;
  int depth = 0;
  
  Queue(String name, float x, float y) {
    super(name, colors[QUEUE], x, y);
  }
  
  int getType() {
    return type;
  }
  
  boolean accepts(Node n) {
    return n.getType() == CONSUMER;
  }
  
  boolean canStartConnection() {
    return true;
  }
  
  void trasnferArrived(Transfer transfer) {
    depth++;
    for (int i = 0 ; i < incomingCount ; i++) {
        stage.addTransfer(new Transfer(stage, this, incoming[i], transfer.getData()));
    }
  }
  
  void transferDelivered(Transfer transfer) {
    depth--;
  }
  
  void draw() {
    super.draw();
    
    // draw queue depth text
    fill (0);
    textAlign(CENTER, CENTER);
    text(str(depth), x + radii + 5, y - radii - 5);
  }
}

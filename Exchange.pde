class Exchange extends Node implements IConnectable {
  int type = EXCHANGE; 
  
  Exchange(String name, float x, float y) {
    super(name, colors[EXCHANGE], x, y);
  }

  int getType() {
    return type;
  }

  boolean accepts(Node n) {
    switch(n.getType()) {
      case EXCHANGE:
      case QUEUE:
      case PRODUCER:
        return true;
      default:
        return false;
    }
  }
  
  boolean canStartConnection() {
    return true;
  }
  
  void trasnferArrived(Transfer transfer) {
    for (int i = incoming.size()-1; i >= 0; i--) {
      Node n = (Node) incoming.get(i);
      if (n.getType() != PRODUCER) {
        stage.addTransfer(new Transfer(stage, this, n, transfer.getData()));
      }
    }
  }
  
  void mouseClicked() {
    println("Exchange Clicked");
  }
}

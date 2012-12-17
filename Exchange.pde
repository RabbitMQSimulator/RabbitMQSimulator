class Exchange extends Node implements IConnectable {
  int type = EXCHANGE; 
  
  Exchange(String name, float x, float y) {
    super(name, colors[EXCHANGE], x, y);
  }

  int getType() {
    return type;
  }

  boolean accepts(Node n) {
    println(n.getType());
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
    for (int i = 0 ; i < incomingCount ; i++) {
      if (incoming[i].getType() != PRODUCER) {
        stage.addTransfer(new Transfer(stage, this, incoming[i], transfer.getData()));
      }
    }
  }
}

class Exchange extends Node implements IConnectable {
  int type = EXCHANGE; 
  
  Exchange(String name) {
    super(name, #FF8408);
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
}

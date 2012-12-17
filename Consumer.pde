class Consumer extends Node implements IConnectable {
  int type = CONSUMER;
  
  Consumer(String name) {
    super(name, #E1FF08);
  }
  
  int getType() {
    return type;
  }
  
  boolean accepts(Node n) {
    return false;
  }
  
  boolean canStartConnection() {
    println(outgoingCount);
    return outgoingCount < 1;
  }
}

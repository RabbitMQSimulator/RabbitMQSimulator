class Consumer extends Node implements IConnectable {
  int type = CONSUMER;
  
  Consumer(String name, float x, float y) {
    super(name, colors[CONSUMER], x, y);
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

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
    return outgoing.size() < 1;
  }
  
  void mouseClicked() {
    println("Consumer Clicked");
  }
}

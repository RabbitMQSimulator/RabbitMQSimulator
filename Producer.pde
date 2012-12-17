class Producer extends Node implements IConnectable {
  int type = PRODUCER; 
  
  Producer(String name, float x, float y) {
    super(name, colors[PRODUCER], x, y);
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
  
  void publishMessage(String data) {
    Node n = (Node) outgoing.get(0);
    stage.addTransfer(new Transfer(stage, this, n, data));
  }
}

class Producer extends Node implements IConnectable {
  int type = PRODUCER; 
  
  Producer(String name) {
    super(name, #3F4031);
  }
  
  int getType() {
    return type;
  }
  
  boolean accepts(Node n) {
    return false;
  }
  
  boolean canStartConnection() {
    return outgoingCount < 1;
  }
}

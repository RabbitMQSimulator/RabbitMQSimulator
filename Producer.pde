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
    return outgoingCount < 1;
  }
}

class Queue extends Node implements IConnectable {
  int type = QUEUE;
  
  Queue(String name) {
    super(name, #0816FF);
  }
  
  int getType() {
    return type;
  }
  
  boolean accepts(Node n) {
    return n.getType() == CONSUMER;
  }
}

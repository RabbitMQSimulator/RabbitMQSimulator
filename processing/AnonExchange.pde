class AnonExchange extends Node {
  int initialSides = 3;
  int type = ANON_EXCHANGE;
  int exchangeType = ANON;
  
  AnonExchange(String name, float x, float y) {
    super(name, colors[ANON_EXCHANGE], x, y);
    bindings = new HashMap();
  }
  
  int getType() {
    return type;
  }
  
  int getExchangeType() {
    return exchangeType;
  }
  
  int getExchangeTypeString() {
    return exchangeTypes[exchangeType];
  }
  
  boolean accepts(Node n) {
    return n.getType() == PRODUCER;
  }
  
  boolean canStartConnection() {
    return false;
  }
  
  void connectWith(Node n, int endpoint) {
    if (n.getType() == QUEUE) {
      addBinding(n, n.getLabel());
    }
    
    if (n.getType() == PRODUCER) {
      this.addIncoming(n);
    }
  }
  
  boolean addBinding(Node n, String bindingKey) {
    bindings.put(bindingKey, n);
    return true;
  }
  
  boolean updateBinding(Node n, String oldBk, String newBk) {
    if (oldBk != newBk) {   
      removeBinding(n, oldBk);
      
      addBinding(n, newBk);
      return true;
    }
    
    return false;
  }
  
  boolean removeBinding(Node n, String bk) {
    bindings.remove(n.getLabel());
    return true;
  }
  
  void trasnferArrived(Transfer transfer) {
    Message msg = transfer.getData();
    Queue q = (Queue) bindings.get(msg.getRoutingKey());
    
    if (q != null) {
      stage.addTransfer(new Transfer(stage, this, q, msg));
    }
  }
  
  void draw() {
    if (advancedMode) {
      int sides = this.initialSides;
      if (bindings) {
          sides = this.initialSides + bindings.size();
      }
      ExchangeFigure.draw(this.x, this.y, this.nodeColor, 0, nodeStroke, this.radii, sides);
      super.drawLabel();
    }
  }
}

class Exchange extends Node implements IConnectable {
  int type = EXCHANGE;
  HashMap bindings;
  
  Exchange(String name, float x, float y) {
    super(name, colors[EXCHANGE], x, y);
    bindings = new HashMap();
  }

  int getType() {
    return type;
  }

  boolean accepts(Node n) {
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
  
  void connectWith(Node n, int endpoint) {    
    super.connectWith(n, endpoint);
    
    if (endpoint == SOURCE && (n.getType() == QUEUE || n.getType() == EXCHANGE)) {
      String defaultRoutingKey = "";
      addBinding(n, defaultRoutingKey);
    }
  }
  
  void addBinding(Node n, String bindingKey) {
    HashMap boundNodes = (HashMap) bindings.get(bindingKey);
    if (boundNodes == null) {
      println("boundNodes was null");
      boundNodes = new HashMap();
    }
    boundNodes.put(n.getLabel(), n);
    bindings.put(bindingKey, boundNodes);
  }
  
  boolean updateBinding(Node n, String oldBk, String newBk) {
    if (oldBk != newBk) {   
      removeBinding(n, oldBk);
      
      addBinding(n, newBk);
      return true;
    }
    
    return false;
  }
  
  void removeBinding(Node n, String bk) {
    HashMap bd = bindings.get(bk);
    bd.remove(n.getLabel());
  }
  
  void trasnferArrived(Transfer transfer) {
    Message msg = transfer.getData();
    HashMap bd = bindings.get(msg.getRoutingKey());
    
    if (bd != null) {
      Iterator i = bd.entrySet().iterator();
      
      while (i.hasNext()) {
        Map.Entry me = (Map.Entry) i.next();
        Node n = (Node) me.getValue();
        stage.addTransfer(new Transfer(stage, this, n, msg));
      }
    }
  }
  
  /*
  fanout routing:
  
      for (int i = incoming.size()-1; i >= 0; i--) {
        Node n = (Node) incoming.get(i);
        if (n.getType() != PRODUCER) {
          stage.addTransfer(new Transfer(stage, this, n, transfer.getData()));
        }
      }
  */
  
  void mouseClicked() {
    println("Exchange Clicked");
  }
}

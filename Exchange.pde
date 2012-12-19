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
      
      HashMap boundNodes = (HashMap) bindings.get("");
      if (boundNodes == null) {
        println("boundNodes was null");
        boundNodes = new HashMap();
      }
      boundNodes.put(n.getLabel(), n);
      bindings.put("", boundNodes);
    }
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
  
  void mouseClicked() {
    println("Exchange Clicked");
  }
}

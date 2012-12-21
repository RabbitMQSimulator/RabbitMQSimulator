class Exchange extends Node implements IConnectable {
  int type = EXCHANGE;
  int exchangeType = DIRECT;
  HashMap bindings;
  
  Exchange(String name, float x, float y) {
    super(name, colors[EXCHANGE], x, y);
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
  
  void setExchangeType(int type) {
    exchangeType = int(type);
  }
  
  void changeName(String name) {
    this.label = name;
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
  
  boolean addBinding(Node n, String bindingKey) {
    HashMap boundNodes = (HashMap) bindings.get(bindingKey);
    if (boundNodes == null) {
      println("boundNodes was null");
      boundNodes = new HashMap();
    }
    boundNodes.put(n.getLabel(), n);
    bindings.put(bindingKey, boundNodes);
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
    HashMap bd = bindings.get(bk);
    bd.remove(n.getLabel());
    return true;
  }
  
  void trasnferArrived(Transfer transfer) {
    println(exchangeType + " " + getExchangeTypeString());
    switch(exchangeType) {
      case DIRECT:
        directRouting(transfer);
        break;
      case FANOUT:
        fanoutRouting(transfer);
        break;
      case TOPIC:
        topicRouting(transfer);
        break;      
    }
  }
  
  void directRouting(Transfer transfer) {
    println("directRouting");
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
  
  void fanoutRouting(Transfer transfer) {
    println("fanoutRouting");
    for (int i = incoming.size()-1; i >= 0; i--) {
      Node n = (Node) incoming.get(i);
      if (n.getType() != PRODUCER) {
        stage.addTransfer(new Transfer(stage, this, n, transfer.getData()));
      }
    }
  }
  
  void topicRouting(Transfer transfer) {
    println("topicRouting");
  }
  
  void mouseClicked() {
    println("Exchange Clicked");
    reset_form("#exchange_form");
    jQuery("#exchange_id").val(this.label);
    jQuery("#exchange_name").val(this.label);
    jQuery("#exchange_type").val(this.exchangeType);
    enable_form("#exchange_form");
  }
}

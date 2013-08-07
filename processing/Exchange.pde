class Exchange extends Node implements IConnectable {
  int initialSides = 3;
  int type = EXCHANGE;
  int exchangeType = DIRECT;
  TrieST<Node> bindings;
  
  Exchange(String name, float x, float y) {
    super(name, colors[EXCHANGE], x, y);
    bindings = new TrieST();
  }
  
  void draw() {
    ExchangeFigure.draw(this.x, this.y, this.nodeColor, 0, nodeStroke, this.radii, this.initialSides + this.bindings.itemCount());
    super.drawLabel();
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
  
  HashMap getAllBindings() {
    return bindings.allValues(); 
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
    bindings.delete(bk, n);
    return true;
  }
  
  void trasnferArrived(Transfer transfer) {
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
    Message msg = transfer.getData();
    ArrayList nodes = bindings.getValue(msg.getRoutingKey());
    deliverMessage2(msg, nodes);
  }
  
  void fanoutRouting(Transfer transfer) {
    Message msg = transfer.getData();
    HashMap nodes = bindings.allValues();
    deliverMessage(msg, nodes);
  }
  
  /**
    * Naive topic routing
    *
    */
  void topicRouting(Transfer transfer) {
    Message msg = transfer.getData();
    HashMap nodes = bindings.valuesForRoutingKey(msg.getRoutingKey());
    deliverMessage(msg, nodes);
  }
  
  void deliverMessage(Message msg, HashMap nodes) {
    if (nodes != null) {
      Iterator i = nodes.entrySet().iterator();
      while (i.hasNext()) {
        Map.Entry me = (Map.Entry)i.next();
        deliverMessage2(msg, (ArrayList)me.getValue());
      }
    }
  }
  
  void deliverMessage2(Message msg, ArrayList destinations) {
    if (destinations == null) return;
    int max = destinations.size();
    for (int i = 0; i < max; i++) {
      Node n = destinations.get(i);
      stage.addTransfer(new Transfer(stage, this, n, msg));
    }
  }
  
  void mouseClicked() {
    reset_form("#exchange_form");
    jQuery("#exchange_id").val(this.label);
    jQuery("#exchange_name").val(this.label);
    jQuery("#exchange_type").val(this.exchangeType);
    enable_form("#exchange_form");
    show_form("#exchange_form");
  }
}

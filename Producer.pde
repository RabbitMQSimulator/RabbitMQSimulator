class Producer extends Node implements IConnectable {
  int type = PRODUCER;
  String msg = null;
  
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
  
  void publishMessage(String payload, String routingKey) {
    if (outgoing.size() > 0) {
      Node n = (Node) outgoing.get(0);
      Message msg = new Message(payload, routingKey);
      stage.addTransfer(new Transfer(stage, this, n, msg));
    }
  }
  
  void mouseClicked() {
    reset_form("#new_message_form");
    jQuery("#new_message_producer_id").val(this.label);
    enable_form("#new_message_form");
  }
}

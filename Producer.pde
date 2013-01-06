class Producer extends Node implements IConnectable {
  int type = PRODUCER;
  Message msg = null;
  
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
      msg = new Message(payload, routingKey);
      stage.addTransfer(new Transfer(stage, this, n, msg));
    }
  }
  
  void mouseClicked() {
    reset_form("#new_message_form");
    jQuery("#new_message_producer_id").val(this.label);
    if (msg != null) {
      jQuery("#new_message_producer_payload").val(msg.payload);
      jQuery("#new_message_producer_routing_key").val(msg.routingKey);
    }
    enable_form("#new_message_form");
    show_form("#new_message_form");
  }
}

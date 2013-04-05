class Consumer extends Node implements IConnectable {
  int type = CONSUMER;
  String name = null;

  Consumer(String label, float x, float y) {
    super(label, colors[CONSUMER], x, y);
  }

  int getType() {
    return type;
  }

  void updateName(String name) {
      this.name = name;
  }

  boolean accepts(Node n) {
    return false;
  }

  boolean canStartConnection() {
    return outgoing.size() < 1;
  }

  void trasnferArrived(Transfer transfer) {
    if (!isPlayer) {
        Message msg = transfer.getData();
        show_message(getLabel(), msg.getPayload());
    }
  }

  void drawLabel() {
      fill (0);
      textAlign(CENTER, CENTER);
      String l = name == null ? label : name;
      text(l, x, y+labelPadding);
  }

  void mouseClicked() {
      reset_form("#edit_consumer_form");
      jQuery("#edit_consumer_id").val(this.label);
      
      if (name != null) {
          jQuery("#edit_consumer_name").val(name);
      } else {
          jQuery("#edit_consumer_name").val(label);
      }
      
      enable_form("#edit_consumer_form");
      show_form("#edit_consumer_form");
  }
}

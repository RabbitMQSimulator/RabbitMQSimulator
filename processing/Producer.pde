class Producer extends Node implements IConnectable {
    int type = PRODUCER;
    int intervalId = null;
    int intervalSeconds = 0;
    String name = null;
    Message msg = null;

    Producer(String label, float x, float y) {
        super(label, colors[PRODUCER], x, y);
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

    void publishMessage(String payload, String routingKey) {
        if (outgoing.size() > 0) {
            Node n = (Node) outgoing.get(0);
            msg = new Message(payload, routingKey);
            stage.addTransfer(new Transfer(stage, this, n, msg));
        }
    }

    void setIntervalId(int interval, int seconds) {
        intervalId = interval;
        intervalSeconds = seconds;
    }

    void stopPublisher() {
        pausePublisher();
        intervalSeconds = 0;
    }

    void pausePublisher() {
        clearInterval(intervalId);
        intervalId = null;
    }
    
    void drawLabel() {
        fill (0);
        textAlign(CENTER, CENTER);
        String l = name == null ? label : name;
        text(l, x, y+labelPadding);
    }

    void mouseClicked() {
        prepareEditProducerForm();
        prepareNewMessageForm();
        show_form("#edit_producer_form", "#new_message_form");
    }
    
    void prepareEditProducerForm() {
        reset_form("#edit_producer_form");
        jQuery("#edit_producer_id").val(this.label);
        
        if (name != null) {
            jQuery("#edit_producer_name").val(name);
        } else {
            jQuery("#edit_producer_name").val(label);
        }
        
        enable_form("#edit_producer_form");
    }
    
    void prepareNewMessageForm() {
        reset_form("#new_message_form");
        jQuery("#new_message_producer_id").val(this.label);
        
        if (intervalId != null) {
            enable_button('#new_message_stop');
        } else {
            disable_button('#new_message_stop');
        }

        if (msg != null) {
            jQuery("#new_message_producer_payload").val(msg.payload);
            jQuery("#new_message_producer_routing_key").val(msg.routingKey);
        }
        enable_form("#new_message_form");
    }
}

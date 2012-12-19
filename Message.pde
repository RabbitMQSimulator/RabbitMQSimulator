class Message {
  String payload;
  String routingKey;
  
  Message(String payload, String routingKey) {
    this.payload = payload;
    this.routingKey = routingKey;
  }
  
  String getPayload() {
    return payload;
  }
  
  String getRoutingKey() {
    return routingKey;
  }
}

class Message {
  String payload;
  String routingKey;
  
  Message(String payload, String routingKey) {
    this.payload = payload;
    this.routingKey = routingKey;
  }
}

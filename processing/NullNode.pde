class NullNode extends Node implements IConnectable {
  int type = NULL_NODE;
  float x, y;
  int radii = 0;
  String label;
  color nodeColor;

  ArrayList incoming = new ArrayList(); // nodes that connected to this node
  ArrayList outgoing = new ArrayList(); // nodes this node connected to

  NullNode(String label, color nodeColor, float x, float y) {
    super(label, #FFFFFF, x, y);
  }

  int getType() {
    return type;
  }

  boolean accepts(Node n) {
    return false;
  }

  boolean canStartConnection() {
    return false;
  }

  String getLabel() {
    return label;
  }

  float getX() {
    return 0;
  }

  float getY() {
    return 0;
  }

  boolean isBelowMouse() {
    return false;
  }

  /**
    endpoint DESTINATION | SOURCE specifies the role of the
    Node n.
  */
  void connectWith(Node n, int endpoint) {
  }

  void removeConnections() {
  }

  void disconnectFrom(Node n, int endpoint) {
  }

  void disconnectOutgoing() {
  }

  void disconnectIncomming() {
  }

  void disconnectNodes(int endpoint) {
  }

  void addIncoming(Node n) {
  }

  void removeIncoming(Node n) {
  }

  void addOutgoing(Node n) {
  }

  void removeOutgoing(Node n) {
  }

  void trasnferArrived(Transfer transfer) {
  }

  void transferDelivered(Transfer transfer) {
  }

  /**
   * Padding from the simulator boundaries
   */
  int padding() {
    return 0;
  }

  void mouseDragged() {
  }

  void draw() {
  }

  void drawLabel() {
  }

  void remove() {
  }
}
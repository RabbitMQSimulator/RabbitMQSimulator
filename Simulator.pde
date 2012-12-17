class Stage {
  Transfer currentTransfer = null;
  Stage() {
  }
  
  Transfer getCurrentTransfer() {
    return currentTransfer;
  }
  
  void setCurrentTransfer(Transfer transfer) {
    currentTransfer = transfer;
  }
}

Stage stage = new Stage();

int nodeCount;
Node[] nodes = new Node[100];
HashMap nodeTable = new HashMap();

int edgeCount;
Edge[] edges = new Edge[500];

TmpEdge tmpEdge;

static final color nodeColor   = #F0C070;
static final color selectColor = #FF3030;
static final color fixedColor  = #FF8080;
static final color edgeColor   = #000000;

static final int EXCHANGE = 0;
static final int QUEUE = 1;
static final int PRODUCER = 2;
static final int CONSUMER = 3;

PFont font;

void setup() {
  println(this);
  size(600, 600);
  font = createFont("SansSerif", 10);
  textFont(font);
  smooth();
  // addNode("exchange");
  // addNode("queue");
  addNodeByType(EXCHANGE, "my-exchange");
  addNodeByType(QUEUE, "my-queue");
  addNodeByType(PRODUCER, "my-producer");
  addNodeByType(CONSUMER, "my-consumer");
}

//void addEdgeFromLabels(String fromLabel, String toLabel) {
//  Node from = findNode(fromLabel);
//  Node to = findNode(toLabel);
//  
//  addEdge(from, to);
//}

boolean addEdge(Node from, Node to) {
  for (int i = 0; i < edgeCount; i++) {
    if ((edges[i].from == from && edges[i].to == to) ||
        (edges[i].to == from && edges[i].from == to)) {
      return false;
    }
  }
  
  Edge e = new Edge(from, to, edgeColor);
  if (edgeCount == edges.length) {
    edges = (Edge[]) expand(edges);
  }
  edges[edgeCount++] = e;
  return true;
}

//Node findNode(String label) {
//  label = label.toLowerCase();
//  Node n = (Node) nodeTable.get(label);
//  if (n == null) {
//    return addNode(label);
//  }
//  return n;
//}

Node addNodeByType(int type, String label) {
  Node n = null;
  switch (type) {
    case EXCHANGE:
      n = new Exchange(label);
      break;
    case QUEUE:
      n = new Queue(label);
      break;
    case PRODUCER:
      n = new Producer(label);
      break;
    case CONSUMER:
      n = new Consumer(label);
      break;
    default:
      println("Unknown type");
      break;
  }
  
  if (n != null) {
      if (nodeCount == nodes.length) {
        nodes = (Node[]) expand(nodes);
      }
  
      nodeTable.put(label, n);
      nodes[nodeCount++] = n;
  }
  
  return n;
}

//Node addNode(String label) {
//  Node n = new Node(label, nodeColor);  
//  if (nodeCount == nodes.length) {
//    nodes = (Node[]) expand(nodes);
//  }
//  nodeTable.put(label, n);
//  nodes[nodeCount++] = n;  
//  return n;
//}

void draw() {
  background(255);
  
  for (int i = 0 ; i < edgeCount ; i++) {
    edges[i].draw();
  }
  
  for (int i = 0 ; i < nodeCount ; i++) {
    nodes[i].draw();
  }
  
  if (tmpEdge != null) {
    tmpEdge.draw();
  }
  
  if (stage.getCurrentTransfer() != null) {
    stage.getCurrentTransfer().update();
    stage.getCurrentTransfer().draw();
  }
}

Node from;
Node to;

Node nodeBelowMouse() {
    // Ignore anything greater than this distance
  float closest = 20;
  for (int i = 0; i < nodeCount; i++) {
    Node n = nodes[i];
    float d = dist(mouseX, mouseY, n.x, n.y);
    if (d < closest) {
      return n;
    }
  }
  
  return null;
}

void mousePressed() {
  from = nodeBelowMouse();
  
  if (from != null && altKeyPressed()) {
    println("adding tmpEdge"); 
    tmpEdge = new TmpEdge(from, mouseX, mouseY, edgeColor);
  }
}

boolean altKeyPressed() {
  return keyPressed && key == CODED && keyCode == ALT;
}

void mouseDragged() {
  if (from != null) {
    if (tmpEdge != null) {
      tmpEdge.mouseDragged();
    } else {
      from.mouseDragged();
    }
  }
}

boolean validNodes(Node from, Node to, TmpEdge tmpEdge) {
  return to != null && from != null && tmpEdge != null && to != from; 
}

void mouseReleased() {
  // if we have a an edge below us we need to make the connection
  to = nodeBelowMouse();
  
  if (validNodes(from, to, tmpEdge) && to.accepts(from)) {
    println("after valid nodes");
    if (addEdge(from, to)) {
      println("addEdge true");
      switch(from.getType()) {
        case EXCHANGE:
        case QUEUE:
        case PRODUCER:
          from.addOutgoing(to);
          to.addIncoming(from);
          break;
        default:
          from.addIncoming(to);
          to.addOutgoing(from);
          break;
      }
    } else {
       println("addEdge false");
    }
  }
  
  if (edgeCount > 0) {
    // get firts edge and animate circle along it.
    // stage.setCurrentTransfer(new Transfer(stage, edges[0]));
  }
  
  from = null;
  tmpEdge = null;
  to = null;
}


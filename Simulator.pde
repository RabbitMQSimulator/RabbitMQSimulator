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

PFont font;

void setup() {
  size(600, 600);
  font = createFont("SansSerif", 10);
  textFont(font);
  smooth();
  addNode("exchange");
  addNode("queue");
  // addEdge("exchange", "queue");
}

void addEdgeFromLabels(String fromLabel, String toLabel) {
  Node from = findNode(fromLabel);
  Node to = findNode(toLabel);
  
  addEdge(from, to);
}

void addEdge(Node from, Node to) {
  println("addEdge");
  for (int i = 0; i < edgeCount; i++) {
    if ((edges[i].from == from && edges[i].to == to) ||
        (edges[i].to == from && edges[i].to == from)) {
      println("connection exists");
      return;
    }
  }
  
  Edge e = new Edge(from, to, edgeColor);
  if (edgeCount == edges.length) {
    edges = (Edge[]) expand(edges);
  }
  edges[edgeCount++] = e;
}

Node findNode(String label) {
  label = label.toLowerCase();
  Node n = (Node) nodeTable.get(label);
  if (n == null) {
    return addNode(label);
  }
  return n;
}

Node addNode(String label) {
  Node n = new Node(label, nodeColor);  
  if (nodeCount == nodes.length) {
    nodes = (Node[]) expand(nodes);
  }
  nodeTable.put(label, n);
  nodes[nodeCount++] = n;  
  return n;
}

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

void mouseReleased() {
  // if we have a an edge below us we need to make the connection
  to = nodeBelowMouse();
  
  if (to != null && from != null && tmpEdge != null && to != from) {
    addEdge(from, to);
  }
  
  println(edgeCount);
  
  from = null;
  tmpEdge = null;
  to = null;
}


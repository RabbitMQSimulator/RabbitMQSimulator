Stage stage = new Stage();

int nodeCount;
Node[] nodes = new Node[100];
HashMap nodeTable = new HashMap();

int edgeCount;
Edge[] edges = new Edge[500];

// use to track interactions between objects
TmpEdge tmpEdge;
Node tmpNode;
Node from;
Node to;

static final int WIDTH = 780;
static final int HEIGHT = 410;

static final color nodeColor   = #F0C070;
static final color selectColor = #FF3030;
static final color fixedColor  = #FF8080;
static final color edgeColor   = #000000;

static final int EXCHANGE = 0;
static final int QUEUE = 1;
static final int PRODUCER = 2;
static final int CONSUMER = 3;
static final int ANON_EXCHANGE = 4;

static final int SOURCE = 0;
static final int DESTINATION = 1;

static final String DEFAULT_BINDING_KEY = "binding key";

static final int TOOLBARWIDTH = 60;

color[] colors = new color[20];

PFont font;

void bindJavascript(JavaScript js) {
  javascript = js;
}

JavaScript javascript;

void setup() {
  Processing.logger = console;
  
  size(780, 410);
  font = createFont("SansSerif", 10);
  textFont(font);
  smooth();
  
  colors[EXCHANGE] = #FF8408;
  colors[QUEUE] = #0816FF;
  colors[PRODUCER] = #3F4031;
  colors[CONSUMER] = #E1FF08;
  
  buildToolbar();
}

void buildToolbar() {
  addToolbarItem(EXCHANGE, "exchange", 30, 20);
  addToolbarItem(QUEUE, "queue", 30, 50);
  addToolbarItem(PRODUCER, "producer", 30, 80);
  addToolbarItem(CONSUMER, "consumer", 30, 110);
}

ToolbarItem[] toolbarItems = new ToolbarItem[20];
int toolbarItemsCount;

ToolbarItem addToolbarItem(int type, String label, float x, float y) {
  ToolbarItem t = new ToolbarItem(type, label, x, y);
  toolbarItems[toolbarItemsCount++] = t;
  return t;
}

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

Node newNodeByType(int type, String label, float x, float y) {
  Node n = null;
  switch (type) {
    case EXCHANGE:
      n = new Exchange(label, x, y);
      break;
    case QUEUE:
      n = new Queue(label, x, y);
      break;
    case PRODUCER:
      n = new Producer(label, x, y);
      break;
    case CONSUMER:
      n = new Consumer(label, x, y);
      break;
    default:
      println("Unknown type");
      break;
  }
  return n;
}

Node addNodeByType(int type, String label, float x, float y) {
  Node n = newNodeByType(type, label, x, y);
  
  if (n != null) {
      if (nodeCount == nodes.length) {
        nodes = (Node[]) expand(nodes);
      }
  
      nodeTable.put(label, n);
      nodes[nodeCount++] = n;
  }
  
  return n;
}

Node findNode(String label) {
  return nodeTable.get(label);
}

void changeNodeName(String oldName, String name) {
  println("changeNodeName called");
  Node n = findNode(oldName);
  n.changeName(name);
  nodeTable.remove(oldName);
  nodeTable.put(name, n);
}

void publishMessage(String uuid, String payload, String routingKey) {
  Producer n = (Producer) findNode(uuid);
  n.publishMessage(payload, routingKey);
}

void updateBindingKey(int i, String bk) {
  Edge e = edges[i];
  e.updateBindingKey(bk);
}

void removeBinding(int i) {
  Edge e = edges[i];
  e.remove();
  if (i == 0) {
    edges = new Edge[500];
  } else {
    arrayCopy(edges, i+1, edges, i, edges.length - (i+1));
    edges = shorten(edges);
  }
  edgeCount--;
}

void draw() {
  background(255);
  
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(0, 0, WIDTH, HEIGHT);
  line(TOOLBARWIDTH, 0, TOOLBARWIDTH, height);
  
  for (int i = 0; i < toolbarItemsCount ; i++) {
    toolbarItems[i].draw();
  }
  
  for (int i = 0 ; i < edgeCount ; i++) {
    edges[i].draw();
  }
  
  for (int i = 0 ; i < nodeCount ; i++) {
    nodes[i].draw();
  }
  
  if (tmpEdge != null) {
    tmpEdge.draw();
  }
  
  if (tmpNode != null) {
    tmpNode.draw();
  }
  
  stage.draw();
}

Node nodeBelowMouse() {
  for (int i = 0; i < nodeCount; i++) {
    Node n = nodes[i];    
    if (n.isBelowMouse()) {
      return n;
    }
  }
  return null;
}

void mouseClicked() {
  Node target = nodeBelowMouse();
  
  if (target != null) {
    target.mouseClicked();
  }
  
  for (int i = 0 ; i < edgeCount ; i++) {
    println("anon exchange: " + str(edges[i].connectedToAnonExchange()));
    
    if (edges[i].labelClicked()) {
      println("binding clicked");
      jQuery("#binding_id").val(i);
      jQuery("#binding_key").val(edges[i].getBindingKey());
      
      if (edges[i].connectedToAnonExchange()) {
        disable_form("#bindings_form");
      } else {
        enable_form("#bindings_form");
      }
       
      break;
    }
  }
}

void mousePressed() {
  from = nodeBelowMouse();
  
  if (from != null && altKeyPressed() && from.canStartConnection()) {
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
  
  for (int i = 0; i < toolbarItemsCount ; i++) {
    toolbarItems[i].mouseDragged();
  }
  
  if (tmpNode != null) {
    tmpNode.mouseDragged();
  }
}

boolean validNodes(Node from, Node to, TmpEdge tmpEdge) {
  return to != null && from != null && tmpEdge != null && to != from; 
}

void mouseReleased() {
  // we are dragging a new node from the toolbar
  if (tmpNode != null) {
    addNodeByType(tmpNode.getType(), randomQueueName(), tmpNode.getX(), tmpNode.getY());
  }
  
  
  // if we have a an edge below us we need to make the connection
  to = nodeBelowMouse();
  
  // Logic to make a connection between Nodes
  if (validNodes(from, to, tmpEdge) && to.accepts(from)) {
    println("after valid nodes");
    if (addEdge(from, to)) {
      from.connectWith(to, DESTINATION);
      to.connectWith(from, SOURCE);
      println("addEdge true");
    } else {
       println("addEdge false");
    }
  }
  
  from = null;
  to = null;
  tmpEdge = null;
  tmpNode = null;
}


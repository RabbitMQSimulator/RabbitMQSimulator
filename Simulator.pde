Stage stage = new Stage();

int nodeCount;
Node[] nodes = new Node[100];
// TODO see how to keep track of Exchanges vs. Queues, etc. since the names may collide
// maybe use names like str(n.getType()) + n.getLabel())
HashMap nodeTable = new HashMap();

ArrayList edges = new ArrayList();

// use to track interactions between objects
TmpEdge tmpEdge;
Node tmpNode;
Node from;
Node to;
AnonExchange anonExchange;

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
  colors[ANON_EXCHANGE] = #FFFFFF;
  
  buildToolbar();
  anonExchange = new AnonExchange("anon-exchange", 100, 20);
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

Edge addEdge(Node from, Node to) {
  for (int i = edges.size()-1; i >= 0; i--) {
    Edge et = (Edge) edges.get(i);
    if ((et.from == from && et.to == to) ||
        (et.to == from && et.from == to)) {
      return null;
    }
  }
  
  Edge e = new Edge(from, to, edgeColor);
  edges.add(e);
  return e;
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
  if (name == "") {
    return;
  }
  
  Node n = findNode(oldName);
  n.changeName(name);
  nodeTable.remove(oldName);
  nodeTable.put(name, n);
  
  // update the binding to the anon exchange.
  if (n.getType() == QUEUE) {
    n.getAnonBinding().updateBindingKey(name);
  }
}

void publishMessage(String uuid, String payload, String routingKey) {
  Producer n = (Producer) findNode(uuid);
  n.publishMessage(payload, routingKey);
}

void updateBindingKey(int i, String bk) {
  Edge e = (Edge) edges.get(i);
  e.updateBindingKey(bk);
}

void removeBinding(int i) {
  Edge e = (Edge) edges.get(i);
  e.remove();
  edges.remove(e);
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
  
  anonExchange.draw();
  
  for (int i = 0 ; i < nodeCount ; i++) {
    nodes[i].draw();
  }
  
  for (int i = edges.size()-1; i >= 0; i--) {
    Edge e = (Edge) edges.get(i);
    e.draw();
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
  
  if (anonExchange.isBelowMouse()) {
    return anonExchange; 
  }
  
  return null;
}

void mouseClicked() {
  Node target = nodeBelowMouse();
  
  if (target != null) {
    target.mouseClicked();
  }
  
  for (int i = edges.size()-1; i >= 0; i--) {
    Edge e = (Edge) edges.get(i);
    if (e.labelClicked()) {
      jQuery("#binding_id").val(i);
      jQuery("#binding_key").val(e.getBindingKey());
      
      if (e.connectedToAnonExchange()) {
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

void bindToAnonExchange(Queue n) {
  Edge e = addEdge(n, anonExchange); 
  if (e != null) {
    n.connectWith(anonExchange, DESTINATION);
    n.setAnonBinding(e);
    anonExchange.connectWith(n, SOURCE);
    e.setBindingKey(n.getLabel());
  }
}

void mouseReleased() {
  // we are dragging a new node from the toolbar
  if (tmpNode != null) {
    Node n = addNodeByType(tmpNode.getType(), randomQueueName(), tmpNode.getX(), tmpNode.getY());
    if (n.getType() == QUEUE) {
      bindToAnonExchange(n);
    }
  }
  
  // if we have a an edge below us we need to make the connection
  to = nodeBelowMouse();
  
  // Logic to make a connection between Nodes
  if (validNodes(from, to, tmpEdge) && to.accepts(from)) {
    Edge e = addEdge(from, to); 
    if (e != null) {
      from.connectWith(to, DESTINATION);
      to.connectWith(from, SOURCE);
    } else {
       println("addEdge false");
    }
  }
  
  from = null;
  to = null;
  tmpEdge = null;
  tmpNode = null;
}


/***************************************************/
/***************************************************/
/***************************************************/
/***************************************************/
/***************************************************/

// From http://www.openprocessing.org/sketch/7029 
/*
 * Draws a lines with arrows of the given angles at the ends.
 * x0 - starting x-coordinate of line
 * y0 - starting y-coordinate of line
 * x1 - ending x-coordinate of line
 * y1 - ending y-coordinate of line
 * startAngle - angle of arrow at start of line (in radians)
 * endAngle - angle of arrow at end of line (in radians)
 * solid - true for a solid arrow; false for an "open" arrow
 */
void arrowLine(float x0, float y0, float x1, float y1,
  float startAngle, float endAngle, boolean solid)
{
  line(x0, y0, x1, y1);
  if (startAngle != 0)
  {
    arrowhead(x0, y0, atan2(y1 - y0, x1 - x0), startAngle, solid);
  }
  if (endAngle != 0)
  {
    arrowhead(x1, y1, atan2(y0 - y1, x0 - x1), endAngle, solid);
  }
}
 
/*
 * Draws an arrow head at given location
 * x0 - arrow vertex x-coordinate
 * y0 - arrow vertex y-coordinate
 * lineAngle - angle of line leading to vertex (radians)
 * arrowAngle - angle between arrow and line (radians)
 * solid - true for a solid arrow, false for an "open" arrow
 */
void arrowhead(float x0, float y0, float lineAngle,
  float arrowAngle, boolean solid)
{
  float phi;
  float x2;
  float y2;
  float x3;
  float y3;
  final float SIZE = 8;
   
  x2 = x0 + SIZE * cos(lineAngle + arrowAngle);
  y2 = y0 + SIZE * sin(lineAngle + arrowAngle);
  x3 = x0 + SIZE * cos(lineAngle - arrowAngle);
  y3 = y0 + SIZE * sin(lineAngle - arrowAngle);
  if (solid)
  {
    triangle(x0, y0, x2, y2, x3, y3);
  }
  else
  {
    line(x0, y0, x2, y2);
    line(x0, y0, x3, y3);
  } 
}

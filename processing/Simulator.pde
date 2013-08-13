/* @pjs pauseOnBlur="true"; */

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

// whether the anon exchange + bindings are displayed
boolean advancedMode = false;

boolean isPlayer = false;

static final int WIDTH = 780;
static final int HEIGHT = 410;

static final int edgeStroke = 2;
static final int nodeStroke = 2;
static final int labelPadding = 20;

static final color nodeColor   = #F0C070;
static final color selectColor = #FF3030;
static final color fixedColor  = #FF8080;
static final color edgeColor   = #000000;

static final int EXCHANGE = 0;
static final int QUEUE = 1;
static final int PRODUCER = 2;
static final int CONSUMER = 3;
static final int ANON_EXCHANGE = 4;

static final int DIRECT = 0;
static final int FANOUT = 1;
static final int TOPIC = 2;
static final int ANON = 3;

static final int SOURCE = 0;
static final int DESTINATION = 1;

static final String DEFAULT_BINDING_KEY = "binding key";

static final int TOOLBARWIDTH = 60;

static final int Q_HEIGHT = 15;
static final int Q_WIDTH = 20;

static final int anonX = 150;
static final int anonY = 20;

color[] colors = new color[20];

String[] exchangeTypes = new String[3];
String[] nodeTypes = new String[5];

PFont font;
static final int fontSize = 12;

void bindJavascript(JavaScript js) {
  javascript = js;
}

JavaScript javascript;

void setup() {
  Processing.logger = console;

  size(780, 410);
  font = createFont("SansSerif", fontSize);
  textFont(font);
  smooth();

  colors[EXCHANGE] = #FF8408;
  colors[QUEUE] = #42C0FB;
  colors[PRODUCER] = #8DE8D1;
  colors[CONSUMER] = #E1FF08;
  colors[ANON_EXCHANGE] = #FFFFFF;

  exchangeTypes[DIRECT] = "direct";
  exchangeTypes[FANOUT] = "fanout";
  exchangeTypes[TOPIC] = "topic";
  exchangeTypes[ANON] = "anon";

  nodeTypes[EXCHANGE] = "exchange";
  nodeTypes[QUEUE] = "queue";
  nodeTypes[PRODUCER] = "producer";
  nodeTypes[CONSUMER] = "consumer";
  nodeTypes[ANON_EXCHANGE] = "anon_exchange";

  buildToolbar();
  anonExchange = new AnonExchange("anon-exchange", anonX, anonY);
}

String nodeTypeToString(int type) {
  return nodeTypes[type];
}

void buildToolbar() {
  addToolbarItem(EXCHANGE, "exchange", 30, 20);
  addToolbarItem(QUEUE, "queue", 30, 60);
  addToolbarItem(PRODUCER, "producer", 30, 100);
  addToolbarItem(CONSUMER, "consumer", 30, 140);
}

Nodes[] getNodes() {
  return nodes;
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

void toggleAdvancedMode(boolean mode) {
  advancedMode = mode;
}

void getAdvancedMode() {
    return advancedMode;
}

void togglePlayerMode(boolean mode) {
    isPlayer = mode;
}

void stopRendering() {
    noLoop();
    for (int i = 0 ; i < nodeCount ; i++) {
        if (nodes[i].type == PRODUCER) {
            nodes[i].pausePublisher();
        }
    }
}

/**
 * restoreProducers requires the sketch id to pass back to javascript
 * hackish as hackish can be
 */
void startRendering(String pId) {
    loop();
    restoreProducers(pId);
}

void restoreProducers(String pId) {
    for (int i = 0 ; i < nodeCount ; i++) {
        if (nodes[i].type == PRODUCER && nodes[i].intervalSeconds > 0) {
            if (nodes[i].msg != null) {
                withProcessing(pId, publishMsgWithInterval, nodes[i].intervalSeconds, nodes[i].getLabel(),
                                nodes[i].msg.payload, nodes[i].msg.routingKey);
            }
        }
    }
}

Node changeNodeName(String oldName, String name) {
  Node n = findNode(oldName);
  n.changeName(name);
  nodeTable.remove(oldName);
  nodeTable.put(name, n);
  return n;
}

void editQueue(String oldName, String name) {
  if (name == "") {
    return;
  }

  Node n = changeNodeName(oldName, name);

  // update the binding to the anon exchange.
  n.getAnonBinding().updateBindingKey(name);
}

void editExchange(String oldName, String name, int type) {
  if (name == "") {
    return;
  }

  Node n = changeNodeName(oldName, name);
  n.setExchangeType(type);
}

void publishMessage(String uuid, String payload, String routingKey) {
  Producer n = (Producer) findNode(uuid);
  n.publishMessage(payload, routingKey);
}

void editProducer(String uuid, String name) {
    Producer n = (Producer) findNode(uuid);
    n.updateName(name);
}

void editConsumer(String uuid, String name) {
    Consumer n = (Consumer) findNode(uuid);
    n.updateName(name);
}

void setProducerInterval(String uuid, int intervalId, int seconds) {
  Producer n = (Producer) findNode(uuid);
  n.setIntervalId(intervalId, seconds);
}

void stopPublisher(String uuid) {
  Producer n = (Producer) findNode(uuid);
  n.stopPublisher();
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

void drawToolbar() {
  stroke(0);
  strokeWeight(2);

  line(TOOLBARWIDTH, 0, TOOLBARWIDTH, height);

  for (int i = 0; i < toolbarItemsCount ; i++) {
    toolbarItems[i].draw();
  }
}

void draw() {
  background(255);

  stroke(0);
  strokeWeight(2);
  noFill();
  rect(0, 0, WIDTH, HEIGHT);

  if (!isPlayer) {
      drawToolbar();
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

      show_form("#bindings_form");

      break;
    }
  }
}

void mousePressed() {
  from = nodeBelowMouse();

  if (from != null && altOrShiftKeyPressed() && from.canStartConnection()) {
    tmpEdge = new TmpEdge(from, mouseX, mouseY, edgeColor);
  }
}

boolean altOrShiftKeyPressed() {
  return keyPressed && key == CODED && (keyCode == ALT || keyCode == SHIFT);
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

Edge addConnection(Node from, Node to) {
  Edge e = addEdge(from, to);
  if (e != null) {
    // DESTINATION & SOURCE refer to the drag & drop source & dest, not RabbitMQ concepts
    from.connectWith(to, DESTINATION);
    to.connectWith(from, SOURCE);
  } else {
     println("addEdge false");
  }
  return e;
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

  if (validNodes(from, to, tmpEdge) && to.accepts(from)) {
    addConnection(from, to);
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

class AnonExchange extends Node {
  int initialSides = 3;
  int type = ANON_EXCHANGE;
  int exchangeType = ANON;
  
  AnonExchange(String name, float x, float y) {
    super(name, colors[ANON_EXCHANGE], x, y);
    bindings = new HashMap();
  }
  
  int getType() {
    return type;
  }
  
  int getExchangeType() {
    return exchangeType;
  }
  
  int getExchangeTypeString() {
    return exchangeTypes[exchangeType];
  }
  
  boolean accepts(Node n) {
    return n.getType() == PRODUCER;
  }
  
  boolean canStartConnection() {
    return false;
  }
  
  void connectWith(Node n, int endpoint) {
    if (n.getType() == QUEUE) {
      addBinding(n, n.getLabel());
    }
    
    if (n.getType() == PRODUCER) {
      this.addIncoming(n);
    }
  }
  
  boolean addBinding(Node n, String bindingKey) {
    bindings.put(bindingKey, n);
    return true;
  }
  
  boolean updateBinding(Node n, String oldBk, String newBk) {
    if (oldBk != newBk) {   
      removeBinding(n, oldBk);
      
      addBinding(n, newBk);
      return true;
    }
    
    return false;
  }
  
  boolean removeBinding(Node n, String bk) {
    bindings.remove(n.getLabel());
    return true;
  }
  
  void trasnferArrived(Transfer transfer) {
    Message msg = transfer.getData();
    Queue q = (Queue) bindings.get(msg.getRoutingKey());
    
    if (q != null) {
      stage.addTransfer(new Transfer(stage, this, q, msg));
    }
  }
  
  void draw() {
    if (advancedMode) {
      int sides = this.initialSides;
      if (bindings) {
          sides = this.initialSides + bindings.size();
      }
      ExchangeFigure.draw(this.x, this.y, this.nodeColor, 0, nodeStroke, this.radii, sides);
      super.drawLabel();
    }
  }
}

class Consumer extends Node implements IConnectable {
  int size = 5;
  int type = CONSUMER;
  float angle = 0;
  String name = null;

  Consumer(String label, float x, float y) {
    super(label, colors[CONSUMER], x, y);
  }

  int getType() {
    return type;
  }
  
  String getLabel() {
    return name == null ? label : name;
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
    
    rotateConsumer();
  }
  
  void rotateConsumer() {
      this.angle += 0.2;
  }
  
  void draw() {
      ConsumerFigure.draw(this.x, this.y, this.nodeColor, 0, nodeStroke, this.radii, this.sides, this.angle);
      drawLabel();
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

static class ConsumerFigure
{
    static void draw(float cx, float cy, color nodeColor, int strk, int nodeStroke, float radius, int sides, float angle) {
        fill(nodeColor);
        stroke(strk);
        strokeWeight(nodeStroke);
        ConsumerFigure.gear(8, 8, 10, cx, cy, PI/32, angle);
    }
    
    // based on http://www.local-guru.net/blog/2009/9/3/processing-gears
    static void gear( int tooth, int ri, int ro, float cx, float cy, float o, float angle) {
        pushMatrix();
        translate(cx, cy);
        rotate(angle);
        beginShape();
        for( int i = 0; i < tooth; i++ ) {
            vertex(cos(2*PI/tooth * i - o ) * ri, sin(2*PI/tooth*i - o) * ri);
            vertex(cos(2*PI/tooth * i + o ) * ro, sin(2*PI/tooth*i + o) * ro);
            vertex(cos(2*PI/(2*tooth) * (2*i+1) - o) * ro, sin(2*PI/(2*tooth)*(2*i+1) - o) * ro);
            vertex(cos(2*PI/(2*tooth) * (i*2+1) + o) * ri, sin(2*PI/(2*tooth)*(2*i+1) + o) * ri);
        }
        endShape(CLOSE);
        popMatrix();
    }
}
class Edge {
  Node from;
  Node to;
  color edgeColor;
  String bindingKeyLabel = DEFAULT_BINDING_KEY;
  float bkX, bkY;

  Edge(Node from, Node to, color edgeColor) {
    this.from = from;
    this.to = to;
    this.edgeColor = edgeColor;
  }
  
  float middleX() {
    return (from.x + to.x)/2;
  }
  
  float middleY() {
    return (from.y + to.y)/2;
  }
  
  boolean connectedToAnonExchange() {
    return (from.getType() == ANON_EXCHANGE || to.getType() == ANON_EXCHANGE);
  }
  
  void setBindingKey(String bk) {
    bindingKeyLabel = bk == "" ? DEFAULT_BINDING_KEY : bk;
  }
  
  String getBindingKey() {
    return bindingKeyLabel == DEFAULT_BINDING_KEY ? "" : bindingKeyLabel;
  }
  
  void updateBindingKey(String bk) {
    if (to.getType() == EXCHANGE || to.getType() == ANON_EXCHANGE) {
      Exchange x = (Exchange) to;
      String oldBk = getBindingKey();
      if (x.updateBinding(from, oldBk, bk)) {
        setBindingKey(bk);
      }
    }
  }
  
  void remove() {
    Exchange x = (Exchange) to;
    x.removeBinding(from, getBindingKey());
  }
  
  boolean labelClicked() {
    float w = textWidth(bindingKeyLabel) / 2;
    return (mouseX >= middleX() - w && mouseX <= middleX() + w &&
            mouseY >= middleY() - 10 && mouseY <= middleY() + 10);
  }
  
  void draw() {
    if (!advancedMode && connectedToAnonExchange()) {
      return;
    }
    
    stroke(this.edgeColor);
    strokeWeight(edgeStroke);
    line(from.x, from.y, to.x, to.y);
    
    drawArrowHead();
    
    // draw node text
    if ((from.getType() == QUEUE || from.getType() == EXCHANGE) && to.getExchangeType() != FANOUT) {
      fill (0);
      textAlign(CENTER, CENTER);
      text(bindingKeyLabel, middleX(), middleY());
    }
  }
  
  void drawArrowHead() {
    boolean atStart;
    float distance;
    
    switch(from.getType()) {
      case QUEUE:
      case CONSUMER:
      case EXCHANGE:
        atStart = true;
        distance = 0.1;
        break;
      default:
        atStart = false;
        distance = 0.9;
        break;
    }
    
    if (atStart) {
      float x0 = lerp(from.x, to.x, distance);
      float y0 = lerp(from.y, to.y, distance);
      float x1 = to.x;
      float y1 = to.y;
      arrowhead(x0, y0, atan2(y1 - y0, x1 - x0), radians(30), false);
    } else {
      float x0 = from.x;
      float y0 = from.y;
      float x1 = lerp(from.x, to.x, distance);
      float y1 = lerp(from.y, to.y, distance);
      arrowhead(x1, y1, atan2(y0 - y1, x0 - x1), radians(30), false);
    }
  }
}

class Exchange extends Node implements IConnectable {
  int initialSides = 3;
  int type = EXCHANGE;
  int exchangeType = DIRECT;
  TrieST<Node> bindings;
  
  Exchange(String name, float x, float y) {
    super(name, colors[EXCHANGE], x, y);
    bindings = new TrieST();
  }
  
  void draw() {
    ExchangeFigure.draw(this.x, this.y, this.nodeColor, 0, nodeStroke, this.radii, this.initialSides + this.bindings.itemCount());
    super.drawLabel();
  }

  int getType() {
    return type;
  }
  
  int getExchangeType() {
    return exchangeType;
  }
  
  int getExchangeTypeString() {
    return exchangeTypes[exchangeType];
  }
  
  void setExchangeType(int type) {
    exchangeType = int(type);
  }
  
  void changeName(String name) {
    this.label = name;
  }
  
  HashMap getAllBindings() {
    return bindings.allValues(); 
  }

  boolean accepts(Node n) {
    switch(n.getType()) {
      case EXCHANGE:
      case QUEUE:
      case PRODUCER:
        return true;
      default:
        return false;
    }
  }
  
  boolean canStartConnection() {
    return true;
  }
  
  void connectWith(Node n, int endpoint) {    
    super.connectWith(n, endpoint);
    
    if (endpoint == SOURCE && (n.getType() == QUEUE || n.getType() == EXCHANGE)) {
      String defaultRoutingKey = "";
      addBinding(n, defaultRoutingKey);
    }
  }
  
  boolean addBinding(Node n, String bindingKey) {
    bindings.put(bindingKey, n);
    return true;
  }
  
  boolean updateBinding(Node n, String oldBk, String newBk) {
    if (oldBk != newBk) {   
      removeBinding(n, oldBk);
      addBinding(n, newBk);
      return true;
    }
    
    return false;
  }
  
  boolean removeBinding(Node n, String bk) {
    bindings.delete(bk, n);
    return true;
  }
  
  void trasnferArrived(Transfer transfer) {
    switch(exchangeType) {
      case DIRECT:
        directRouting(transfer);
        break;
      case FANOUT:
        fanoutRouting(transfer);
        break;
      case TOPIC:
        topicRouting(transfer);
        break;      
    }
  }
  
  void directRouting(Transfer transfer) {
    Message msg = transfer.getData();
    ArrayList nodes = bindings.getValue(msg.getRoutingKey());
    deliverMessage2(msg, nodes);
  }
  
  void fanoutRouting(Transfer transfer) {
    Message msg = transfer.getData();
    HashMap nodes = bindings.allValues();
    deliverMessage(msg, nodes);
  }
  
  /**
    * Naive topic routing
    *
    */
  void topicRouting(Transfer transfer) {
    Message msg = transfer.getData();
    HashMap nodes = bindings.valuesForRoutingKey(msg.getRoutingKey());
    deliverMessage(msg, nodes);
  }
  
  void deliverMessage(Message msg, HashMap nodes) {
    if (nodes != null) {
      Iterator i = nodes.entrySet().iterator();
      while (i.hasNext()) {
        Map.Entry me = (Map.Entry)i.next();
        deliverMessage2(msg, (ArrayList)me.getValue());
      }
    }
  }
  
  void deliverMessage2(Message msg, ArrayList destinations) {
    if (destinations == null) return;
    int max = destinations.size();
    for (int i = 0; i < max; i++) {
      Node n = destinations.get(i);
      stage.addTransfer(new Transfer(stage, this, n, msg));
    }
  }
  
  void mouseClicked() {
    reset_form("#exchange_form");
    jQuery("#exchange_id").val(this.label);
    jQuery("#exchange_name").val(this.label);
    jQuery("#exchange_type").val(this.exchangeType);
    enable_form("#exchange_form");
    show_form("#exchange_form");
  }
}

static class ExchangeFigure
{
    static void draw(float x, float y, color nodeColor, int strk, int nodeStroke, int radii, int sides) {
        fill(nodeColor);
        stroke(strk);
        strokeWeight(nodeStroke);
        ExchangeFigure.polygon(sides, x, y, radii * 2, radii * 2, -PI / 2.0);
    }
    
    static void polygon(int n, float cx, float cy, float w, float h, float startAngle) {
      float angle = TWO_PI/ n;

      /* The horizontal "radius" is one half the width;
         the vertical "radius" is one half the height */
      w = w / 2.0;
      h = h / 2.0;

      beginShape();
      for (int i = 0; i < n; i++)
      {
        vertex(cx + w * cos(startAngle + angle * i),
          cy + h * sin(startAngle + angle * i));
      }
      endShape(CLOSE);
    }
}
interface IConnectable {
  boolean accepts(Node n);
}

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

abstract class Node {
  float x, y;
  int radii = 10;
  String label;
  color nodeColor;
  
  ArrayList incoming = new ArrayList(); // nodes that connected to this node
  ArrayList outgoing = new ArrayList(); // nodes this node connected to
  
  Node(String label, color nodeColor, float x, float y) {
     this.label = label;
     this.nodeColor = nodeColor;
     this.x = x;
     this.y = y;
  }
  
  abstract int getType();
  abstract boolean accepts(Node n);
  abstract boolean canStartConnection();
  
  String getLabel() {
    return label;
  }
  
  float getX() {
    return x;
  }
  
  float getY() {
    return y;
  }
  
  boolean isBelowMouse() {
    float closest = 20;
    float d = dist(mouseX, mouseY, this.x, this.y);
    return d < closest;
  }
  
  /** 
    endpoint DESTINATION | SOURCE specifies the role of the
    Node n.  
  */
  void connectWith(Node n, int endpoint) {
    if (endpoint == DESTINATION) {
      this.addOutgoing(n);
    } else {
      this.addIncoming(n);
    }
  }
  
  void addIncoming(Node n) {
    incoming.add(n);
  }
  
  void addOutgoing(Node n) {
    outgoing.add(n);
  }
  
  void trasnferArrived(Transfer transfer) {
  }
  
  void transferDelivered(Transfer transfer) {
    println("transferDelivered");
  }
  
  /**
   * Padding from the simulator boundaries
   */
  int padding() {
    return this.radii * 2 + 2;
  }
  
  void mouseDragged() {
    x = constrain(mouseX, TOOLBARWIDTH + padding(), width - padding());
    y = constrain(mouseY, 0 + padding(), height - padding());
  }
  
  void draw() {
    NodeFigure.draw(this.x, this.y, this.nodeColor, 0, nodeStroke, this.radii)
    drawLabel();
  }
  
  void drawLabel() {
      fill (0);
      textAlign(CENTER, CENTER);
      text(getLabel(), x, y+labelPadding);
  }
}

static class NodeFigure
{
    static void draw(float x, float y, color nodeColor, int strk, int nodeStroke, int radii) {
        fill(nodeColor);
        stroke(strk);
        strokeWeight(nodeStroke);

        //draw node
        ellipse(x, y, radii * 2, radii * 2);
    }
}
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

class Queue extends Node implements IConnectable {
  int type = QUEUE;
  ArrayList messages = new ArrayList();
  Edge anonBinding;  
  
  Queue(String name, float x, float y) {
    super(name, colors[QUEUE], x, y);
  }
  
  int getType() {
    return type;
  }
  
  boolean accepts(Node n) {
    return n.getType() == CONSUMER;
  }
  
  boolean canStartConnection() {
    return true;
  }
  
  void setAnonBinding(Edge e) {
    anonBinding = e;
  }
  
  Edge getAnonBinding() {
    return anonBinding;
  }
  
  void connectWith(Node n, int endpoint) {
    super.connectWith(n, endpoint);
    maybeDeliverMessage();
  }  
  
  void trasnferArrived(Transfer transfer) {
    enqueue(transfer);
    maybeDeliverMessage();
  }
  
  void transferDelivered(Transfer transfer) {
    incoming.add(transfer.getTo());
    maybeDeliverMessage();
  }
  
  void enqueue(Transfer transfer) {
    messages.add(transfer);
  }
  
  Transfer dequeue() {
    return (Transfer) messages.remove(0);
  }
  
  void maybeDeliverMessage() {
    if (messages.size() > 0) {
      if (incoming.size() > 0) {
        Node consumer = (Node) incoming.remove(0);
        Transfer transfer = dequeue();
        stage.addTransfer(new Transfer(stage, this, consumer, transfer.getData()));
      }
    }
  }
  
  void changeName(String name) {
    this.label = name;
  }
  
  void draw() {
    QueueFigure.draw(this.x, this.y, this.nodeColor, 0, nodeStroke, Q_WIDTH, Q_HEIGHT, this.messages.size());
    drawLabel();
    
    // draw queue depth text
    fill (0);
    textAlign(CENTER, CENTER);
    text("Msgs: " + str(messages.size()), x, y - radii - 5);
  }
  
  void mouseClicked() {
    reset_form("#queue_form");
    jQuery("#queue_id").val(this.label);
    jQuery("#queue_name").val(this.label);
    enable_form("#queue_form");
    show_form("#queue_form");
  }
}

static class QueueFigure
{
    static void draw(float x, float y, color nodeColor, int strk, int nodeStroke, int w, int h, int msgs) {
        fill(nodeColor);
        stroke(strk);
        strokeWeight(nodeStroke);
        rectMode(CENTER);
        rect(x, y, w, h, 2);
        rectMode(CORNER);
        
        QueueFigure.drawMessages(msgs, x, y, w, h);
    }
    
    static void drawMessages(int msgs, float x, float y, int w, int h) {
        strokeWeight(0.5);
        stroke(0);
        for (int i = 1; i <= msgs; i++) {
            if (i*2.5 > w) {
                break;
            }
            lx = x + (w/2) - (2 * i);
            hh = (h/2);
            line(lx, y - hh, lx, y + hh);
        }
    }
}
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

class Stage {
  ArrayList transfers = new ArrayList();
  
  Stage() {
  }
  
  void addTransfer(Transfer transfer) {
    transfers.add(transfer);
  }
  
  void draw() {
    for (int i = transfers.size()-1; i >= 0; i--) {
      Transfer transfer = (Transfer) transfers.get(i);
      transfer.update();
      transfer.draw();
      transfer.afterDraw();

      if (transfer.isFinished()) {
          transfers.remove(i);
      }      
    }
  }
}

class TmpEdge {
  Node from;
  int toX;
  int toY;
  color edgeColor;

  TmpEdge(Node from, int toX, int toY, color edgeColor) {
    this.from = from;
    this.toX = toX;
    this.toY = toY;
    this.edgeColor = edgeColor;
  }
  
  void mouseDragged() {
    toX = mouseX;
    toY = mouseY;
  }
  
  void draw() {
    stroke(this.edgeColor);
    strokeWeight(0.35);
    line(from.x, from.y, toX, toY);
  }
}

class ToolbarItem {
  float x, y;
  int type;
  int radii;
  String label;
  color nodeColor;
  
  ToolbarItem(int type, String label, float x, float y) {
    this.x = x;
    this.y = y;
    this.radii = 10;
    this.type = type;
    this.label = label;
    this.nodeColor = colors[type];
  }
  
  boolean isBelowMouse() {
    float closest = 20;
    float d = dist(mouseX, mouseY, this.x, this.y);
    return d < closest;
  }
  
  void mouseDragged() {
    if (isBelowMouse()) {
      tmpNode = newNodeByType(this.type, this.label, this.x, this.y);
    }
  }
  
  void draw() {
    switch(this.type) {
      case EXCHANGE:
        ExchangeFigure.draw(this.x, this.y, this.nodeColor, 0, 0.5, this.radii, 3);
        break;
      case QUEUE:
        QueueFigure.draw(this.x, this.y, this.nodeColor, 0, 0.5, Q_WIDTH, Q_HEIGHT, 0);
        break;
      case CONSUMER:
        ConsumerFigure.draw(this.x, this.y, this.nodeColor, 0, 0, this.radii, 5, -90);
        break;
      default:
        NodeFigure.draw(this.x, this.y, this.nodeColor, 0, 0.5, this.radii);
    }
    
    // draw node text
    fill (0);
    textAlign(CENTER, CENTER);
    text(label, x, y+labelPadding);
  }
}

class Transfer {
  Stage stage;
  
  float x, y;
  int radii = 5;
  float distX, distY;
  float step = 0.02;
  float pct = 0.0;
  boolean finished = false;
  Message data;
  Node from, to;
  
  Transfer(Stage stage, Node from, Node to, Message data) {
    this.stage = stage;
    this.from = from;
    this.to = to;
    this.data = data;
    
    x = from.x;
    y = from.y;
    this.updateDist();    
  }
  
  Message getData() {
    return data;
  }
  
  Node getFrom() {
    return from;
  }
  
  Node getTo() {
    return to;
  }
  
  boolean isFinished() {
    return finished;
  }
  
  void updateDist() {
    distX = to.x - from.x;
    distY = to.y - from.y;
  }
  
  void update() {
    updateDist();
    if (pct < 1.0) {
      this.x = from.x + (pct * distX);
      this.y = from.y + (pct * distY);
    }
  }
  
  void draw() {
    pct += step;
    fill(255);
    ellipse(x, y, radii*2, radii*2);
  }
  
  void afterDraw() {
    if (pct >= 1.0) {
      finished = true;
      from.transferDelivered(this);
      to.trasnferArrived(this);
    }
  }
}

class TNode {
  int length = 0;
  String nodeKey;
  ArrayList val;
  HashMap next;
  
  TNode() {
    next = new HashMap();
  }
  
  int getLength() {
    return length;
  }
  
  void setLength(int len) {
    if (len > length) {
      length = len;
    } 
  }
  
  void setNodeKey(String[] words) {
    nodeKey = join(words, ".");
  }
}

class TrieST<Value> {
  TNode root;
  int size = 0;
  int itemCnt = 0;
  
  ArrayList getValue(String aKey) {
    String[] words = split(aKey, ".");
    TNode x = getTNode(root, words, 0);
    if (x == null) return null;
    return x.val;
  }
  
  /**
   * Internal getNode helper
   */
  TNode getTNode(TNode x, String[] words, int d) {
    if (x  == null) return null;
    if (d == words.length) return x;
    String word = words[d];
    return getTNode(x.next.get(word), words, d+1);
  }
  
  TNode getParentNode(TNode x) {
    String[] keys = split(x.nodeKey, ".");
    String[] parentKey = subset(keys, 0, keys.length - 1);
    return getTNode(root, parentKey, 0);
  }
  
  /**
   * Public put method
   */
  void put(String bindingKey, Value val) {
    String[] words = split(bindingKey, ".");
    root = put(root, words, val, 0);
  }
  
  /**
   * Internal put helper
   */
  TNode put(TNode x, String[] words, Value val, int d) {
    if (x == null) x = new TNode();
    x.setLength(words.length - d);
    x.setNodeKey(subset(words, 0, d));
    
    
    if (d == words.length) {
      if (x.val == null) {
        x.val = new ArrayList();
        size++;
      }
      
      if (!x.val.contains(val)) {
        x.val.add(val);
        itemCnt++;
      }
      
      return x;
    }
    
    String word = words[d];
    x.next.put(word, put(x.next.get(word), words, val, d+1));

    return x;
  } 
  
  int size() {
    return size;
  }
  
  int itemCount() {
    return itemCnt;
  }
  
  ArrayList keys() {
    return keysWithPrefix("");
  }
  
  ArrayList keysWithPrefix(String pre) {
    ArrayList acc = new ArrayList();
    String[] prefix = split(pre, ".");
    collect(getTNode(root, prefix, 0), prefix, acc);
    return acc;
  }
  
  void collect(TNode x, String[] pre, ArrayList acc) {
    if (x == null) return;
    if (x.val != null) {
      // if we have a value we join what we have so far in pre
      acc.add(join(pre, "."));
    }
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      // append the currKey so we keep track of the links visited
      collect(x.next.get(currKey), (String[]) append(pre, currKey), acc);
    }
  }
  
  HashMap allValues() {
    HashMap acc = new HashMap();
    allChildValues(root, acc);
    return acc;
  }
  
  HashMap valuesForPattern(String pat) {
    HashMap acc = new HashMap();
    String[] pattern = split(pat, ".");
    collectWithPattern(root, pattern, pattern.length, acc);
    return acc;
  }
  
  void collectWithPattern(TNode x, String[] pat, int remainPattern, HashMap acc) {
    if (x == null) return;
    
    String word = pat[pat.length - remainPattern];

    if (remainPattern == 0) {
      if(x.val != null) {
        acc.put(x.nodeKey, x.val);
      }
      return;
    } else {
      if (word == "*") {
        // collect all the values of this node children without comparing keys.
        Iterator i = x.next.entrySet().iterator();
        while (i.hasNext()) {
          Map.Entry me = (Map.Entry)i.next();
          String currKey = me.getKey();
          collectWithPattern(x.next.get(currKey), pat, remainPattern-1, acc);
        }
      } else if (word == "#") {
        if (remainPattern == 1) {
          allChildValues(x, acc);
        } else {
          collectWithHash(x, pat, remainPattern-1, acc);
        }
      } else {
        // collect the value of the first decendant of this node comparing keys.
        collectWithPattern(x.next.get(word), pat, remainPattern-1, acc);
      }
    }
  }
  
  void collectWithHash(TNode x, String[] pat, int remainPattern, HashMap acc) {
    if (x == null) return; 
    
    if (x.getLength() >= remainPattern) {
      Iterator i = x.next.entrySet().iterator();
      while (i.hasNext()) {
        Map.Entry me = (Map.Entry)i.next();
        String currKey = me.getKey();
        collectWithHash(x.next.get(currKey), pat, remainPattern, acc);
      }
    } else {
      collectWithPattern(getParentNode(x), pat, remainPattern, acc);
    }
  }
  
  void allChildValues(TNode x, HashMap acc) {
    if (x == null) return;
    if (x.val != null) {
        acc.put(x.nodeKey, x.val);
    }
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      allChildValues(x.next.get(currKey), acc);
    }
  }
  
  HashMap valuesForRoutingKey(String rkey) {
    HashMap acc = new HashMap();
    String[] pattern = split(rkey, ".");
    collectWithRoutingKey(root, pattern, pattern.length, acc);
    return acc;
  }
  
  void collectWithRoutingKey(TNode x, String[] pat, int remainPattern, HashMap acc) {
    if (x == null) return;
    String word = pat[pat.length - remainPattern];
    if (remainPattern == 0) {
      if(x.val != null) {
        acc.put(x.nodeKey, x.val);
      }
      collectWithRoutingKeyHash(x.next.get("#"), pat, remainPattern, acc);
    } else {
      collectWithRoutingKey(x.next.get(word), pat, remainPattern-1, acc);
      collectWithRoutingKey(x.next.get("*"), pat, remainPattern-1, acc);
      collectWithRoutingKeyHash(x.next.get("#"), pat, remainPattern, acc);
    }
  }
  
  void collectWithRoutingKeyHash(TNode x, String[] pat, String remainPattern, HashMap acc) {
    for (var i = 0; i <= pat.length; i++) {
      collectWithRoutingKey(x, pat, i, acc);
    }
  }
  
  void delete(String aKey, Value val) {
    String[] words = split(aKey, ".");
    root = delete(root, words, val, 0);
  }
  
  TNode delete(TNode x, String[] words, Value val, int d) {
    if (x == null) return null;
    if (d == words.length) {
      // Removes the destination from the ArrayList
      x.val.remove(val);
      itemCnt--;
      
      // if the ArrayList is empty then we reset it to null
      if (x.val.isEmpty()) {
        x.val = null;
      }
    } else {
      String word = (String) words[d];
      x.next.put(word, delete(x.next.get(word), words, val, d+1));
    }
    
    if ( x.val != null) return x;
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      
      if (x.next.get(currKey) != null) {
        return x;
      }
    }
    
    return null;
  }
}

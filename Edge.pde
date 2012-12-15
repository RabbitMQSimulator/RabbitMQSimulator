class Edge {
  Node from;
  Node to;
  color edgeColor;

  Edge(Node from, Node to, color edgeColor) {
    this.from = from;
    this.to = to;
    this.edgeColor = edgeColor;
  }
  
  void draw() {
    stroke(this.edgeColor);
    strokeWeight(0.35);
    line(from.x, from.y, to.x, to.y);
  }
}

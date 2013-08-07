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
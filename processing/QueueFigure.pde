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
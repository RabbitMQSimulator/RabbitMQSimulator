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
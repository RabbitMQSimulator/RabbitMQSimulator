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
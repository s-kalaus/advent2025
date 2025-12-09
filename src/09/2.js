import { loadInput } from '../utils/load-input.js';

const intersects = (polygons, [x0, y0], [x1, y1]) => {
  const xi = Math.min(x0, x1),
    xm = Math.max(x0, x1);
  const yi = Math.min(y0, y1),
    ym = Math.max(y0, y1);
  const n = polygons.length;

  return polygons.every((p, i) => {
    const [ax, ay] = p;
    const [bx, by] = polygons[(i + 1) % n];

    if (ax === bx) {
      const minY = Math.min(ay, by),
        maxY = Math.max(ay, by);

      return !(
        xi < ax &&
        ax < xm &&
        ((minY <= yi && yi < maxY) || (minY < ym && ym <= maxY))
      );
    }

    if (ay === by) {
      const minX = Math.min(ax, bx),
        maxX = Math.max(ax, bx);

      return !(
        yi < ay &&
        ay < ym &&
        ((minX <= xi && xi < maxX) || (minX < xm && xm <= maxX))
      );
    }

    return false;
  });
};

const bootstrap = (input) => {
  const polygons = input.split('\n').map((line) => line.split(',').map(Number));

  let maxArea = 0;

  for (let i = 0; i < polygons.length; i += 1) {
    const [x0, y0] = polygons[i];

    for (let j = i + 1; j < polygons.length; j += 1) {
      const [x1, y1] = polygons[j];

      const area = (Math.abs(x0 - x1) + 1) * (Math.abs(y0 - y1) + 1);

      if (area > maxArea && intersects(polygons, polygons[i], polygons[j])) {
        maxArea = area;
      }
    }
  }

  console.log(maxArea);
};

bootstrap(loadInput('09'));

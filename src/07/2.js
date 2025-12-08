import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  const grid = input
    .split('\n')
    .map((line) => {
      if (line === Array.from({ length: line.length }).fill('.').join('')) {
        return [];
      }

      return line.split('');
    })
    .filter((line) => line.length > 0);

  let start = [];
  const cache = {};

  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      if (grid[y][x] === 'S') {
        start = [x, y];
        break;
      }
    }
  }

  const check = ([x, y]) => {
    const key = `${x}-${y}`;

    if (cache[key] !== undefined) {
      return cache[key];
    }

    let cnt = 0;

    if (y < grid.length && x >= 0 && x < grid[y].length) {
      if (grid[y][x] === '^') {
        cnt += 1;
        cnt += check([x - 1, y]);
        cnt += check([x + 1, y]);
      } else {
        cnt += check([x, y + 1]);
      }
    }

    cache[key] = cnt;

    return cnt;
  };

  const cnt = check(start) + 1;

  console.log(cnt);
};

bootstrap(loadInput('07'));

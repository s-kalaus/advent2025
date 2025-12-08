import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  const grid = input.split('\n').map((line) => line.split(''));

  let start = [];

  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      if (grid[y][x] === 'S') {
        start = [x, y];
        break;
      }
    }
  }

  const queue = [start];
  const cache = { [`${start[0]}-${start[1]}`]: true };

  let cnt = 0;

  while (queue.length) {
    const [x, y] = queue.pop();

    const ny = y + 1;

    if (x < 0 || x >= grid[0].length || ny >= grid.length) {
      continue;
    }

    const cell = grid[ny][x];

    if (cell === '^') {
      cnt += 1;

      if (!cache[`${x - 1}-${ny}`]) {
        queue.push([x - 1, ny]);
        cache[`${x - 1}-${ny}`] = true;
      }

      if (!cache[`${x + 1}-${ny}`]) {
        queue.push([x + 1, ny]);
        cache[`${x + 1}-${ny}`] = true;
      }
    } else {
      if (!cache[`${x}-${ny}`]) {
        queue.push([x, ny]);
        cache[`${x}-${ny}`] = true;
      }
    }
  }

  console.log(cnt);
};

bootstrap(loadInput('07'));

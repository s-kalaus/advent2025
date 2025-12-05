import { loadInput } from '../utils/load-input.js';

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const bootstrap = (input) => {
  const grid = input.split('\n').map((line) => line.split(''));
  const rows = grid.length;
  const cells = grid[0].length;

  let cnt = 0;

  while (true) {
    const remove = [];

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cells; x += 1) {
        if (grid[y][x] !== '@') {
          continue;
        }

        let neighbors = 0;

        for (const [dy, dx] of directions) {
          const ny = y + dy;
          const nx = x + dx;

          if (ny < 0 || ny >= rows || nx < 0 || nx >= cells) {
            continue;
          }

          if (grid[ny][nx] === '@') {
            neighbors += 1;
          }
        }

        if (neighbors < 4) {
          remove.push([y, x]);
        }
      }
    }

    if (!remove.length) {
      break;
    }

    for (const [y, x] of remove) {
      grid[y][x] = '.';
    }

    cnt += remove.length;
  }

  console.log(cnt);
};

bootstrap(loadInput('04'));

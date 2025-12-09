import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  const grid = input.split('\n').map((line) => line.split(',').map(Number));

  let maxArea = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let c = i + 1; c < grid.length; c += 1) {
      const area =
        Math.abs(grid[i][0] - grid[c][0] + 1) *
        Math.abs(grid[i][1] - grid[c][1] + 1);

      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  console.log(maxArea);
};

bootstrap(loadInput('09'));

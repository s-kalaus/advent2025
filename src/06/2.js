import { loadInput } from '../utils/load-input.js';

const rotateLeft = (lines) => {
  const height = lines.length;
  const width = Math.max(...lines.map((l) => l.length));

  const grid = lines.map((l) => l.padEnd(width, ' ').split(''));

  const data = [];
  let ind = 0;

  for (let col = width - 1; col >= 0; col--) {
    const newRow = [];

    for (let row = 0; row < height; row += 1) {
      newRow.push(grid[row][col]);
    }

    const val = newRow.join('').trim();

    if (val) {
      if (!data[ind]) {
        data[ind] = [];
      }

      data[ind].push(+val);
    } else {
      ind += 1;
    }
  }

  return data;
};

const bootstrap = (input) => {
  const rowsRaw = input.split('\n');
  const ops = rowsRaw.pop().split(/ +/);

  const data = rotateLeft(rowsRaw);

  const sum = Object.values(data).reduce((prev, values, idx) => {
    let prod = values[0];

    for (let i = 1; i < values.length; i += 1) {
      switch (ops[ops.length - idx - 1]) {
        case '*':
          prod *= values[i];
          break;
        case '+':
          prod += values[i];
          break;
      }
    }

    return prev + prod;
  }, 0);

  console.log(sum);
};

bootstrap(loadInput('06'));

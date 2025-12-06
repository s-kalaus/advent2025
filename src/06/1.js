import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  const rows = input.split('\n').map((line) => line.trim().split(/ +/));
  const ops = rows.pop();
  const data = {};

  for (let x = 0; x < rows[0].length; x += 1) {
    data[x] = rows.map((row) => +row[x]);
  }

  const sum = Object.values(data).reduce((prev, values, idx) => {
    let prod = values[0];

    for (let i = 1; i < values.length; i += 1) {
      switch (ops[idx]) {
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

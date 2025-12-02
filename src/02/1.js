import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  const invalids = [];
  input
    .split(',')
    .map((line) => line.split('-').map(Number))
    .forEach(([min, max]) => {
      for (let i = min; i <= max; i += 1) {
        const str = i.toString();
        const left = str.slice(0, Math.floor(str.length / 2));

        if (str === `${left}${left}`) {
          invalids.push(i);
        }
      }
    });

  console.log(invalids.reduce((a, b) => a + b, 0));
};

bootstrap(loadInput('02'));

import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  const invalids = [];

  input
    .split(',')
    .map((line) => line.split('-').map(Number))
    .forEach(([min, max]) => {
      for (let i = min; i <= max; i += 1) {
        const str = i.toString();

        const lenHalf = Math.floor(str.length / 2);

        for (let c = 1; c <= lenHalf; c += 1) {
          const s = str.slice(0, c);
          const times = Math.floor(str.length / s.length);

          const prod = s.repeat(times);

          if (prod === str) {
            invalids.push(i);
            break;
          }
        }
      }
    });

  console.log(invalids.reduce((a, b) => a + b, 0));
};

bootstrap(loadInput('02'));

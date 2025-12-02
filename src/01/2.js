import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  let dialPosition = 50;
  let count = 0;

  input.split('\n').forEach((str) => {
    const direction = str.slice(0, 1) === 'R' ? 1 : -1;
    const moves = +str.slice(1);

    if (dialPosition === 0) {
      count += Math.floor(moves / 100);
    } else {
      const d = direction > 0 ? (100 - dialPosition) % 100 : dialPosition;

      if (moves >= d) {
        count += 1 + Math.floor((moves - d) / 100);
      }
    }

    dialPosition = (dialPosition + moves * direction) % 100;

    if (dialPosition < 0) {
      dialPosition += 100;
    }
  });

  console.log(count);
};

bootstrap(loadInput('01'));

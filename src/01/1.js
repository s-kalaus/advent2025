import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  let dialPosition = 50;
  let count = 0;

  input.forEach((str) => {
    const direction = str.slice(0, 1) === 'R' ? 1 : -1;
    const moves = +str.slice(1);

    dialPosition = (dialPosition + direction * moves) % 100;

    if (dialPosition < 0) {
      dialPosition += 100;
    }

    if (dialPosition === 0) {
      count += 1;
    }
  });

  console.log(count);
};

bootstrap(loadInput('01'));

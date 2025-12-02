import { loadInput } from '../utils/load-input.js';

const batteries = 12;

const findMax = (data, startPos, endPos) => {
  let maxIndex = startPos;

  for (let i = startPos + 1; i < endPos; i += 1) {
    if (data[i] > data[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
};

const bootstrap = (input) => {
  const joltages = input.split('\n').map((str) => {
    const data = str.split('').map(Number);

    let maxIndexes = [findMax(data, 0, data.length - (batteries - 1))];

    Array.from({ length: batteries - 1 }).forEach((_, idx) => {
      maxIndexes.push(
        findMax(data, maxIndexes[idx] + 1, data.length - (batteries - 2) + idx),
      );
    });

    return +maxIndexes.map((i) => data[i]).join('');
  });

  console.log(joltages.reduce((a, b) => a + b, 0));
};

bootstrap(loadInput('03'));

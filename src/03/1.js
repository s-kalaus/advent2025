import { loadInput } from '../utils/load-input.js';

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

    const maxIndex1 = findMax(data, 0, data.length - 1);
    const maxIndex2 = findMax(data, maxIndex1 + 1, data.length);

    return +`${data[maxIndex1]}${data[maxIndex2]}`;
  });

  console.log(joltages.reduce((a, b) => a + b, 0));
};

bootstrap(loadInput('03'));

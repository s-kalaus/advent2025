import { loadInput } from '../utils/load-input.js';

const mergeRanges = (ranges) => {
  const sorted = [...ranges].sort((a, b) => a[0] - b[0]);

  const result = [];

  let [curStart, curEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];

    if (start <= curEnd) {
      curEnd = Math.max(curEnd, end);
    } else {
      result.push([curStart, curEnd]);
      [curStart, curEnd] = [start, end];
    }
  }

  result.push([curStart, curEnd]);

  return result;
};

const bootstrap = (input) => {
  const [freshRanges] = input.split('\n\n');

  const ranges = mergeRanges(
    freshRanges
      .trim()
      .split('\n')
      .map((line) => line.split('-').map(Number)),
  );

  const cnt = ranges.reduce((prev, [min, max]) => prev + (max - min + 1), 0);

  console.log(cnt);
};

bootstrap(loadInput('05'));

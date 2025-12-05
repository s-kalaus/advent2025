import { loadInput } from '../utils/load-input.js';

const bootstrap = (input) => {
  const [freshRanges, ingredientsRaw] = input.split('\n\n');

  const ranges = freshRanges
    .trim()
    .split('\n')
    .map((line) => line.split('-').map(Number));

  const ingredients = ingredientsRaw.trim().split('\n').map(Number);

  const cnt = ingredients.reduce((prev, ingredient) => {
    const isFresh = ranges.some(
      ([min, max]) => ingredient >= min && ingredient <= max,
    );

    return prev + (isFresh ? 1 : 0);
  }, 0);

  console.log(cnt);
};

bootstrap(loadInput('05'));

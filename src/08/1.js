import { loadInput } from '../utils/load-input.js';

const CONNECTIONS = 1000;

function vDistance(v1, v2) {
  let sumSq = 0;

  for (let i = 0; i < v1.length; i++) {
    const diff = v1[i] - v2[i];
    sumSq += diff * diff;
  }

  return Math.sqrt(sumSq);
}

const bootstrap = (input) => {
  const vectors = input.split('\n').map((line) => line.split(',').map(Number));

  const cache = {};

  for (let i = 0; i < vectors.length; i += 1) {
    const vec1 = vectors[i];

    for (let c = i + 1; c < vectors.length; c += 1) {
      const vec2 = vectors[c];
      const v1 = vec1.join(',');
      const v2 = vec2.join(',');

      if (
        cache[`${v1}-${v2}`] === undefined &&
        cache[`${v2}-${v1}`] === undefined
      ) {
        cache[`${v1}-${v2}`] = vDistance(vec1, vec2);
      }
    }
  }

  const sortedCache = Object.entries(cache).sort(([, vA], [, vB]) => vA - vB);
  const groups = [];

  for (let i = 0; i < CONNECTIONS; i += 1) {
    const [vec1, vec2] = sortedCache[i][0].split('-');

    const found = groups.filter(
      (group) => group.includes(vec1) || group.includes(vec2),
    );

    if (found.length) {
      for (let c = 1; c < found.length; c += 1) {
        found[0].push(...found[c].filter((v) => !found[0].includes(v)));
        found[c].length = 0;
      }

      found[0].push(...[vec1, vec2].filter((v) => !found[0].includes(v)));
    } else {
      groups.push([vec1, vec2]);
    }
  }

  groups.sort((a, b) => b.length - a.length);

  console.log(groups[0].length * groups[1].length * groups[2].length);
};

bootstrap(loadInput('08'));

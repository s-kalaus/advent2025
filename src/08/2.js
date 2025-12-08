import { loadInput } from '../utils/load-input.js';

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

  for (let i = 0; i < sortedCache.length; i += 1) {
    const [vec1, vec2] = sortedCache[i][0].split('-');

    const found = groups.filter(
      (group) => group.includes(vec1) || group.includes(vec2),
    );

    if (found.length) {
      for (let c = 1; c < found.length; c += 1) {
        found[0].push(...found[c].filter((v) => !found[0].includes(v)));
        groups.splice(groups.indexOf(found[c]), 1);
      }

      found[0].push(...[vec1, vec2].filter((v) => !found[0].includes(v)));

      if (groups.length === 1 && groups[0].length === vectors.length) {
        console.log(
          vec1.split(',').map(Number)[0] * vec2.split(',').map(Number)[0],
        );
        break;
      }
    } else {
      groups.push([vec1, vec2]);
    }
  }
};

bootstrap(loadInput('08'));

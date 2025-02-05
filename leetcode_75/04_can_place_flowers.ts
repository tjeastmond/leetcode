function _canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const fb = [...flowerbed];

  for (let i = 0; i < fb.length; ++i) {
    let prev = fb[i - 1];
    let curr = fb[i];
    let next = fb[i + 1];

    console.log(prev);

    if (!prev && !curr && !next && n) {
      fb[i] = 1;
      --n;
    }

    if (n === 0) return true;
  }

  return false;
}

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let i = 0;

  while (i < flowerbed.length) {
    if (n == 0) {
      return true;
    }

    if (flowerbed[i] === 1) {
      i++;
      continue;
    }

    if (flowerbed[i - 1] === 1 || flowerbed[i + 1] === 1) {
      i++;
      continue;
    }

    if (n > 0) {
      n--;
      i++;
    }

    i++;
  }

  return n === 0;
}

const result1 = canPlaceFlowers([1, 0, 0, 0, 1], 1);
const result2 = canPlaceFlowers([1, 0, 0, 0, 1], 2);
const result3 = canPlaceFlowers([0, 0, 1, 0, 1], 1);

console.log(result1);
console.log(result2);
console.log(result3);

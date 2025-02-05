function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expected = (n * (n + 1)) / 2;
  const actual = nums.reduce((acc, num) => acc + num, 0);
  return expected - actual;
}

function findMissingNumber(arr: number[]): number {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const expectedSum = (max * (max + 1)) / 2 - ((min - 1) * min) / 2; // Sum from min to max
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

function missingNumberXor(arr: number[]) {
  const n = arr.length + 1;
  let xorAll = 0;
  let xorArray = 0;
  for (let i = 1; i <= n; i++) {
    xorAll ^= i;
  }
  for (const num of arr) {
    xorArray ^= num;
  }
  return xorAll ^ xorArray;
}

const simpleArray = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const largeArray = [35, 36, 37, 39, 40, 41, 42, 43];

console.log("missingNumber():");
console.log(missingNumber(simpleArray) === 8);
console.log(missingNumber([0, 1]) === 2);

console.log("\nmissingNumberXor():");
console.log(missingNumberXor([1, 2, 3, 5]) === 4);

console.log("\nfindMissingNumber():");
console.log(findMissingNumber(simpleArray) === 8);
console.log(findMissingNumber(largeArray) === 38);
console.log(findMissingNumber([1, 2, 3, 5]) === 4);

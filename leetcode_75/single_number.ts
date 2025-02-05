// Good solution but larger space complexity than bitwise
//
// function singleNumber(nums: number[]): number {
//   const set = new Set<number>();
//   for (let i = 0; i < nums.length; ++i) {
//     let num = nums[i];
//     if (set.has(num)) {
//       set.delete(num);
//     } else {
//       set.add(num);
//     }
//   }
//   return [...set][0]!;
// }

function singleNumber(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

console.log(singleNumber([2, 2, 1]) === 1);
console.log(singleNumber([4, 1, 2, 1, 2]) === 4);

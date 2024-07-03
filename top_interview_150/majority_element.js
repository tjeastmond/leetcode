/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    count += candidate === nums[i] ? 1 : -1;
  }

  return candidate;
};

console.log(majorityElement([3, 2, 3]) === 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2);
console.log(majorityElement([3, 3, 6, 6, 6, 6, 6, 3, 3]) === 6);

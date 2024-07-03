// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;

  for (let i = 1; i < nums.length; ++i) {
    // console.log("i: ", i);
    // console.log("k: ", k);
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      ++k;
    }
  }

  // console.log(nums, k);

  return k;
};

// console.log(removeDuplicates([1, 1, 2]) === 2);
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5);

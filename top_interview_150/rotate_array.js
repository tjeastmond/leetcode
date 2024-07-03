/**
 * @url https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // if (nums.length === 1) return nums;
  if (nums.length === 1) return;

  if (k > nums.length) {
    k = k % nums.length;
  }

  let temp = nums.splice(nums.length - k, k);
  nums.unshift(...temp);

  // return nums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([1, 2], 3);

// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hash[complement] !== undefined) {
      return [hash[complement], i];
    }

    hash[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 26)); // [0, 1]

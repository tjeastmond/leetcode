// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  const target = 0;
  const results = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      } else {
        if (sum > target) --k;
        if (sum < target) ++j;
      }
    }
  }

  return results;
};

// [-1,0,1,2,-1,-4]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2), "\n"); // 2
console.log(subarraySum([1, 1, 1, 1, 2, 3], 4), "\n"); // 2

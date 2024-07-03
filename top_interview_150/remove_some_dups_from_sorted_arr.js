/**
 * A number can repeat no more than twice
 * @param {number[]} nums
 * @return {number} - dedup count
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  let k = 1;

  for (let i = 2; i < nums.length; ++i) {
    // If the current element is not the same as the (k-1)th element in the result array
    if (nums[i] !== nums[k - 1]) {
      k++;
      nums[k] = nums[i];
    }
  }

  return k + 1;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]) === 5);

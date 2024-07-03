// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const shortSet = new Set(nums1);
  const resultSet = new Set();

  for (const num of nums2) {
    if (shortSet.has(num)) {
      resultSet.add(num);
    }
  }

  return Array.from(resultSet);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([3, 1, 2], [1, 3]));
console.log(intersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
console.log(intersection([10, 20, 30], [30, 40, 50]));
console.log(intersection([7, 7, 7], [7, 7, 7]));
console.log(intersection([1, 2, 3], [4, 5, 6]));
console.log(intersection([], [1, 2, 3]));
console.log(intersection([1, 2, 3], []));

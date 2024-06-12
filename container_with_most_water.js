// https://leetcode.com/problems/container-with-most-water/
const maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(currentArea, max);
    height[left] < height[right] ? ++left : --right;
  }

  return max;
};

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // 49
console.log(maxArea([1, 1])); // 1

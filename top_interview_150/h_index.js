/**
 * @url https://leetcode.com/problems/h-index
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = 0;
  let sorted = [...citations].sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
};

console.log(hIndex([3, 0, 6, 1, 5]) === 3);
console.log(hIndex([1, 3, 1]) === 1);

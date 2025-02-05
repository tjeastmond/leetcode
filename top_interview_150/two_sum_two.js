function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let total = numbers[left] + numbers[right];
    if (total === target) return [left + 1, right + 1];
    total > target ? --right : ++left;
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [ 1, 2 ]
console.log(twoSum([2, 3, 4], 6)); // [ 1, 3 ]

/**
 * @url https://leetcode.com/problems/valid-palindrome
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const cleanedString = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

  if (cleanedString.length <= 1) return true;

  let i = 0;
  let j = cleanedString.length - 1;

  while (i < j) {
    if (cleanedString[i] !== cleanedString[j]) return false;
    ++i;
    --j;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama") === true);
console.log(isPalindrome("race a car") === false);
console.log(isPalindrome(" ") === true);
console.log(isPalindrome(".") === true);
console.log(isPalindrome(".,") === true);

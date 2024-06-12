// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // Initialize a stack to keep track of opening brackets
  const stack = [];

  // Create a map of matching pairs for opening and closing brackets
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Iterate over each character in the input string
  for (let i = 0; i < s.length; ++i) {
    // If the character is an opening bracket, push it onto the stack
    if (s[i] in pairs) {
      stack.push(s[i]);
    } else {
      // If the character is a closing bracket, pop the last opening bracket from the stack
      const last = stack.pop();
      // Check if the popped opening bracket matches the current closing bracket
      if (pairs[last] !== s[i]) {
        return false; // If not, the string is not valid
      }
    }
  }

  // If the stack is empty, all opening brackets were matched correctly
  return stack.length === 0;
};

// Test cases for isValid function
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true
console.log(isValid("[")); // false
console.log(isValid("]")); // false
console.log(isValid("({[()]})")); // true
console.log(isValid("({[([)])]})")); // false

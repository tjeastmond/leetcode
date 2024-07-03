// https://leetcode.com/problems/maximum-depth-of-binary-tree/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var maxDepth = function (root) {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

console.log(maxDepth(root));

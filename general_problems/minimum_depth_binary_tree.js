// https://leetcode.com/problems/minimum-depth-of-binary-tree/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var minDepth = function (root) {
  return !root ? 0 : 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

console.log(minDepth(root));

// https://leetcode.com/problems/merge-two-binary-trees/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
};

// Output: [3,4,5,5,4,null,7]
console.log(
  mergeTrees(
    new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2)),
    new TreeNode(
      2,
      new TreeNode(1, null, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(7)),
    ),
  ),
);

// Time Complexity:  O(max(n, m))
// Space Complexity: O(max(h_1, h_2))) where(h_1) and(h_2) are the heights of the trees, and in the worst case is(O(max(n, m)).

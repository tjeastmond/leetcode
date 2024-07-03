// https://leetcode.com/problems/binary-tree-inorder-traversal/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  /**
   * Helper function to perform inorder traversal
   * @param {TreeNode} node
   */
  const traverse = (node) => {
    if (node === null) return;

    // Traverse the left subtree
    traverse(node.left);
    // Visit the root node
    result.push(node.val);
    // Traverse the right subtree
    traverse(node.right);
  };

  // Start traversal from the root
  traverse(root);

  return result;
};

console.log(
  // Expected: [1, 3, 2]
  inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))),
);

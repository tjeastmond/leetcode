// https://leetcode.com/problems/validate-binary-search-tree
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  /**
   * Helper function to validate the binary search tree.
   * @param {TreeNode} node - The current node.
   * @param {number} low - The lower bound for the node value.
   * @param {number} high - The upper bound for the node value.
   * @return {boolean} - True if the subtree is a valid BST, false otherwise.
   */
  const validate = (node, low = -Infinity, high = Infinity) => {
    // An empty node is considered valid.
    if (!node) return true;

    // The current node's value must be within the range (low, high).
    if (node.val <= low || node.val >= high) return false;

    // Recursively validate the left and right subtrees.
    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  };

  // Start the validation from the root node.
  return validate(root);
};

// False
console.log(
  isValidBST(
    new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(3), new TreeNode(6)),
    ),
  ),
);

// False
console.log(
  isValidBST(
    new TreeNode(
      5,
      new TreeNode(4),
      new TreeNode(6, new TreeNode(3), new TreeNode(7)),
    ),
  ),
);

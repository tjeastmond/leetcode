// https://leetcode.com/problems/path-sum
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  // Using a queue to perform BFS
  let queue = [[root, root.val]];

  while (queue.length > 0) {
    let [currentNode, currentSum] = queue.shift();

    // Check if current node is a leaf and the path sum equals targetSum
    if (!currentNode.left && !currentNode.right && currentSum === targetSum) {
      return true;
    }

    // Add left child to the queue if it exists
    if (currentNode.left) {
      queue.push([currentNode.left, currentSum + currentNode.left.val]);
    }

    // Add right child to the queue if it exists
    if (currentNode.right) {
      queue.push([currentNode.right, currentSum + currentNode.right.val]);
    }
  }

  return false;
};

// Test case 1: Empty tree
const tree1 = null;
console.log(hasPathSum(tree1, 0)); // Expected output: false

// Test case 2: Single node tree
const tree2 = new TreeNode(1);
console.log(hasPathSum(tree2, 1)); // Expected output: true

// Test case 3: Tree with multiple nodes
const tree3 = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
);
console.log(hasPathSum(tree3, 22)); // Expected output: true

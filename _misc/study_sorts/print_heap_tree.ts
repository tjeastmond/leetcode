// Define a binary tree node structure
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to generate a heap tree from an array
function generateHeapTreeFromArray(arr: number[]): TreeNode | null {
  if (arr.length === 0) return null;

  // Helper function to recursively build the tree
  function buildTree(index: number): TreeNode | null {
    if (index >= arr.length) return null;
    const node = new TreeNode(arr[index]);
    node.left = buildTree(2 * index + 1);
    node.right = buildTree(2 * index + 2);
    return node;
  }

  return buildTree(0);
}

// Function to print the tree in a structured format
function printTree(node: TreeNode | null, indent: string = ""): void {
  if (!node) return;
  console.log(`${indent}${node.value}`);
  printTree(node.left, indent + "  ");
  printTree(node.right, indent + "  ");
}

// Generate and print the tree from an array
const heapTree = generateHeapTreeFromArray([10, 30, 50, 20, 60, 40]);
printTree(heapTree);

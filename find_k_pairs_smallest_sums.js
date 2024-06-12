// Function to find the k pairs with the smallest sums
// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/

// MinHeap Implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Function to get the parent index
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // Function to get the left child index
  leftChild(index) {
    return 2 * index + 1;
  }

  // Function to get the right child index
  rightChild(index) {
    return 2 * index + 2;
  }

  // Insert a new element into the heap
  insert(el) {
    this.heap.push(el);
    this.bubbleUp();
  }

  // Function to maintain the min-heap property after insertion
  bubbleUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index][0] < this.heap[this.parent(index)][0]
    ) {
      // Swap elements if the child is smaller than the parent
      [this.heap[index], this.heap[this.parent(index)]] = [
        this.heap[this.parent(index)],
        this.heap[index],
      ];
      index = this.parent(index); // Update index to parent index
    }
  }

  // Extract the minimum element (root) from the heap
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0); // Maintain the heap property by bubbling down
    return min;
  }

  // Function to maintain the min-heap property after extraction
  bubbleDown(index) {
    let smallest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (
      left < this.heap.length &&
      this.heap[left][0] < this.heap[smallest][0]
    ) {
      smallest = left; // Update largest if left child is smaller
    }

    if (
      right < this.heap.length &&
      this.heap[right][0] < this.heap[smallest][0]
    ) {
      smallest = right; // Update largest if right child is smaller
    }

    if (smallest !== index) {
      // Swap if the current node is not the smallest
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.bubbleDown(smallest); // Recursively bubble down the affected sub-tree
    }
  }

  // Return the size of the heap
  size() {
    return this.heap.length;
  }
}

// Function to find k smallest pairs of sums between two arrays
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new MinHeap();
  const result = [];

  if (!nums1.length || !nums2.length || k === 0) return result;

  // Initialize the heap with pairs from the first element of nums1 and each element of nums2
  for (let i = 0; i < nums2.length && i < k; i++) {
    minHeap.insert([nums1[0] + nums2[i], 0, i]);
  }

  // Extract the k smallest sums
  while (k > 0 && minHeap.size() > 0) {
    const [sum, i, j] = minHeap.extractMin();
    result.push([nums1[i], nums2[j]]);

    // If there's a next element in nums1, add the new pair to the heap
    if (i + 1 < nums1.length) {
      minHeap.insert([nums1[i + 1] + nums2[j], i + 1, j]);
    }

    k--;
  }

  return result;
};

// Output: [[1, 2], [1, 4], [1, 6]]
console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));

// Output: [[-10, 3], [-10, 5], [-10, 6], [-10, 7], [-10, 8], [-4, 3], [-4, 5], [0, 3], [0, 3], [0, 5]]
console.log(kSmallestPairs([-10, -4, 0, 0, 6], [3, 5, 6, 7, 8, 100], 10));

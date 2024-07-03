// https://leetcode.com/problems/kth-largest-element-in-a-stream/

class KthLargest {
  constructor(k, nums) {
    this.k = k; // Store the k value
    this.minHeap = new MinHeap();

    // Add initial elements to the heap
    nums.forEach((num) => {
      this.add(num);
    });
  }

  add(val) {
    if (this.minHeap.size() < this.k) {
      this.minHeap.push(val);
    } else if (val > this.minHeap.peek()) {
      this.minHeap.pop();
      this.minHeap.push(val);
    }

    return this.minHeap.peek();
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Returns the number of elements in the heap
  size() {
    return this.heap.length;
  }

  // Adds a new value to the heap
  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  // Removes and returns the smallest element (root) of the heap
  pop() {
    if (this.size() === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return top;
  }

  // Returns the smallest element (root) of the heap without removing it
  peek() {
    return this.heap[0];
  }

  // Ensures the heap property is maintained after adding a new element
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  // Ensures the heap property is maintained after removing the root element
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (rightChild < (swap === null ? element : leftChild))
          swap = rightChildIndex;
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // 4
console.log(kthLargest.add(5)); // 5
console.log(kthLargest.add(10)); // 5
console.log(kthLargest.add(9)); // 8
console.log(kthLargest.add(4)); // 8

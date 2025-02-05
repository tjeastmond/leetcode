function quickSortMiddlePivot(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  console.log(arr);

  // Select the middle element as the pivot
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left: number[] = [];
  const right: number[] = [];

  // Partition the array excluding the pivot itself
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  // Recursively apply quickSort to left and right partitions and combine the result
  return [...quickSortMiddlePivot(left), pivot, ...quickSortMiddlePivot(right)];
}

const unsortedArray = [29, 10, 14, 37, 14, 40, 23, 18];
const sortedArray = quickSortMiddlePivot(unsortedArray);
console.log(sortedArray); // Output: [10, 14, 14, 18, 23, 29, 37, 40]

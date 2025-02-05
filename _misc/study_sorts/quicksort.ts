function quickSort(arr: number[]): number[] {
  console.log("arr", arr);
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively apply quickSort and concatenate results
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [35, 12, 43, 8, 51];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [8, 12, 35, 43, 51]

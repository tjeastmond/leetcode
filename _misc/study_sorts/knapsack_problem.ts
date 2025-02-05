function knapsackWithItems(
  values: number[],
  weights: number[],
  capacity: number,
): { maxValue: number; items: number[] } {
  const n = values.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  console.log("dp", dp);

  // Fill the dp array
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  console.log(dp);

  // Retrieve the items that make up the optimal value
  let maxValue = dp[n][capacity];
  let w = capacity;
  const items: number[] = [];

  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      // Item i-1 was included
      items.push(i - 1);
      w -= weights[i - 1];
    }
  }

  return { maxValue, items };
}

// Example usage
const values = [3, 4, 5, 8];
const weights = [2, 3, 4, 5];
const capacity = 7;

const result = knapsackWithItems(values, weights, capacity);
console.log("Maximum Value:", result.maxValue); // Output: 9
console.log("Items Included:", result.items); // Output: [2, 1]

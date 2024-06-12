// https://leetcode.com/problems/max-area-of-island

var maxAreaOfIsland = function (grid) {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        // Update max to the maximum area found
        max = Math.max(max, dfs(grid, i, j));
      }
    }
  }

  return max;
};

function dfs(grid, i, j) {
  // Base cases
  // prettier-ignore
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
    return 0;
  }

  // Mark the cell as visited
  grid[i][j] = 0;

  return (
    1 +
    dfs(grid, i + 1, j) +
    dfs(grid, i - 1, j) +
    dfs(grid, i, j + 1) +
    dfs(grid, i, j - 1)
  );
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);

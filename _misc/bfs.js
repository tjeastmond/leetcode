// Modified graph represented as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

function bfs(graph, startNode, searchValue) {
  let visited = {}; // Keep track of nodes that have been visited
  let queue = []; // Initialize a queue to manage the order of traversal

  // Add the starting node to the queue and mark it as visited
  queue.push(startNode);
  visited[startNode] = true;

  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue a node from the front of the queue

    if (node === searchValue) {
      return true; // Found the search value
    }

    // Iterate through all the neighbors of the node
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        // If the neighbor hasn't been visited
        queue.push(neighbor); // Enqueue the neighbor
        visited[neighbor] = true; // Mark the neighbor as visited
      }
    }
  }

  return false; // Search value not found in the graph
}

// Example usage: Search for the node 'E' starting from node 'A'
const searchValue = 'E';
const found = bfs(graph, 'A', searchValue);
console.log(found ? `Node '${searchValue}' was found.` : `Node '${searchValue}' was not found.`);

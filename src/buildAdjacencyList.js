// 1
// | \
// 2 - 3
//     |
//     4

const edgeList = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4]
];

function buildAdjacencyList(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []); // +1 for 1-based indexing

  edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u); // For undirected graph, add both connections
  });

  return graph;
}

console.log(buildAdjacencyList(4, edgeList)); // [ [], [ 2, 3 ], [ 1, 3 ], [ 1, 2, 4 ], [ 3 ] ]

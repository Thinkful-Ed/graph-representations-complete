class AdjacencyList {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex1].includes(vertex2)
    );
  }

  getNeighbors(vertex) {
    return this.adjacencyList[vertex] || [];
  }
}

const graph = new AdjacencyList();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log(graph.hasEdge("A", "B")); // Should log true
console.log(graph.hasEdge("A", "C")); // Should log true
console.log(graph.hasEdge("B", "C")); // Should log false as no edge was added between B and C

console.log(graph.getNeighbors("A")); // Should log ['B', 'C']

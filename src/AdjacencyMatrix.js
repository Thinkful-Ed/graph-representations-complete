class AdjacencyMatrix {
  constructor() {
    this.adjacencyMatrix = [];
    this.vertices = new Map();
  }

  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, this.vertices.size);
      this.expandMatrix();
    }
  }

  expandMatrix() {
    for (let i = 0; i < this.adjacencyMatrix.length; i++) {
      this.adjacencyMatrix[i].push(0);
    }
    this.adjacencyMatrix.push(
      new Array(this.adjacencyMatrix.length + 1).fill(0)
    );
  }

  addEdge(vertex1, vertex2, weight = 1) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      this.adjacencyMatrix[index1][index2] = weight;
      this.adjacencyMatrix[index2][index1] = weight;
    }
  }

  hasEdge(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      return this.adjacencyMatrix[index1][index2] !== 0;
    }
    return false;
  }

  getEdgeWeight(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const index1 = this.vertices.get(vertex1);
      const index2 = this.vertices.get(vertex2);
      return this.adjacencyMatrix[index1][index2];
    }
    return 0;
  }
}

const graph = new AdjacencyMatrix();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 2); // Adds an undirected edge with a weight of 2.
graph.addEdge("B", "C", 3); // Adds another undirected edge with a weight of 3.

console.log(graph.hasEdge("A", "B")); // Expected: true
console.log(graph.getEdgeWeight("A", "B")); // Expected: 2
console.log(graph.hasEdge("C", "B")); // Expected: true, weight is 3 both ways.

/*
  2---0
 / \
1---3
*/

//edge list -> shows the connection of each nodes
const graphA = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//adjacency list -> the index of the array is used as the actual node value of the graph
const graphB = [[2], [2, 3], [0, 1, 3], [1, 2]];

//adjacency matrix -> only 0s and 1s, showing if node X has connection to node Y
const graphC = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

//we can use objects/hashtables
//example implementation using adjacency list

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
    // console.log(this.numberOfNodes);
    return this.adjacentList[node];
  }
  addEdge(node1, node2) {
    // undirected graph
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
      return false;
    } else {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    }
    return this;
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5

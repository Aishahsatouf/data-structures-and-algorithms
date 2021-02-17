const [Node, Graph] = require('../Data-structure/graph/graph');
const bfs = require('../Data-structure/graph/breadth-first-graph/breadth-first');
const dfs = require('../Data-structure/graph/depth-first/depth-first')
const getEdge=require('../Data-structure/graph/get-edges/get-edges')
const graph = new Graph();

const two = new Node(2);
const three = new Node(3);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);

const graph2=new Graph();
let vertex = new Node('Pandora');
let vertexTwo = new  Node('Arendelle');
let vertexThree = new  Node('Metroville');
let vertexFour = new  Node('Monstropolis');
let vertexFive = new  Node('Narnia');
let vertexSix = new  Node('Naboo');

graph2.addNode(vertex);
graph2.addNode(vertexTwo);
graph2.addNode(vertexThree);
graph2.addNode(vertexFour);
graph2.addNode(vertexFive);
graph2.addNode(vertexSix);
graph2.addDirectedEdge(vertex, vertexTwo, 150);
graph2.addDirectedEdge(vertex, vertexThree, 82);
graph2.addDirectedEdge(vertexTwo, vertexThree, 99);
graph2.addDirectedEdge(vertexTwo, vertexFour, 42);
graph2.addDirectedEdge(vertexThree, vertexFour, 105);
graph2.addDirectedEdge(vertexThree, vertexFive, 37);
graph2.addDirectedEdge(vertexThree, vertexSix, 26);
graph2.addDirectedEdge(vertexFour, vertexSix, 73);
graph2.addDirectedEdge(vertexFive, vertexSix, 250);
graph2.addDirectedEdge(vertexTwo, vertex, 150);
graph2.addDirectedEdge(vertexThree, vertex, 82);
graph2.addDirectedEdge(vertexThree, vertexTwo, 99);
graph2.addDirectedEdge(vertexFour, vertexTwo, 42);
graph2.addDirectedEdge(vertexFour, vertexThree, 105);
graph2.addDirectedEdge(vertexFive, vertexThree, 37);
graph2.addDirectedEdge(vertexSix, vertexThree, 26);
graph2.addDirectedEdge(vertexSix, vertexFour, 73);
graph2.addDirectedEdge(vertexSix, vertexFive, 250);

// graph.addNode(two);
// graph.addNode(three);
// graph.addNode(six);
// graph.addNode(seven);
// graph.addNode(eight);

// graph.addDirectedEdge(two, six);
// graph.addDirectedEdge(two, three);
// graph.addDirectedEdge(three, seven);
// graph.addDirectedEdge(eight, two);
// graph.addDirectedEdge(three, six);

describe('implementation of graphs', () => {
  it('add a node to the graph', () => {
    graph.addNode(two);
    expect(graph.size()).toEqual(1);
  });
  it('add an edge successfuly and return a collection of all nodes as a list ', () => {
    graph.addNode(three);
    graph.addDirectedEdge(two, three);
    expect(graph.size()).toEqual(2);
    expect(graph.getAll()).toEqual(['node-->{"value":2}',
      'edge-->[{"vertex":{"value":3}}]',
      'node-->{"value":3}',
      'edge-->[]'
    ]);
  });
  it('retrives all the neighbors of a node ', () => {
    graph.addNode(six);
    graph.addDirectedEdge(two, six);
    expect(JSON.stringify(graph.getNeighbours(two))).toEqual('[{"vertex":{"value":3}},{"vertex":{"value":6}}]')
  });
  it('will return the size of a graph', () => {
    expect(graph.size()).toEqual(3);
  });
  it('will return the result of the bfs based on the node started', () => {
    graph.addNode(seven);
    graph.addNode(eight);
    graph.addDirectedEdge(three, seven);
    graph.addDirectedEdge(eight, two);
    graph.addDirectedEdge(three, six);
    expect(bfs(two,graph)).toEqual([ 2, 3, 6, 7 ]);
    expect(bfs(eight,graph)).toEqual([ 8, 2, 3, 6, 7 ]);


  });
  it('should return true and the edge weight for two connected nodes', () => {
    expect(getEdge([vertex, vertexTwo],graph2)).toEqual([true, 150]);
  });
  it('should return false and the edge weight  of zero for two unconnected nodes', () => {
    expect(getEdge([vertexSix, vertex],graph2)).toEqual([false, 0]);
  });
  it('should return true and the edge weight summation for the connected nodes', () => {
  expect(getEdge([vertex, vertexTwo, vertexThree],graph2)).toEqual([true, 249]);
});
it('will return the result of the dfs based on the node started', () => {
  // graph.addNode(seven);
  // graph.addNode(eight);
  // graph.addDirectedEdge(three, seven);
  // graph.addDirectedEdge(eight, two);
  // graph.addDirectedEdge(three, six);
  expect(dfs(two,graph)).toEqual([ 2, 3, 7, 6 ]);
  expect(dfs(eight,graph)).toEqual([  8, 2, 3, 7, 6 ]);


});
});
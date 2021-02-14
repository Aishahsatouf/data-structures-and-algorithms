const [Node, Graph] = require('../Data-structure/graph/graph');
const bfs = require('../Data-structure/graph/breadth-first-graph/breadth-first')
const graph = new Graph();

const two = new Node(2);
const three = new Node(3);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);

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
  // it('will return the result of the bfs based on the node started', () => {
  //   graph.addNode(seven);
  //   graph.addNode(eight);
  //   graph.addDirectedEdge(three, seven);
  //   graph.addDirectedEdge(eight, two);
  //   graph.addDirectedEdge(three, six);
  //   expect(bfs(two,graph)).toEqual('Set {{"value": 2}, {"value": 3}, {"value": 6}, {"value": 7}}')

  // });
});
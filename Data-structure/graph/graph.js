'use strict';
class Node{
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
       
        this._adjacencyList = new Map();
    }

    addNode(node) {
        this._adjacencyList.set(node, []);
    }

    addDirectedEdge(startNode, endNode, weight) {
        if (!this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode)) {
            return ("NOT FOUND!");;
        }

        const adjacencies = this._adjacencyList.get(startNode);
        adjacencies.push(new Edge(endNode, weight));
    }
    getAll() {
        let array=[]
        for (const [node, edge] of this._adjacencyList.entries()) {
          array.push(`node-->${JSON.stringify(node)}`);
          array.push(`edge-->${JSON.stringify(edge)}`);
          // array.push(node,edge)

        }
        return array;
    }

    getNeighbours(node) {
        if (!this._adjacencyList.has(node)) { 
            return("NOT FOUND!");
        }
        return this._adjacencyList.get(node);
    }
    size(){
       let counter=0;
        for (const [node, edge] of this._adjacencyList.entries()) {
          counter=counter+1;  
        }
        return counter;
    }

}

module.exports=[Node, Graph];
'use strict';

function dfs(startNode,graph) {

    if(!startNode) return null;
    let result=[];
    const visitedNodes = new Set();
    const _traverseNeighbors = (node) => {
      visitedNodes.add(node);
      result.push(node.value)
      const neighbors = graph.getNeighbours(node);
      for(let edge of neighbors){
        if(!visitedNodes.has(edge.vertex)){
          _traverseNeighbors(edge.vertex);
        }
      }
    }
    _traverseNeighbors(startNode);
    return result;
}

module.exports=dfs;
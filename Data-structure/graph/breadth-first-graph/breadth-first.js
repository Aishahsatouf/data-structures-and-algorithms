'use strict';

function  bfs(startNode,graph) {
    const queue = [];
    const result=[];
    const visitedNodes = new Set();
    queue.push(startNode);
    visitedNodes.add(startNode);
    result.push(startNode.value)
    while (queue.length) {
        const currentNode = queue.shift();
        const neighbors = graph.getNeighbours(currentNode);
        for (let neighbor of neighbors) {
            const neighborNode = neighbor.vertex;
            if (visitedNodes.has(neighborNode)) {
                continue;
            } else {
                visitedNodes.add(neighborNode);
                result.push(neighborNode.value)
            }
            queue.push(neighborNode);
        }
    }
    return result;

}

module.exports=bfs;
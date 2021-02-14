'use strict';

function  bfs(startNode,graph) {
    const queue = [];
    const visitedNodes = new Set();
    queue.push(startNode);
    visitedNodes.add(startNode);
    while (queue.length) {
        const currentNode = queue.shift();
        const neighbors = graph.getNeighbours(currentNode);
        for (let neighbor of neighbors) {
            const neighborNode = neighbor.vertex;
            if (visitedNodes.has(neighborNode)) {
                continue;
            } else {
                visitedNodes.add(neighborNode);
            }
            queue.push(neighborNode);
        }
    }
    return visitedNodes;
}

module.exports=bfs;
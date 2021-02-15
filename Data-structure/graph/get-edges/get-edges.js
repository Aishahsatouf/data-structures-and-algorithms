'use strict';

function getEdge(array,graph) { 

    if (!array[0] || !array[1]) {
        return [false, 0];
    }

    let output = false; 
    let outputWeight = 0; 

    for (let i = 0; i <= array.length - 1; i++) {
        //to find the adjacent vertices, in other words the cities around the specific city
        let neighbor = graph.getNeighbours(array[i]);

        for (let j = 0; j <= neighbor.length - 1; j++) {
            // to check if the neighbor city is the one connected to the current city
            if (array[i + 1] === neighbor[j].vertex) {
                outputWeight += neighbor[j].weight;
                output = true;
            }
        }
        if (output === false) {
            output = false;
            outputWeight = 0;
            return [output, outputWeight];
        }
    }
    return [output, outputWeight];
}

module.exports=getEdge;
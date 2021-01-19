'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class kAryTree {
    constructor(root = null) {
        this.root = root;
    }
}

function FizzBuzzTree(tree) {

    if (!tree.root) {
        throw 'Tree is empty!';
    }

    tree.root.value = check(tree.root.value);

    const _traverse = (node) => {
        node.children.forEach((child) => {
            child.value = check(child.value);
            _traverse(child);
        });
    };

    _traverse(tree.root);

    function check(value) {
        
        if (value % 5 == 0 && value % 3 == 0) {
            return 'FizzBuzz';
        } else if (value % 5 == 0) {
            return 'Buzz'; 
        } else if (value % 3 == 0) {
            return 'Fizz'; 
        } else {
            return 'LOL'; 
        }
    }
    return tree; 
}

module.exports = { Node, kAryTree, FizzBuzzTree };
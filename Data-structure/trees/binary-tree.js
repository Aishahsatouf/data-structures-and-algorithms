'use strict';
const BinarySearchTree= require('./tree');
const Node = require ('./node')

class BinaryTree {
    constructor(value){
        if (value) {
            this.root = new node(value, null, null);
          } else {
            this.root = null;
          }
    }
    findMaximumValue(){
        if (!this.root) return null;
        let maximum= 0;
    
        let _findMax = (currentNode) => {
          if (currentNode.value > maximum) {
            maximum = currntNode.value;
          }
    
          if (currentNode.left) {
            _findMax(currentNode.left);
          }
          if (currentNode.right) {
            _findMax(currentNode.right);
          }
        };
        _findMax(this.root);
        return maximum;
    }
}
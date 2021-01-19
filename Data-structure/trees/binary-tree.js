'use strict';
const BinarySearchTree= require('./binary-search');
const Node = require ('./node');
const Queue=require('../stacksAndQueues/queue');

class BinaryTree {
    constructor(value){
        if (value) {
            this.root = new node(value, null, null);
          } else {
            this.root = null;
          }
    }
    preOrder() {
      if (!this.root) { throw new Error('this is empty tree'); }
      let results = [];
      let _traverse = (node) => {
          results.push(node.value);
          if (node.left) _traverse(node.left);
          if (node.right) _traverse(node.right);
      };
      _traverse(this.root);
      return results;

  };
  postOrder() {
      if (!this.root) {throw new Error('this is empty tree');}
      let results = [];
      let _traverse = (node) => {
          if (node.left) _traverse(node.left);
          if (node.right) _traverse(node.right);
          results.push(node.value);
      };
      _traverse(this.root);
      return results;
  };
  inOrder() {
      if (!this.root) { throw new Error('this is empty tree');}
      let results = [];
      let _traverse = (node) => {
          if (node.left) _traverse(node.left);
          results.push(node.value);
          if (node.right) _traverse(node.right);
      };
      _traverse(this.root);
      return results;
  };
    findMaximumValue(){
        if (!this.root) return null;
        let maximum= this.root;
    
        let _findMax = (currentNode) => {
          if (currentNode.value > maximum.value) {
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
        return maximum.value;
    }
    breadthFirst(){
     if (!this.root){
       return 'it is an empty tree';
     }
     let results=[];
     let _traverse=(node)=>{
       let queue=new Queue;
       queue.enqueue(node);
       while(queue.front){
         let currntNode=queue.front.value;
         if(currntNode.left) queue.enqueue(currntNode.left);
         if (currntNode.right) queue.enqueue(currntNode.right);
         results.push(queue.dequeue().value.value);
         currntNode = queue.front;
       }
      };
      _traverse(this.root);
      return results;

    }
}

module.exports=BinaryTree;
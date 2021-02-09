'use strict';
const HashTable=require('../../Data-structure/hashtable/hashtable');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
};

class BinaryTree {
    constructor(value) {
        if (value) {
            this.root = new node(value, null, null);
        } else {
            this.root = null;
        }
    }
    add(input){
        if(typeof input !='number'){throw new Error}
        let newNode = new Node(input);
        if (!this.root){
            this.root=newNode;
            return this;
        };
        let current= this.root;
        while(current){
            if (current.left===null){
                current.left = newNode;
                return this
            }else if (current.left!==null){
                current=current.left;
            }else if (current.right===null){
                current.right=newNode;
                return this
            }else{
             current=current.right;
            }
        }

    };
}

function treeIntersection (tree1, tree2) {

    if(!tree1.root || !tree2.root) {throw new Error};
  
    let hash1 = new HashTable (500);
    let hash2 = new HashTable (500);
    let outputArray = [];
  
    function _treeTraverse1 (node) {
      if(!hash1.contains(node.value.toString())){
        hash1.set(node.value.toString());
      }
      if(node.left) _treeTraverse1(node.left);
      if(node.right) _treeTravers1(node.right);
  
    }

    function _treeTraverse2 (node) {
      if(hash1.contains(node.value.toString()) && !hash2.contains    (node.value.toString())){
        outputArray.push(node.value);
        hash1.set(node.value.toString());
      }
      if(node.left) _treeTraverse2(node.left);
      if(node.right) _treeTraverse2(node.right);
  
    }
  
    _treeTraverse1(tree1.root);
    _treeTraverse2(tree2.root);
  
    return outputArray;
  }

module.exports=[BinaryTree,treeIntersection]

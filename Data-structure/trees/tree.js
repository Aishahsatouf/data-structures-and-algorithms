'use strict';
const Node = require('./node');

class BinaryTree {
    constructor() {
        this.root = null;
    };
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
    add(input){
      if(typeof input !='number'){throw new Error(`you can't compare an add to binary search tree`)}
      let newNode = new Node(input);
       if (!this.root){
           this.root=newNode;
           return this;
       };
       let current= this.root;
       while(current){
           if (input=== current.value){throw new Error(`can't insert a value already exists in a sarch binary tree`);}
           if (input<current.value){
               if (current.left===null){
                   current.left = newNode;
                   return this
               }
               current=current.left;
           }else{
               if(current.right===null){
                 current.right=newNode;
                 return this;
               }
               current=current.right;
           }
       }
    };
    contains(input){
        if(typeof input !='number'){throw new Error('you can not compare any thing but numbers')};
        if(!this.root){return false};
        let current=this.root;
        let isContaine=false;
        while(current&&!isContaine){
            if(input<current.value){
                current=current.left;
            }else if(input>current.value){
                current=current.right;
            }else{
                isContaine=current;
            }
        }
        if(!isContaine)return false
        else return true;
    }
}

module.exports= BinaryTree
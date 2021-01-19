'use strict';
const Node = require('./node');
const BinaryTree=require('./binary-tree');

class BinarysearchTree extends BinaryTree{
    // constructor() {
    //     this.root = null;
    // };
   
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
    findMaximumValues() {
        let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }
}

module.exports= BinarysearchTree
'use strict';
const Node =require ('../linkedList/node');

class Stack{
    constructor(){
        this.top=null;
    }
    push(val){
        if (val==null||val==undefined){throw new Error('this value is invalide')};
        let node=new Node(val);
        let temporary=this.top;
        this.top=node;
        node.next=temporary;
    }
    pop(){
        if (!this.top){throw new Error (`it's empty stack`)}
        let temporary =this.top;
        this.top=this.top.next;
        return temporary;
    }
    peek(){
        if (!this.top){throw new Error (`it's empty stack`)}
         return this.top
    }
    isEmpty(){
        return (!this.top);
    }
}

module.exports = Stack;
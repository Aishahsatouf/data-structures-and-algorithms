'use strict';
const Node =require ('../linkedList/node');
class Queue{
    constructor(){
        this.front=null;
        this.storage=null;
    }
    enqueue(val){
        let node =new Node(val);
        if (!this.front){
            this.front=node;
            this.storage=node;
        }else{
            this.storage.next=node;
            this.storage=node;
        }
    }
    dequeue(){
        if (!this.front){throw new Error('this qeue is empty')};
        let temporary=this.front;
        this.front=this.front.next;
        return temporary;
    }
    peek(){
        if (!this.front){throw new Error('this qeue is empty')};
        return this.front;
    }
    isEmpty(){
        return(!this.front);
    }
}

module.exports=Queue;
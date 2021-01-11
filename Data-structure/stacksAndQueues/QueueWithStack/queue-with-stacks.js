'use strict';

const Stack=require('../stack');

class PseudoQueue{
    constructor(){
        // create two stack objects 
        this.Stack1=new Stack;
        this.Stack2=new Stack;
    }
    enqueue(value){
        // push my data to the first stack
      this.Stack1.push(value);
    }
    dequeue(){
        //  if bothstacks are empty
     if(!this.Stack1.top&&!this.Stack2.top){throw new Error('my queue is empty')};
       // if stack 2 is empty I'm gonna push into it reversing stack1
     if(!this.Stack2.top){
         //loop over my stack1 and pus into 2
         while(this.Stack1.top){
             let temporaryValue=this.Stack1.pop();
             this.Stack2.push(temporaryValue);
        }
     }
     return this.Stack2.pop();
    }
    isEmpty(){
        if(this.Stack2.isEmpty()&&this.Stack1.isEmpty()){return true;}
        else {return false;}
    }
}
module.exports = PseudoQueue;
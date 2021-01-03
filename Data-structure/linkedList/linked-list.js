'use strict';
const node=require('./node')
class LinkedList{
    constructor(){
     this.head=null;
    }
    insert(value){
     // if the user did not send value or invalid one
        if(!value){
          return 'this is not a valid value';
        }
      // if the link list already has a head then my new node is head and if not also it's going to be head  
       let newNode = new node(value);
       newNode.next=this.head;
       this.head=newNode;
       return this.head;
    }
    includes(value){
     let currentNode = this.head
     // to test the head itself 
     if (currentNode.value===value){return true;};
     // to test other nodes 
     while(currentNode.next){
       currentNode=currentNode.next;
       if(currentNode.value===value){return true;};
     }
     return false;
    }
    toString(){
        // if i have empty linked list 
        if(!this.head){return 'NULL';}
        // if i have values then loop through those values and return me a string
        let currentNode=this.head;
        let string=``;
        while(currentNode){
            string+=`{${currentNode.value}} -->`;
            currentNode=currentNode.next
        }
        string+='NULL';
        return string;  
    }
}
module.exports= LinkedList;
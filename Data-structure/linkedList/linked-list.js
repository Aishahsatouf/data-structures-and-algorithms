'use strict';
const node = require('./node')
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    // if the user did not send value or invalid one
    if (!value) {
      return 'this is not a valid value';
    }
    // if the link list already has a head then my new node is head and if not also it's going to be head  
    let newNode = new node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  includes(value) {
    let currentNode = this.head
    // to test the head itself 
    if (currentNode.value === value) { return true; };
    // to test other nodes 
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === value) { return true; };
    }
    return false;
  }
  toString() {
    // if i have empty linked list 
    if (!this.head) { return 'NULL'; }
    // if i have values then loop through those values and return me a string
    let currentNode = this.head;
    let string = ``;
    while (currentNode) {
      string += `{${currentNode.value}} -->`;
      currentNode = currentNode.next
    }
    string += 'NULL';
    return string;
  }
  // append values to the end of the list
  append(value) {
    // if the user did not send value or invalid one
    if (!value) {return 'this is not a valid value';}
    //if the linked list is empty insert as a head
    if (!this.head) {return this.insert(value);}
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    let newNode = new node(value);
    currentNode.next = newNode;
    return this;
  }
  insertBefore(value, newVal) {
     // if the user did not send value or invalid one
    if (!value || !newVal) { return "these are invalid arguments"; };
      //if the linked list is empty 
    if (!this.head) { return "there is NO data here" };
    //if the value is included in the list run the code
    if (this.includes(value)) {
      let currentNode = this.head;
      let before = null;
      while (currentNode) {
        if (currentNode.value === value) {
          let newNode = new node(newVal);
          if (!before) {// if the value is in the head.
            this.head = newNode
          }
          else {//the previouse value is pointing to the new node
            before.next = newNode;
          }
          newNode.next = currentNode;
          return this;
        }
        else {//keep forward if through the list
          before = currentNode;
          currentNode = currentNode.next;
        }
      }
    }else{//if the value not included
      return "this value is not included in the list"
    };
  }
  insertAfter(value, newVal) {

    if (!value || !newVal) { return "these are invalid arguments"; };
    if (!this.head) { return "there is now data here" };
    if (this.includes(value)) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          let newNode = new node(newVal);
          newNode.next = currentNode.next;//to switch positions firstly
          currentNode.next = newNode;//to reconnect reversely
          return this;
        }
        currentNode = currentNode.next;//keep looping through list 
      }
    } else {
      return "this value is not included in the list"
    };

  }
}
module.exports = LinkedList;
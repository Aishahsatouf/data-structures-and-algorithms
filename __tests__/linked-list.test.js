'use strict';
const LinkedList=require('./../Data-structure/linkedList/linked-list');
const node=require('./../Data-structure/linkedList/node');
 describe('linked List Modules',()=>{
     let linkedList = new LinkedList();
     it ('can intanciate empty linked list',()=>{
         expect(linkedList.head).toBeNull();
     });
     it ('can insert to the linked list',()=>{
         expect(linkedList.insert(1).value).toEqual(1);
     });
     it('The head property will properly point to the first node in the linked list', () => {
        expect(linkedList.head.value).toEqual(1);
    });
     it('has a head which is the same I lastly inserted',()=>{
         linkedList.insert(2);
         expect(linkedList.head.value).toEqual(2);
         linkedList.insert(3);
         expect(linkedList.head.value).toEqual(3);
     });
     it('will return true if the value already exists in the linked list',()=>{
         expect(linkedList.includes(1)).toBe(true);
     });
     it('will return false if the value does not exist in the linked list',()=>{
         expect(linkedList.includes(5)).toBe(false);
     });
     it('will return a string that is the same as expected',()=>{
         expect(linkedList.toString()).toBe('{3} -->{2} -->{1} -->NULL');
     });
 });

 describe('Node Modules',()=>{
  it ('costructor fuctionality',()=>{
      let input='test';
      let newNode=new node(input)
      expect(newNode.value).toEqual('test');
      expect(newNode.next).toEqual(null);
  })
 });
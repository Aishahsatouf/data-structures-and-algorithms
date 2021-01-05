'use strict';
const LinkedList=require('./../Data-structure/linkedList/linked-list');
const node=require('./../Data-structure/linkedList/node');
const zipLists = require('../Data-structure/llZip/ll-zip.js');
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
     it('add a node to the end of the linked list',()=>{
        expect(linkedList.append(4).toString()).toEqual('{3} -->{2} -->{1} -->{4} -->NULL'); 
     });
     it('Can successfully add multiple nodes to the end of a linked list',()=>{
        linkedList.append(5);
        linkedList.append(6);
        expect(linkedList.toString()).toEqual('{3} -->{2} -->{1} -->{4} -->{5} -->{6} -->NULL');
    });
    it ('Can successfully insert a node before a node located i the middle of a linked list',()=>{
      expect(linkedList.insertBefore(1,7).toString()).toBe('{3} -->{2} -->{7} -->{1} -->{4} -->{5} -->{6} -->NULL')
    });
    it('Can successfully insert a node before the first node of a linked list',()=>{
        expect(linkedList.insertBefore(3,8).toString()).toBe('{8} -->{3} -->{2} -->{7} -->{1} -->{4} -->{5} -->{6} -->NULL') 
    });
    it ('Can successfully insert after a node in the middle of the linked list',()=>{
        expect(linkedList.insertAfter(7,9).toString()).toBe('{8} -->{3} -->{2} -->{7} -->{9} -->{1} -->{4} -->{5} -->{6} -->NULL')
    });
    it ('Can successfully insert a node after the last node of the linked list',()=>{
        expect(linkedList.insertAfter(6,10).toString()).toBe('{8} -->{3} -->{2} -->{7} -->{9} -->{1} -->{4} -->{5} -->{6} -->{10} -->NULL') 
    });
    it (' kthFromEnd() returns error Where k is greater than the length of the linked list',()=>{
        expect(linkedList.kthFromEnd(15)).toBe('Exception') 
    });
    it (' returns the value of the head Where k is equal to the length of the linked list',()=>{
        expect(linkedList.kthFromEnd(9)).toBe(8) 
    });
    it ('returns an error if the value of k is less than zero',()=>{
        expect(linkedList.kthFromEnd(-5)).toBe('This value is invalid') 
    });
    it ('returns an error if the size of list is 1',()=>{
        let linkedListII = new LinkedList();
         linkedListII.insert(2);
        expect(linkedListII.kthFromEnd(2)).toBe('this list contains only one value 2') 
    });
    it ('test the output',()=>{
        expect(linkedList.kthFromEnd(2)).toBe(5) 
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

 describe('LL-Zip Modules',()=>{
  it('can zip two lists',()=>{
      let ll1= new LinkedList();
      ll1.append(1);
      ll1.append(3);
      ll1.append(2);
      let ll2= new LinkedList();
      ll2.append(5);
      ll2.append(9);
      ll2.append(4);
    expect(zipLists(ll1,ll2).toString()).toEqual('{1} -->{5} -->{3} -->{9} -->{2} -->{4} -->NULL');
  });
  it ('can zip list if first is empty',()=>{
      let ll2=new LinkedList();
      ll2.append(1);
      ll2.append(2);
      ll2.append(3);
      let ll1= new LinkedList();
      expect(zipLists(ll1,ll2).toString()).toEqual('{1} -->{2} -->{3} -->NULL');
  });
  it ('can zip lists if the second is empty',()=>{
    let ll1=new LinkedList();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    let ll2= new LinkedList();
    expect(zipLists(ll1,ll2).toString()).toEqual('{1} -->{2} -->{3} -->NULL'); 
  });
  it ('can zip lists if first is shorter',()=>{
    let ll1=new LinkedList();
    ll1.append(1);
    let ll2= new LinkedList();
    ll2.append(2);
    ll2.append(3);
    expect(zipLists(ll1,ll2).toString()).toEqual('{1} -->{2} -->{3} -->NULL');
  });
  it ('can zip lists if the second is shorter',()=>{
    let ll1=new LinkedList();
    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    let ll2= new LinkedList();
    ll2.append(4);
    expect(zipLists(ll1,ll2).toString()).toEqual('{1} -->{4} -->{2} -->{3} -->NULL');
  });
  it('returns null if both empty',()=>{
      let ll1=new LinkedList();
      let ll2= new LinkedList();
      expect(zipLists(ll1,ll2).toString()).toEqual('NULL');
  })
 })
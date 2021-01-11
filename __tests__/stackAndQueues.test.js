'use strict';

const Stack=require('../Data-structure/stacksAndQueues/stack');
const Queue=require('../Data-structure/stacksAndQueues/queue');
const PseudoQueue = require('../Data-structure/stacksAndQueues/QueueWithStack/queue-with-stacks');

describe('Stack class',()=>{
    let stack =new Stack();
    
    it ('Can successfully push onto a stack',()=>{
        stack.push(1);
        expect(stack.top.value).toEqual(1);
        expect(stack.isEmpty()).toEqual(false);
    });
    it ('Can successfully push multiple values onto a stack',()=>{
       stack.push(2);
       stack.push(3);
       expect(stack.top.value).toEqual(3);
    });
    it ('Can successfully pop off the stack',()=>{
        
      expect(stack.pop().value).toEqual(3);
    });
    it ('Can successfully empty a stack after multiple pops',()=>{
      while(stack.top){
          stack.pop();
      };
      expect(stack.isEmpty()).toEqual(true);
    });
    it ('Can successfully peek the next item on the stack',()=>{
     stack.push(1);
     stack.push(2);
     expect(stack.peek().value).toEqual(2);
    });
    it ('Can successfully instantiate an empty stack',()=>{
        expect(stack).toBeInstanceOf(Stack);
    });
    it('Calling pop or peek on empty stack raises exception',()=>{
        while(stack.top){
            stack.pop();
        };
        expect(()=>{stack.pop()}).toThrow();
        expect(()=>{stack.peek()}).toThrow();
    });
});
describe('Queues',()=>{
  let queue=new Queue();
  it ('Can successfully enqueue into a queue',()=>{
      queue.enqueue(1);
      expect(queue.front.value).toEqual(1);
  });
  it ('Can successfully enqueue multiple values into a queue',()=>{
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      expect(queue.front.value).toEqual(1);
      expect(queue.isEmpty()).toEqual(false);
  });
  it('Can successfully dequeue out of a queue the expected value',()=>{
      expect(queue.dequeue().value).toEqual(1);
  });
  it ('Can successfully peek into a queue, seeing the expected value',()=>{
      console.log(queue.front.value,queue.storage.value);
      expect(queue.peek().value).toEqual(2);
  });
  it('Can successfully empty a queue after multiple dequeues',()=>{
      while(queue.front){
          queue.dequeue();
      };
      expect(queue.isEmpty()).toEqual(true);
  });
  it('Can successfully instantiate an empty queue',()=>{
      expect(queue).toBeInstanceOf(Queue);
  });
  it ('Calling dequeue or peek on empty queue raises exception',()=>{
      while(queue.front){
          queue.dequeue();
      };
      expect(()=>{queue.dequeue()}).toThrow();
      expect(()=>{queue.peek()}).toThrow();
  });
});

describe('Pseudoqueue',()=>{
    let pseudo=new PseudoQueue();
    it ('Can successfully instantiate an empty queue',()=>{
        expect(pseudo.isEmpty()).toBe(true);
    });
    it ('Can successfully enqueue into a queue',()=>{
       pseudo.enqueue(1);
       expect(pseudo.Stack1.top.value).toEqual(1);
    });
    it ('Can successfully enqueue multiple values into a queue',()=>{
        pseudo.enqueue(2);
        pseudo.enqueue(3);
        pseudo.enqueue(4);
        expect(pseudo.Stack1.top.value).toEqual(4);
    });
    it('Can successfully dequeue out of a queue the expected value',()=>{
        expect(pseudo.dequeue().value.value).toEqual(1);
    });
    it('Calling dequeue on empty queue raises exception',()=>{
        while(!pseudo.isEmpty()){
            pseudo.dequeue();
        }
        expect(()=>{pseudo.dequeue()}).toThrow();
    });
});
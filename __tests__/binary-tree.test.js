'use strict';

const Node=require('../Data-structure/trees/node');
const BinaryTree=require('../Data-structure/trees/tree');

describe ('Binary tree class ',()=>{

    let testTree=new BinaryTree();
    it ('Can successfully instantiate an empty tree',()=>{
        expect(testTree.root).toBe(null);
    });
    it('Will throw error if insrted value is not a number',()=>{
        expect(()=>{testTree.add('string')}).toThrow()
    });
    it('Will throw error if sorted when empty',()=>{
        expect(()=>{testTree.postOrder()}).toThrow();
        expect(()=>{testTree.preOrder()}).toThrow();
        expect(()=>{testTree.inOrder()}).toThrow();
    });
    it('Will return false if trying to find in empty tree',()=>{
        expect(testTree.contains(22)).toBe(false);
    });
    it ('Can successfully instantiate a tree with a single root node',()=>{
        expect(testTree.add(30).root.value).toEqual(30);
    });
    it('Can successfully add a left child and right child to a single root node',()=>{
        testTree.add(20);
        testTree.add(40);
        testTree.add(10);
        testTree.add(25);
        testTree.add(50);
        testTree.add(35);
        expect(testTree.root.left.value).toEqual(20);
        expect(testTree.root.right.value).toEqual(40);
    });
    it('Can successfully return a collection from a preorder traversal',()=>{
        let expectedResult=[30,20,10,25,40,35,50];
        expect(testTree.preOrder()).toEqual(expectedResult);
    });
    it('Can successfully return a collection from an inorder traversal',()=>{
        let expectedResult=[10,20,25,30,35,40,50];
        expect(testTree.inOrder()).toEqual(expectedResult);
    });
    it('Can successfully return a collection from an postorder traversal',()=>{
        let expectedResult=[10,25,20,35,50,40,30];
        expect(testTree.postOrder()).toEqual(expectedResult);
    });
    it('Will return false if the value is not contained',()=>{
        expect(testTree.contains(80)).toBe(false);
    });
    it('Will return true if the value is contained',()=>{
        expect(testTree.contains(25)).toBe(true);
    });

});
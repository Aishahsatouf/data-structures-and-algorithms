'use strict';

const { Node, kAryTree, FizzBuzzTree } = require('../challenges/fizzBuzzTree/fizz-buzz-tree');

let testTree;

describe('FizzBuzzTree', () => {
    beforeEach(() => {
        const one = new Node(29);
        const two = new Node(15);
        const three = new Node(3);
        const four = new Node(5);
        const five = new Node(4);
        const six = new Node(40);
        const seven = new Node(55);
        const eighte = new Node(42);

        one.children.push(two, three, four, five);
        four.children.push(six);
        three.children.push(seven);
        three.children.push(eighte);

        testTree = new kAryTree(one);
    });
    it('Throw error if the tree is empty', () => {
        const test = new kAryTree();
        expect(() => {
            FizzBuzzTree(test);
        }).toThrow();
    });
    it('FizzBuzzTree returns a tree', () => {
        FizzBuzzTree(testTree);
        expect(testTree.root.value).toEqual('LOL');
        expect(testTree.root.children[0].value).toEqual('FizzBuzz');
    });
});
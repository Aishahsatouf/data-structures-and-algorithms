'use strict';
const binarySearch = require('./../challenges/BinarySearch/array-binary-search');

describe('test the binary search methods',()=>{
    it ('invalid values',()=>{
     return expect(binarySearch([],16)).toEqual('this is not valid value or undefined or not valid array')
    });
    it ('not encluded value',()=>{
        return expect(binarySearch([4, 8, 15, 23, 42], 16)).toEqual(-1);
    });
    it ('included value',()=>{
        return expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
    })
})
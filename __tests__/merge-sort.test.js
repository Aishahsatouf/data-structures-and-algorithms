const mergeSort = require('../challenges/merge-sort/merge-sort');

describe('insertion sort functionallity',()=>{

    it ('will sort an array correctley',()=>{
        expect(mergeSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
    });
    it ('will return the same array if already sorted',()=>{
        expect(mergeSort([4,8,15,16,23,42])).toEqual([4,8,15,16,23,42]);
    });
    it ('will throw error if the entered data is not array',()=>{
        expect(()=>{mergeSort(2)}).toThrow();
    });
})
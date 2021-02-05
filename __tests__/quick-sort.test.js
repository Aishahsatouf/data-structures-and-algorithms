const quickSort = require('../challenges/quick-sort/quickSort');

describe('insertion sort functionallity',()=>{

    it ('will sort an array correctley',()=>{
        expect(quickSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
    });
    it ('will return the same array if already sorted',()=>{
        expect(quickSort([4,8,15,16,23,42])).toEqual([4,8,15,16,23,42]);
    });
   
})
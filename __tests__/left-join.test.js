'use strict';

const HashTable = require('../Data-structure/hashtable/hashtable');
const leftJoin = require('../challenges/leftJoin/left-join');

describe('Hashtable Class', () => {
  it('Should return null if one map is empty ', async () => {
    const hashTable1 = new HashTable(1024);
    hashTable1.set('cat', 'Candy');

    const hashTable2 = new HashTable(1024);
    // hashTable2.set('game', 'Candy Crush');

    expect(leftJoin(hashTable1, hashTable2)).toEqual(null);
  });

//   it('Should return both values from both the left and right hashmaps if both have the same key', () => {
//     const hashTable1 = new HashTable(1024);
//     hashTable1.set('cat', 'Candy');
//     hashTable1.set('song', 'all of me');

//     const hashTable2 = new HashTable(1024);
//     hashTable2.set('cat', 'Dirgham');
//     hashTable2.set('song', 'Halo');

//     hashTable2.set('name', 'Aisha');

//     expect(leftJoin(hashTable1, hashTable2)).toEqual([
//       ['cat', 'Candy', 'Dirgham'],
//       ['act', 'all of me', 'Halo'],
//     ]);
//   });
});
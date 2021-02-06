const HashTable=require('../Data-structure/hashtable/hashtable');

describe('HashTable Implmentation methods',()=>{
    const hashTable = new HashTable(2500);
    const hashTable2= new HashTable(500);
    beforeEach(()=>{
        hashTable.set('name','Sara');
        hashTable2.set('name','Sara');
        hashTable2.set('name','Dana');
    })
    
    it('it will Add a key/value to the hashtable resulting in the value being in the data structure',()=>{
      expect(hashTable.contains('name')).toBeTruthy();
    });
    it ('will return the value stored if retrieving throught the key',()=>{
        expect(hashTable.get('name')[0].name).toBe('Sara');
    });
    it ('Successfully returns null for a key that does not exist in the hashtable',()=>{
        expect(hashTable.contains('age')).toBeFalsy();
    });
    it ('will return the value stored if retrieving throught the key',()=>{
        expect(hashTable2.get('name')[2].name).toBe('Dana');
    });
    it('Will hash a key to an in-range value',()=>{
        let condition= hashTable2.hash('age')<=500
        expect(condition).toBeTruthy();
    });
});
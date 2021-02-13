'use strict';
const Node = require('../linkedList/node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        //return me the values of the ll in an array by traversing it
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        // hash the key and return the hashed value
        const sumCharCode = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0)
        }, 0);
        // console.log("sumCharCode >>>> ", sumCharCode);
        // we need to multiply by a prime number, and then get % of size
        return (sumCharCode * 19) % this.size;
    }

    set(key, value) {
        // create a new LinkedList inst, 
        // or add to the current one if exists.
        // if(Key&&!value){
        //     throw new Error;
        // }
        let hash = this.hash(key);
        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }
        const entry = { [key]: value }; // this is an object but can be anything
        this.table[hash].add(entry);
        if (this.table[hash].add(entry)) return ('the value is in the data structure')
    }
    get(key) {

        if (!this.contains(key)) return null;

        let index = this.hash(key);
        let current = this.table[index].head;

        while (current) {
            let keyOfObject = Object.keys(current.value);
            let valueOfObject = Object.values(current.value);
            if (keyOfObject[0] === key) {
                return valueOfObject[0];
            }
            current = current.next;
        }
    }
    contains(key) {
        if (!this.table) return false;
        let index = this.hash(key);
        if (!this.table[index]) return false;
        let answer;
        let current = this.table[index].head;
        while (current) {
            let keyOfObject = Object.keys(current.value);
            if (keyOfObject[0] === key) {
                return answer = true;
            }
            if (!current.next) {
                return answer = false;
            }
            current = current.next;
        }
        return answer;
    }
}



module.exports = HashTable;
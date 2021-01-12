
'use strict';

const AnimalShelter = require('../Data-structure/stacksAndQueues/fifoAnimalShelter/animal-shelter');
const Cat = require('../Data-structure/stacksAndQueues/fifoAnimalShelter/cat');
const Dog = require('../Data-structure/stacksAndQueues/fifoAnimalShelter/dog');

describe('Animal Shelter',() => {
  var animalShelter = new AnimalShelter();
  var cats = [];
  var dogs = [];
  let i = 0;

  while (i<3){
    cats[i] = new Cat('Cat');
    dogs[i] = new Dog('Dog');
    i++;
  }

  it('can enqueue a cat', ()=>{
    animalShelter.enqueue(cats[0]);
    expect(animalShelter.dequeue('Cat').value.type).toEqual('Cat');
  });

  it('can enqueue a dog', ()=>{
    animalShelter.enqueue(dogs[0]);
    expect(animalShelter.dequeue('Dog').value.type).toEqual('Dog');
  });

  it('wont queue an animal that isnt a cat or a dog',() =>{
    animalShelter.enqueue('Elephant');
    expect(animalShelter.dequeue('Elephant')).toBe(null);
  });

  it('can enqueue cats and dogs', () => {
    expect (() => {
      animalShelter.enqueue(cats[1]);
      animalShelter.enqueue(dogs[0]);
      animalShelter.enqueue(cats[2]);
      animalShelter.enqueue(dogs[1]);
      animalShelter.enqueue(dogs[2]);
    }).not.toThrow();
  });

  it('can dequeue cats and dogs in the correct order', () => {
    expect(animalShelter.dequeue('Cat').value.type).toEqual('Cat');
    expect(animalShelter.dequeue('Dog').value.type).toEqual('Dog');
    expect(animalShelter.dequeue('Cat').value.type).toEqual('Cat');
    expect(animalShelter.dequeue('Dog').value.type).toEqual('Dog');
    expect(animalShelter.dequeue('Dog').value.type).toEqual('Dog');
  });
});
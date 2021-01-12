'use stict';
const Queue =require('../queue');
 
class AnimalShelter{
    constructor(){
        this.dog=new Queue();
        this.cat=new Queue();
    }
    // animal is a dog or cat object
    enqueue(animal){
    //  if (typeof animal !='object'){throw new Error ('this is invalid input')};
    //  if(!animal.type){throw new Error ('type is needed to add value')};
     if(animal.type=='Cat'|| animal.type=="cat"){
         this.cat.enqueue(animal);
     }else if (animal.type=="Dog"||animal.type=="dog"){
         this.dog.enqueue(animal);
     }
    }
    //the input is a string
    dequeue(pref){
        if (typeof pref !='string'){throw new Error ('this is invalid input')};
        if(!pref){throw new Error ('type is needed to add value')};
        if(pref=="Cat"){
            return this.cat.dequeue();
        }else if(pref=="Dog") {
          return this.dog.dequeue();
        }else{
            return null;
        }
    }
}
module.exports=AnimalShelter;
'use strict';
const HashTable=require ('../../Data-structure/hashtable/hashtable');
function repeatedWord(str){
    if(typeof str!=='string'){throw new Error};
    let newStr=str.replace(/[^\w\s]/gi, '').toUpperCase();
    let newArr=newStr.split(' ')
   //console.log(newArr);
    let hash=new HashTable(1000);
    
    for(let i=0;i<newArr.length;i++){
    //    console.log(hash.contains(newArr[i]))
      if(hash.contains(newArr[i])==true){
        return newArr[i];
      }else{
      hash.set(newArr[i],`${i}`);
      }
    }
     return 'no repeat';
  }

  module.exports=repeatedWord;
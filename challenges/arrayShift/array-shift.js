'use strict';
let testArray=[4,5,6,8]
let value=16;
function insertShiftArray(arr,val){
 if(typeof arr=="object" && arr.length!==0 && val&& arr){
     let number=arr.length/2;
     let newArr=[]
     for(let i=0;i<testArray.length;i++){
       if(i===Math.ceil(number)){
         newArr.push(val)
       }newArr.push(arr[i])
      }
      return newArr;
 }else{return 'make sure to insert an array with a length more than zero and a valid value'}   
}
insertShiftArray(testArray,value);
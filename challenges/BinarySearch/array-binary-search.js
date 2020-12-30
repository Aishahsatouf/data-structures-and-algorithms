'use strict';
function BinarySearch(arr,value){
    if (arr.length<1||value===undefined||arr===undefined||value===null){
        return 'this is not valid value or undefined or not valid array'
    }
    let startPoint=0;
    let endPoint= arr.length -1;
    while(startPoint <= endPoint){
     let midllePoint=Math.floor((startPoint+endPoint)/2);
     //start searching
     if(arr[midllePoint]===value){
         //If found the key
         return midllePoint;
     }else if (arr[midllePoint]<value){
         //searching in the right side 
         startPoint = midllePoint+1;
     }else{
         //searchin in the left side
         endPoint= midllePoint-1;
     }

    }
    //the key was not found
    return -1 ;
}
console.log(BinarySearch([4,8,15,16,23,42], 15));
module.exports= BinarySearch;
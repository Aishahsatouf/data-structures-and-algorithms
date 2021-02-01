'use strict'

function insertionSort(arr){
    if (arr.length<=0){throw new Error}
    for (let i=0;i<arr.length;i++){
        if(typeof arr[i] !== 'number'){throw new Error}
        let j=i-1;
        let temp=arr[i];
        while(j>=0&&temp<arr[j]){
            arr[j+1]=arr[j];
            j=j-1
        }

        arr[j+1]=temp;
    }
    return arr;
}

module.exports=insertionSort;
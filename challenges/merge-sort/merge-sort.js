'use strict';

function mergeSort(arr) {
    if (arr.length<=0){throw new Error}
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right))

    function merge(left,right){
        let i=0;
        let j=0;
        let array=[];
        while(i<left.length&&j<right.length){

            if (left[i]<= right[j]){
                array.push(left[i]);
                i=i+1;
            }else{
                array.push(right[j]);
                j=j+1
            }
        }
        return array.concat(left.slice(i)).concat(right.slice(j));
    }
}

module.exports=mergeSort;
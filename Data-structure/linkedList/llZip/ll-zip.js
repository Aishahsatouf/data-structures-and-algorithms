'use strict';

const List=require('../linked-list.js');

function zipLists(l1, l2){
    // if one of those lists is empty return the other as the merged one;
    if(!l1.head){return l2};
    if(!l2.head){return l1};
   
    let insert1=l1.head;
    let insert2=l2.head;
    while(insert1.next){
        if(insert2){
        let temp=insert1.next;
        let nextnode=insert2.next;
        insert1.next=insert2
        insert2.next=temp;

        insert1=temp;
        insert2=nextnode;
        }
        else{
            break;
        }
    }
    if (insert2){
        insert1.next=insert2;
    }
    return l1;
}

module.exports=zipLists;
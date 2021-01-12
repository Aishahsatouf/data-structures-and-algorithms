'use strict';

function multiBracketValidation(input){
    if(typeof input!=='string'){throw new Error('this is invalid input')};
    if (input){
        return !input.split("").reduce((counter,value)=>{
          if(value==='('||value==='{'||value==='['){return ++counter;}
          else if(value===')'||value==='}'||value===']'){return --counter;}
          return counter;
        },0);
    };
};

module.exports=multiBracketValidation;
'use strict';

function multiBracketValidation(input) {
  if (typeof input !== 'string') { throw new Error('this is invalid input') };
  let testArr = [];
  let bracketCheck = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      testArr.push(input[i]);
      bracketCheck = true;
      continue;
    }
    if (input[i] === ')' || input[i] === '}' || input[i] === ']') {
      bracketCheck = true;
      if ((input[i] === ')') && (testArr[testArr.length - 1] !== '(')) {
        return false;
      } else if (input[i] === '}' && testArr[testArr.length - 1] !== '{') {
        return false;
      } else if (input[i] === ']' && testArr[testArr.length - 1] !== '[') {
        return false;
      } else {
        testArr.pop();
      };
    }
  }
  if (testArr.length === 0 && bracketCheck === true) {
    return true;
  } else {
    return false;
  }
};

module.exports = multiBracketValidation;
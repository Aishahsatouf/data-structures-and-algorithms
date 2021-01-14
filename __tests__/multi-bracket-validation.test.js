'use strict';
const multiBracketValidation=require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('functiona;ity of the multiBracketsfunction',()=>{
    it ('throw an error if the type of input is not string',()=>{
        let input1=null;
        let input2=[1,2,3];
        expect(()=>{multiBracketValidation(input1)}).toThrow();
        expect(()=>{multiBracketValidation(input2)}).toThrow();
    });
    it('will return false if the string has missing-matched brackets',()=>{
        let input='({(()))}}';
        expect(multiBracketValidation(input)).toBe(false);
    });
    it('will return true if all brackets matched',()=>{
        let string='[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]';
        let string2='()[[Extra Characters]]';
        expect(multiBracketValidation(string)).toBe(true);
        expect(multiBracketValidation(string2)).toBe(true);
    });
    it('will return false if brackets matched openning and closing but not type',()=>{
        let string='[}(){[}]';
        expect(multiBracketValidation(string)).toBe(false);
    });
});
const repeatedWord =require('../challenges/repeatedWord/repeated-word');

describe('fuctionality of repeated word function',()=>{
    it('will return me the first repeated word ',()=>{
        let string ="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
        expect(repeatedWord(string)).toEqual('summer');
    });
    it('will return me that is no repeated word if the string has no repeat ',()=>{
        let string ="This is string with no repeat";
        expect(repeatedWord(string)).toEqual('no repeat');
    });
    it('will throw if the input was not a string ',()=>{
        expect(()=>{repeatedWord(string)}).toThrow();
    });
})
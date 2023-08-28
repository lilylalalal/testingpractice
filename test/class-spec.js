const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    let word1 ;
   beforeEach (() => {
    word1 = new Word("good")
   })
    it('should have a "word" property', function () {
     
      expect(word1.word).to.exist

    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word1.word).to.equal("good")
      //expect.fail("replace with your code");
    });
  });

  describe("removeVowels function", function () {
    let worda ;
    let wordb ;
    let wordbc ;
    beforeEach (() => {
      worda = new Word("Bolluti")
      wordb = new Word("c")
      wordc = new Word("iea")
      worde = new Word("")
    })
    it("should return a the word with all vowels removed", function () {
      expect(worda.removeVowels()).to.equal("Bllt")
      expect(wordb.removeVowels()).to.equal("c")
      expect(wordc.removeVowels()).to.equal("")
      expect(wordc.removeVowels()).to.equal("")
      //expect.fail("replace with your code");
    });
  });

  describe("removeConsonants function", function () {
    let worda ;
    let wordb ;
    let wordbc ;
    beforeEach (() => {
     worda = new Word("Bolluti")
     wordb = new Word("c")
     wordc = new Word("iea")
     worde = new Word("")


    })
    it("should return the word with the consonants removed", function () {
      expect(worda.removeConsonants()).to.equal("oui")
      expect(wordb.removeConsonants()).to.equal("")
      expect(wordc.removeConsonants()).to.equal("iea")
      expect(worde.removeConsonants()).to.equal("")
      //expect.fail("replace with your code");
    });
  });
  
  describe("pigLatin function", function () {
    let worda ;
    let wordb ;
    let wordbc ;
    beforeEach (() => {
      worda = new Word("Bolluti")
      wordb = new Word("orey")
      wordc = new Word("shlunk")
      worde = new Word("Unit")
 
    })
    it("should return the word converted to pig latin", function () {
      expect(worda.pigLatin()).to.equal("ollutiBay")
      expect(wordb.pigLatin()).to.equal("oreyyay")
      expect(wordc.pigLatin()).to.equal("unkshlay")
      expect(worde.pigLatin()).to.equal("Unityay")
      //expect.fail("replace with your code");
    });
  });
});
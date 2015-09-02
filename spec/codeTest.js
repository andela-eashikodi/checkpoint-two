'use strict';

describe('String Class', function(){
  var result;

  describe('hasVowels method', function(){

    it('should return true if the string contains vowels', function() {
      result = "andela".hasVowels();
      expect(result).toBe(true);

      result = "fellow".hasVowels();
      expect(result).toBe(true);

    });

    it('should return false if the string has no vowels', function() {
      result = "try".hasVowels();
      expect(result).toBe(false);

      result = "gypsy".hasVowels();
      expect(result).toBe(false);

    });

    it('should only return a boolean', function() {
      result = "africa".hasVowels();
      expect(typeof result).toEqual('boolean');

      result = "sky".hasVowels();
      expect(typeof result).toEqual('boolean');
    });

  });

  describe('toUpper method', function(){

    it('should return the String in question but with all characters in upper cases as applicable', function() {
      result = "ashikodi".toUpper();
      expect(result).toEqual("ASHIKODI");

      result = "Roots".toUpper();
      expect(result).toEqual("ROOTS");

      result = "Okay Enough!".toUpper();
      expect(result).toEqual("OKAY ENOUGH!");
    });

    it('should return only strings', function() {
      result = "123abc".toUpper();
      expect(result).toEqual(jasmine.any(String));

    });
  });

  describe('toLower method', function(){

    it('should return the String in question but with all characters in lower cases as applicable', function() {
      result = "TURN UP!".toLower();
      expect(result).toEqual("turn up!");

      result = "ABCD".toLower();
      expect(result).toEqual("abcd");
    });

    it('should return only strings', function() {
      result = "123ABC".toLower();
      expect(result).toEqual(jasmine.any(String));

    });
  });

  describe('ucFirst method', function(){

    it('should return the String in question but changes the First Character to an Upper case', function() {
      result = "elephant".ucFirst();
      expect(result).toEqual("Elephant");

      result = "emeka".ucFirst();
      expect(result).toEqual("Emeka");
    });

    it('should return only strings', function() {
      result = "example".ucFirst();
      expect(result).toEqual(jasmine.any(String));

    });
  });

  describe('isQuestion method', function(){

    it('should return true if the string is a question', function() {
      result = "is this the last one?".isQuestion();
      expect(result).toEqual(true);

      result = "i have a question. i think you are wrong".isQuestion();
      expect(result).toEqual(false);
    });

    it('should return only a boolean', function() {
      result = "what is your name".isQuestion();
      expect(typeof result).toEqual("boolean");
    });
  });

  describe('words method', function(){

    it('should return a list of the words in the string, as an Array', function() {
      result = "test driven development".words();
      expect(result).toEqual(["test", "driven", "development"]);

      result = "how are you?".words();
      expect(result).toEqual(["how", "are", "you"]);
    });

    it('should return an array', function() {
      result = "monday and tuesday".words();
      expect(result).toEqual(jasmine.any(Array));
      
    });
  });

  describe('wordCount method', function(){

    it('should return the number of words in the string', function() {
      result = "better tomorrow".wordCount();
      expect(result).toEqual(2);

      result = "how many are these?".wordCount();
      expect(result).toEqual(4);
    });

    it('should return only numbers', function() {
      result = "try this".wordCount();
      expect(result).toEqual(jasmine.any(Number));
    });
  });

  describe('toCurrency method', function(){

    it('should return a currency representation of the String', function() {
      result = "11111.11".toCurrency();
      expect(result).toEqual("11,111.11");

      result = "111.11".toCurrency();
      expect(result).toEqual("111.11");
    });

    it('should return the currency representation as a string', function() {
      result = "1111.11".toCurrency();
      expect(result).toEqual(jasmine.any(String));
    });
  });

  describe('fromCurrency method', function(){

    it('should return a number representation of the Currency String', function() {
      result = "11,111.11".fromCurrency();
      expect(result).toEqual(11111.11);

      result = "1,111,111.11".fromCurrency();
      expect(result).toEqual(1111111.11);

    });

    it('should return the result as a number', function() {
      result = "111,111.11".fromCurrency();
      expect(result).toEqual(jasmine.any(Number));
    });
  });



});
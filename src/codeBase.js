'use strict';

var result;

String.prototype.hasVowels = function(){
  //this regEx (regular expression) checks if string has vowels
  return (/[aeiou]/.test(this));
};

String.prototype.toUpper = function(){
  // this regEx replaces every letter to uppercase value
  result = this.replace(/[a-z]/g, function(x){
    return x.toUpperCase();
  });
  return result;
};

String.prototype.toLower = function(){
  // this regEx replaces every letter to lowercase value
  result = this.replace(/[A-Z]/g, function(x){
    return x.toLowerCase();
  });
  return result;
};

String.prototype.ucFirst = function(){
  // this regEx replaces the first letter to uppercase value
  result = this.replace(/^\w/g, function(x){
    return x.toUpperCase();
  });
  return result;
};

String.prototype.isQuestion = function(){
  // this regEx checks if string ends with a question mark
  return (/\?$/.test(this));
};

String.prototype.words = function(){
  var wordsCollection = [];
  // this regEx checks for word in any sentence
  this.toString().replace(/\b\w+\b/gi, function(x){
    wordsCollection.push(x);
  });
  return wordsCollection;
};

String.prototype.wordCount = function(){
  var result = this.words();
  return result.length;
};

String.prototype.toCurrency = function(){
  var splitNum = this.split(".");
  // this regEx inserts a comma after counting three digits from behind
  var numCurrency = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ("." + splitNum[1]);
  return numCurrency;
};

String.prototype.fromCurrency = function(){
  //this regEx removes comma in the currency value
  var num = this.replace(/\,/g, "");
  return parseFloat(num);
};




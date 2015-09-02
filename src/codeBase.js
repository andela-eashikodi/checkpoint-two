'use strict';

var result;

String.prototype.hasVowels = function(){
  if(/[aeiou]/.test(this)){
    return true;
  }
  else {
    return false;
  }
};

String.prototype.toUpper = function(){
  result = this.replace(/[a-z]/g, function(x){
    return x.toUpperCase();
  });
  return result;
};

String.prototype.toLower = function(){
  result = this.replace(/[A-Z]/g, function(x){
    return x.toLowerCase();
  });
  return result;
};

String.prototype.ucFirst = function(){
  result = this.replace(/^\w/g, function(x){
    return x.toUpperCase();
  });
  return result;
};

String.prototype.isQuestion = function(){
  if(/\?$/.test(this)){
    return true;
  }
  else {
    return false;
  }
};

String.prototype.words = function(){
  var arr = [];
  this.toString().replace(/\b\w+\b/gi, function(x){
    arr.push(x);
  });
  return arr;
};

String.prototype.wordCount = function(){
  var result = this.words();
  return result.length;
};

String.prototype.toCurrency = function(){
  var splitNum = this.split(".");
  var numCurrency = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ("." + splitNum[1]);
  return numCurrency;
};

String.prototype.fromCurrency = function(){
  var num = this.replace(/\,/g, "");
  return parseFloat(num);
};




'use strict';
var calculator = (function () {
  return {
    add: function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        throw new Error("Wrong input!");
      }
      return a + b;
    },
    substract: function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        throw new Error("Wrong input!");
      }
      return a - b;
    },
    multiply: function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        throw new Error("Wrong input!");
      }
      return a * b;
    },
    divide: function(a, b) {
      if (isNaN(a) || isNaN(b) || b===0) {
        throw new Error("Wrong input!");
      }
      return a / b;
    },
    factorial: function(a) {
      if (isNaN(a) || a<0) {
        throw new Error("Wrong input!");
      }
      if (a < 2) {
        return 1;
      }
      return a * this.factorial(a - 1);
    }
  }
})();

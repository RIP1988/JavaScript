'use strict';
var calculatorOnWebsite = (function() {
  return {
    add: function() {
      var firstNumber,
          secondNumber,
          result;
      firstNumber = parseInt(document.getElementById("argument1").value);
      secondNumber = parseInt(document.getElementById("argument2").value);
      result = calculator.add(firstNumber, secondNumber);
      document.getElementById("result").value = result;
    },
    substract: function() {
      var firstNumber,
          secondNumber,
          result;
          firstNumber = parseInt(document.getElementById("argument1").value);
          secondNumber = parseInt(document.getElementById("argument2").value);
      result = calculator.substract(firstNumber, secondNumber);
      document.getElementById("result").value = result;
    },
    multiply: function() {
      var firstNumber,
          secondNumber,
          result;
          firstNumber = parseInt(document.getElementById("argument1").value);
          secondNumber = parseInt(document.getElementById("argument2").value);
      result = calculator.multiply(firstNumber, secondNumber);
      document.getElementById("result").value = result;
    },
    divide: function() {
      var firstNumber,
          secondNumber,
          result;
          firstNumber = parseInt(document.getElementById("argument1").value);
          secondNumber = parseInt(document.getElementById("argument2").value);
      result = calculator.divide(firstNumber, secondNumber);
      document.getElementById("result").value = result;
    },
    factorial: function() {
      var firstNumber,
          result;
          firstNumber = parseInt(document.getElementById("argument1").value);
      result = calculator.factorial(firstNumber);
      document.getElementById("result").value = result;
    }
  };
})();

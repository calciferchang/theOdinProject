const add = function (...num) {
  return num.reduce((a, b) => a + b, 0)
};

const subtract = function (...num) {
  return num.reduce((a, b) => a - b)
};

const sum = function (num) {
  return num.reduce((a, b) => a + b, 0)
};

const multiply = function (num) {
  return num.reduce((a, b) => a * b)
};

const power = function (...num) {
  return num.reduce((a, b) => a ** b)
};

const factorial = function (num) {
  let number = num;

  for (let i = num - 1; i > 0; i--) {
    number = number * i;
  }

  if (!(num > 0)) {
    number = 1;
  }
  return number
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

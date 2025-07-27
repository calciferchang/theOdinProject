const fibonacci = function (x) {
  let fibIndex = parseInt(x);
  if (fibIndex < 0) {
    return "OOPS";
  }
  let fibArray = [0, 1];
  for (let i = 0; i < fibIndex - 1; i++) {
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
  }
  return fibArray[fibIndex];
};

// Do not edit below this line
module.exports = fibonacci;

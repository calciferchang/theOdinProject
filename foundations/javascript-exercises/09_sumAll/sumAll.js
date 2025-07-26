const sumAll = (a, b) => {
  let lower = Math.min(a,b)
  let higher = Math.max(a,b)
  let numbers = [];

  if (!Number.isInteger(a) || !Number.isInteger(b) || lower < 0) {
    return 'ERROR'
  }

  for (let i = lower; i <= higher; i++) {
    numbers.push(i);
  }
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
};

// Do not edit below this line
module.exports = sumAll;

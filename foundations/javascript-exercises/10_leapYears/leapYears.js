const leapYears = (year) => {
  if (!Number.isInteger(year)) return 'ERROR';

  let result = false;
  if (year % 4 === 0 && !(year % 100 === 0)) {
    result = true;
  } 
  if (year % 400 === 0) {
    return true;
  }
  return result;
};

// Do not edit below this line
module.exports = leapYears;

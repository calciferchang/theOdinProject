const convertToCelsius = (num) => {
  let conversion = (num - 32) * 5/9;
  return Number(conversion.toFixed(1));
};

const convertToFahrenheit = (num) => {
  let conversion = (num * 9/5) + 32;
  return Number(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

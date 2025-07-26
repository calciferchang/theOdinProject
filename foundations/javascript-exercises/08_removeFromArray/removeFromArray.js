const removeFromArray = (array, ...num) => {
  // figure out how many parameters there are and iterate for each one
  for (let i = 0; i < num.length; i++) {
    let count = array.filter(obj => obj === num[i]).length;
    for (let z = 0; z < count; z++) {
      array.splice((array.findIndex((number) => number === num[i])), 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arr) {
  return arr.reduce((a, b) => a + b.age, 0) / arr.length
}

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
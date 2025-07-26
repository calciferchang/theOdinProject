const numbers = [1, 2, 3, 4, 5];

const sumReduce = numbers.reduce((acc, curr) => {
  if (curr % 2 == 0) {
    return acc + curr * 3;
  }
  return acc;
}, 0);
console.log(sumReduce);

function isEven(num) {
  return num % 2 == 0;
}

const evenNums = numbers.filter(isEven);
console.log(evenNums);

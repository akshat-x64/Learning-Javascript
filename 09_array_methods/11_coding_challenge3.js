"use strict";

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
 */

const calcAverageHumanAge = function (dataArr) {
  let aa = 0;
  const dogToHuman = dataArr
    .map((dogAge, index, arr) => {
      if (dogAge <= 2) {
        return 2 * dogAge;
      } else {
        return 16 + dogAge * 4;
      }
    })
    .filter((excludeDogAge, index, arr) => {
      return excludeDogAge > 18;
    })
    // .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return dogToHuman;
};

const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(data1, data2);

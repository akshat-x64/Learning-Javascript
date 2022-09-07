"use strict";

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
 */

const calcAverageHumanAge = function (dataArr) {
  const dogToHuman = dataArr.map(function (dogAge, index, arr) {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  //   console.log(dogToHuman);
  const exdclude = dogToHuman.filter(function (excludeDogAge, index, arr) {
    return excludeDogAge > 18;
  });
  //   console.log(exdclude);
  const finale =
    exdclude.reduce(function (acc, data) {
      return (acc += data);
    }, 0) / exdclude.length;
  return Math.trunc(finale);
};

const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(data1, data2);

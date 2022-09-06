"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map(function (mov) {
  return mov * 1.1;
});
console.log(movements);
console.log(movementsUSD);

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD1 = movements1.map((mov) => {
  return mov * 1.1;
});
console.log(movements1);
console.log(movementsUSD1);

const otherMovements = movements.map(function (data, index, wholeArray) {
  if (data > 0) {
    return `Movement ${index + 1} :you deposited ${data}`;
  } else {
    return `Movement ${index + 1} :you withdrawl ${data}`;
  }
});
console.log(otherMovements);

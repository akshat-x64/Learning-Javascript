"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositsUS = movements
  .filter(function (data) {
    return data > 0;
  })
  .map(function (data) {
    return data * 1.1;
  })
  .reduce(function (acc, data) {
    return acc + data;
  });
console.log(totalDepositsUS);

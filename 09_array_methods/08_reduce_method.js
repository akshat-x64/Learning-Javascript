"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balaceGlobal = movements.reduce(function (acc, data, i, arr) {
  console.log(`Iteration:${i} ${acc}`);
  return acc + data;
}, 0);
console.log(balaceGlobal);

let a = 0;
for (let i = 0; i < movements.length; i++) {
  a += movements[i];
}
console.log(a);

const max = movements.reduce(function (acc, data) {
  if (acc < data) {
    return data;
  } else {
    return acc;
  }
}, movements[0]);
console.log(max);

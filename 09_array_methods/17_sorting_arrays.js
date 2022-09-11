"use strict";
//sorting string
const name = ["Akshat", "adam", "zach", "flower"];
//this sort method actually mutuate the name variable
name.sort();
console.log(name);

//sorting number in an array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort(function (a, b) {
  return a - b;
});
console.log(movements);

movements.sort(function (a, b) {
  return b - a;
});
console.log(movements);

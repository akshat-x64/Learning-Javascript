"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movements1 = [200, 450, 400, 3000, 650, 130, 70, 1300];

//Equality //single //value
const v = movements.includes(-400);
console.log(v);
//some
//condition for a range or a condition
const aa = movements.some(function (cc) {
  return cc > 0;
});
console.log(aa);
//every
const vv = movements1.every(function (dd) {
  return dd > 0;
});
console.log(vv);

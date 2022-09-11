"use strict";

const a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a);
console.log([2, 3, 4, 5, 6, 7, 8, 9, 0]);
//empty+fill method
const b = new Array(7);
console.log(b);
// this actually mutuate the array
// b.fill(1);
// console.log(b);
//just like slice method this also works on index basics
b.fill(1, 3, 5);
console.log(b);
a.fill(55, 3, 7);
console.log(a);

const y = Array.from({ length: 7 }, function (_, i) {
  return i + 1;
});
console.log(y);

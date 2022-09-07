"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const final = movements.filter(function (data) {
  return data > 0;
});

console.log(final);

//using for loop;
let aa = [];
for (const i of movements) {
  if (i > 0) {
    aa.push(i);
  }
}
console.log(aa);

const withDrawals = movements.filter(function (data) {
  return data < 0;
});
console.log(withDrawals);

"use strcit";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for of loop
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`transaction ${1 + i}:you deposited ${movement}`);
  } else {
    console.log(`transaction ${1 + i}:you withdraw ${Math.abs(movement)}`);
  }
}
console.log("----------------for-each-----------------");
//for each loop
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`transaction ${1 + i}:you deposited ${movement}`);
  } else {
    console.log(`transaction ${1 + i}:you withdraw ${Math.abs(movement)}`);
  }
});

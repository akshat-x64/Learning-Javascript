"use strict";
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Hi, a shallow copy is a copy in which if we make any changes then in the original also the changes will get reflected, usually in case of objects.
//find length of arr
console.log(movements.length);
//to check if element exists ornot
console.log(movements.includes(200));
//to check the index of element
console.log(movements.indexOf(200));
//to push element from back of arr
console.log(movements.push(300));
//to push element from front
console.log(movements.unshift(400));
//to remove element from front
movements.shift();
//to remove elements  from back
movements.pop();
console.log(movements);

let arr = ["a", "b", "c", "d", "e"];
//slice method //it does not mutate the array
console.log(arr.slice(2));
console.log(arr.slice(2, 5));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

//splice method //it actually mutate the array
console.log(arr.splice(2));
// arr.splice(-1);
console.log(arr);

arr = ["a", "b", "c", "d", "e"];

//reverse //this mutates the array
console.log(arr.reverse());

//conscat;
let letters = arr.concat(arr);
letters = [...arr, ...arr.reverse()];
console.log(letters);

//join
console.log(arr.join(""));

//at method
const arr2 = [23, 11, 434];
console.log(arr2[0]);
console.log(arr2.at(0));
console.log(arr2.at(arr2.length - 1));
console.log(arr2.slice(-1)[0]);
console.log(arr2.at(-1));
console.log(arr2.at(-2));

//at method also works at string
const aa = "Akshat";
console.log(aa.at(-1));

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, iterator] of movements.entries()) {
  if (iterator > 0) {
    console.log(`${index + 1}:you deposited ${iterator}`);
  } else {
    console.log(`${index + 1}:you withdrew ${Math.abs(iterator)}`);
  }
}
console.log("--------------------------------------------------");

//continue; and break; dosent work on
movements.forEach((amount, index, whole_arr) => {
  if (amount > 0) {
    console.log(`${index + 1}:your deposited ${amount}`);
  } else {
    console.log(`${index + 1}:your deposited ${Math.abs(amount)}`);
  }
});

//0:functiom(20)
//1:functiom(40)
//2:functiom(60)
//3:functiom(70)

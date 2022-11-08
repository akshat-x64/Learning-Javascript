"use strict";
// Hi, a shallow copy is a copy in which if we make any changes then in the original also the changes will get reflected, usually in case of objects.
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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

//for each
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

// for each in set and maps
//map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
const currenciesUnique = new Set();
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  currenciesUnique.add(key);
});

console.log(currenciesUnique);

//set
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${_}`);
});

//major array methods ,map filter reduce;
//map method

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eutToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eutToUsd;
});
console.log(movementsUSD);

//using for off loop
const movementsUSDFor = [];
for (const iterator of movements) {
  movementsUSDFor.push(iterator * eutToUsd);
}
console.log(movementsUSDFor);

//using arrow function
const finalEURtoUSD = movements.map((data) => data * eutToUsd);
console.log(finalEURtoUSD);

const movementsDescriptions = movements.map(function (data, i, arr) {
  return `Movement ${
    i + 1
  }:You ${data > 0 ? "deposited" : "withdrew"} ${Math.abs(data)} `;
});
console.log(movementsDescriptions);

//filter method
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const finalFilter = movements.filter(function (aa) {
  return aa > 0;
});
console.log(finalFilter);
//filter alternative using for each method

const filterForEach = [];
movements.forEach(function (aa) {
  aa > 0 ? filterForEach.push(aa) : "aa";
});
console.log(filterForEach);

const withdrawal = movements.filter(function (a) {
  return a < 0;
});
console.log(withdrawal);

//reduce method
//convert  all the elements in an array to one single value.

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//so accumulator is an snowball that keeps on adding to the value
//so can also specify or set inital value of the accumulator
const balance = movements.reduce(function (acc, value, idex, arr) {
  console.log(`iteration ${idex + 1}: ${acc}`);
  return acc + value;
}, 0);

//snow ball efect
console.log(balance);
//reducing using forof loop
let balance1 = 0;
for (const iterator of movements) {
  balance1 += iterator;
}
console.log(balance);

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max1 = movements.reduce(function (acc, value, index) {
  if (acc > value) return acc;
  else return value;
}, movements[0]);
console.log(max1);

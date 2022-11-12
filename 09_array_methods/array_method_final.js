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
  console.log(acc, value);
  if (acc > value) return acc;
  else return value;
}, movements[0]);
console.log(max1);

//chaining method
//pipeline method
//chaining can have performance issue
// to not chain a method that can mutate a array
//always method that can return the array
const balanceUSD = movements
  .filter((data) => data > 0)
  // .map((data) => data * 1.1)
  .map((data, i, arr) => {
    // console.log(arr);
    return data * 1.1;
  })
  .reduce((acc, data) => acc + data);
console.log(balanceUSD);

//find method in js
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const find = movements.find((value) => value < 0);
console.log(find);
//find method is very silimar to filter method but only difference is filter method returns
//and array of elements and find method returns only a single first element

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const userFind = accounts.find((aa) => aa.owner === "Sarah Smith");
console.log(userFind);

//find index method
//this is also another method which helps in finding the index
//this also works as the same way as find method

const findAcc = accounts.findIndex(function (value, i, acc) {
  return value.owner === "Steven Thomas Williams";
});

console.log(findAcc);

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// some and every
console.log(movements);
//equality
console.log(movements.includes(-130));
//some method
//some method helps us to know if given contition is true or not
//and it should true with any element in the array
//condition
const anyDeposits = movements.some((move) => move > 200);
console.log(anyDeposits);

//every method
//every element has to
const everyMethod = movements.every((move) => move > 0);
console.log(everyMethod);

//new array method
//flat method
//level 1
const arr123 = [
  [1, 2, 3, 4],
  [4, 6, 7],
];
console.log(arr.flat(1));
//level 2
const arrDeep = [[[1, 2, [2, 4], 32], 32]];
console.log(arrDeep.flat(3));

//flatMap method
const final123 = accounts
  .flatMap((data) => data.movements)

  // .filter((data) => data > 0)
  .reduce((acc, data, i, arr) => acc + data, 0);
console.log(final123);
//for going more deep we need to write seperate map
//flatmap is good for performance

//sorting arrays

//sorting method works only on strings we have to only modify
const name = ["AKshat", "dwivedi", "nagdiya", "sheth"];
name.sort();
console.log(name);
//if we want to sort number the we have to pass a call back function
// +1 for swap and -1 for not to swap
const num1 = [45, 67, 8, 433, 324, 45, 5, 4];
num1.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});
console.log(num1);

//array fill method
const arr12 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array(1, 2, 3, 4, 5));

//empty array + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 2, 5);
console.log(x);
x.fill(1);

arr12.fill(23, 2, 5);
console.log(arr12);

//array.from
//this is not method this is type of contructor
//array.from is a technique in which we can create a array in a sequence
const zz = Array.from({ length: 7 }, (value, i) => i + 1);
console.log(zz);

labelBalance.addEventListener("click", function () {
  console.log(document.querySelectorAll(".movements__value"));
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€"), "")
  );
  console.log(movementsUI);
  const aa = document.querySelectorAll(".movements__value");
  console.log(aa);
  const aa12 = [];
  for (const iterator of aa) {
    aa12.push(iterator.textContent);
  }
  console.log(aa12);
});



//copying data from html web page

labelBalance.addEventListener("click", function () {
  // console.log(document.querySelectorAll(".movements__value"));
  // const movementsUI = Array.from(
  //   document.querySelectorAll(".movements__value"),
  //   (el) => Number(el.textContent.replace("€"), "")
  // );
  // console.log(movementsUI);
  const aa = document.querySelectorAll(".movements__value");
  // console.log(aa);
  // const aa12 = [];
  // for (const iterator of aa) {
  //   aa12.push(iterator.textContent);
  // }
  // console.log(aa12);
  const bb = [];
  for (const iterator of aa) {
    bb.push(iterator.textContent);
  }
  for (const iterator of bb) {
    console.log(bb);
  }
});

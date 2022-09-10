"use strict";

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const sampleArry = [
  [1, 3, 5, 6],
  [5, 2, 3],
];
console.log(sampleArry.flat());
const deepArray = [[1, 2, 4, [3, 2, [2]]]];
console.log(deepArray.flat(5));

const return1 = accounts.map(function (value, index, map) {
  return value.movements;
});
const aaa = return1.flat();
console.log(aaa);
const final = aaa.filter(function (acc) {
  return acc > 0;
});

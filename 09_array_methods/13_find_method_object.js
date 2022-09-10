"use strict";

const account1 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const accounts = [account1, account2];

const aaa = "Jessica Davis";
const b = accounts.find(function (aa) {
  return aa.owner === aaa;
});
console.log(b);
// let currentAccount = accounts.find((acc) => acc.username === aaa);
// console.log(currentAccount);

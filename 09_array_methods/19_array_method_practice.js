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
//1.
const allMovements = accounts
  .flatMap((acc) => acc.movements)

  .filter((acc) => acc > 0)
  .reduce((acc, data) => acc + data, 0);
console.log(allMovements);
//2.
const deposit_1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((acc) => acc > 1000).length;
console.log(deposit_1000);

//experiment
let a = 10;
console.log(++a);

//reduce method on object

const { deposits, withdral } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, data) => {
      data > 0 ? (acc.deposits += data) : (acc.withdral += data);
      return acc;
    },
    { deposits: 0, withdral: 0 }
  );
console.log(deposits, withdral);

//4. convert sentence into title case
//This is a sample content
//to
//This Is a Sample Content
const convertTitleCase = function (s1) {
  const exceptions = ["a", "an", "but", "ar", "on", "in", "with"];
  const final = s1
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return final;
};
console.log(convertTitleCase("This is a sample content"));
console.log(convertTitleCase("This is a some what afterlife"));
console.log(convertTitleCase("This is a some how afterlife"));

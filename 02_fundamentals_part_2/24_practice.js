"use strict";

function printUpto(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`The number is ${i}(function deceleration)`);
  }
}

const printUpto_1 = function (num) {
  for (let i = 1; i <= num; i++) {
    console.log(`The number is ${i}(function expression)`);
  }
};

const printUpto_2 = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(`The number is ${i}(arrow function )`);
  }
};
printUpto(5);
printUpto_1(5);
printUpto_2(5);

const arr = [];

arr.push("Akshat");
console.log(arr);
console.log(arr[0]);
arr.unshift("dwivedi");
console.log(arr);
console.log(arr[0]);

arr.pop(arr);
console.log(arr);

arr.shift(arr);
console.log(arr);
console.log(arr[0]);

const arra = ["21", "Akshat", "Dwivedi", ["Akshat", "Dwivedi"]];
for (let i = 0; i < arra.length; i++) {
  console.log(typeof arra[i]);
}
arr.push("Dwivedi", "Akshat");
console.log(arr);

console.log(arra.includes("Akshat"));
console.log(arra.indexOf("Akshat"));

const akshat = {
  firstName: "Akshat",
  lastName: "Dwivedi",
  location: "Dewas",
  dateOfBirth: 2050,

  calAge: function () {
    this.age = 2077 - 2050;
    return this.age;
  },
};

console.log(akshat);
console.log(akshat["firstName"], akshat["lastName"]);
console.log(akshat.firstName, akshat.lastName);
console.log(akshat.calAge());

// while (true) {
//     let a = 1;
//     console.log(`Akshat ${a}`);
//     a++;
// }

const x = 23;
console.log();
console.log();

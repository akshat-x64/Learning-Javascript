"use strict";
//split
console.log("a+very+good+string".split("+"));
console.log("Akshat Dwivedi".split(" "));

const [firstName, secondName] = "Akshat Dwivedi".split(" ");
console.log(firstName, secondName);
//join
const allAlong = ["Mr.", firstName, secondName].join(" ");
console.log(allAlong);

const capitalization = function (data) {
  const dataStore = data.split(" ");

  const dataStore2 = [];
  //   for (const name of dataStore) {
  //     dataStore2.push(name[0].toUpperCase() + name.slice(1).toLocaleLowerCase());
  //   }
  for (const name of dataStore) {
    dataStore2.push(name.replace(name[0], name[0].toUpperCase()));
  }

  console.log(dataStore2.join(" "));
};

capitalization("akshat dwivedi");
capitalization("AKSHAT dwivedi");

//padding
const msg = "go to door no. 23";
console.log(msg.padStart(25, "++"));
console.log("Akshat dwivedi".padStart(25, "+").padEnd(30, "+"));
console.log("akshat dwivedi".padStart(50, "+").padEnd(60, "+"));

const maskCreditCard = function (data) {
  const operation = String(data);
  //console.log(operation);
  const masked = operation.slice(-4);
  //   console.log(masked);
  console.log(masked.padStart(operation.length, "*"));
};

maskCreditCard(1223133);
maskCreditCard(1223132131);
maskCreditCard(12238132447854);

// reperating
const repeatString = "Bad weather.... all flights delayed ";
console.log(repeatString.repeat(5));

const repeatFunction = function (n) {
  console.log(`the ${n} delayed ${"*".repeat(n)}`);
};
repeatFunction(5);
repeatFunction(10);
repeatFunction(12);
// console.log(dataStore);

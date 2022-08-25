"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  printMainMenu() {
    return this.mainMenu;
  },
};

const properties = Object.keys(restaurant.openingHours);
console.log(properties);
console.log(`We are open at ${properties.length}`);
let plus = "";
for (const i of properties) {
  plus += i;
  plus += " ";
}
console.log(`We are on ${plus}`);

const properties1 = Object.keys(restaurant.openingHours);
console.log(properties1);
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open at ${properties.length}`;

// for (const day of properties) {
//   openStr += ` ${day}`;
// }

// // console.log(openStr);

const values = Object.values(restaurant.openingHours);
console.log(values);
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const enteries = Object.entries(restaurant.openingHours);
// console.log(enteries);
const enteries = Object.entries(restaurant.openingHours);
console.log(enteries);

for (const [name, { open, close }] of enteries) {
  console.log(
    `the restaurant opens ${name} and timing form ${open} till ${close}`
  );
}

// for (const [day, { open, close }] of enteries) {
//   console.log(
//     `The restaurant is open at ${day} and timing is ${open} and ${close}`
//   );
// }

// const akshat = [];

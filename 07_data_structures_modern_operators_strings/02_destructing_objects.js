"use strict";
// destructing objects
// Data needed for a later exercise

// Data needed for first part of the section
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
  functionThis: function () {
    console.log(this);
  },
  // orderDelivery: function (
  //   { starterIndex = 1, mainIndex = 0, time = "20:00", address }
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `your order is ${this.starterMenu[starterIndex]},and ${this.mainMenu[mainIndex]} , and ${time} and ${address}`
    );
  },
  // {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },
};
// array objects

// restaurant.functionThis();
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantNamee,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantNamee, hours, tags);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// giving default values while initializing object
const { starterMenu: sample, mainMenu, otherMenu = [] } = restaurant;
console.log(sample, mainMenu, otherMenu);
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// copy one obj to onother odj
//copy one obj to another
let aa = 20;
let bb = 40;
console.log(aa, bb);
const a2 = {
  aa: 40,
  bb: 40,
};
({ aa, bb } = a2);
console.log(aa, bb);

// let a = 111;
// let b = 999;
// const obj = {
//   a: 22,
//   b: 6,
//   c: 16,
// };

// ({ a, b } = obj);
// console.log(a, b);

console.log(openingHours);
const { fri } = restaurant.openingHours;
// console.log(fri);
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(fri);
console.log(o, c);
// console.log(fri);
// console.log(typeof fri);
//nesting of nesting
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(fri);
//nesting
// let {
//   aa22: { open: o, close: c },
// } = restaurant.openingHours.thu;
// console.log(o, c);
// restaurant.orderDelivery({});

// restaurant.orderDelivery({
//   time: "10:00",
//   address: "M.P",
//   mainIndex: 2,
//   starterIndex: 2,
// });

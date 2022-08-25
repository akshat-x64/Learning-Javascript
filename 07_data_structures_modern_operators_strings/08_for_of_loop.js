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
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Object.entries(menu));
// for (const [i = 0, sample] of menu.entries()) {
//   console.log(`${i + 1}: ${sample}`);
// }

// console.log([...menu.entries()]);
for (const [i = 0, string1] of menu.entries()) {
  console.log(`${i + 1}:${string1}`);
}

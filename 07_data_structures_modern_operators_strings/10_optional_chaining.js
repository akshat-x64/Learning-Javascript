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
const days = ["mon", "tue", "web", "thu", "fri", "sat", "sun"];
console.log(restaurant.openingHours?.mon);

for (const day of days) {
  //   console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day} is ${open}`);
}

console.log(restaurant?.printMainMenu());

const user = [{ name1: "Akshat", email: "akshatdwivedi189@gmail.com" }];

console.log(user[0]?.email);
console.log(restaurant.openingHours);
// optional chaining
console.log(restaurant.openingHours?.fri);
console.log(restaurant.openingHours.fri.close.open?.close);

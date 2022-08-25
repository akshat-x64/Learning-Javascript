"use strict";
const days = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];
const openingHours = {
  [days[3]]: {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
};
console.log(restaurant);

const akshat = {
  name: "Akshat",
  rollNo: 32,
};
const otherInfo = {
  akshat,
  location: "M.P",
};
console.log(otherInfo);

"use strict";

// console.log("a" || "b");
// console.log("" || "b");
// console.log("a" || 2);
// console.log("a" && "b");
// console.log("" && "b");
// console.log("a" && 2);
console.log("0" ?? "b");
console.log("" ?? "b");
console.log("a" ?? 2);
// console.log("A" || "b");
// console.log("" || "a");
// console.log(0 || 12);

// console.log("A" && "b");
// console.log("a" && "a");
// console.log(0 && 12);

// let Akshat;
// Akshat = Akshat || 21;
// console.log(Akshat);
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

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 0;
console.log(guests2);
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// console.log(restaurant);
restaurant.numGuests = restaurant.numGuests ?? 20;
console.log(restaurant.numGuests);
// const guestsss = restaurant.numGuests ?? 10;
// console.log(guestsss);

const rest1 = {
  name: "Akshat1",
  numGuests: 0,
};
const rest2 = {
  name: "Akshat2",
  owner: "Akshat Dwivedi",
};

// rest1.numGuests = rest1.numGuests ?? 20;
// rest2.numGuests = rest2.numGuests ?? 10;

// rest1.owner = rest1.owner || "<ANONYMOUS>";
// rest2.owner = rest2.owner || "<ANONYMOUS>";
// console.log(rest1);
// console.log(rest2);

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

const rest11 = {
  name: "Akshat",
  rollNo: 45,
  No: 23,
};
const rest21 = {
  name: "AKshat2",
  rollNo: 54,
};
rest11.No = rest11.No ?? 20;
rest21.No = rest21.No ?? 20;
console.log(rest11);
console.log(rest21);

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

  orderDelivery: function ({ starterMenuIndex, mainMenuIndex }) {
    console.log(
      `You have ordered pizza ${this.starterMenu[starterMenuIndex]}  and ${this.mainMenu[mainMenuIndex]}`
    );
  },
};

const { name, location, categories } = restaurant;
// console.log(name, location, categories);

const {
  name: RestroName,
  location: locationNew,
  categories: tags,
} = restaurant;
// console.log(RestroName, locationNew, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// const obj_test = {
//   x: 20,
//   y: 30,
// };

// let x = 1999;
// let y = 2000;
// ({ x, y } = obj_test);
// console.log(x, y);

// console.log(restaurant.openingHours);
// const { fri } = restaurant.openingHours;
// console.log(fri);

// const { open, close } = fri;
// console.log(open, close);

// restaurant.orderDelivery({ mainMenuIndex: 2, starterMenuIndex: 1 });

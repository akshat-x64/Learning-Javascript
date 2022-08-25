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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderAnyting(...recipies) {
    console.log(`The order  consists of ${[...recipies]}`);
  },
  // orderPizzaIngi: function (mainIngi, ...restIngi) {
  //   console.log(`the main ingi is ${mainIngi},${restIngi}`);
  // },
};
// destructuring
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

//restpattern
const [a, b, ...otherNumbers] = [1, 2, 3, 4, 5];
console.log(a, b, ...otherNumbers);
const [dish1, dish2, ...otherDish] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(dish1, dish2, ...otherDish);
// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood);
const { fri: rtx, ...otherDays } = restaurant.openingHours;
console.log(rtx, otherDays);
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

const add = function (...num) {
  let total = 0;
  for (let i = 0; num.length > i; i++) {
    total += num[i];
  }
  console.log(total);
};

add(1, 2, 3, 4, 5, 6, 7);
add(3, 4, 5, 4, 3, 2, 2, 3, 23, 2, 3, 23, 2, 32, 3, 2, 323, 3, 23, 32, 3);
// //2.functions
// const add = function (...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   console.log(sum);
// };

// add(2, 3, 4);
// add(5, 8, 3, 7, 5, 3, 2);
// add(8, 8, 8, 8, 8, 8, 8, 8, 8, 8);
// const num1 = [1, 2, 3, 4, 5];
// add(...num1);
// restaurant.orderPizzaIngi("akshat", "dwivedi", "Dewas", "Raipur");
restaurant.orderAnyting("Akshat", "Dwivedi", "dewas", "Raipur");

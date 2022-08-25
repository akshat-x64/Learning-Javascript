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
  functionThis: function () {
    console.log(this);
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
  orderPasta(ing1 = "null", ing2 = "null", ing3 = "null", ing4 = "null") {
    console.log(`the order is ready with ${ing1} ${ing2} ${ing3} ${ing4} `);
  },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your delicious pasta with ${ing1} ,${ing2},${ing3}`);
  // },
};
// array objects
restaurant.functionThis();
restaurant.orderDelivery({
  time: "10:00",
  address: "M.P",
  mainIndex: 2,
  starterIndex: 2,
});

//spread operator
const arr = [1, 2, 3];
let arr2 = [1, 2, arr[0], arr[1], arr[2]];
console.log(arr2);
arr2 = [1, 2, ...arr];
console.log(arr2);
console.log(...arr2);
// const arr = [1, 2, 3];
// const badNewArr = [4, 5, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [4, 5, ...arr];

// console.log(newArr);
// console.log(...newArr);
const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newMenu);
// const newMenu = [...restaurant.mainMenu, "samosa"];
// console.log(newMenu);
const enu = [...newMenu];
console.log(enu);
// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

const string1 = "Akshat";
const string01 = ["a", "b", ...string1];
console.log(string01);

// //join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// //spread operator on strings
// const str = "Akshat";
// const letters = [...str, "a", "", "b"];
// console.log(letters);

// const ingredients = [
//   //   prompt("Enter eng1"),
//   //   prompt("Enter eng2"),
//   //   prompt("Enter eng3"),
// ];
// restaurant.orderPasta(...ingredients);

//making new restaurant or copying a object
const newRestaurant = { ...restaurant, founder: "Akshat" };
newRestaurant.name = "Akshat";
console.log(newRestaurant);
console.log(restaurant);

// const newRestaront = { ...restaurant, founder: "Akshat" };
// console.log(newRestaront);

// const ingredientss = [...restaurant.mainMenu, "Akshat", "Dwivedi"];
// console.log(ingredientss);
const ingredientss = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
  "Akshat",
  "dwivedi",
];
console.log(ingredientss);
// const restaurantcopy = { ...restaurant, founder: "Akshat" };
// restaurantcopy.name = "Akshat";
// console.log(restaurantcopy.name);
// console.log(restaurant.name);
// console.log(restaurantcopy.founder);
restaurant.orderPasta("akshat", "dwivedi", "dewas", "raipur");
restaurant.orderPasta(...newMenu);

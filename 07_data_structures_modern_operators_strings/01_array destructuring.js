"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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
};
// array destructuring

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
const [, w, x, y, z, m] = arr1;
console.log(w, x, y, z, m);
// const [x, y, z] = arr;
// console.log(x, y, z);

let [a1, , a2] = restaurant.categories;
console.log(a1, a2);
let [main, , seconndary] = restaurant.categories;
// console.log(main, seconndary);
// //switching
//switching
[a1, a2] = [a2, a1];
console.log(a1, a2);
// const temp = main;
// main = seconndary;
// seconndary = temp;
// [main, seconndary] = [seconndary, main];
// console.log(main, seconndary);
// const [stater, mainCourse] = restaurant.order(2, 0);
// console.log(stater, mainCourse);

// //next destructuring

//next level destructing
const arr23 = [2, 3, [1, 2]];
const [u, i, [g, h]] = arr23;
console.log(u, i, g, h);

// const arr2 = [2, 3, [1, 2]];
// // const [a1, , a2] = arr2;
// const [p, , [q, r]] = arr2;
// console.log(p, q, r);
// default values
const arr123 = [1, 2];
const [aa, bb, cc = 1, dd = 1] = arr123;
console.log(aa, bb, cc, dd);

// const arr3 = [1, 2];
// const [d = 1, w = 1, s = 1] = arr3;
// console.log(d, w, s);

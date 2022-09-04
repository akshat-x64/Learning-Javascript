"use strict";

const arr = ["a", "k", "s", "h", "a", "t"];
console.log(arr);

//slicing mehod
// console.log(arr.slice(1));
console.log(arr.slice(1, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
let arr2 = arr.slice();
// console.log(arr2);
arr2 = [...arr];
// console.log(arr2);

//splicing method
// arr.splice(1);
// console.log(arr);
// arr.splice(-1);
console.log(arr);
arr.splice(1, 4);
console.log(arr);

//reverse array method

const arr3 = ["a", "k", "s", "h", "a", "t"];
arr3.reverse();
console.log(arr3);
//this method mutate variable

//concat method
const arr4 = ["a", "k", "s", "h", "a", "t"];
const arr5 = arr3;
console.log(arr4.concat(arr5));
console.log([...arr4, ...arr5]);

//join method
console.log(arr4.join("-"));

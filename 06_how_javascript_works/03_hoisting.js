"use strict";
// console.log(me);
// console.log(job);
// console.log(year);
var me = "akshat";
let job = "student";
const year = 2000;
//function
// console.log(addDecl(2, 3));
// console.log(addArrow(2, 3));
// console.log(addExp(2.3));
function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  return a + b;
};

//Example
if (!numProducts) deleteShopping(); // numbroducts is undefined
var numProducts = 10;

function deleteShopping() {
  console.log("All products deleted!");
}

var y = 2;
let x = 1;
const z = 3;

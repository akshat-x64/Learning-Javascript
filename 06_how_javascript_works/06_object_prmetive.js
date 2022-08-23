"use strict";
// this is because each premetive value will be simpley be saved in its own pice of memory satck
//premetive types
let lastname = "Akshat";
let oldLastName = lastname;
lastname = "Dwivedi";
console.log(lastname, oldLastName);
//reference types
const akshat = {
  firstName: "Akshat",
  lastName: "Dwivedi",
  age: 27,
};
const marriedAkshat = akshat; //this does not create a new object in heap
//its just a simple variable in stack
//which holds the reference of original object
//this both are pointing to same object in memory
marriedAkshat.lastName = "Mishra";
console.log("before marriage", akshat);
console.log("after marriage", marriedAkshat);

//marriedAkshat = {};
// this does not work because now we cannnot change value in stack
//this is because it is a constant
//copying objects
const akshat2 = {
  firstName: "Akshat",
  lastName: "Dwivedi",
  age: 27,
  family: ["Akshat", "Dwivedi"],
};

//object.assgin
//merge 2 objects and returns new one
const akshatCopy = Object.assign({}, akshat2);
akshatCopy.lastName = "Mishra";
console.log("Before marriage", akshat2.lastName);
console.log("After marriage", akshatCopy.lastName);

akshat2.family.push("Dewas");
akshatCopy.family.push("Raipur");

console.log(akshat2);
console.log(akshatCopy);

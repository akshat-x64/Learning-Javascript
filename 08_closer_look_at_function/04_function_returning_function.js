"use strict";

const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings},${name}`);
  };
};

greet("aa")("bb");

const greetHey = greet("aa");
console.log("hey");

const greet1 = (greetings) => {
  return function (name) {
    console.log(`${greetings},${name}`);
  };
};
greet1("aa")("bb");

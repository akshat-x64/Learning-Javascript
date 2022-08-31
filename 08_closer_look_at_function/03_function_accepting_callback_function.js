"use strict";

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...otherWords] = str.split(" ");
  return [firstWord.toUpperCase(), ...otherWords].join(" ");
};
console.log(upperFirstWord("This is special moment"));

const transformer = function (str, fn) {
  console.log(`Original string${str}`);
  console.log(`The ransformed string:${fn(str)}`);
  console.log(`${fn.name}`);
};
transformer("Javascript is best!", upperFirstWord);
transformer("Javascript is best!", oneWord);

const aa = ["Akshat", "Dwivedi"].join(" ");
console.log(aa);

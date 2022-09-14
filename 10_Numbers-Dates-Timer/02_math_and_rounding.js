"use strcit";

console.log(Math.sqrt(25));
console.log(Math.sqrt("25"));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
//find maximum value in a range
console.log(Math.max(25, 12, 45, 78, 656, 26));
console.log(Math.min(25, 12, 45, 78, 656, 26));
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat("10px") ** 2);
//generate randum number
console.log(Math.trunc(Math.random() * 10) + 1);
//genetrate accurate number
const generateAccurateRand = function (max, min) {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};
console.log(generateAccurateRand(20, 10));
//round integers
console.log(Math.trunc(24.444));
console.log(Math.trunc(25.44454));
console.log(Math.round(23.3));
console.log(Math.round(23.9));
//floor works well with negative number
console.log(Math.floor(23.11));
console.log(Math.floor(25.11));
//
console.log(Math.ceil(23.3));
//rounding float
console.log((23.5454).toFixed(0));
console.log((23.5454).toFixed(1));
console.log((23.5454).toFixed(2));
console.log((23.5454).toFixed(3));
console.log((23.5454).toFixed(4));

"use strict";
//in base 10 we have 0-1
//in base 2 we have binary digits

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//
console.log(Number("23"));
console.log(+"23");
//parsing
console.log(Number.parseInt("23e4"), 10);
console.log(Number.parseInt("er23"));
//parsefloat
console.log(Number.parseInt("2.5er"));
console.log(Number.parseFloat("2.5er"));
//checking if value is number or not
console.log(Number.isFinite(23));
console.log(Number.isFinite("23"));
console.log(Number.isFinite(+"23x"));
console.log(Number.isFinite(23 / 0));
//checking for int
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

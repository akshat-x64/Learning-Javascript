"use strict";
const amount = 15;
const tip = amount >= 50 && amount <= 300 ? amount * 0.2 : 0;
console.log(
  `The bill was ${amount}, the tip was ${tip}, and the total value ${
    tip + amount
  }`
);

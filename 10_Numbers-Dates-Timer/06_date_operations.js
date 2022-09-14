"use strict";
const future = new Date(2037, 10, 19, 15);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 24));
console.log(days1);

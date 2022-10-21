"use strict";

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  const final = [];
  let final1 = "";
  for (let i = 0; i < arr.length; i++) {
    //"... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
    final.push(`...${arr[i]}ºC in ${i + 1} days`);
    final1 += `...${arr[i]}ºC in ${i + 1} days`;
  }
  console.log(`${final1}...`);
};
printForecast(arr1);
printForecast(arr2);
console.log(typeof printForecast);

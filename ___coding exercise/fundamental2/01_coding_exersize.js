"use strict";
function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas * 2) {
    console.log(`Dolhins wins ${avgDolhins > avgDolhins * 2}`);
  } else if (avgKoalas > avgDolhins * 2) {
    console.log(`Koalas wins ${avgDolhins > avgDolhins * 2}`);
  }
}
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(2300, 34, 27);
checkWinner(avgDolphins, avgKoalas);

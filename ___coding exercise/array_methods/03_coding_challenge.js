"use strict";

const calcAverageHumanAge = (ages) => {
  const age = ages
    .map((data) => (data <= 2 ? data * 2 : 16 + data * 4))
    .filter((data) => data >= 18)
    .reduce((acc, data, i, arr) => acc + data / arr.length, 0);
  console.log(age);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

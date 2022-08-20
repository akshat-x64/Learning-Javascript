"use strict";

const temperatures = [3, -2, -6, -1, 9, "error", 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (tempArr) {
  let max = tempArr[0];
  let min = tempArr[0];

  for (let i = 0; i < tempArr.length; i++) {
    let num = tempArr[i];
    if (typeof tempArr[i] !== "number") {
      continue;
    }
    {
      if (num > max) {
        max = num;
      }

      if (num < min) {
        min = num;
      }
    }
  }
  console.log(max);
  console.log(min);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));

const calcTempAmplitude_2 = function (tempArr_1, tempArr_2) {
  let tempArr = tempArr_1.concat(tempArr_2);
  let max = tempArr[0];
  let min = tempArr[0];

  for (let i = 0; i < tempArr.length; i++) {
    let num = tempArr[i];
    if (typeof tempArr[i] !== "number") {
      continue;
    }
    {
      if (num > max) {
        max = num;
      }

      if (num < min) {
        min = num;
      }
    }
  }
  console.log(max);
  console.log(min);
  return max - min;
};

console.log(calcTempAmplitude([20, 30, 40, 50, 0], [0, 10, 25, 34, 65]));

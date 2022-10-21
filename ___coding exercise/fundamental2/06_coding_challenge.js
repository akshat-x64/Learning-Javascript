"use strict";
const temperatures = [3, -2, -6, -1, 9, "error", 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    } else {
      if (max < arr[i]) {
        max = arr[i];
      }
      if (min > arr[i]) {
        min = arr[i];
      }
    }
  }
  return max - min;
};
console.log(calcTempAmplitude(temperatures));

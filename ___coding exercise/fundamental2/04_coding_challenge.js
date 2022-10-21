"use strict";

const calcTip = function (bill) {
  let tip = 0;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  }
  return tip;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  console.log(tips.push(calcTip(bills[i])));
  console.log(totals.push(calcTip(bills[i]) + bills[i]));
}
console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg / arr.length;
};
const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(calcAverage(arr));

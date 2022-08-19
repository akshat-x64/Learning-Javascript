"use strcit";

function calcTip(amount) {
  if (amount >= 50 && amount <= 300) {
    return amount * 0.15;
  } else {
    return amount * 0.2;
  }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sample = 0;
  for (let i = 0; i < arr.length; i++) {
    sample += arr[i];
  }

  return sample / arr.length;
}

function calcAdd(arr) {
  console.log(arr.length);
  let sample = 0;
  for (let i = 0; i < arr.length; i++) {
    sample += arr[i];
  }

  return sample;
  _2;
}
const arrayList = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

console.log(calcAverage(arrayList));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
calcAdd(arrayList);

function calcAdd(arr) {
  console.log(arr.length);
}
const arr_2 = [12, 23, 45, 45];

printArr(arr_2);

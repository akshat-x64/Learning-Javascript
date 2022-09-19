"use strict";
const arrayElement = [2, 3, 6, 6, 5];
let higestElementArray = arrayElement[0];
let secondHigestElementArray = arrayElement[0];
for (const aa of arrayElement) {
  if (aa > higestElementArray) {
    secondHigestElementArray = higestElementArray;
    higestElementArray = aa;
  }
  if (secondHigestElementArray < aa && aa < higestElementArray) {
    secondHigestElementArray = aa;
  }
}
console.log(higestElementArray);
console.log(secondHigestElementArray);

"use strict";

function calcTip(tip) {
    if (tip >= 50 && tip <= 300) {
        return (tip * 15) / 100;
    }
    else {
        return (tip * 20) / 100;
    }
}

console.log(calcTip(100));

const billData = [125, 555, 44];
console.log(billData);
const bills = [calcTip(billData[0]), calcTip(billData[1]), calcTip(billData[2])];
console.log(bills);
const total = [(calcTip(billData[0]) + billData[0]), calcTip(billData[1]) + billData[1], calcTip(billData[2]) + billData[2]];
console.log(total);

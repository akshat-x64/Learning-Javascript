"use strict";
const calcTip = function (tip_amount) {
  const final_tip =
    tip_amount <= 300 && tip_amount >= 50 ? tip_amount * 0.15 : 0;
  return final_tip;
};
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

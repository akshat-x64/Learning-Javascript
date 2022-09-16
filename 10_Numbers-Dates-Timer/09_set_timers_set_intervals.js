"use strict";
//set timeout
const ingredents = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (n1, n2) => console.log(`Here is your pizza🍕 with ${n1} ,${n2}`),
  3000,
  ...ingredents
);

console.log("waiting....");
if (ingredents.includes("spinach")) {
  clearTimeout(pizzaTimer);
}
//set interval
setInterval(() => {
  const time = new Date();
  console.log(time.getHours(), time.getMinutes(), time.getDay());
}, 1000);

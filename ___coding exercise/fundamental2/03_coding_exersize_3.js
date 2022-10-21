"use strict";
const Mark = {
  fullName: "Mark Miller",
  mass: 78,

  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
console.log(Mark.calcBMI());
console.log(John.calcBMI());
if (John.BMI < Mark.BMI) {
  console.log(`John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})!`);
} else {
  `Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})`;
}

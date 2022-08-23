"use strict";

const akshat = {
  firstName: "Akshat",
  year: 2000,

  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    //solution 0
    // const self = this; // self will reference this self will preserve this
    // const isMillnium = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // solution 1
    //const self = this; // self will reference this self will preserve this
    // this works beacuse arrow function does not have its own this. keyword // arrow function will use its parent this keyword
    const isMillnium = () => {
      console.log(this);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillnium();
  },
};

akshat.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 6);
addExpr(2, 4, 6, 8);

const addExprArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addExprArrow(3, 6);
addExprArrow(2, 4, 6, 8);

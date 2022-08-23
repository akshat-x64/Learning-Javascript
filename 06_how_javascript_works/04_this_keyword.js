"use strict";

console.log(this);

const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};

calcAge(2000);
const calcAgeArrow = (birthyear) => {
  console.log(2037 - birthyear);
  console.log(this);
};

calcAgeArrow(1990);

const akshat = {
  year: 2000,
  calcAge: function () {
    console.log(2077 - this.year);
  },
};
akshat.calcAge(); //jonas is calling the method that is this is pointing to object

const matilde = {
  year: 2017,
};
matilde.calcAge = akshat.calcAge;
matilde.calcAge();
// this is called method broowing
// this keyword always point to calling object

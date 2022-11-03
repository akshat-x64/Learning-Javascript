"use strcit";
// bind also allows us to manually set this keywords
// for any function call.
// Now, the difference is that bind
// does not immediately call the function.
// Instead it returns a new function
// where this keyword is bound.
"use strict";
const lufthansa = {
  airline: "lufthansa",
  idataCode: "LH",
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seaton ${this.airline} flight ${this.idataCode} ${flightnum}`
    );
    this.bookings.push({ flight: `${this.idataCode} ${flightnum} `, name });
  },
};

const eurowings = {
  airline: "eurowings",
  idataCode: "EU",
  bookings: [],
};
const swiss = {
  airline: "Swiss air lines",
  idataCode: "LX",
  bookings: [],
};
const book = lufthansa.book;
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookEW(23, "Akshat");
console.log(eurowings);

const bookEW1 = book.bind(eurowings, 23);
bookEW1("Akshat");
bookEW1("Dwivedi");
console.log(eurowings);

//with event listeners;
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlanes.bind(lufthansa));
//partial application
const addTax = (rate, value) => {
  return value + value * rate;
};
console.log(addTax(0.2, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(400));
console.log(addVAT(200));

//using function returing function
const addvar1 = function (rate) {
  return function (quantity) {
    return quantity + quantity * rate;
  };
};
console.log(addvar1(0.2)(200));
const addvar2 = addvar1(0.2);
console.log(addvar2(100));
console.log(addvar2(400));

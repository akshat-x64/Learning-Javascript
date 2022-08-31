"use sstrict";

//call and apply method

const lufthansa = {
  airline: "lufthansa",
  idata: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.idata} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.idata},${flightNum} `, name });
  },
};

lufthansa.book(45, "Akshat");
const eurowings = {
  airline: "eurowings",
  idata: "EW",
  bookings: [],
};

const book = lufthansa.book;

const indigo = {
  airline: "Indigo",
  idata: "IN",
  bookings: [],
};

const aa = {
  akshat: "Akshat",
  name: "Dwivedi",
};
//the call method
book.call(eurowings, 45, "Akshat");
// console.log(lufthansa.bookings);
book.call(indigo, 90, "Mr.Dwivedi");
// console.log(indigo.bookings);
// console.log(eurowings.bookings);
// console.log(aa);
//the apply method
const flighData = [32, "AKshat"];
book.call(indigo, ...flighData);
// console.log(indigo.bookings);

//bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookIN = book.bind(indigo);

bookEW(23, "Akshat");
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Akshat");

//with event listeners

lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = function (rate, value) {
  return value + value * rate;
};

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTax1 = function (rate = 0) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT1 = addTax1(0.23);
// console.log(addTax1(100)(0.23));
console.log(addVAT1(100));

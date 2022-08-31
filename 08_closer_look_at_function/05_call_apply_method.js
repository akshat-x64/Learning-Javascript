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
console.log(lufthansa.bookings);
book.call(indigo, 90, "Mr.Dwivedi");
// console.log(indigo.bookings);
// console.log(eurowings.bookings);
console.log(aa);
//the apply method
const flighData = [32, "AKshat"];
book.call(indigo, ...flighData);
console.log(indigo.bookings);

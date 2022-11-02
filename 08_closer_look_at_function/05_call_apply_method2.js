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

lufthansa.book(235, "Akshat Dwivedi");
lufthansa.book(265, "AKshat Sheth");
console.log(lufthansa);

const eurowings = {
  airline: "eurowings",
  idataCode: "EU",
  bookings: [],
};

const book = lufthansa.book;

//this will give error and because book is now a independent function
//so we have to expectially tell js to point to a particular or manually point to the boject
// book(23, "Akshat Dwivedi");

book.call(eurowings, 23, "Akshat Dwivedi");
book.call(eurowings, 56, "Akshat Sheth");
console.log(eurowings);

const swiss = {
  airline: "Swiss air lines",
  idataCode: "LX",
  bookings: [],
};

book.call(swiss, 78, "AKshat Dwivedi");
console.log(swiss);

//APPLY METHOD
const flightData = [23, "Dwivedi Akshat"];
book.apply(swiss, flightData);
console.log(swiss);

//altername
book.call(swiss, ...flightData);

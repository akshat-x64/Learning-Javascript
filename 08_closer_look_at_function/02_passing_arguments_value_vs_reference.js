"use strict";

const flight = "LH234";
const akshat = {
  name: "Akshat Dwivedi",
  passport: 123456789123456,
};

const checkIn = function (flightNum, passenger) {
  passenger.name = "Mr." + passenger.name;
  flightNum = "LH999";
  if ((passenger.passport = 123456789123456)) {
    console.log("Checked in");
  } else {
    console.log("Checked out");
  }
};

checkIn(flight, akshat);
console.log(flight);
console.log(akshat);

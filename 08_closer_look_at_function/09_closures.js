"use strict";

const secureBookings = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBookings();

booker();
booker();
booker();

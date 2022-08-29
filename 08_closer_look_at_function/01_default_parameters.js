"use strict";

const bookings = [];
const createBooking = function (
  flightNum,
  numPasssenger = 1,
  price = 199 * numPasssenger
) {
  const booking = {
    flightNum,
    numPasssenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("A134");
createBooking("A1234", 34);
createBooking("S32", undefined, 45);

console.log(bookings);

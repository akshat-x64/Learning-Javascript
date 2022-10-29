"use strict";
//lecture #1
const airline = "TAP air portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("0706"[0]);
console.log(airline.length);
console.log(airline.indexOf("a"));
console.log(airline.lastIndexOf("a"));
console.log(airline.indexOf("air"));
console.log(airline.indexOf("aair"));
console.log(airline.slice(airline.indexOf(" ") + 1));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));

console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-3));

const checkMiddleSeat = function (seat) {
  //b and e are middel seats
  const s = seat.slice(-1);
  if (s === "E" || s === "B") {
    console.log("You got middle seat🥱");
  } else {
    console.log("You got window seat🤩");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("11C");
checkMiddleSeat("11E");
//we know string are premitives
// so why string has methods
// methods are only available for only objects
//whenever we call string method the js will convert string primitive to a string object
//this conversion is called boxing

console.log(typeof new String());
console.log(typeof airline.slice(2));
//lecture #2

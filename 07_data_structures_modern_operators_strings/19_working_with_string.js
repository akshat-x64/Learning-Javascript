"use strict";
//lecture #1
let airline = "TAP air portugal";
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
//changing case of the string
airline = "TAP air portugal";
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//fix captization in name
const passenger = "AkshAt";
const passengerLower = passenger.toLocaleLowerCase();
console.log(passengerLower);
const passengerFinal =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerFinal);

const passengerFix = function (name) {
  const final = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return final;
};
console.log(passengerFix(passenger));

//check email comparing email
const email = "hello@akshat.io";
const loginEmail = "   Hello@Akshat.io \n";
const lowerEmail = loginEmail.toLowerCase().trim();
console.log(lowerEmail);
console.log(email === lowerEmail);
// there is also trim start and trim end
// function to check compare email
const emailDefault = "akshatdwivedi189@gmail.com";
const emailInput = "AKSHATDwivedi189@GMAIL.com";
const compareEmail = function (email1, email2) {
  const emailFinal = email2.toLocaleLowerCase().trim();
  console.log(email1 === emailFinal);
};
compareEmail(emailDefault, emailInput);

//replacing parts of string

const price = "288.97₹";
const priceINus = price.replace("₹", "$").replace(".", ".");
console.log(priceINus);

const announcement = "All passenger come to boarding door 23, boarding door 23";
console.log(announcement.replaceAll("door", "gate"));
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("boing"));
console.log(plane1.startsWith("A"));
if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("true1");
}
//practice checkbaggage
const checkbaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("you are not abroad");
  } else {
    console.log("you are abroad");
  }
};
checkbaggage("i have laptop and food and a pocket knife");
checkbaggage("socks and camers");
checkbaggage("got some snacks and a gun for protection");

//section #3;
//spliting is used for spliting
console.log("I+Am+Akshat".split("+"));
const [firstName, lastName] = "Akshat Dwivedi".split(" ");
console.log(firstName, lastName);
//joing sring using givenconditions
const newName = ["Mr.", firstName, lastName].join(" ");
console.log(newName);

const captizationName = function (name) {
  let arrString = name.split(" ");
  const arr = [];

  for (let iterator of arrString) {
    // arr.push(iterator[0].toUpperCase() + iterator.slice(1).toLocaleLowerCase());
    //alternative
    arr.push(iterator.replace(iterator[0], iterator[0].toUpperCase()));
  }
  return arr.join(" ");
};
console.log(captizationName("akshat dwivedi"));
console.log(captizationName("akshat dwivedi dewas"));

//padding
const message = "go to gate 23!";
console.log(message.padStart(23, "+"));
console.log(message.padEnd(25, "+"));

const maskCreditCard = function (num) {
  const aa1 = num + "";
  const strLength = aa1.length;
  const aa = aa1.slice(-4);
  console.log(aa.padStart(strLength, "*"));
};
maskCreditCard(4555555553131);
maskCreditCard(111111146561133333);

//repeat
const message1 = "bad weather... ALl departures Delayed...";
console.log(message.repeat(5));

const planeInline = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
planeInline(4);
planeInline(5);
planeInline(2);

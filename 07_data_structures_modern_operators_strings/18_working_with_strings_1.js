"use strict";
const airline = "Indigo";
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const correctName = function (name) {
  const lowerName = name.toLocaleLowerCase(); //akshat
  const firstLetter = lowerName[0]; // a
  const correctName = firstLetter.toUpperCase() + lowerName.slice(1);
  console.log(correctName);
};

correctName("AKshat");
correctName("DwIvEdi");

const myEmail = "hello@jonas.io";
const enteredEmail = "   HEllo@jonas.io";

const correctEmail = function (email) {
  const correctEmaill = email.toLocaleLowerCase().trim();
  console.log(correctEmaill);
};
correctEmail(enteredEmail);
//replacing

const priceGb = "288,97$";
const usPricing = priceGb.replace(",", ".").replace("$", "@");
console.log(usPricing);
// replacing multiple values
const announcement = "all passengers come to boarding gate 23.Boarding gate 23";
const newAnnuncement = announcement.replaceAll("gate", "door");
console.log(newAnnuncement);
//booleans

const plane = "Airbus A320neo";
console.log(plane.includes("Airbus"));
console.log(plane.includes("320"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

const AirportSecurity = function (string) {
  const data = string.toLocaleLowerCase();
  if (data.includes("gun") || data.includes("nife")) {
    console.log("PAssenger not allowed");
  } else {
    console.log("PAssenger allowed");
  }
};

AirportSecurity("Passenger1 carries cake and nife");
AirportSecurity("Passenger2 carries bag and laptop");
AirportSecurity("Passenger3 carries bag and gun");

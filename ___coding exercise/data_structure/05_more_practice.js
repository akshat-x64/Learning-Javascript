"use strict";
//more practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
//"+"sign acts as an seperator
console.log(flights.split("+"));
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = ` ${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll(
    "_",
    " "
  )}from   ${from.slice(0, 3).toLocaleUpperCase()} to ${to
    .slice(0, 3)
    .toLocaleUpperCase()}  (${time.replace(":", "h")})`;
  console.log(output.padStart(50, " "));
}

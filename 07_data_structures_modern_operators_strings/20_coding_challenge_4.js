"use strict";
/* 
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
*/
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   console.log(text);
// });

const stringCamel = function (stringData) {
  const aaa = stringData.split(" ");
  console.log(aaa);
  for (const aData of aaa) {
    const [part1, part2] = aData.split("_");
    // console.log(part1, part2);
    const part22 = part2.replace(part2[0], part2[0].toUpperCase());
    let result = part1.concat(part22);
    console.log(result);
  }
};
const dataPage =
  "underscore_case
  first_name
  Some_Variable
  calculate_AGE
  delayed_departure";

const datapage = dataPage.replace(" ", " ");
console.log(datapage);
// stringCamel(dataPage);

// const aaa = "Akshat_dwivedi";
// const [part1, part2] = aaa.split("_");
// console.log(part1, part2);
// const part22 = part2.replace(part2[0], part2[0].toUpperCase());
// let result = part1.concat(part22);
// console.log(result);

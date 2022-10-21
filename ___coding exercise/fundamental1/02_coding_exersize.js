"use strict";
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 

*/

const marksWeight = 78;
const marksHeight = 1.79;
const johnWeight = 92;
const johnHeight = 1.76;

const markBMI = marksWeight / marksHeight ** 2;
const JohnBMI = johnWeight / johnHeight ** 2;
console.log(`MArkBMI ${markBMI},JohnBmI ${JohnBMI}`);

if (markBMI > JohnBMI) {
  console.log(`Mark's BMI is higher than John's! (${markBMI})`);
} else {
  console.log(`John's BMI is higher than Mark's! (${JohnBMI})`);
}

//``=> this is called bacticks


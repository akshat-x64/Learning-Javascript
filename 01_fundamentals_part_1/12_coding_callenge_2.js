// let markWeightKg = 78;
// let markHeightFeet = 1.69;

// let johnWeightKg = 92;
// let johnHeightFeet = 1.95;

let markWeightKg = 95;
let markHeightFeet = 1.88;

let johnWeightKg = 85;
let johnHeightFeet = 1.76;

let bmi;
bmiMark = markWeightKg / markHeightFeet ** 2;
bmiJohn = johnWeightKg / johnHeightFeet ** 2;
markHigherBmi = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);
console.log(markHigherBmi);

if (markHigherBmi) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
}
else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's  ${bmiMark}!`)
}
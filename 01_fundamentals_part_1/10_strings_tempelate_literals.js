const firstName = "Akshat";
const job = "Student";
const dateOfBirth = 2000;

const currentYear = 2022;

let akshat = "I'm " + firstName + ", a " + (currentYear - dateOfBirth) + " years old " + job;
console.log(akshat);
// with the help of string literal
// `` this sign is also known backstick 
akshat = `I'm ${firstName} a ${currentYear - dateOfBirth} years old ${job}`;
console.log(akshat);

// console.log("Akshat \n\Dwivedi")
// console.log(`Akshat
// Dwivedi`)
console.log(akshat);

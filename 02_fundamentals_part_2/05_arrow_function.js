// "use strict";

// function calculateRetirement(birthDate, name) {
//     const age = 2077 - birthDate;
//     const ageLeft = 65 - age;
//     return `the age of ${name} is ${age} and age left for retirement is ${ageLeft}`;
// }


// console.log(calculateRetirement(2030, "Alias"));
// console.log(calculateRetirement(2040, "Alias_1"));


// "use strict";


// const calAge = birthyear => 2077 - birthyear;
// const age = calAge(2000);
// console.log(age);

// "use strict";

// const calRetirement = (birthDate, name) => {
//     const age = 2077 - birthDate;
//     const ageLeft = 65 - age;
//     return `the age of ${name} is ${age} and age left for retirement is ${ageLeft}`;

// }

// console.log(calRetirement(2045, "Alias"));
// console.log(calRetirement(2048, "Alias_2"));


"use strict";


// const calculateDateOfBirth = age => 2077 - age;
// console.log(calculateDateOfBirth(25));

const calRetirement = (name_1, dateOfBirth) => {

    let ageFinal = 2077 - dateOfBirth;
    let yearsLeftForRetirement = 60 - ageFinal;
    return `The age of ${name_1} is ${ageFinal} and years left for retirement is ${yearsLeftForRetirement} .`;

}
console.log(calRetirement("Akshat Sheth", 2050))
"use strict";

function calAge(age) {
    return 2077 - age;
}

const age1 = ["2022", "2050", "2045"];
console.log(age1);

//console.log(calAge(age1));

console.log(calAge(age1[0]));
console.log(calAge(age1[1]));
console.log(calAge(age1[2]));

const allAge = [calAge(age1[0]), calAge(age1[2]), calAge(age1[1])];
console.log(allAge);


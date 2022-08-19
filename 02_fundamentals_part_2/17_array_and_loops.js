// write this code in note book

"use strict";

const akshat = [
    "Akshat",
    "Dwivedi",
    2077 - 2050, ["Rtx", "ps5", "ps4"],
    "true"
];

const typeStore = [];
for (let i = 0; i < akshat.length; i++) {
    console.log(akshat[i], typeof (akshat[i]));
    typeStore.push(typeof (akshat[i]));
    // console.log(typeof (akshat[i]));

}
console.log(typeof (akshat));
const arraySample = ["Akshat", ["Akshat", "Dwivedi"]];
console.log(typeof (arraySample[1]));
console.log(typeof (akshat[3]));
console.log(typeStore);


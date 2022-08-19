"use strict";


const akshat = [
    "Akshat",
    "Dwivedi",
    2077 - 2050, ["Rtx", "ps5", "ps4"],
    "true"
];

for (let i = 0; i < akshat.length; i++) {
    if (typeof (akshat[i]) === "number") {
        break;
    }
    console.log(akshat[i], typeof (akshat[i]));
}
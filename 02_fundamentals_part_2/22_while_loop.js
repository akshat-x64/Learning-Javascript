"use strict";

let counter = 1;

while (counter <= 3) {
    console.log(`Lifting weight ${counter}`);
    counter++;
}

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
    console.log(`the dice rolled to ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log(`The loop is going to end now----------`);
    }
}


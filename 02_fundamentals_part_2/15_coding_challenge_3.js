"use strict";

const Mark = {
    fullName: "Mark Miller",
    mass: 788,
    height: 1.69,

    calBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    },
    returnBmi: function () {
        return this.bmi;
    }
}

const John = {
    fullName: "John Smith",
    mass: 9299,
    height: 1.95,

    calBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    },

    returnBmi: function () {
        return this.bmi;
    }
}
Mark.calBmi();
John.calBmi();
console.log(Mark.returnBmi(), John.returnBmi());


if (John.bmi > Mark.bmi) {
    console.log(`${John.fullName}'s BMI (${John.bmi}) is higher than ${Mark.fullName}'s (${Mark.bmi})!`);
}

else if (Mark.bmi > John.bmi) {
    console.log(`${Mark.fullName}'s BMI (${Mark.bmi}) is higher than ${John.fullName}'s (${John.bmi})!`);
}
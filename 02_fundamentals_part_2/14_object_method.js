"use strict";

const akshat = {
    firstName: "Akshat",
    lastName: "Dwivedi",
    job: "Student",
    dateOfBirth: 2050,
    friend: ["Akshat", "Akshay", "Anmol", "Ajay"],
    driverLisence: false,
    // calAge: function (dateOfBirth) {
    //     return 2077 - dateOfBirth;
    // },
    calAge: function () {
        console.log(this);
        this.age = 2077 - this.dateOfBirth;
        return 2077 - this.dateOfBirth;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} old student and he has ${this.driverLisence ? "a" : "no"} driver lisence`;
    }


}

console.log(akshat.calAge());
console.log(akshat.age);
console.log(akshat.getSummary());




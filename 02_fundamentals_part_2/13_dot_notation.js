"use strict";
const akshat = {
    firstName: "Akshat",
    lastName: "Dwivedi",
    job: "Student",
    age: "22",
    friend: ["Akshat", "Akshay", "Anmol", "Ajay"],

}
console.log(akshat);
// to access an keypair of object using . notation
console.log(akshat.firstName);
// to access a keypair of object using [] bracket notation
console.log(akshat["lastName"]);

const keypair$1 = "Name";

console.log(akshat["first" + keypair$1]);
// we can put an equation in bracket also;
// adding new peoperty to object using . and [] notation

akshat.location = "Dewas";
akshat["gaming"] = "vallorent";
console.log(akshat);

// challenge;
console.log(`${akshat.firstName} has ${akshat.friend.length} and his best friend is ${akshat.friend[0]}`);


console.log(akshat[prompt(`what do you want`) + "Name"]);

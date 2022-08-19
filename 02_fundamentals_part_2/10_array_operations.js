"use strict";

const friends = ["Akshat", "Ankit", "Anmol", "Akshay"];
// for adding element from back
console.log(friends);
friends.push("Ratlami");
console.log(friends);

// for adding element from  front
friends.unshift("Ajay");
console.log(friends);
// for deleting element element from back
friends.pop(friends);
console.log(friends);
// for deleting element element from front
friends.shift(friends);
console.log(friends);
// for finding an element in an array(old method);
console.log(friends.indexOf("Akshat"));

//for finding element in an array(new method);

console.log(friends.includes("Akshat"));
if (friends.includes("Akshat")) {
    console.log("Akshat friend is there");

}

// this returns 0 index in if we convert into boolean value we get false which  is false and if block dosen't get executed;
if (friends.indexOf("Akshat")) {
    console.log("Akshat friend is there");

}


"use strict";

const friend_1 = "ANkit";
const friend_2 = "Ankit";
const friend_3 = "AnkiT";


const friends = ["ANkit", "Ankit", "AnkiT"];
console.log(friends);

console.log(friends.length);
console.log(friends[0]);

console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// this gives error friends = ["AKshat", "Dwivedi", "Trivaedi"];
const friends_1 = new Array("AKshat", "Dwivedi", "Trivaedi");
console.log(friends_1);


const akshatDwivedi = ["Akshat", "Dwivedi", "22", "2000"];
console.log(akshatDwivedi);
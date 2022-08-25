"use strict";
// sets is collection of unique values and it does not have repeating values
const orderSet = new Set(["pizza", "pasta", "pasta", "disotta", "pizza"]);
console.log(orderSet);
console.log(new Set("Akshat"));
console.log(new Set());
// to find out size or length of set
console.log(orderSet.size);
// to find out if element has this array
console.log(orderSet.has("pizza"));
console.log(orderSet.has("pizzza"));
// to add items in set
orderSet.add("Akshat");
orderSet.add("Dwivedi");
console.log(orderSet);
// delete item in set
orderSet.delete("Akshat");
orderSet.delete("Dwivedi");

//if we wwant to clear the entire data  of set
//orderSet.clear();
console.log(orderSet);
// we can loop order
for (const sample of orderSet) {
  console.log(sample);
}
// array to Set
const akshat = ["Akshat", "Dwivedi", "dewas", "raipur", "Akshat", "Akshat"];
const akshat2 = new Set(akshat);
console.log(akshat);
//  set to array
const akshat3 = [...akshat2];
console.log(akshat2);
console.log(new Set(akshat3).size);

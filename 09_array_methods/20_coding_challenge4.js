"use strict";
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:

2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: 
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)
The Complete JavaScript Course 26
Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
//1.
dogs.forEach(function (data, i) {
  data.recommendedFood = Math.trunc(data.weight ** 0.75 * 28);
});
// console.log(dogs);
//2.
dogs.forEach(function (data, i) {
  let [o1, o2] = data.owners;
  if (o1 === "Sarah" || o2 === "Sarah") {
    if (data.recommendedFood < data.curFood) {
      //   console.log("Sarah dog is eating too much.");
    } else {
      //   console.log("Sarah dog is eating too less.");
    }
  }
});
//alternate
const sarahDog = dogs.find((aa) => aa.owners.includes("Sarah"));
// console.log(
//   `The dog is eating ${
//     sarahDog.curFood > sarahDog.recommendedFood ? "Much" : "Less"
//   }`
// );
// 3
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(function (dog) {
  if (dog.curFood > dog.recommendedFood) {
    ownersEatTooMuch.push(dog.owners);
    // console.log(dog.owners);
  } else {
    ownersEatTooLittle.push(dog.owners);
  }
});

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);
// 4.
// "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

// console.log(`${ownersEatTooMuch.flat().join(" and ")}dogs eat too much! `);
// console.log(`${ownersEatTooLittle.flat().join(" and ")}dogs eat too much! `);
//5.
// dogs.forEach(function (data, i) {
//   if (data.curFood === data.recommendedFood) {
//     console.log(
//       `The index is ture on ${1 + i} ${data.curFood === data.recommendedFood}`
//     );
//   }
// });
console.log(dogs.some((aa) => aa.curFood === aa.recommendedFood));
//5.
const decision = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
7;
console.log(
  dogs.filter(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);
//8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);

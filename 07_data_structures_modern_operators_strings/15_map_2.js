"use strict";
//easy ways to make map is to simply use;
const sample = new Map();
console.log(typeof sample);
//to set value in map method

sample.set("name ", "Akshat Dwivedi");
sample.set(1, "Madhya pradesh,Indore");
sample
  .set("Name", ["Akshat", "Akshat", "Dwivedi", "Sheth", "ANkit"])
  .set("last name", "Dwivedi")
  .set(true, "open");
console.log(sample);
//to get value from we use git method
console.log(sample.get(true));
const time = 20;
console.log(sample.get(Boolean(time)));
console.log(sample.has(true));
sample.delete(true);
console.log(sample);
sample.clear();
console.log(sample.size);
//can array can be as key in map
const arr = [1, 2];
sample.set(arr, "open");
console.log(sample.get(arr));

//another way of add contnet to map
const quiz1 = new Map([
  ["questions", "Whats is the best programming language"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
console.log(quiz1);
console.log(Object.entries(quiz1));
//looping maps
console.log(quiz1.get("questions"));
for (const [key, value] of quiz1) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = 2;
console.log(answer);
console.log(quiz1.get(quiz1.get("correct") === answer));

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//converting object to map
const ObjTOmap = new Map(Object.entries(game));
console.log(ObjTOmap);

//convert map to array

const maptoarr = [...quiz1];
console.log(maptoarr);

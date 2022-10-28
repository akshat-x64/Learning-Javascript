"use strict";
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const arr = [];
for (const [key, value] of gameEvents) {
  arr.push(value);
}
console.log(arr);
const events = new Set(arr);
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
let length = 1;
let avg = 0;
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on
${time / gameEvents.size} average, every 9 minutes`);

for (const [keys, values] of gameEvents) {
  const gameLive = keys <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${gameLive}] ${keys}:${values}`);
}

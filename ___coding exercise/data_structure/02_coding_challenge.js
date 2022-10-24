"use strict";
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

for (const [i, iterator] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(i) + 1}: ${iterator}`);
}
let oddsAvg = 0;
for (const iterator of Object.values(game.odds)) {
  oddsAvg += iterator;
}
console.log(oddsAvg / 3);

for (const [team, od] of Object.entries(game.odds)) {
  let team12 = team === "x" ? "draw" : `${game[team]}`;
  console.log(`Odd of ${team12}: ${od}`);
}

const scorers = {};
for (const iterator of game.scored) {
  if (scorers[iterator]) {
    scorers[iterator]++;
  } else {
    scorers[iterator] = 1;
  }
}
console.log(scorers);

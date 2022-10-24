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

const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
console.log(players1Final);
const { team1, team2, x: draw } = game.odds;
console.log(team1, team2, draw);

const printGoals = function (...players) {
  console.log(`The goals were scored ${players.length}`);
  for (let i = 0; i < players.length; i++) {
    console.log(`Players played ${players[i]}`);
  }
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

team1 < team2 && console.log("team 1 won");
team2 < team1 && console.log("team 2 won");

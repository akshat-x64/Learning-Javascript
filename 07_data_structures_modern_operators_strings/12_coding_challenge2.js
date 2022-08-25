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

// const player1 = [game.team1, ...game.players[0]];
// const player2 = [game.team2, ...game.players[1]];

const [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);

const [gk, ...fieldPlayers] = player1;
//const fieldPlayers = [game.players[0]];
// console.log(gk);
// console.log(fieldPlayers);

const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

const players1Final = [
  "Thiago",
  "Coutinho",
  "Perisic",
  game.team1,
  ...game.players[0],
];
// console.log(players1Final);
// const team1 = game.odds.team1;
// const draw = game.odds.team2;
// const team2 = game.odds.x;

const {
  odds: { team1, team2, x: draw },
} = game;
// console.log(team1, draw, team2);

// const printGoals = function (...player) {
//   console.log(`${player.length} game scored`);
//   for (let i = 0; player.length > i; i++) {
//     console.log(player[i]);
//   }
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");

// team1 < team2 && console.log("Team1 is most likely to win");
// team1 > team2 && console.log("Team2 is most likely to win");

/*
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }*/
//1. Loop over the game.scored array and print each player name to the console,
//along with the goal number (Example: "Goal 1: Lewandowski")

// const scoreLoop = Object.entries(game.scored);
// console.log(scoreLoop);
// let i = 1;
//1.

// 2. Use a loop to calculate the average odd and log it to the console (We already
//     studied how to calculate averages, you can go check if you don't remember)
// console.log(game.odds);
// console.log(Object.entries(game.odds));

let average = 0;
const odd = Object.values(game.odds);
for (const odds of odd) {
  average += odds;
}

console.log(average / 3);
console.log(odd);
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
//     Odd of draw: 3.25
//     Odd of victory Borrussia Dortmund: 6.5
//     Get the team names directly from the game object, don't hardcode them
//     (except for "draw"). Hint: Note how the odds and the game objects have the
//     same property names 😉
console.log(Object.entries(game.odds));
for (const [team, score] of Object.entries(game.odds)) {
  // console.log(team, score);
  let team12 = team === "x" ? "draw" : `${game[team]}`;
  console.log(`the team ${team12} by ${score}`);
}
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

const scorers = {};
// for (let a of game.scored) {
//   scorers[a] ? scorers[a]++ : (scorers[a] = 1);
// }

for (let a of game.scored) {
  if (scorers[a]) {
    scorers[a]++;
  } else {
    scorers[a] = 1;
  }
}
const aaa = {};
for (let b of game.scored) {
  aaa[b] ? aaa[b]++ : (aaa[b] = 1);
}
console.log(scorers);
console.log(game.scored);
console.log(aaa);

const testArray = [...game.scored];
console.log(testArray);
const testObject = {};
console.log(testArray.length);
for (let z = 0; z < testArray.length; z++) {
  if (testObject[testArray[z]]) {
    testObject[testArray[z]]++;
  } else {
    testObject[testArray[z]] = 1;
  }
}
testObject.Lewandowski++;
console.log(testObject);

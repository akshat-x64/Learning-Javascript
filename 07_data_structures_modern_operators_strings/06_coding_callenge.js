/*

Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
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
    team1: 11.33,
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
console.log(gk);
console.log(fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

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
console.log(team1, draw, team2);

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

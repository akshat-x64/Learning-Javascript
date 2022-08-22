"use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct number!";

// document.querySelector(".number").textContent = 23;
// document.querySelector(".highscore").textContent = 10;

// document.querySelector(".guess").value = 10;
// console.log(document.querySelector(".guess").value);

// now we have generate a random number between 1-20
// refactoring our code
const messageGiver = function (message) {
  document.querySelector(".message").textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  if (!guess) {
    messageGiver("Not a number!");
  } else if (guess === secretNumber) {
    messageGiver("correct number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageGiver(
        guess > secretNumber ? "number Too high!" : "Number too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageGiver(" You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)*/
// this is anonymus handler function
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageGiver("Start guessing...!");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("");
});

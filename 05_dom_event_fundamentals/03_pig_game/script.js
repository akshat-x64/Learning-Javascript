"use strict";
//getelementid is faster than query selector command
//get element id is we have just pass elemet id withoud #
// now we are not writing a selector we are only passing the name of the id
// this works all the same way but its faster than query selector
// selecting elemets
//selecting player class
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// for saving curret score
const score = [0, 0];
//
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// here we are giving number instead of string becuse
// javascript will then automatically convert it into string

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
// rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1.generating a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2.display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3.check for rolled one:if true switch to another player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      //current0El.textContent = currentScore;
    } else {
      // if true switch to another player
      switchPlayer();
    }
  }
});

if (playing) {
  btnHold.addEventListener("click", function () {
    if (playing) {
      // console.log("Hold button");
      //1.add current score to the active player user
      score[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        score[activePlayer];
      console.log(score[activePlayer]);

      //2.check if any reaches score to >=100
      if (score[activePlayer] >= 100) {
        //finishing the game
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove("player--active");
        diceEl.classList.add("hidden");
        // with this you can completely hide the button user connot press the button again
        // document.querySelector(".btn--roll").classList.add("hidden");
        // document.querySelector(".btn--hold").classList.add("hidden");
      } else {
        switchPlayer();
      }
    }
    // switching players
    //finish the game if it reaches
    //if its not reaches to  100 then we will switch player
  });
}

btnNew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document;
  player0El.classList.add("player--active");

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  playing = true;

  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score[0] = 0;
  score[1] = 0;
});

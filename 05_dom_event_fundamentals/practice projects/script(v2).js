"use strict";

//button
//document.querySelector(".again").addEventListener("click", function () {});
//document.querySelector(".check").addEventListener("click", function () {});
//message
// console.log(document.querySelector(".message").textContent);
// console.log(document.querySelector(".number").textContent);
// document.querySelector(".guess").value = 10;
// document.querySelector(".label-score").textContent = "yum repolist";
// document.querySelector(".highscore").textContent = "Highest score";
let random = Math.trunc(Math.random() * 6) + 1;
document.querySelector(".guess").value = "";
console.log(random);
let valueInput = 0;
let highscore = 20;
let topScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  valueInput = Number(document.querySelector(".guess").value);
  //   console.log(valueInput);
  //   console.log(typeof valueInput);
  if (valueInput > 0) {
    if (highscore) {
      if (valueInput === random) {
        document.querySelector(".number").textContent = random;
        document.querySelector(".message").textContent = "winner!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".check").classList.add("hidden");
        if (highscore > topScore) {
          topScore = highscore;
          document.querySelector(".highscore").textContent = topScore;
        }
      } else if (valueInput > random) {
        document.querySelector(".message").textContent = "lower number Please";
        highscore -= 1;
        document.querySelector(".score").textContent = highscore;
      } else if (valueInput < random) {
        document.querySelector(".message").textContent = "Higher number Please";
        highscore -= 1;
        document.querySelector(".score").textContent = highscore;
      }
    } else {
      document.querySelector("body").style.backgroundColor = "#e82c2c";
      document.querySelector(".message").textContent = "You loose!";
    }
  } else {
    document.querySelector(".message").textContent = "Not a number";
  }
  //   if (highscore > topScore) {
  //     document.querySelector(".highscore").textContent = highscore;
  //   }
});
// document.querySelector(".highscore").textContent = highscore;

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").classList.remove("hidden");
  //document.querySelector(".score").textContent = highs
  document.querySelector(".number").textContent = "?";
  random = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".score").textContent = 20;
  if (highscore > topScore) {
    topScore = highscore;
    document.querySelector(".highscore").textContent = topScore;
  }
  document.querySelector(".guess").value = "";
});

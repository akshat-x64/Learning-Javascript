"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question} \n ${this.options.join("\n ")}`)
    );
    console.log(answer);
    if (typeof answer === "number" && answer < this.answers.length) {
      this.answers[answer]++;
      this.displayResults();
      this.displayResults("string");
    }
    // console.log(this.answers);
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(" ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

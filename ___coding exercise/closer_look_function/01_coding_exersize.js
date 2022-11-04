"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n((Write option number))`
      )
    );
    console.log(answer);
    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") console.log(this.answers);
    else console.log(`Reults are ${this.answers.join(",")}`);
  },
};

// poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] }, "string");

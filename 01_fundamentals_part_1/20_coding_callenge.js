

// const dolphineScore = 96 + 108 + 89 / 3;
// const koalasScore = 88 + 91 + 110 / 3;

const dolphineScore = (97 + 112 + 10) / 3;
const koalasScore = (97 + 112 + 10) / 3;

// const dolphineScore = 96 + 108 + 89 / 3;
// const koalasScore = 88 + 91 + 110 / 3;

console.log(`The average score of Dolphine is ${dolphineScore}`);
console.log(`The average score of Koalas is ${koalasScore}`);

const winner = dolphineScore >= koalasScore;


if (dolphineScore === koalasScore && dolphineScore >= 100 && koalasScore >= 100) {
    console.log(`MAtch  draw between dolphine and koalas`);
}
else if (winner && (dolphineScore >= 100)) {
    console.log(`The winner is Dolphine ${dolphineScore}`);
}
else if (!winner && (dolphineScore >= 100)) {
    console.log(`The winner is Koalas ${koalasScore}`);
}
else {
    console.log(`No one wines`);
}


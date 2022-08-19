"use strict";

const calcAverage = (score_1, score_2, score_3) => {
    let avg = (score_1 + score_2 + score_3) / 3;
    return avg;
}

let dolphinsAvg = calcAverage(85, 54, 41);
let koalasAvg = calcAverage(23, 34, 27);
console.log(dolphinsAvg);
console.log(koalasAvg);
function checkWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg * 2) {
        console.log(`The winner is dolphins by the score ${dolphinsAvg} - ${koalasAvg}`);
    }
    else if (koalasAvg > dolphinsAvg * 2) {
        console.log(`The winner is Koalas by the score $${koalasAvg}-{dolphinsAvg} `);
    }
    else {
        console.log(`No team wins`);
    }
}

checkWinner(dolphinsAvg, koalasAvg);
const bill = 430;
// const tipRate = 15;
// calculate tip only if cost of bil is above 50 and below 300
let tip;
if (bill <= 300 && bill >= 50) {
    tip = ((bill * 15) / 100);
}
else {
    tip = ((bill * 20) / 100);
}
const finalAmount = tip + bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalAmount}`);

// bill <= 300 && bill >= 50 ? tip = ((bill * 15) / 100) : tip = "(bill*20)/100";
// const finalAmount = tip + bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalAmount}`);
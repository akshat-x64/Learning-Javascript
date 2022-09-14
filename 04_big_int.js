"use strict";

console.log(2 ** 53 - 1);
console.log(123333333313131313131313133133333n);
console.log(BigInt(123333333313131313131313133133333));
//operations
console.log(100000n + 100000n);
console.log(
  1000000000000000000000000000000000000n +
    999999999999999999999999999999999999999999999999999999999999999999999n
);
// Math.sqrt dosent work on bigint
const huge = 123333333313131313131313133133333n;
const num = 23;
console.log(huge + BigInt(num));
//exceptions
console.log(20n < 23);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n === "20");
//divions
console.log(20n / 2n);
console.log(13n / 2n);

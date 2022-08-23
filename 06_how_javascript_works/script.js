"use strict";
function calcAge(birthyear) {
  const age = 2037 - birthyear;
  const firstName = "Dwivedi";
  // console.log(firstName);
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      // var millenial = `${firstName} is millenial`;
      // console.log(millenial);
      const str = `${firstName} is millenial`;
      console.log(str);

      const add = function (a, b) {
        return a + b;
      };
    }
    //const str = `${firstName} is millenial`;
    //  console.log(str);
    // console.log(add(2, 3));

    return age;
  }
  printAge();
}

const firstName = "akshat";
calcAge(1991);
//onsole.log(age);
//printAge();
let akshat = 10;
console.log(akshat);

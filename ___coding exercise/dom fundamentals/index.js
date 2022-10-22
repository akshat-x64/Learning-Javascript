"use strict";
// let rand = Math.trunc(Math.random() * 50) + 1;
// console.log(rand);
const button = document.querySelector(".button");
const textbox = document.querySelector(".textbox");
const aaa = document.querySelector(".aaa");
textbox.value = "Number will apear here";
button.addEventListener("click", function () {
  let rand = Math.trunc(Math.random() * 50) + 1;
  textbox.value = rand;
  aaa.textContent = "Number Generated";
  const aa = Number(textbox.value);
  console.log(typeof aa);
});

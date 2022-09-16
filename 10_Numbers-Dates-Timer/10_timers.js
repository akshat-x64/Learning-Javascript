"use strict";

const startLogOutTimer = function () {
  let time = 10;

  const aa = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = time % 60;
    console.log(`${min}:${sec}`);
    if (time === 0) {
      clearInterval(aa);
    }
    time--;
  }, 1000);
};
startLogOutTimer();

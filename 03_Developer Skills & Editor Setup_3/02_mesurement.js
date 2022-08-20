"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsious",
    value: Number(prompt("Enter a value")),
  };
  const kelvin = measurement.value + 273;
  console.log(kelvin);
  console.warn(kelvin);
  console.error(kelvin);
  return kelvin;
};
debugger;
measureKelvin();

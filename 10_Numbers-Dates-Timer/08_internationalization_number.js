"use strict";

const num = 38884764.23;

const options = {
  //   style: "unit",
  //   unit: "celsius",
  //   style: "percent",
  style: "currency",
  currency: "INR",
};
console.log(navigator.language);
console.log(" us :", new Intl.NumberFormat("en-US", options).format(num));
console.log(" us :", new Intl.NumberFormat("de-De", options).format(num));
console.log(" us :", new Intl.NumberFormat("sa-IN", options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

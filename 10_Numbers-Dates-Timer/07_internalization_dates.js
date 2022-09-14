"use strict";
const now = new Date();
// const locale = navigator.language;
// console.log(locale);
const options = {
  hour: "numeric",
  minute: "numeric",
};
const date = new Intl.DateTimeFormat("sa-IN", options).format(now);
console.log(date);

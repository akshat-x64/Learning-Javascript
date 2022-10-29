"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const text1 = text.split("\n");
  for (const [i, iterator] of text1.entries()) {
    const [first, last] = iterator.split("_");
    const last2 = last.toLocaleLowerCase();
    const final =
      first.toLowerCase() + last2.replace(last2[0], last2[0].toUpperCase());
    console.log(final.padEnd(20, " ") + "✅".repeat(i + 1));
  }
});

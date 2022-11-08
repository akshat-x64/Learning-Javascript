"use strict";

// to select a element a tag or an element using class or id in a variable;
//selecting element by class
const h1TagClass = document.querySelector(".h1");
//selecting element by id
// const h1TagID = document.getElementById("123");
const h2IDtag = document.getElementById("h2");
console.log(h1TagClass, h2IDtag);
//selecting a button element using class name
const button = document.querySelector(".button");

// to modify the contents of tag
button.addEventListener("click", function () {
  h1TagClass.textContent = "button clicked";
  h2IDtag.innerHTML = "button clicked";
  //   console.log(h1TagClass.textContent, h2IDtag.innerHTML);

  //to insert html or text inside html
  //   <!-- beforebegin -->
  // <p>
  //   <!-- afterbegin -->
  //   foo
  //   <!-- beforeend -->
  // </p>
  // <!-- afterend -->
  const html = `<textarea name="" id="textbox" cols="30" rows="10"></textarea>`;

  button.insertAdjacentHTML("afterend", html);
});

//class manipulation
//to add class list in a tag
h1TagClass.classList.add("hidden");
//to remove class list in a tag
h1TagClass.classList.remove("hidden");
//to check if a class exist on a tag or not
console.log(h1TagClass.classList.contains("h1"));

//css manipulation
h1TagClass.style.backgroundColor = "red";

//to  which key is pressed
//there are mainly 3 type of presses

// onkeydown
// onkeypress
// onkeyup

document.addEventListener("keydown", function (e) {
  console.log(e.key);
});

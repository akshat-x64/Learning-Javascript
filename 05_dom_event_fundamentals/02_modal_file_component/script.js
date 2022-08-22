"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");
const btnsOpenModal_1 = document.querySelector(".show-modal_1");
const btnsOpenModal_2 = document.querySelector(".show-modal_2");

console.log(btnsOpenModal);

btnsOpenModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // console.log(btnsOpenModal[i].textContent);
});
btnsOpenModal_1.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // console.log(btnsOpenModal[i].textContent);
});
btnsOpenModal_2.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // console.log(btnsOpenModal[i].textContent);
});

// }
// closemodal will not have a argument because if add brackets then it will not execute
// javascript will execute that function immidately
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (!modal.classList.contains("hidden") && e.key === "Escape") {
    closeModal();
  }
});

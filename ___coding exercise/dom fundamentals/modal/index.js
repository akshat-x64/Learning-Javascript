"use sticrt";
const showmodal_1 = document.querySelector(".show-modal");
const showmodal_2 = document.querySelector(".show-modal_1");
const showmodal_3 = document.querySelector(".show-modal_2");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
showmodal_1.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modal.style.backgroundColor = "black";
});
//if there is a dash in css please write second letter in captal letter
showmodal_2.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
showmodal_3.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
const closeAll = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModal.addEventListener("click", closeAll);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") {
    closeAll();
  }
});

// document.querySelector(".overlay").style.backgroundcolor = "black";
// document.querySelector(".modal").style.backgroundColor = "black";

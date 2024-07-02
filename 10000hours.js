// js file
const modalOpen = document.getElementById("modalOpen");
const modalClose = document.getElementById("modalClose");
const modal = document.getElementById("modalContainer");

modalOpen.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

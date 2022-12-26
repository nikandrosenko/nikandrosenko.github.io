const burgerBtn = document.querySelector("#burg-btn");
const burgerMenu = document.querySelector("#burg-menu");
const burgerSubMenu = document.querySelector("#burg-submenu");
const burgerLink = document.querySelector("#burg-link");
burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("hidden");
  burgerSubMenu.classList.add("hidden");
});
burgerLink.addEventListener("mouseover", (e) => {
  e.preventDefault();
  burgerSubMenu.classList.toggle("hidden");
});

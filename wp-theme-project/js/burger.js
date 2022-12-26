const burgerBtn = document.querySelector("#burg-btn");
const burgerMenu = document.querySelector("#burg-menu");
const burgerSubMenu = document.querySelector("#burg-submenu");
const burgerLink = document.querySelector("#burg-link");
burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
  burgerSubMenu.classList.remove("show");
});
burgerLink.addEventListener("mouseover", (e) => {
  e.preventDefault();
  burgerSubMenu.classList.add("show");
});

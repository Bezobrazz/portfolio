window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    // menuItem = document.querySelectorAll(".menu__li"),
    burger = document.querySelector(".burger"),
    overlay = document.querySelector(".menu__overlay"),
    closeElem = document.querySelector(".menu__close");

  burger.addEventListener("click", () => {
    menu.classList.add("menu_active");
    overlay.classList.add("menu__overlay_active");
  });

  closeElem.addEventListener("click", () => {
    menu.classList.remove("menu_active");
    overlay.classList.remove("menu__overlay_active");
  });

  const counters = document.querySelectorAll(".skills__ratings-counter"),
    lines = document.querySelectorAll(".skills__ratings-line span");

  counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu__wrapper"),
    menuItem = document.querySelectorAll(".menu__li"),
    burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("menu__wrapper_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("burger_active");
      menu.classList.toggle("menu__wrapper_active");
    });
  });
});

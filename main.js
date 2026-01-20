const burger = document.querySelector(".burger");
const header = document.querySelector(".header");

const dialog = document.querySelector(".dialog");
const overlay = document.querySelector(".overlay");
const dialogOpenBtn = document.querySelector(".contact__button");
const dialogCloseBtn = document.querySelector(".dialog__close");

dialogOpenBtn.addEventListener("click", () => {
  dialog.open = true;
});

dialogCloseBtn.addEventListener("click", () => {
  dialog.open = false;
});
overlay.addEventListener("click", () => {
  dialog.open = false;
});

const nav = document.querySelector(".nav");
nav.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav__link")) {
    document.body.classList.remove("none-scroll");
    header.classList.remove("header_active");
    burger.classList.remove("burger_active");
  }
});

burger.addEventListener("click", () => {
  document.body.classList.toggle("none-scroll");
  header.classList.toggle("header_active");
  burger.classList.toggle("burger_active");
});

const scrolAnimElements = document.querySelectorAll(".scroll-anim");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("scroll-anim_active");
      }
    });
  },
  {
    threshold: 0.6,
  },
);

scrolAnimElements.forEach((el) => observer.observe(el));

import { page } from "./page-load";

page.create.home();

const homeButton = document.querySelector(".list > div:first-child");
const menuButton = document.querySelector(".list > div:nth-child(2)");
const contactButton = document.querySelector(".list > div:last-child");

homeButton.addEventListener("click", () => {
  page.remove();
  page.create.home();
});

menuButton.addEventListener("click", () => {
  page.remove();
  page.create.menu();
});

contactButton.addEventListener("click", () => {
  page.remove();
  page.create.contact();
});

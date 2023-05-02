import { page } from "./page-load";

function middleHomeButtons() {
  const middleMenuButton = document.querySelector(
    ".middle button:first-child"
  );
  const middleContactButton = document.querySelector(
    ".middle button:last-child"
  );
  middleMenuButton.addEventListener("click", () => {
    page.remove();
    page.create.menu();
  });
  middleContactButton.addEventListener("click", () => {
    page.remove();
    page.create.contact();
  });
}

// loads the initial page
page.build();
middleHomeButtons();

// event listeners for header buttons
const homeButton = document.querySelector(".list > div:first-child");
const menuButton = document.querySelector(".list > div:nth-child(2)");
const contactButton = document.querySelector(".list > div:last-child");

homeButton.addEventListener("click", () => {
  page.remove();
  page.create.home();

  middleHomeButtons();
});

menuButton.addEventListener("click", () => {
  page.remove();
  page.create.menu();
});

contactButton.addEventListener("click", () => {
  page.remove();
  page.create.contact();
});

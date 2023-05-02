const contentDiv = document.querySelector("#content");

function removePage() {
  if (document.querySelector(".middle"))
    contentDiv.removeChild(document.querySelector(".middle"));
  else if (document.querySelector(".cards"))
    contentDiv.removeChild(document.querySelector(".cards"));
  else if (document.querySelector(".form"))
    contentDiv.removeChild(document.querySelector(".form"));
}

export { removePage };

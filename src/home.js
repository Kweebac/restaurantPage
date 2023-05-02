const contentDiv = document.querySelector("#content");

function createHome() {
  // remove all other active classes
  document.querySelectorAll(".header > .list > div").forEach((button) => {
    button.classList.remove("active");
  });

  // add active class
  document
    .querySelector(".header > .list > div:first-child")
    .classList.add("active");

  let newDiv = document.createElement("div");
  newDiv.classList.add("middle");
  newDiv.innerHTML = ` 
    <div>Welcome to Breanna's Cooking Restaurant</div>
    <div>Eat healthy and Natural Food</div>
    <div>
      Breanna's Cooking is a restaurant, bar and coffee roastery located on
      Ivory Coast. We have awesome recipes and the most talented chefs in
      town.
    </div>
    <div>
      <button>OUR MENU</button>
      <button>GET IN TOUCH</button>
    </div>`;

  contentDiv.appendChild(newDiv);
}

export { createHome };

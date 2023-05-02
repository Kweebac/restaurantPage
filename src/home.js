const contentDiv = document.querySelector("#content");

function createHome() {
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

const contentDiv = document.querySelector("#content");

function createHome() {
  contentDiv.innerHTML = ` 
    <div class="header">
      <div>
        <span>Breanna's</span>
        <span>Cooking</span>
      </div>
      <div class="list">
        <div>HOME</div>
        <div>OUR MENU</div>
        <div>CONTACT</div>
      </div>
    </div>
    <div class="middle">
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
      </div>
    </div>`;
}

export { createHome };

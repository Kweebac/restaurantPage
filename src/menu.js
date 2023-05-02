const contentDiv = document.querySelector("#content");

function createMenu() {
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
    <div class="cards">
      <div class="card">
        <img
          src="https://nyf005.github.io/restaurant-project/6dcc9481be97be74fc07.jpeg"
          alt=""
        />
        <div>Frozen Fruit Smoothie</div>
        <div>
          Banana, Strawberries, Milk, Vanilla yogurt, orange juice, Honey or
          taste.
        </div>
        <button>$12</button>
      </div>
      <div class="card">
        <img
          src="https://nyf005.github.io/restaurant-project/5377f949fb6fd2ff0ba2.jpeg"
          alt=""
        />
        <div>Parmesan Chicken</div>
        <div>
          Chicken breasts, Panko, Parmesan, Olive oil, Dried oregano, Black
          pepper.
        </div>
        <button>$11</button>
      </div>
      <div class="card">
        <img
          src="https://nyf005.github.io/restaurant-project/6dcc9481be97be74fc07.jpeg"
          alt=""
        />
        <div>Frozen Fruit Smoothie</div>
        <div>
          Banana, Strawberries, Milk, Vanilla yogurt, orange juice, Honey or
          taste.
        </div>
        <button>$12</button>
      </div>
      <div class="card">
        <img
          src="https://nyf005.github.io/restaurant-project/5377f949fb6fd2ff0ba2.jpeg"
          alt=""
        />
        <div>Parmesan Chicken</div>
        <div>
          Chicken breasts, Panko, Parmesan, Olive oil, Dried oregano, Black
          pepper.
        </div>
        <button>$11</button>
      </div>
      <div class="card">
        <img
          src="https://nyf005.github.io/restaurant-project/6dcc9481be97be74fc07.jpeg"
          alt=""
        />
        <div>Frozen Fruit Smoothie</div>
        <div>
          Banana, Strawberries, Milk, Vanilla yogurt, orange juice, Honey or
          taste.
        </div>
        <button>$12</button>
      </div>
      <div class="card">
        <img
          src="https://nyf005.github.io/restaurant-project/5377f949fb6fd2ff0ba2.jpeg"
          alt=""
        />
        <div>Parmesan Chicken</div>
        <div>
          Chicken breasts, Panko, Parmesan, Olive oil, Dried oregano, Black
          pepper.
        </div>
        <button>$11</button>
      </div>
      <div class="card">
        <img
          src="https://nyf005.github.io/restaurant-project/6dcc9481be97be74fc07.jpeg"
          alt=""
        />
        <div>Frozen Fruit Smoothie</div>
        <div>
          Banana, Strawberries, Milk, Vanilla yogurt, orange juice, Honey or
          taste.
        </div>
        <button>$12</button>
      </div>
      <div class="card">
        <img
          src="https://nyf005.github.io/restaurant-project/5377f949fb6fd2ff0ba2.jpeg"
          alt=""
        />
        <div>Parmesan Chicken</div>
        <div>
          Chicken breasts, Panko, Parmesan, Olive oil, Dried oregano, Black
          pepper.
        </div>
        <button>$11</button>
      </div>
    </div>`;
}

export { createMenu };

const contentDiv = document.querySelector("#content");

function createMenu() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("cards");
  newDiv.innerHTML = `
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
    </div>`;

  contentDiv.appendChild(newDiv);
}

export { createMenu };

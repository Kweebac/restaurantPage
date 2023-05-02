/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/build-page.js":
/*!***************************!*\
  !*** ./src/build-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildPage": () => (/* binding */ buildPage)
/* harmony export */ });
const contentDiv = document.querySelector("#content");

function buildPage() {
  contentDiv.innerHTML = `
  <div class="header">
    <div>
      <span>Breanna's</span>
      <span>Cooking</span>
    </div>
    <div class="list">
      <div class="active">HOME</div>
      <div>OUR MENU</div>
      <div>CONTACT</div>
    </div>
  </div>
  <div class="middle">
    <div>Welcome to Breanna's Cooking Restaurant</div>
    <div>Eat healthy and Natural Food</div>
    <div>
      Breanna's Cooking is a restaurant, bar and coffee roastery located on
      Ivory Coast. We have awesome recipes and the most talented chefs in town.
    </div>
    <div>
      <button>OUR MENU</button>
      <button>GET IN TOUCH</button>
    </div>
  </div>`;
}




/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
const contentDiv = document.querySelector("#content");

function createContact() {
  // remove all other active classes
  document.querySelectorAll(".header > .list > div").forEach((button) => {
    button.classList.remove("active");
  });

  // add active class
  document
    .querySelector(".header > .list > div:last-child")
    .classList.add("active");

  // add html
  let newDiv = document.createElement("div");
  newDiv.classList.add("form");
  newDiv.innerHTML = `
    <div class="title">
      <div>
        <span>Breanna's</span>
        <span>Cooking</span>
      </div>
      <div>
        14029 Lind Village, Apt. 219, SC5 9ZH, Port Cayla, Hawaii, Great
        Britain
      </div>
      <div>
        <div>+44 7704 607373</div>
        <div>+44 7193 889240</div>
      </div>
    </div>
    <div>
      <form action="" method="post">
        <div>
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="10"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
      <img
        src="https://nyf005.github.io/restaurant-project/3b392d7cb004d88af9dd.png"
        alt=""
      />
    </div>`;

  contentDiv.appendChild(newDiv);
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
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




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
const contentDiv = document.querySelector("#content");

function createMenu() {
  // remove all other active classes
  document.querySelectorAll(".header > .list > div").forEach((button) => {
    button.classList.remove("active");
  });

  // add active class
  document
    .querySelector(".header > .list > div:nth-child(2)")
    .classList.add("active");

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




/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page": () => (/* binding */ page)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _remove_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-page */ "./src/remove-page.js");
/* harmony import */ var _build_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-page */ "./src/build-page.js");






const page = {
  create: {
    home: _home__WEBPACK_IMPORTED_MODULE_0__.createHome,
    menu: _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu,
    contact: _contact__WEBPACK_IMPORTED_MODULE_2__.createContact,
  },
  remove: _remove_page__WEBPACK_IMPORTED_MODULE_3__.removePage,
  build: _build_page__WEBPACK_IMPORTED_MODULE_4__.buildPage,
};




/***/ }),

/***/ "./src/remove-page.js":
/*!****************************!*\
  !*** ./src/remove-page.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removePage": () => (/* binding */ removePage)
/* harmony export */ });
const contentDiv = document.querySelector("#content");

function removePage() {
  if (document.querySelector(".middle"))
    contentDiv.removeChild(document.querySelector(".middle"));
  else if (document.querySelector(".cards"))
    contentDiv.removeChild(document.querySelector(".cards"));
  else if (document.querySelector(".form"))
    contentDiv.removeChild(document.querySelector(".form"));
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");


function middleHomeButtons() {
  const middleMenuButton = document.querySelector(
    ".middle button:first-child"
  );
  const middleContactButton = document.querySelector(
    ".middle button:last-child"
  );
  middleMenuButton.addEventListener("click", () => {
    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove();
    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.create.menu();
  });
  middleContactButton.addEventListener("click", () => {
    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove();
    _page_load__WEBPACK_IMPORTED_MODULE_0__.page.create.contact();
  });
}

// Only used once
_page_load__WEBPACK_IMPORTED_MODULE_0__.page.build();
middleHomeButtons();

const homeButton = document.querySelector(".list > div:first-child");
const menuButton = document.querySelector(".list > div:nth-child(2)");
const contactButton = document.querySelector(".list > div:last-child");

homeButton.addEventListener("click", () => {
  _page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove();
  _page_load__WEBPACK_IMPORTED_MODULE_0__.page.create.home();

  middleHomeButtons();
});

menuButton.addEventListener("click", () => {
  _page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove();
  _page_load__WEBPACK_IMPORTED_MODULE_0__.page.create.menu();
});

contactButton.addEventListener("click", () => {
  _page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove();
  _page_load__WEBPACK_IMPORTED_MODULE_0__.page.create.contact();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7OztBQzdCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDN0R6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7QUMvQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSGM7QUFDQTtBQUNNO0FBQ0M7QUFDRjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFVO0FBQ3BCLFVBQVUsNkNBQVU7QUFDcEIsYUFBYSxtREFBYTtBQUMxQixHQUFHO0FBQ0gsVUFBVSxvREFBVTtBQUNwQixTQUFTLGtEQUFTO0FBQ2xCO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ2hCaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7OztVQ1h0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVc7QUFDZixJQUFJLHdEQUFnQjtBQUNwQixHQUFHO0FBQ0g7QUFDQSxJQUFJLG1EQUFXO0FBQ2YsSUFBSSwyREFBbUI7QUFDdkIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGtEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFXO0FBQ2IsRUFBRSx3REFBZ0I7QUFDbEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSxtREFBVztBQUNiLEVBQUUsd0RBQWdCO0FBQ2xCLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSxtREFBVztBQUNiLEVBQUUsMkRBQW1CO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9idWlsZC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9yZW1vdmUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBidWlsZFBhZ2UoKSB7XHJcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4+QnJlYW5uYSdzPC9zcGFuPlxyXG4gICAgICA8c3Bhbj5Db29raW5nPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aXZlXCI+SE9NRTwvZGl2PlxyXG4gICAgICA8ZGl2Pk9VUiBNRU5VPC9kaXY+XHJcbiAgICAgIDxkaXY+Q09OVEFDVDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1pZGRsZVwiPlxyXG4gICAgPGRpdj5XZWxjb21lIHRvIEJyZWFubmEncyBDb29raW5nIFJlc3RhdXJhbnQ8L2Rpdj5cclxuICAgIDxkaXY+RWF0IGhlYWx0aHkgYW5kIE5hdHVyYWwgRm9vZDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgQnJlYW5uYSdzIENvb2tpbmcgaXMgYSByZXN0YXVyYW50LCBiYXIgYW5kIGNvZmZlZSByb2FzdGVyeSBsb2NhdGVkIG9uXHJcbiAgICAgIEl2b3J5IENvYXN0LiBXZSBoYXZlIGF3ZXNvbWUgcmVjaXBlcyBhbmQgdGhlIG1vc3QgdGFsZW50ZWQgY2hlZnMgaW4gdG93bi5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbj5PVVIgTUVOVTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uPkdFVCBJTiBUT1VDSDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxufVxyXG5cclxuZXhwb3J0IHsgYnVpbGRQYWdlIH07XHJcbiIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gIC8vIHJlbW92ZSBhbGwgb3RoZXIgYWN0aXZlIGNsYXNzZXNcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlciA+IC5saXN0ID4gZGl2XCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGFkZCBhY3RpdmUgY2xhc3NcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyID4gLmxpc3QgPiBkaXY6bGFzdC1jaGlsZFwiKVxyXG4gICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIC8vIGFkZCBodG1sXHJcbiAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xyXG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5CcmVhbm5hJ3M8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+Q29va2luZzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgMTQwMjkgTGluZCBWaWxsYWdlLCBBcHQuIDIxOSwgU0M1IDlaSCwgUG9ydCBDYXlsYSwgSGF3YWlpLCBHcmVhdFxyXG4gICAgICAgIEJyaXRhaW5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj4rNDQgNzcwNCA2MDczNzM8L2Rpdj5cclxuICAgICAgICA8ZGl2Pis0NCA3MTkzIDg4OTI0MDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBjb2xzPVwiNTBcIlxyXG4gICAgICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC8zYjM5MmQ3Y2IwMDRkODhhZjlkZC5wbmdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3QgfTtcclxuIiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgLy8gcmVtb3ZlIGFsbCBvdGhlciBhY3RpdmUgY2xhc3Nlc1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyID4gLmxpc3QgPiBkaXZcIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgLy8gYWRkIGFjdGl2ZSBjbGFzc1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgPiAubGlzdCA+IGRpdjpmaXJzdC1jaGlsZFwiKVxyXG4gICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwibWlkZGxlXCIpO1xyXG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBgIFxyXG4gICAgPGRpdj5XZWxjb21lIHRvIEJyZWFubmEncyBDb29raW5nIFJlc3RhdXJhbnQ8L2Rpdj5cclxuICAgIDxkaXY+RWF0IGhlYWx0aHkgYW5kIE5hdHVyYWwgRm9vZDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgQnJlYW5uYSdzIENvb2tpbmcgaXMgYSByZXN0YXVyYW50LCBiYXIgYW5kIGNvZmZlZSByb2FzdGVyeSBsb2NhdGVkIG9uXHJcbiAgICAgIEl2b3J5IENvYXN0LiBXZSBoYXZlIGF3ZXNvbWUgcmVjaXBlcyBhbmQgdGhlIG1vc3QgdGFsZW50ZWQgY2hlZnMgaW5cclxuICAgICAgdG93bi5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbj5PVVIgTUVOVTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uPkdFVCBJTiBUT1VDSDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVIb21lIH07XHJcbiIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gIC8vIHJlbW92ZSBhbGwgb3RoZXIgYWN0aXZlIGNsYXNzZXNcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlciA+IC5saXN0ID4gZGl2XCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGFkZCBhY3RpdmUgY2xhc3NcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyID4gLmxpc3QgPiBkaXY6bnRoLWNoaWxkKDIpXCIpXHJcbiAgICAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiKTtcclxuICBuZXdEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNmRjYzk0ODFiZTk3YmU3NGZjMDcuanBlZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5Gcm96ZW4gRnJ1aXQgU21vb3RoaWU8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBCYW5hbmEsIFN0cmF3YmVycmllcywgTWlsaywgVmFuaWxsYSB5b2d1cnQsIG9yYW5nZSBqdWljZSwgSG9uZXkgb3JcclxuICAgICAgICB0YXN0ZS5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24+JDEyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzUzNzdmOTQ5ZmI2ZmQyZmYwYmEyLmpwZWdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+UGFybWVzYW4gQ2hpY2tlbjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIENoaWNrZW4gYnJlYXN0cywgUGFua28sIFBhcm1lc2FuLCBPbGl2ZSBvaWwsIERyaWVkIG9yZWdhbm8sIEJsYWNrXHJcbiAgICAgICAgcGVwcGVyLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj4kMTE8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNmRjYzk0ODFiZTk3YmU3NGZjMDcuanBlZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5Gcm96ZW4gRnJ1aXQgU21vb3RoaWU8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBCYW5hbmEsIFN0cmF3YmVycmllcywgTWlsaywgVmFuaWxsYSB5b2d1cnQsIG9yYW5nZSBqdWljZSwgSG9uZXkgb3JcclxuICAgICAgICB0YXN0ZS5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24+JDEyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzUzNzdmOTQ5ZmI2ZmQyZmYwYmEyLmpwZWdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+UGFybWVzYW4gQ2hpY2tlbjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIENoaWNrZW4gYnJlYXN0cywgUGFua28sIFBhcm1lc2FuLCBPbGl2ZSBvaWwsIERyaWVkIG9yZWdhbm8sIEJsYWNrXHJcbiAgICAgICAgcGVwcGVyLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj4kMTE8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNmRjYzk0ODFiZTk3YmU3NGZjMDcuanBlZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5Gcm96ZW4gRnJ1aXQgU21vb3RoaWU8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBCYW5hbmEsIFN0cmF3YmVycmllcywgTWlsaywgVmFuaWxsYSB5b2d1cnQsIG9yYW5nZSBqdWljZSwgSG9uZXkgb3JcclxuICAgICAgICB0YXN0ZS5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24+JDEyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzUzNzdmOTQ5ZmI2ZmQyZmYwYmEyLmpwZWdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+UGFybWVzYW4gQ2hpY2tlbjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIENoaWNrZW4gYnJlYXN0cywgUGFua28sIFBhcm1lc2FuLCBPbGl2ZSBvaWwsIERyaWVkIG9yZWdhbm8sIEJsYWNrXHJcbiAgICAgICAgcGVwcGVyLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj4kMTE8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNmRjYzk0ODFiZTk3YmU3NGZjMDcuanBlZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5Gcm96ZW4gRnJ1aXQgU21vb3RoaWU8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBCYW5hbmEsIFN0cmF3YmVycmllcywgTWlsaywgVmFuaWxsYSB5b2d1cnQsIG9yYW5nZSBqdWljZSwgSG9uZXkgb3JcclxuICAgICAgICB0YXN0ZS5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24+JDEyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzUzNzdmOTQ5ZmI2ZmQyZmYwYmEyLmpwZWdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+UGFybWVzYW4gQ2hpY2tlbjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIENoaWNrZW4gYnJlYXN0cywgUGFua28sIFBhcm1lc2FuLCBPbGl2ZSBvaWwsIERyaWVkIG9yZWdhbm8sIEJsYWNrXHJcbiAgICAgICAgcGVwcGVyLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj4kMTE8L2J1dHRvbj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTWVudSB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgeyByZW1vdmVQYWdlIH0gZnJvbSBcIi4vcmVtb3ZlLXBhZ2VcIjtcclxuaW1wb3J0IHsgYnVpbGRQYWdlIH0gZnJvbSBcIi4vYnVpbGQtcGFnZVwiO1xyXG5cclxuY29uc3QgcGFnZSA9IHtcclxuICBjcmVhdGU6IHtcclxuICAgIGhvbWU6IGNyZWF0ZUhvbWUsXHJcbiAgICBtZW51OiBjcmVhdGVNZW51LFxyXG4gICAgY29udGFjdDogY3JlYXRlQ29udGFjdCxcclxuICB9LFxyXG4gIHJlbW92ZTogcmVtb3ZlUGFnZSxcclxuICBidWlsZDogYnVpbGRQYWdlLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgcGFnZSB9O1xyXG4iLCJjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUGFnZSgpIHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGVcIikpXHJcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlXCIpKTtcclxuICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpKVxyXG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpKTtcclxuICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikpXHJcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbW92ZVBhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XHJcblxyXG5mdW5jdGlvbiBtaWRkbGVIb21lQnV0dG9ucygpIHtcclxuICBjb25zdCBtaWRkbGVNZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLm1pZGRsZSBidXR0b246Zmlyc3QtY2hpbGRcIlxyXG4gICk7XHJcbiAgY29uc3QgbWlkZGxlQ29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5taWRkbGUgYnV0dG9uOmxhc3QtY2hpbGRcIlxyXG4gICk7XHJcbiAgbWlkZGxlTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGFnZS5yZW1vdmUoKTtcclxuICAgIHBhZ2UuY3JlYXRlLm1lbnUoKTtcclxuICB9KTtcclxuICBtaWRkbGVDb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwYWdlLnJlbW92ZSgpO1xyXG4gICAgcGFnZS5jcmVhdGUuY29udGFjdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBPbmx5IHVzZWQgb25jZVxyXG5wYWdlLmJ1aWxkKCk7XHJcbm1pZGRsZUhvbWVCdXR0b25zKCk7XHJcblxyXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ID4gZGl2OmZpcnN0LWNoaWxkXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ID4gZGl2Om50aC1jaGlsZCgyKVwiKTtcclxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdCA+IGRpdjpsYXN0LWNoaWxkXCIpO1xyXG5cclxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBhZ2UucmVtb3ZlKCk7XHJcbiAgcGFnZS5jcmVhdGUuaG9tZSgpO1xyXG5cclxuICBtaWRkbGVIb21lQnV0dG9ucygpO1xyXG59KTtcclxuXHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwYWdlLnJlbW92ZSgpO1xyXG4gIHBhZ2UuY3JlYXRlLm1lbnUoKTtcclxufSk7XHJcblxyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcGFnZS5yZW1vdmUoKTtcclxuICBwYWdlLmNyZWF0ZS5jb250YWN0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
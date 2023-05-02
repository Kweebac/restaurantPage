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
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="10"
            required
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

// only used once
_page_load__WEBPACK_IMPORTED_MODULE_0__.page.build();
middleHomeButtons();

// event listeners for header buttons
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7OztBQzdCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7QUM5RHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7OztBQy9CdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIYztBQUNBO0FBQ007QUFDQztBQUNGO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQVU7QUFDcEIsVUFBVSw2Q0FBVTtBQUNwQixhQUFhLG1EQUFhO0FBQzFCLEdBQUc7QUFDSCxVQUFVLG9EQUFVO0FBQ3BCLFNBQVMsa0RBQVM7QUFDbEI7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7O0FDaEJoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7O1VDWHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBVztBQUNmLElBQUksd0RBQWdCO0FBQ3BCLEdBQUc7QUFDSDtBQUNBLElBQUksbURBQVc7QUFDZixJQUFJLDJEQUFtQjtBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBVztBQUNiLEVBQUUsd0RBQWdCO0FBQ2xCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsbURBQVc7QUFDYixFQUFFLHdEQUFnQjtBQUNsQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsbURBQVc7QUFDYixFQUFFLDJEQUFtQjtBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYnVpbGQtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcmVtb3ZlLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xyXG4gIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuPkJyZWFubmEnczwvc3Bhbj5cclxuICAgICAgPHNwYW4+Q29va2luZzwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFjdGl2ZVwiPkhPTUU8L2Rpdj5cclxuICAgICAgPGRpdj5PVVIgTUVOVTwvZGl2PlxyXG4gICAgICA8ZGl2PkNPTlRBQ1Q8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtaWRkbGVcIj5cclxuICAgIDxkaXY+V2VsY29tZSB0byBCcmVhbm5hJ3MgQ29va2luZyBSZXN0YXVyYW50PC9kaXY+XHJcbiAgICA8ZGl2PkVhdCBoZWFsdGh5IGFuZCBOYXR1cmFsIEZvb2Q8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIEJyZWFubmEncyBDb29raW5nIGlzIGEgcmVzdGF1cmFudCwgYmFyIGFuZCBjb2ZmZWUgcm9hc3RlcnkgbG9jYXRlZCBvblxyXG4gICAgICBJdm9yeSBDb2FzdC4gV2UgaGF2ZSBhd2Vzb21lIHJlY2lwZXMgYW5kIHRoZSBtb3N0IHRhbGVudGVkIGNoZWZzIGluIHRvd24uXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24+T1VSIE1FTlU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbj5HRVQgSU4gVE9VQ0g8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGJ1aWxkUGFnZSB9O1xyXG4iLCJjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcclxuICAvLyByZW1vdmUgYWxsIG90aGVyIGFjdGl2ZSBjbGFzc2VzXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXIgPiAubGlzdCA+IGRpdlwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBhZGQgYWN0aXZlIGNsYXNzXHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciA+IC5saXN0ID4gZGl2Omxhc3QtY2hpbGRcIilcclxuICAgIC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAvLyBhZGQgaHRtbFxyXG4gIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcclxuICBuZXdEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+QnJlYW5uYSdzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkNvb2tpbmc8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDE0MDI5IExpbmQgVmlsbGFnZSwgQXB0LiAyMTksIFNDNSA5WkgsIFBvcnQgQ2F5bGEsIEhhd2FpaSwgR3JlYXRcclxuICAgICAgICBCcml0YWluXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+KzQ0IDc3MDQgNjA3MzczPC9kaXY+XHJcbiAgICAgICAgPGRpdj4rNDQgNzE5MyA4ODkyNDA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgY29scz1cIjUwXCJcclxuICAgICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvM2IzOTJkN2NiMDA0ZDg4YWY5ZGQucG5nXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWN0IH07XHJcbiIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIC8vIHJlbW92ZSBhbGwgb3RoZXIgYWN0aXZlIGNsYXNzZXNcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlciA+IC5saXN0ID4gZGl2XCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGFkZCBhY3RpdmUgY2xhc3NcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyID4gLmxpc3QgPiBkaXY6Zmlyc3QtY2hpbGRcIilcclxuICAgIC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcIm1pZGRsZVwiKTtcclxuICBuZXdEaXYuaW5uZXJIVE1MID0gYCBcclxuICAgIDxkaXY+V2VsY29tZSB0byBCcmVhbm5hJ3MgQ29va2luZyBSZXN0YXVyYW50PC9kaXY+XHJcbiAgICA8ZGl2PkVhdCBoZWFsdGh5IGFuZCBOYXR1cmFsIEZvb2Q8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIEJyZWFubmEncyBDb29raW5nIGlzIGEgcmVzdGF1cmFudCwgYmFyIGFuZCBjb2ZmZWUgcm9hc3RlcnkgbG9jYXRlZCBvblxyXG4gICAgICBJdm9yeSBDb2FzdC4gV2UgaGF2ZSBhd2Vzb21lIHJlY2lwZXMgYW5kIHRoZSBtb3N0IHRhbGVudGVkIGNoZWZzIGluXHJcbiAgICAgIHRvd24uXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24+T1VSIE1FTlU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbj5HRVQgSU4gVE9VQ0g8L2J1dHRvbj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9O1xyXG4iLCJjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICAvLyByZW1vdmUgYWxsIG90aGVyIGFjdGl2ZSBjbGFzc2VzXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXIgPiAubGlzdCA+IGRpdlwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBhZGQgYWN0aXZlIGNsYXNzXHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciA+IC5saXN0ID4gZGl2Om50aC1jaGlsZCgyKVwiKVxyXG4gICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIik7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzZkY2M5NDgxYmU5N2JlNzRmYzA3LmpwZWdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+RnJvemVuIEZydWl0IFNtb290aGllPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQmFuYW5hLCBTdHJhd2JlcnJpZXMsIE1pbGssIFZhbmlsbGEgeW9ndXJ0LCBvcmFuZ2UganVpY2UsIEhvbmV5IG9yXHJcbiAgICAgICAgdGFzdGUuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uPiQxMjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC81Mzc3Zjk0OWZiNmZkMmZmMGJhMi5qcGVnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlBhcm1lc2FuIENoaWNrZW48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBDaGlja2VuIGJyZWFzdHMsIFBhbmtvLCBQYXJtZXNhbiwgT2xpdmUgb2lsLCBEcmllZCBvcmVnYW5vLCBCbGFja1xyXG4gICAgICAgIHBlcHBlci5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24+JDExPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzZkY2M5NDgxYmU5N2JlNzRmYzA3LmpwZWdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+RnJvemVuIEZydWl0IFNtb290aGllPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQmFuYW5hLCBTdHJhd2JlcnJpZXMsIE1pbGssIFZhbmlsbGEgeW9ndXJ0LCBvcmFuZ2UganVpY2UsIEhvbmV5IG9yXHJcbiAgICAgICAgdGFzdGUuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uPiQxMjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC81Mzc3Zjk0OWZiNmZkMmZmMGJhMi5qcGVnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlBhcm1lc2FuIENoaWNrZW48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBDaGlja2VuIGJyZWFzdHMsIFBhbmtvLCBQYXJtZXNhbiwgT2xpdmUgb2lsLCBEcmllZCBvcmVnYW5vLCBCbGFja1xyXG4gICAgICAgIHBlcHBlci5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24+JDExPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzZkY2M5NDgxYmU5N2JlNzRmYzA3LmpwZWdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+RnJvemVuIEZydWl0IFNtb290aGllPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQmFuYW5hLCBTdHJhd2JlcnJpZXMsIE1pbGssIFZhbmlsbGEgeW9ndXJ0LCBvcmFuZ2UganVpY2UsIEhvbmV5IG9yXHJcbiAgICAgICAgdGFzdGUuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uPiQxMjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC81Mzc3Zjk0OWZiNmZkMmZmMGJhMi5qcGVnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlBhcm1lc2FuIENoaWNrZW48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBDaGlja2VuIGJyZWFzdHMsIFBhbmtvLCBQYXJtZXNhbiwgT2xpdmUgb2lsLCBEcmllZCBvcmVnYW5vLCBCbGFja1xyXG4gICAgICAgIHBlcHBlci5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24+JDExPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzZkY2M5NDgxYmU5N2JlNzRmYzA3LmpwZWdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+RnJvemVuIEZydWl0IFNtb290aGllPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQmFuYW5hLCBTdHJhd2JlcnJpZXMsIE1pbGssIFZhbmlsbGEgeW9ndXJ0LCBvcmFuZ2UganVpY2UsIEhvbmV5IG9yXHJcbiAgICAgICAgdGFzdGUuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uPiQxMjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC81Mzc3Zjk0OWZiNmZkMmZmMGJhMi5qcGVnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlBhcm1lc2FuIENoaWNrZW48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBDaGlja2VuIGJyZWFzdHMsIFBhbmtvLCBQYXJtZXNhbiwgT2xpdmUgb2lsLCBEcmllZCBvcmVnYW5vLCBCbGFja1xyXG4gICAgICAgIHBlcHBlci5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24+JDExPC9idXR0b24+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IHsgcmVtb3ZlUGFnZSB9IGZyb20gXCIuL3JlbW92ZS1wYWdlXCI7XHJcbmltcG9ydCB7IGJ1aWxkUGFnZSB9IGZyb20gXCIuL2J1aWxkLXBhZ2VcIjtcclxuXHJcbmNvbnN0IHBhZ2UgPSB7XHJcbiAgY3JlYXRlOiB7XHJcbiAgICBob21lOiBjcmVhdGVIb21lLFxyXG4gICAgbWVudTogY3JlYXRlTWVudSxcclxuICAgIGNvbnRhY3Q6IGNyZWF0ZUNvbnRhY3QsXHJcbiAgfSxcclxuICByZW1vdmU6IHJlbW92ZVBhZ2UsXHJcbiAgYnVpbGQ6IGJ1aWxkUGFnZSxcclxufTtcclxuXHJcbmV4cG9ydCB7IHBhZ2UgfTtcclxuIiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBhZ2UoKSB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlXCIpKVxyXG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVwiKSk7XHJcbiAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKSlcclxuICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKSk7XHJcbiAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpKVxyXG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW1vdmVQYWdlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcGFnZSB9IGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xyXG5cclxuZnVuY3Rpb24gbWlkZGxlSG9tZUJ1dHRvbnMoKSB7XHJcbiAgY29uc3QgbWlkZGxlTWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5taWRkbGUgYnV0dG9uOmZpcnN0LWNoaWxkXCJcclxuICApO1xyXG4gIGNvbnN0IG1pZGRsZUNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIubWlkZGxlIGJ1dHRvbjpsYXN0LWNoaWxkXCJcclxuICApO1xyXG4gIG1pZGRsZU1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBhZ2UucmVtb3ZlKCk7XHJcbiAgICBwYWdlLmNyZWF0ZS5tZW51KCk7XHJcbiAgfSk7XHJcbiAgbWlkZGxlQ29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcGFnZS5yZW1vdmUoKTtcclxuICAgIHBhZ2UuY3JlYXRlLmNvbnRhY3QoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gb25seSB1c2VkIG9uY2VcclxucGFnZS5idWlsZCgpO1xyXG5taWRkbGVIb21lQnV0dG9ucygpO1xyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBoZWFkZXIgYnV0dG9uc1xyXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ID4gZGl2OmZpcnN0LWNoaWxkXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ID4gZGl2Om50aC1jaGlsZCgyKVwiKTtcclxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdCA+IGRpdjpsYXN0LWNoaWxkXCIpO1xyXG5cclxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBhZ2UucmVtb3ZlKCk7XHJcbiAgcGFnZS5jcmVhdGUuaG9tZSgpO1xyXG5cclxuICBtaWRkbGVIb21lQnV0dG9ucygpO1xyXG59KTtcclxuXHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwYWdlLnJlbW92ZSgpO1xyXG4gIHBhZ2UuY3JlYXRlLm1lbnUoKTtcclxufSk7XHJcblxyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcGFnZS5yZW1vdmUoKTtcclxuICBwYWdlLmNyZWF0ZS5jb250YWN0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
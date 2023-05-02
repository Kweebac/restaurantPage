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


_page_load__WEBPACK_IMPORTED_MODULE_0__.page.build();

const homeButton = document.querySelector(".list > div:first-child");
const menuButton = document.querySelector(".list > div:nth-child(2)");
const contactButton = document.querySelector(".list > div:last-child");

homeButton.addEventListener("click", () => {
  _page_load__WEBPACK_IMPORTED_MODULE_0__.page.remove();
  _page_load__WEBPACK_IMPORTED_MODULE_0__.page.create.home();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7OztBQzdCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDN0R6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7QUMvQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSGM7QUFDQTtBQUNNO0FBQ0M7QUFDRjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFVO0FBQ3BCLFVBQVUsNkNBQVU7QUFDcEIsYUFBYSxtREFBYTtBQUMxQixHQUFHO0FBQ0gsVUFBVSxvREFBVTtBQUNwQixTQUFTLGtEQUFTO0FBQ2xCO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ2hCaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7OztVQ1h0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ25DO0FBQ0Esa0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFXO0FBQ2IsRUFBRSx3REFBZ0I7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLG1EQUFXO0FBQ2IsRUFBRSx3REFBZ0I7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLG1EQUFXO0FBQ2IsRUFBRSwyREFBbUI7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2J1aWxkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3JlbW92ZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUGFnZSgpIHtcclxuICBjb250ZW50RGl2LmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3Bhbj5CcmVhbm5hJ3M8L3NwYW4+XHJcbiAgICAgIDxzcGFuPkNvb2tpbmc8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhY3RpdmVcIj5IT01FPC9kaXY+XHJcbiAgICAgIDxkaXY+T1VSIE1FTlU8L2Rpdj5cclxuICAgICAgPGRpdj5DT05UQUNUPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWlkZGxlXCI+XHJcbiAgICA8ZGl2PldlbGNvbWUgdG8gQnJlYW5uYSdzIENvb2tpbmcgUmVzdGF1cmFudDwvZGl2PlxyXG4gICAgPGRpdj5FYXQgaGVhbHRoeSBhbmQgTmF0dXJhbCBGb29kPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICBCcmVhbm5hJ3MgQ29va2luZyBpcyBhIHJlc3RhdXJhbnQsIGJhciBhbmQgY29mZmVlIHJvYXN0ZXJ5IGxvY2F0ZWQgb25cclxuICAgICAgSXZvcnkgQ29hc3QuIFdlIGhhdmUgYXdlc29tZSByZWNpcGVzIGFuZCB0aGUgbW9zdCB0YWxlbnRlZCBjaGVmcyBpbiB0b3duLlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uPk9VUiBNRU5VPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24+R0VUIElOIFRPVUNIPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG59XHJcblxyXG5leHBvcnQgeyBidWlsZFBhZ2UgfTtcclxuIiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XHJcbiAgLy8gcmVtb3ZlIGFsbCBvdGhlciBhY3RpdmUgY2xhc3Nlc1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyID4gLmxpc3QgPiBkaXZcIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgLy8gYWRkIGFjdGl2ZSBjbGFzc1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgPiAubGlzdCA+IGRpdjpsYXN0LWNoaWxkXCIpXHJcbiAgICAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gYWRkIGh0bWxcclxuICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPkJyZWFubmEnczwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5Db29raW5nPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICAxNDAyOSBMaW5kIFZpbGxhZ2UsIEFwdC4gMjE5LCBTQzUgOVpILCBQb3J0IENheWxhLCBIYXdhaWksIEdyZWF0XHJcbiAgICAgICAgQnJpdGFpblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pis0NCA3NzA0IDYwNzM3MzwvZGl2PlxyXG4gICAgICAgIDxkaXY+KzQ0IDcxOTMgODg5MjQwPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIGNvbHM9XCI1MFwiXHJcbiAgICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzNiMzkyZDdjYjAwNGQ4OGFmOWRkLnBuZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ29udGFjdCB9O1xyXG4iLCJjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuICAvLyByZW1vdmUgYWxsIG90aGVyIGFjdGl2ZSBjbGFzc2VzXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXIgPiAubGlzdCA+IGRpdlwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBhZGQgYWN0aXZlIGNsYXNzXHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciA+IC5saXN0ID4gZGl2OmZpcnN0LWNoaWxkXCIpXHJcbiAgICAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJtaWRkbGVcIik7XHJcbiAgbmV3RGl2LmlubmVySFRNTCA9IGAgXHJcbiAgICA8ZGl2PldlbGNvbWUgdG8gQnJlYW5uYSdzIENvb2tpbmcgUmVzdGF1cmFudDwvZGl2PlxyXG4gICAgPGRpdj5FYXQgaGVhbHRoeSBhbmQgTmF0dXJhbCBGb29kPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICBCcmVhbm5hJ3MgQ29va2luZyBpcyBhIHJlc3RhdXJhbnQsIGJhciBhbmQgY29mZmVlIHJvYXN0ZXJ5IGxvY2F0ZWQgb25cclxuICAgICAgSXZvcnkgQ29hc3QuIFdlIGhhdmUgYXdlc29tZSByZWNpcGVzIGFuZCB0aGUgbW9zdCB0YWxlbnRlZCBjaGVmcyBpblxyXG4gICAgICB0b3duLlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uPk9VUiBNRU5VPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24+R0VUIElOIFRPVUNIPC9idXR0b24+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfTtcclxuIiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgLy8gcmVtb3ZlIGFsbCBvdGhlciBhY3RpdmUgY2xhc3Nlc1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyID4gLmxpc3QgPiBkaXZcIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgLy8gYWRkIGFjdGl2ZSBjbGFzc1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgPiAubGlzdCA+IGRpdjpudGgtY2hpbGQoMilcIilcclxuICAgIC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIpO1xyXG4gIG5ld0Rpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC82ZGNjOTQ4MWJlOTdiZTc0ZmMwNy5qcGVnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PkZyb3plbiBGcnVpdCBTbW9vdGhpZTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEJhbmFuYSwgU3RyYXdiZXJyaWVzLCBNaWxrLCBWYW5pbGxhIHlvZ3VydCwgb3JhbmdlIGp1aWNlLCBIb25leSBvclxyXG4gICAgICAgIHRhc3RlLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj4kMTI8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNTM3N2Y5NDlmYjZmZDJmZjBiYTIuanBlZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5QYXJtZXNhbiBDaGlja2VuPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQ2hpY2tlbiBicmVhc3RzLCBQYW5rbywgUGFybWVzYW4sIE9saXZlIG9pbCwgRHJpZWQgb3JlZ2FubywgQmxhY2tcclxuICAgICAgICBwZXBwZXIuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uPiQxMTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC82ZGNjOTQ4MWJlOTdiZTc0ZmMwNy5qcGVnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PkZyb3plbiBGcnVpdCBTbW9vdGhpZTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEJhbmFuYSwgU3RyYXdiZXJyaWVzLCBNaWxrLCBWYW5pbGxhIHlvZ3VydCwgb3JhbmdlIGp1aWNlLCBIb25leSBvclxyXG4gICAgICAgIHRhc3RlLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj4kMTI8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNTM3N2Y5NDlmYjZmZDJmZjBiYTIuanBlZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5QYXJtZXNhbiBDaGlja2VuPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQ2hpY2tlbiBicmVhc3RzLCBQYW5rbywgUGFybWVzYW4sIE9saXZlIG9pbCwgRHJpZWQgb3JlZ2FubywgQmxhY2tcclxuICAgICAgICBwZXBwZXIuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uPiQxMTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC82ZGNjOTQ4MWJlOTdiZTc0ZmMwNy5qcGVnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PkZyb3plbiBGcnVpdCBTbW9vdGhpZTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEJhbmFuYSwgU3RyYXdiZXJyaWVzLCBNaWxrLCBWYW5pbGxhIHlvZ3VydCwgb3JhbmdlIGp1aWNlLCBIb25leSBvclxyXG4gICAgICAgIHRhc3RlLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj4kMTI8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNTM3N2Y5NDlmYjZmZDJmZjBiYTIuanBlZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5QYXJtZXNhbiBDaGlja2VuPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQ2hpY2tlbiBicmVhc3RzLCBQYW5rbywgUGFybWVzYW4sIE9saXZlIG9pbCwgRHJpZWQgb3JlZ2FubywgQmxhY2tcclxuICAgICAgICBwZXBwZXIuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uPiQxMTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC82ZGNjOTQ4MWJlOTdiZTc0ZmMwNy5qcGVnXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PkZyb3plbiBGcnVpdCBTbW9vdGhpZTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEJhbmFuYSwgU3RyYXdiZXJyaWVzLCBNaWxrLCBWYW5pbGxhIHlvZ3VydCwgb3JhbmdlIGp1aWNlLCBIb25leSBvclxyXG4gICAgICAgIHRhc3RlLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbj4kMTI8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNTM3N2Y5NDlmYjZmZDJmZjBiYTIuanBlZ1wiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5QYXJtZXNhbiBDaGlja2VuPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQ2hpY2tlbiBicmVhc3RzLCBQYW5rbywgUGFybWVzYW4sIE9saXZlIG9pbCwgRHJpZWQgb3JlZ2FubywgQmxhY2tcclxuICAgICAgICBwZXBwZXIuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uPiQxMTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNZW51IH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IHJlbW92ZVBhZ2UgfSBmcm9tIFwiLi9yZW1vdmUtcGFnZVwiO1xyXG5pbXBvcnQgeyBidWlsZFBhZ2UgfSBmcm9tIFwiLi9idWlsZC1wYWdlXCI7XHJcblxyXG5jb25zdCBwYWdlID0ge1xyXG4gIGNyZWF0ZToge1xyXG4gICAgaG9tZTogY3JlYXRlSG9tZSxcclxuICAgIG1lbnU6IGNyZWF0ZU1lbnUsXHJcbiAgICBjb250YWN0OiBjcmVhdGVDb250YWN0LFxyXG4gIH0sXHJcbiAgcmVtb3ZlOiByZW1vdmVQYWdlLFxyXG4gIGJ1aWxkOiBidWlsZFBhZ2UsXHJcbn07XHJcblxyXG5leHBvcnQgeyBwYWdlIH07XHJcbiIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQYWdlKCkge1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVwiKSlcclxuICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWRkbGVcIikpO1xyXG4gIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNcIikpXHJcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNcIikpO1xyXG4gIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKSlcclxuICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVtb3ZlUGFnZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2UgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcclxuXHJcbnBhZ2UuYnVpbGQoKTtcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QgPiBkaXY6Zmlyc3QtY2hpbGRcIik7XHJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QgPiBkaXY6bnRoLWNoaWxkKDIpXCIpO1xyXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ID4gZGl2Omxhc3QtY2hpbGRcIik7XHJcblxyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcGFnZS5yZW1vdmUoKTtcclxuICBwYWdlLmNyZWF0ZS5ob21lKCk7XHJcbn0pO1xyXG5cclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBhZ2UucmVtb3ZlKCk7XHJcbiAgcGFnZS5jcmVhdGUubWVudSgpO1xyXG59KTtcclxuXHJcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwYWdlLnJlbW92ZSgpO1xyXG4gIHBhZ2UuY3JlYXRlLmNvbnRhY3QoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
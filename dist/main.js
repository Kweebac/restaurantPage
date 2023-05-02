/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  <div class="form">
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
    </div>
  </div>`;
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





const page = {
  create: {
    home: _home__WEBPACK_IMPORTED_MODULE_0__.createHome,
    menu: _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu,
    contact: _contact__WEBPACK_IMPORTED_MODULE_2__.createContact,
  },
  remove: _remove_page__WEBPACK_IMPORTED_MODULE_3__.removePage,
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
  contentDiv.innerHTML = "";
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


_page_load__WEBPACK_IMPORTED_MODULE_0__.page.create.home();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUI7Ozs7Ozs7Ozs7Ozs7OztBQzNEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhjO0FBQ0E7QUFDTTtBQUNDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQVU7QUFDcEIsVUFBVSw2Q0FBVTtBQUNwQixhQUFhLG1EQUFhO0FBQzFCLEdBQUc7QUFDSCxVQUFVLG9EQUFVO0FBQ3BCO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ2RoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7VUNOdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQztBQUNuQztBQUNBLHdEQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFXO0FBQ2IsRUFBRSx3REFBZ0I7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLG1EQUFXO0FBQ2IsRUFBRSx3REFBZ0I7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLG1EQUFXO0FBQ2IsRUFBRSwyREFBbUI7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9yZW1vdmUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuPkJyZWFubmEnczwvc3Bhbj5cclxuICAgICAgPHNwYW4+Q29va2luZzwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgPGRpdj5IT01FPC9kaXY+XHJcbiAgICAgIDxkaXY+T1VSIE1FTlU8L2Rpdj5cclxuICAgICAgPGRpdj5DT05UQUNUPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+QnJlYW5uYSdzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkNvb2tpbmc8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDE0MDI5IExpbmQgVmlsbGFnZSwgQXB0LiAyMTksIFNDNSA5WkgsIFBvcnQgQ2F5bGEsIEhhd2FpaSwgR3JlYXRcclxuICAgICAgICBCcml0YWluXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+KzQ0IDc3MDQgNjA3MzczPC9kaXY+XHJcbiAgICAgICAgPGRpdj4rNDQgNzE5MyA4ODkyNDA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgY29scz1cIjUwXCJcclxuICAgICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvM2IzOTJkN2NiMDA0ZDg4YWY5ZGQucG5nXCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ29udGFjdCB9O1xyXG4iLCJjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuICBjb250ZW50RGl2LmlubmVySFRNTCA9IGAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+QnJlYW5uYSdzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkNvb2tpbmc8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgIDxkaXY+SE9NRTwvZGl2PlxyXG4gICAgICAgIDxkaXY+T1VSIE1FTlU8L2Rpdj5cclxuICAgICAgICA8ZGl2PkNPTlRBQ1Q8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtaWRkbGVcIj5cclxuICAgICAgPGRpdj5XZWxjb21lIHRvIEJyZWFubmEncyBDb29raW5nIFJlc3RhdXJhbnQ8L2Rpdj5cclxuICAgICAgPGRpdj5FYXQgaGVhbHRoeSBhbmQgTmF0dXJhbCBGb29kPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQnJlYW5uYSdzIENvb2tpbmcgaXMgYSByZXN0YXVyYW50LCBiYXIgYW5kIGNvZmZlZSByb2FzdGVyeSBsb2NhdGVkIG9uXHJcbiAgICAgICAgSXZvcnkgQ29hc3QuIFdlIGhhdmUgYXdlc29tZSByZWNpcGVzIGFuZCB0aGUgbW9zdCB0YWxlbnRlZCBjaGVmcyBpblxyXG4gICAgICAgIHRvd24uXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24+T1VSIE1FTlU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uPkdFVCBJTiBUT1VDSDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfTtcclxuIiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+QnJlYW5uYSdzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkNvb2tpbmc8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgIDxkaXY+SE9NRTwvZGl2PlxyXG4gICAgICAgIDxkaXY+T1VSIE1FTlU8L2Rpdj5cclxuICAgICAgICA8ZGl2PkNPTlRBQ1Q8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNmRjYzk0ODFiZTk3YmU3NGZjMDcuanBlZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5Gcm96ZW4gRnJ1aXQgU21vb3RoaWU8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgQmFuYW5hLCBTdHJhd2JlcnJpZXMsIE1pbGssIFZhbmlsbGEgeW9ndXJ0LCBvcmFuZ2UganVpY2UsIEhvbmV5IG9yXHJcbiAgICAgICAgICB0YXN0ZS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uPiQxMjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzUzNzdmOTQ5ZmI2ZmQyZmYwYmEyLmpwZWdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+UGFybWVzYW4gQ2hpY2tlbjwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBDaGlja2VuIGJyZWFzdHMsIFBhbmtvLCBQYXJtZXNhbiwgT2xpdmUgb2lsLCBEcmllZCBvcmVnYW5vLCBCbGFja1xyXG4gICAgICAgICAgcGVwcGVyLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+JDExPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNmRjYzk0ODFiZTk3YmU3NGZjMDcuanBlZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5Gcm96ZW4gRnJ1aXQgU21vb3RoaWU8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgQmFuYW5hLCBTdHJhd2JlcnJpZXMsIE1pbGssIFZhbmlsbGEgeW9ndXJ0LCBvcmFuZ2UganVpY2UsIEhvbmV5IG9yXHJcbiAgICAgICAgICB0YXN0ZS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uPiQxMjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzUzNzdmOTQ5ZmI2ZmQyZmYwYmEyLmpwZWdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+UGFybWVzYW4gQ2hpY2tlbjwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBDaGlja2VuIGJyZWFzdHMsIFBhbmtvLCBQYXJtZXNhbiwgT2xpdmUgb2lsLCBEcmllZCBvcmVnYW5vLCBCbGFja1xyXG4gICAgICAgICAgcGVwcGVyLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+JDExPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNmRjYzk0ODFiZTk3YmU3NGZjMDcuanBlZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5Gcm96ZW4gRnJ1aXQgU21vb3RoaWU8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgQmFuYW5hLCBTdHJhd2JlcnJpZXMsIE1pbGssIFZhbmlsbGEgeW9ndXJ0LCBvcmFuZ2UganVpY2UsIEhvbmV5IG9yXHJcbiAgICAgICAgICB0YXN0ZS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uPiQxMjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzUzNzdmOTQ5ZmI2ZmQyZmYwYmEyLmpwZWdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+UGFybWVzYW4gQ2hpY2tlbjwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBDaGlja2VuIGJyZWFzdHMsIFBhbmtvLCBQYXJtZXNhbiwgT2xpdmUgb2lsLCBEcmllZCBvcmVnYW5vLCBCbGFja1xyXG4gICAgICAgICAgcGVwcGVyLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+JDExPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNmRjYzk0ODFiZTk3YmU3NGZjMDcuanBlZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5Gcm96ZW4gRnJ1aXQgU21vb3RoaWU8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgQmFuYW5hLCBTdHJhd2JlcnJpZXMsIE1pbGssIFZhbmlsbGEgeW9ndXJ0LCBvcmFuZ2UganVpY2UsIEhvbmV5IG9yXHJcbiAgICAgICAgICB0YXN0ZS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uPiQxMjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL255ZjAwNS5naXRodWIuaW8vcmVzdGF1cmFudC1wcm9qZWN0LzUzNzdmOTQ5ZmI2ZmQyZmYwYmEyLmpwZWdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+UGFybWVzYW4gQ2hpY2tlbjwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBDaGlja2VuIGJyZWFzdHMsIFBhbmtvLCBQYXJtZXNhbiwgT2xpdmUgb2lsLCBEcmllZCBvcmVnYW5vLCBCbGFja1xyXG4gICAgICAgICAgcGVwcGVyLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+JDExPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTWVudSB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgeyByZW1vdmVQYWdlIH0gZnJvbSBcIi4vcmVtb3ZlLXBhZ2VcIjtcclxuXHJcbmNvbnN0IHBhZ2UgPSB7XHJcbiAgY3JlYXRlOiB7XHJcbiAgICBob21lOiBjcmVhdGVIb21lLFxyXG4gICAgbWVudTogY3JlYXRlTWVudSxcclxuICAgIGNvbnRhY3Q6IGNyZWF0ZUNvbnRhY3QsXHJcbiAgfSxcclxuICByZW1vdmU6IHJlbW92ZVBhZ2UsXHJcbn07XHJcblxyXG5leHBvcnQgeyBwYWdlIH07XHJcbiIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQYWdlKCkge1xyXG4gIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVtb3ZlUGFnZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2UgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcclxuXHJcbnBhZ2UuY3JlYXRlLmhvbWUoKTtcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QgPiBkaXY6Zmlyc3QtY2hpbGRcIik7XHJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QgPiBkaXY6bnRoLWNoaWxkKDIpXCIpO1xyXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ID4gZGl2Omxhc3QtY2hpbGRcIik7XHJcblxyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcGFnZS5yZW1vdmUoKTtcclxuICBwYWdlLmNyZWF0ZS5ob21lKCk7XHJcbn0pO1xyXG5cclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBhZ2UucmVtb3ZlKCk7XHJcbiAgcGFnZS5jcmVhdGUubWVudSgpO1xyXG59KTtcclxuXHJcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwYWdlLnJlbW92ZSgpO1xyXG4gIHBhZ2UuY3JlYXRlLmNvbnRhY3QoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
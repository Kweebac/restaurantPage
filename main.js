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

page.create.contact();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUI7Ozs7Ozs7Ozs7Ozs7OztBQzNEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7QUNuSHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7OztVQ050QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0E7QUFDTTtBQUNDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQVU7QUFDcEIsVUFBVSw2Q0FBVTtBQUNwQixhQUFhLG1EQUFhO0FBQzFCLEdBQUc7QUFDSCxVQUFVLG9EQUFVO0FBQ3BCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3JlbW92ZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XHJcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4+QnJlYW5uYSdzPC9zcGFuPlxyXG4gICAgICA8c3Bhbj5Db29raW5nPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICA8ZGl2PkhPTUU8L2Rpdj5cclxuICAgICAgPGRpdj5PVVIgTUVOVTwvZGl2PlxyXG4gICAgICA8ZGl2PkNPTlRBQ1Q8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5CcmVhbm5hJ3M8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+Q29va2luZzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgMTQwMjkgTGluZCBWaWxsYWdlLCBBcHQuIDIxOSwgU0M1IDlaSCwgUG9ydCBDYXlsYSwgSGF3YWlpLCBHcmVhdFxyXG4gICAgICAgIEJyaXRhaW5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj4rNDQgNzcwNCA2MDczNzM8L2Rpdj5cclxuICAgICAgICA8ZGl2Pis0NCA3MTkzIDg4OTI0MDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBjb2xzPVwiNTBcIlxyXG4gICAgICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC8zYjM5MmQ3Y2IwMDRkODhhZjlkZC5wbmdcIlxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWN0IH07XHJcbiIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYCBcclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5CcmVhbm5hJ3M8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+Q29va2luZzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgPGRpdj5IT01FPC9kaXY+XHJcbiAgICAgICAgPGRpdj5PVVIgTUVOVTwvZGl2PlxyXG4gICAgICAgIDxkaXY+Q09OVEFDVDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1pZGRsZVwiPlxyXG4gICAgICA8ZGl2PldlbGNvbWUgdG8gQnJlYW5uYSdzIENvb2tpbmcgUmVzdGF1cmFudDwvZGl2PlxyXG4gICAgICA8ZGl2PkVhdCBoZWFsdGh5IGFuZCBOYXR1cmFsIEZvb2Q8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBCcmVhbm5hJ3MgQ29va2luZyBpcyBhIHJlc3RhdXJhbnQsIGJhciBhbmQgY29mZmVlIHJvYXN0ZXJ5IGxvY2F0ZWQgb25cclxuICAgICAgICBJdm9yeSBDb2FzdC4gV2UgaGF2ZSBhd2Vzb21lIHJlY2lwZXMgYW5kIHRoZSBtb3N0IHRhbGVudGVkIGNoZWZzIGluXHJcbiAgICAgICAgdG93bi5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5PVVIgTUVOVTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+R0VUIElOIFRPVUNIPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9O1xyXG4iLCJjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICBjb250ZW50RGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5CcmVhbm5hJ3M8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+Q29va2luZzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgPGRpdj5IT01FPC9kaXY+XHJcbiAgICAgICAgPGRpdj5PVVIgTUVOVTwvZGl2PlxyXG4gICAgICAgIDxkaXY+Q09OVEFDVDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC82ZGNjOTQ4MWJlOTdiZTc0ZmMwNy5qcGVnXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2PkZyb3plbiBGcnVpdCBTbW9vdGhpZTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBCYW5hbmEsIFN0cmF3YmVycmllcywgTWlsaywgVmFuaWxsYSB5b2d1cnQsIG9yYW5nZSBqdWljZSwgSG9uZXkgb3JcclxuICAgICAgICAgIHRhc3RlLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+JDEyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNTM3N2Y5NDlmYjZmZDJmZjBiYTIuanBlZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5QYXJtZXNhbiBDaGlja2VuPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIENoaWNrZW4gYnJlYXN0cywgUGFua28sIFBhcm1lc2FuLCBPbGl2ZSBvaWwsIERyaWVkIG9yZWdhbm8sIEJsYWNrXHJcbiAgICAgICAgICBwZXBwZXIuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj4kMTE8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC82ZGNjOTQ4MWJlOTdiZTc0ZmMwNy5qcGVnXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2PkZyb3plbiBGcnVpdCBTbW9vdGhpZTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBCYW5hbmEsIFN0cmF3YmVycmllcywgTWlsaywgVmFuaWxsYSB5b2d1cnQsIG9yYW5nZSBqdWljZSwgSG9uZXkgb3JcclxuICAgICAgICAgIHRhc3RlLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+JDEyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNTM3N2Y5NDlmYjZmZDJmZjBiYTIuanBlZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5QYXJtZXNhbiBDaGlja2VuPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIENoaWNrZW4gYnJlYXN0cywgUGFua28sIFBhcm1lc2FuLCBPbGl2ZSBvaWwsIERyaWVkIG9yZWdhbm8sIEJsYWNrXHJcbiAgICAgICAgICBwZXBwZXIuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj4kMTE8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC82ZGNjOTQ4MWJlOTdiZTc0ZmMwNy5qcGVnXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2PkZyb3plbiBGcnVpdCBTbW9vdGhpZTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBCYW5hbmEsIFN0cmF3YmVycmllcywgTWlsaywgVmFuaWxsYSB5b2d1cnQsIG9yYW5nZSBqdWljZSwgSG9uZXkgb3JcclxuICAgICAgICAgIHRhc3RlLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+JDEyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNTM3N2Y5NDlmYjZmZDJmZjBiYTIuanBlZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5QYXJtZXNhbiBDaGlja2VuPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIENoaWNrZW4gYnJlYXN0cywgUGFua28sIFBhcm1lc2FuLCBPbGl2ZSBvaWwsIERyaWVkIG9yZWdhbm8sIEJsYWNrXHJcbiAgICAgICAgICBwZXBwZXIuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj4kMTE8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ueWYwMDUuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcHJvamVjdC82ZGNjOTQ4MWJlOTdiZTc0ZmMwNy5qcGVnXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2PkZyb3plbiBGcnVpdCBTbW9vdGhpZTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBCYW5hbmEsIFN0cmF3YmVycmllcywgTWlsaywgVmFuaWxsYSB5b2d1cnQsIG9yYW5nZSBqdWljZSwgSG9uZXkgb3JcclxuICAgICAgICAgIHRhc3RlLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24+JDEyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbnlmMDA1LmdpdGh1Yi5pby9yZXN0YXVyYW50LXByb2plY3QvNTM3N2Y5NDlmYjZmZDJmZjBiYTIuanBlZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5QYXJtZXNhbiBDaGlja2VuPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIENoaWNrZW4gYnJlYXN0cywgUGFua28sIFBhcm1lc2FuLCBPbGl2ZSBvaWwsIERyaWVkIG9yZWdhbm8sIEJsYWNrXHJcbiAgICAgICAgICBwZXBwZXIuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj4kMTE8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNZW51IH07XHJcbiIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQYWdlKCkge1xyXG4gIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVtb3ZlUGFnZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IHJlbW92ZVBhZ2UgfSBmcm9tIFwiLi9yZW1vdmUtcGFnZVwiO1xyXG5cclxuY29uc3QgcGFnZSA9IHtcclxuICBjcmVhdGU6IHtcclxuICAgIGhvbWU6IGNyZWF0ZUhvbWUsXHJcbiAgICBtZW51OiBjcmVhdGVNZW51LFxyXG4gICAgY29udGFjdDogY3JlYXRlQ29udGFjdCxcclxuICB9LFxyXG4gIHJlbW92ZTogcmVtb3ZlUGFnZSxcclxufTtcclxuXHJcbnBhZ2UuY3JlYXRlLmNvbnRhY3QoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
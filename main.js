/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nconst loadContactPage=()=>{\n    const content=document.getElementById(\"content\");\n\n    const header=document.createElement(\"div\");\n    header.classList.add(\"header\");\n    const head=document.createElement(\"h1\");\n    head.textContent=\"Contact us!\";\n    header.appendChild(head);\n\n    const github=document.createElement(\"a\");\n    github.href=\"http://github.com/anixudh\";\n    github.textContent=\"GitHub\";\n\n    const email=document.createElement(\"div\");\n    email.textContent=\"anirudh.varma196@gmail.com\";\n    \n\n    content.appendChild(header);\n    content.appendChild(github);\n    content.appendChild(email);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/frontpage.js":
/*!**************************!*\
  !*** ./src/frontpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFrontPage\": () => (/* binding */ loadFrontPage)\n/* harmony export */ });\nconst loadFrontPage=()=>{\n    const content=document.getElementById(\"content\");\n\n    const header=document.createElement(\"div\");\n    header.classList.add(\"header\");\n    const head=document.createElement(\"h1\");\n    head.textContent=\"Anirudh's Restaurant\";\n    header.appendChild(head);\n\n    const img=document.createElement(\"img\");\n    img.id=\"rest-img\";\n    img.src=\"./images/res.jpg\";\n\n    const info=document.createElement(\"div\");\n    const br=document.createElement(\"br\");\n    info.classList.add(\"info\");\n    info.textContent=\"This is a restaurant which serves anything you could find anywhere, as we have chefs from all over the world\";\n    info.textContent+=\"whose expertise consists of everything that exists. Yes, that's right. What's the cost you ask? None. It's all FREE!\";\n\n    content.appendChild(header);\n    content.appendChild(img);\n    content.appendChild(info);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/frontpage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontpage */ \"./src/frontpage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\nconsole.log(\"HI\");\n\n\n\n\n\nconst content=document.getElementById(\"content\");\n\nconst navBar=document.createElement(\"div\");\nnavBar.classList.add(\"navBar\");\n\nconst home=document.createElement(\"div\");\nhome.textContent=\"HOME\";\n\nconst menu=document.createElement(\"div\");\nmenu.textContent=\"MENU\";\n\nconst contact=document.createElement(\"div\");\ncontact.textContent=\"CONTACT\";\n\nnavBar.appendChild(home);\nnavBar.appendChild(menu);\nnavBar.appendChild(contact);\ncontent.appendChild(navBar);\n\nconst resetPage=()=>{\n    content.textContent=\"\";\n    content.appendChild(navBar);\n};\n\n\nconst frontPage=e=>{\n    resetPage();\n    (0,_frontpage__WEBPACK_IMPORTED_MODULE_0__.loadFrontPage)();\n}\n\nconst menuPage=e=>{\n    resetPage();\n    (0,_menupage__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\n}\n\nconst contactPage=e=>{\n    resetPage();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();\n}\n\nhome.addEventListener('click',frontPage);\nmenu.addEventListener('click',menuPage);\ncontact.addEventListener('click',contactPage);\n(0,_frontpage__WEBPACK_IMPORTED_MODULE_0__.loadFrontPage)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst loadMenuPage=()=>{\n    const content=document.getElementById(\"content\");\n\n    const header=document.createElement(\"div\");\n    header.classList.add(\"header\");\n    const head=document.createElement(\"h1\");\n    head.textContent=\"Menu\";\n    header.appendChild(head);\n\n    const img=document.createElement(\"img\");\n    img.id=\"menu-img\";\n    img.src=\"./images/menu.jpg\";\n\n    \n\n    content.appendChild(header);\n    content.appendChild(img);\n    \n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menupage.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
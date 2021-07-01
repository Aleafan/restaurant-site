/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadFooter": () => (/* binding */ loadFooter)
/* harmony export */ });
const loadFooter = () => {
  const footer = document.createElement('footer');
  footer.textContent = '© 2021 | Website created by Aleafan';

  const content = document.getElementById('content');
  content.appendChild(footer);
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
const loadHeader = () => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'heading-wrapper');
  header.appendChild(wrapper);

  const h1 = document.createElement('h1');
  h1.textContent = 'Santo Palato';
  wrapper.appendChild(h1);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'nav-toggler');
  wrapper.appendChild(button);

  button.addEventListener('click', toggleNav);

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-bars', 'fa-2x');
  button.appendChild(icon);

  icon.addEventListener('transitionend', toggleIcon);

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const ul = document.createElement('ul');
  nav.appendChild(ul);

  const links = ['HOME', 'MENU', 'CONTACT'];
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = link;
    li.appendChild(a);
    ul.appendChild(li);
  });

  const content = document.getElementById('content');
  content.appendChild(header);
}

let navMenuShow = false;

function toggleNav() {
    navMenuShow = !navMenuShow;
    this.querySelector('i').classList.add('scale-btn');
    const nav = document.querySelector('nav');
    nav.classList.toggle('show-nav');
}

function toggleIcon() {
    if (navMenuShow) {
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
    } else {
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
    }
    this.classList.remove('scale-btn');
}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomepage": () => (/* binding */ loadHomepage)
/* harmony export */ });
const loadHomepage = () => {
  const main = document.createElement('main');
  
  const image = document.createElement('div');
  image.classList.add('background');
  main.appendChild(image);

  const vhWrapper = document.createElement('div');
  vhWrapper.setAttribute('id', 'vh-wrapper');
  
  const h2 = document.createElement('h2');
  h2.textContent = 'TRATTORIA ITALIANA';
  vhWrapper.appendChild(h2);

  const p1 = document.createElement('p');
  p1.textContent = 'Delicious Italian food served since 1865';
  vhWrapper.appendChild(p1);

  const figure = document.createElement('figure');
  vhWrapper.appendChild(figure);

  const blockquote = document.createElement('blockquote');
  blockquote.setAttribute('cite', 'https://www.comde-mast.com');
  figure.appendChild(blockquote);

  const p2 = document.createElement('p');
  p2.textContent = 'Located at the heart of the buzzing San Lorenzo market area, Trattoria Santo Palato does top-notch renditions of Florentine and Tuscan classics at affordable prices.';
  blockquote.appendChild(p2);

  const figcaption = document.createElement('figcaption');
  figure.appendChild(figcaption);

  const cite = document.createElement('cite');
  cite.textContent = '—Comde Nast Traveller';
  figcaption.appendChild(cite);

  main.appendChild(vhWrapper);
  
  const content = document.getElementById('content');
  content.appendChild(main);
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
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");




(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();
(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();
(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.loadFooter)();

// Correct 100vh rendering on mobiles
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Find header's and footer's height to correct homepage main content height
const headerHeight = document.querySelector('#heading-wrapper').offsetHeight;
const footerHeight = document.querySelector('footer').offsetHeight;
const offset = headerHeight + footerHeight;
document.documentElement.style.setProperty('--offset', `${offset}px`);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUM5RE87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7O1VDeENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDSjtBQUNBOztBQUV6QyxzREFBVTtBQUNWLDBEQUFZO0FBQ1osc0RBQVU7O0FBRVY7QUFDQTtBQUNBLHNEQUFzRCxHQUFHOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxPQUFPLEsiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsb2FkRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gJ8KpIDIwMjEgfCBXZWJzaXRlIGNyZWF0ZWQgYnkgQWxlYWZhbic7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn0iLCJleHBvcnQgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGluZy13cmFwcGVyJyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1NhbnRvIFBhbGF0byc7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICduYXYtdG9nZ2xlcicpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2KTtcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1iYXJzJywgJ2ZhLTJ4Jyk7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcblxuICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0b2dnbGVJY29uKTtcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGNvbnN0IGxpbmtzID0gWydIT01FJywgJ01FTlUnLCAnQ09OVEFDVCddO1xuICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICBhLnRleHRDb250ZW50ID0gbGluaztcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmxldCBuYXZNZW51U2hvdyA9IGZhbHNlO1xuXG5mdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gICAgbmF2TWVudVNob3cgPSAhbmF2TWVudVNob3c7XG4gICAgdGhpcy5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnc2NhbGUtYnRuJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbmF2Jyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUljb24oKSB7XG4gICAgaWYgKG5hdk1lbnVTaG93KSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZhLXRpbWVzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdmYS10aW1lcycpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzY2FsZS1idG4nKTtcbn0iLCJleHBvcnQgY29uc3QgbG9hZEhvbWVwYWdlID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICBtYWluLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICBjb25zdCB2aFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmhXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndmgtd3JhcHBlcicpO1xuICBcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9ICdUUkFUVE9SSUEgSVRBTElBTkEnO1xuICB2aFdyYXBwZXIuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9ICdEZWxpY2lvdXMgSXRhbGlhbiBmb29kIHNlcnZlZCBzaW5jZSAxODY1JztcbiAgdmhXcmFwcGVyLmFwcGVuZENoaWxkKHAxKTtcblxuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcbiAgdmhXcmFwcGVyLmFwcGVuZENoaWxkKGZpZ3VyZSk7XG5cbiAgY29uc3QgYmxvY2txdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jsb2NrcXVvdGUnKTtcbiAgYmxvY2txdW90ZS5zZXRBdHRyaWJ1dGUoJ2NpdGUnLCAnaHR0cHM6Ly93d3cuY29tZGUtbWFzdC5jb20nKTtcbiAgZmlndXJlLmFwcGVuZENoaWxkKGJsb2NrcXVvdGUpO1xuXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi50ZXh0Q29udGVudCA9ICdMb2NhdGVkIGF0IHRoZSBoZWFydCBvZiB0aGUgYnV6emluZyBTYW4gTG9yZW56byBtYXJrZXQgYXJlYSwgVHJhdHRvcmlhIFNhbnRvIFBhbGF0byBkb2VzIHRvcC1ub3RjaCByZW5kaXRpb25zIG9mIEZsb3JlbnRpbmUgYW5kIFR1c2NhbiBjbGFzc2ljcyBhdCBhZmZvcmRhYmxlIHByaWNlcy4nO1xuICBibG9ja3F1b3RlLmFwcGVuZENoaWxkKHAyKTtcblxuICBjb25zdCBmaWdjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlnY2FwdGlvbicpO1xuICBmaWd1cmUuYXBwZW5kQ2hpbGQoZmlnY2FwdGlvbik7XG5cbiAgY29uc3QgY2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NpdGUnKTtcbiAgY2l0ZS50ZXh0Q29udGVudCA9ICfigJRDb21kZSBOYXN0IFRyYXZlbGxlcic7XG4gIGZpZ2NhcHRpb24uYXBwZW5kQ2hpbGQoY2l0ZSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZCh2aFdyYXBwZXIpO1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSG9tZXBhZ2UgfSBmcm9tICcuL2hvbWVwYWdlLmpzJztcbmltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgeyBsb2FkRm9vdGVyIH0gZnJvbSAnLi9mb290ZXIuanMnO1xuXG5sb2FkSGVhZGVyKCk7XG5sb2FkSG9tZXBhZ2UoKTtcbmxvYWRGb290ZXIoKTtcblxuLy8gQ29ycmVjdCAxMDB2aCByZW5kZXJpbmcgb24gbW9iaWxlc1xuY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcblxuLy8gRmluZCBoZWFkZXIncyBhbmQgZm9vdGVyJ3MgaGVpZ2h0IHRvIGNvcnJlY3QgaG9tZXBhZ2UgbWFpbiBjb250ZW50IGhlaWdodFxuY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRpbmctd3JhcHBlcicpLm9mZnNldEhlaWdodDtcbmNvbnN0IGZvb3RlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLm9mZnNldEhlaWdodDtcbmNvbnN0IG9mZnNldCA9IGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodDtcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vZmZzZXQnLCBgJHtvZmZzZXR9cHhgKTsiXSwic291cmNlUm9vdCI6IiJ9
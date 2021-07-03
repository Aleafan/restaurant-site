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
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
const createFooter = () => {
  const footer = document.createElement('footer');
  footer.textContent = '© 2021 | Website created by Aleafan';
  return footer;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
const createHeader = () => {
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

  const links = ['home', 'menu', 'contact'];
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('id', link);
    a.textContent = link.toUpperCase();
    li.appendChild(a);
    ul.appendChild(li);
  });

  return header;
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

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContent": () => (/* binding */ loadContent),
/* harmony export */   "loadTab": () => (/* binding */ loadTab),
/* harmony export */   "setCssVars": () => (/* binding */ setCssVars)
/* harmony export */ });
const loadContent = (element) => {
  const content = document.getElementById('content');
  content.appendChild(element);
}

const loadTab = (element) => {
  const content = document.getElementById('content');
  const footer = document.querySelector('footer');
  const previousTab = document.querySelector('main');
  if (previousTab) {
    content.removeChild(previousTab);
  }
  content.insertBefore(element, footer);
}

const setCssVars = () => {
  const headerHeight = document.querySelector('#heading-wrapper').offsetHeight;
  const footerHeight = document.querySelector('footer').offsetHeight;
  const offset = headerHeight + footerHeight;
  document.documentElement.style.setProperty('--offset-header', `${headerHeight}px`);
  document.documentElement.style.setProperty('--offset', `${offset}px`);

  // Correct 100vh rendering on mobiles
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomepage": () => (/* binding */ createHomepage)
/* harmony export */ });
const createHomepage = () => {
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
  
  return main;
}

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
const antipasti = {
    name: 'ANTIPASTI',
    items: [
        'fritto misto of squid, prawns & anchovies, curry mayonnaise',
        'duo of quail, golden beetroot puree, mushroom & thyme salad',
        'deep fried egg, leek & scamorza mousse, tapenade, fresh oregano',
        'sea bass crudo, avocado & samphire salad, passion fruit, basil, popcorn'
    ],
    prices: [11, 11, 9, 13]
};
const pasta = {
    name: 'PASTA',
    items: [
        'garganelli romagnoli, lamb ragout, green beans, salva cremasco cheese, grapefruit zest',
        'spaghetti quadrati alla carbonara, guanciale, parmigiano reggiano 36 months, pecorino, eggs',
        'linguine aglio, olio, peperoncino with lobster, avocado, cardamom oil',
        'smoked gnocchi cacio e pepe, wild mushrooms, beetroot chips'
    ],
    prices: [17, 16, 19, 16]
}
const mains = {
    name: 'MAINS',
    items: [
        'sea bream fillet, grilled lettuce, carrot cream, black olives, pico de gallo',
        'hanger steak tagliata, grilled asparagus, baby potatoes, wasabi zabaione',
        'grilled octopus, puré & pickled courgette, wheat salad, mint',
        'duck breast, red fruits, seed granola, goat’s cheese cream, maitake mushrooms',
    ],
    prices: [19, 20, 21, 19]
}
const drinks = {
    name: 'DRINKS',
    items: [
        'Lunardi, Sauvignon Blanc - white wine',
        'Timo, Vermentino - white wine',
        'Lunardi, Cabernet Sauvignon - red wine',
        'Montepulciano D\'Abruzzo, Montepulciano - red wine',
        'Teresa Rizzi, Glera - prosecco',
        'Glass of water'
    ],
    prices: [17, 20, 21, 19, 20, 50]
}

const createMenu = () => {
    const main = document.createElement('main');
    main.setAttribute('id', 'menu');

    const h2 = document.createElement('h2');
    h2.textContent = 'MENU';
    main.appendChild(h2);

    const image = document.createElement('img');
    image.setAttribute('src', '../src/food-w800.jpg');
    image.setAttribute('alt', 'Food and wine served in a restaurant');
    main.appendChild(image);

    const menu = [antipasti, pasta, mains, drinks];

    menu.forEach(category => {
        const section = document.createElement('section');

        const h3 = document.createElement('h3');
        h3.textContent = category.name;
        section.appendChild(h3);

        category.items.forEach((item, index) => {
            const article = document.createElement('article');
            article.classList.add('menu-item');

            const p1 = document.createElement('p');
            p1.textContent = item;
            article.appendChild(p1);

            const p2 = document.createElement('p');
            p2.textContent = `€${category.prices[index]}`;
            article.appendChild(p2);

            section.appendChild(article);
        });

        main.appendChild(section);
    });

    return main;
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
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");






(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)((0,_header_js__WEBPACK_IMPORTED_MODULE_2__.createHeader)());
(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)((0,_footer_js__WEBPACK_IMPORTED_MODULE_3__.createFooter)());
(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)((0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createHomepage)());

(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setCssVars)();

const homeTab = document.getElementById('home');
homeTab.addEventListener('click', () => (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)((0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createHomepage)()));

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', () => (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)((0,_menuPage_js__WEBPACK_IMPORTED_MODULE_4__.createMenu)()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGFBQWE7QUFDaEYsNERBQTRELE9BQU87O0FBRW5FO0FBQ0E7QUFDQSx3REFBd0QsR0FBRztBQUMzRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx1QkFBdUI7QUFDeEQ7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEM7Ozs7OztVQ3BGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0U7QUFDakI7QUFDSjtBQUNBO0FBQ0E7O0FBRTNDLHdEQUFXLENBQUMsd0RBQVk7QUFDeEIsd0RBQVcsQ0FBQyx3REFBWTtBQUN4QixvREFBTyxDQUFDLDREQUFjOztBQUV0Qix1REFBVTs7QUFFVjtBQUNBLHdDQUF3QyxvREFBTyxDQUFDLDREQUFjOztBQUU5RDtBQUNBLHdDQUF3QyxvREFBTyxDQUFDLHdEQUFVLEsiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSAnwqkgMjAyMSB8IFdlYnNpdGUgY3JlYXRlZCBieSBBbGVhZmFuJztcbiAgcmV0dXJuIGZvb3Rlcjtcbn0iLCJleHBvcnQgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkaW5nLXdyYXBwZXInKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnU2FudG8gUGFsYXRvJztcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi10b2dnbGVyJyk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXYpO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWJhcnMnLCAnZmEtMngnKTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIGljb24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRvZ2dsZUljb24pO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgY29uc3QgbGlua3MgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0J107XG4gIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgIGEuc2V0QXR0cmlidXRlKCdpZCcsIGxpbmspO1xuICAgIGEudGV4dENvbnRlbnQgPSBsaW5rLnRvVXBwZXJDYXNlKCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5sZXQgbmF2TWVudVNob3cgPSBmYWxzZTtcblxuZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgIG5hdk1lbnVTaG93ID0gIW5hdk1lbnVTaG93O1xuICAgIHRoaXMucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ3NjYWxlLWJ0bicpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW5hdicpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVJY29uKCkge1xuICAgIGlmIChuYXZNZW51U2hvdykge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmYS10aW1lcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZmEtdGltZXMnKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2NhbGUtYnRuJyk7XG59IiwiY29uc3QgbG9hZENvbnRlbnQgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuY29uc3QgbG9hZFRhYiA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgcHJldmlvdXNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGlmIChwcmV2aW91c1RhYikge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJldmlvdXNUYWIpO1xuICB9XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGZvb3Rlcik7XG59XG5cbmNvbnN0IHNldENzc1ZhcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkaW5nLXdyYXBwZXInKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IGZvb3RlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLm9mZnNldEhlaWdodDtcbiAgY29uc3Qgb2Zmc2V0ID0gaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0O1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tb2Zmc2V0LWhlYWRlcicsIGAke2hlYWRlckhlaWdodH1weGApO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tb2Zmc2V0JywgYCR7b2Zmc2V0fXB4YCk7XG5cbiAgLy8gQ29ycmVjdCAxMDB2aCByZW5kZXJpbmcgb24gbW9iaWxlc1xuICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG59XG5cbmV4cG9ydCB7IGxvYWRDb250ZW50LCBsb2FkVGFiLCBzZXRDc3NWYXJzIH0iLCJleHBvcnQgY29uc3QgY3JlYXRlSG9tZXBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIFxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIGNvbnN0IHZoV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd2aC13cmFwcGVyJyk7XG4gIFxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gJ1RSQVRUT1JJQSBJVEFMSUFOQSc7XG4gIHZoV3JhcHBlci5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLnRleHRDb250ZW50ID0gJ0RlbGljaW91cyBJdGFsaWFuIGZvb2Qgc2VydmVkIHNpbmNlIDE4NjUnO1xuICB2aFdyYXBwZXIuYXBwZW5kQ2hpbGQocDEpO1xuXG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xuICB2aFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmlndXJlKTtcblxuICBjb25zdCBibG9ja3F1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmxvY2txdW90ZScpO1xuICBibG9ja3F1b3RlLnNldEF0dHJpYnV0ZSgnY2l0ZScsICdodHRwczovL3d3dy5jb21kZS1tYXN0LmNvbScpO1xuICBmaWd1cmUuYXBwZW5kQ2hpbGQoYmxvY2txdW90ZSk7XG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAyLnRleHRDb250ZW50ID0gJ0xvY2F0ZWQgYXQgdGhlIGhlYXJ0IG9mIHRoZSBidXp6aW5nIFNhbiBMb3JlbnpvIG1hcmtldCBhcmVhLCBUcmF0dG9yaWEgU2FudG8gUGFsYXRvIGRvZXMgdG9wLW5vdGNoIHJlbmRpdGlvbnMgb2YgRmxvcmVudGluZSBhbmQgVHVzY2FuIGNsYXNzaWNzIGF0IGFmZm9yZGFibGUgcHJpY2VzLic7XG4gIGJsb2NrcXVvdGUuYXBwZW5kQ2hpbGQocDIpO1xuXG4gIGNvbnN0IGZpZ2NhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XG4gIGZpZ3VyZS5hcHBlbmRDaGlsZChmaWdjYXB0aW9uKTtcblxuICBjb25zdCBjaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2l0ZScpO1xuICBjaXRlLnRleHRDb250ZW50ID0gJ+KAlENvbWRlIE5hc3QgVHJhdmVsbGVyJztcbiAgZmlnY2FwdGlvbi5hcHBlbmRDaGlsZChjaXRlKTtcblxuICBtYWluLmFwcGVuZENoaWxkKHZoV3JhcHBlcik7XG4gIFxuICByZXR1cm4gbWFpbjtcbn0iLCJjb25zdCBhbnRpcGFzdGkgPSB7XG4gICAgbmFtZTogJ0FOVElQQVNUSScsXG4gICAgaXRlbXM6IFtcbiAgICAgICAgJ2ZyaXR0byBtaXN0byBvZiBzcXVpZCwgcHJhd25zICYgYW5jaG92aWVzLCBjdXJyeSBtYXlvbm5haXNlJyxcbiAgICAgICAgJ2R1byBvZiBxdWFpbCwgZ29sZGVuIGJlZXRyb290IHB1cmVlLCBtdXNocm9vbSAmIHRoeW1lIHNhbGFkJyxcbiAgICAgICAgJ2RlZXAgZnJpZWQgZWdnLCBsZWVrICYgc2NhbW9yemEgbW91c3NlLCB0YXBlbmFkZSwgZnJlc2ggb3JlZ2FubycsXG4gICAgICAgICdzZWEgYmFzcyBjcnVkbywgYXZvY2FkbyAmIHNhbXBoaXJlIHNhbGFkLCBwYXNzaW9uIGZydWl0LCBiYXNpbCwgcG9wY29ybidcbiAgICBdLFxuICAgIHByaWNlczogWzExLCAxMSwgOSwgMTNdXG59O1xuY29uc3QgcGFzdGEgPSB7XG4gICAgbmFtZTogJ1BBU1RBJyxcbiAgICBpdGVtczogW1xuICAgICAgICAnZ2FyZ2FuZWxsaSByb21hZ25vbGksIGxhbWIgcmFnb3V0LCBncmVlbiBiZWFucywgc2FsdmEgY3JlbWFzY28gY2hlZXNlLCBncmFwZWZydWl0IHplc3QnLFxuICAgICAgICAnc3BhZ2hldHRpIHF1YWRyYXRpIGFsbGEgY2FyYm9uYXJhLCBndWFuY2lhbGUsIHBhcm1pZ2lhbm8gcmVnZ2lhbm8gMzYgbW9udGhzLCBwZWNvcmlubywgZWdncycsXG4gICAgICAgICdsaW5ndWluZSBhZ2xpbywgb2xpbywgcGVwZXJvbmNpbm8gd2l0aCBsb2JzdGVyLCBhdm9jYWRvLCBjYXJkYW1vbSBvaWwnLFxuICAgICAgICAnc21va2VkIGdub2NjaGkgY2FjaW8gZSBwZXBlLCB3aWxkIG11c2hyb29tcywgYmVldHJvb3QgY2hpcHMnXG4gICAgXSxcbiAgICBwcmljZXM6IFsxNywgMTYsIDE5LCAxNl1cbn1cbmNvbnN0IG1haW5zID0ge1xuICAgIG5hbWU6ICdNQUlOUycsXG4gICAgaXRlbXM6IFtcbiAgICAgICAgJ3NlYSBicmVhbSBmaWxsZXQsIGdyaWxsZWQgbGV0dHVjZSwgY2Fycm90IGNyZWFtLCBibGFjayBvbGl2ZXMsIHBpY28gZGUgZ2FsbG8nLFxuICAgICAgICAnaGFuZ2VyIHN0ZWFrIHRhZ2xpYXRhLCBncmlsbGVkIGFzcGFyYWd1cywgYmFieSBwb3RhdG9lcywgd2FzYWJpIHphYmFpb25lJyxcbiAgICAgICAgJ2dyaWxsZWQgb2N0b3B1cywgcHVyw6kgJiBwaWNrbGVkIGNvdXJnZXR0ZSwgd2hlYXQgc2FsYWQsIG1pbnQnLFxuICAgICAgICAnZHVjayBicmVhc3QsIHJlZCBmcnVpdHMsIHNlZWQgZ3Jhbm9sYSwgZ29hdOKAmXMgY2hlZXNlIGNyZWFtLCBtYWl0YWtlIG11c2hyb29tcycsXG4gICAgXSxcbiAgICBwcmljZXM6IFsxOSwgMjAsIDIxLCAxOV1cbn1cbmNvbnN0IGRyaW5rcyA9IHtcbiAgICBuYW1lOiAnRFJJTktTJyxcbiAgICBpdGVtczogW1xuICAgICAgICAnTHVuYXJkaSwgU2F1dmlnbm9uIEJsYW5jIC0gd2hpdGUgd2luZScsXG4gICAgICAgICdUaW1vLCBWZXJtZW50aW5vIC0gd2hpdGUgd2luZScsXG4gICAgICAgICdMdW5hcmRpLCBDYWJlcm5ldCBTYXV2aWdub24gLSByZWQgd2luZScsXG4gICAgICAgICdNb250ZXB1bGNpYW5vIERcXCdBYnJ1enpvLCBNb250ZXB1bGNpYW5vIC0gcmVkIHdpbmUnLFxuICAgICAgICAnVGVyZXNhIFJpenppLCBHbGVyYSAtIHByb3NlY2NvJyxcbiAgICAgICAgJ0dsYXNzIG9mIHdhdGVyJ1xuICAgIF0sXG4gICAgcHJpY2VzOiBbMTcsIDIwLCAyMSwgMTksIDIwLCA1MF1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvZm9vZC13ODAwLmpwZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0Zvb2QgYW5kIHdpbmUgc2VydmVkIGluIGEgcmVzdGF1cmFudCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgbWVudSA9IFthbnRpcGFzdGksIHBhc3RhLCBtYWlucywgZHJpbmtzXTtcblxuICAgIG1lbnUuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoMy50ZXh0Q29udGVudCA9IGNhdGVnb3J5Lm5hbWU7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgICAgIGNhdGVnb3J5Lml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICAgICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKHAxKTtcblxuICAgICAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMi50ZXh0Q29udGVudCA9IGDigqwke2NhdGVnb3J5LnByaWNlc1tpbmRleF19YDtcbiAgICAgICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFydGljbGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1haW47XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkQ29udGVudCwgbG9hZFRhYiwgc2V0Q3NzVmFycyB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVIb21lcGFnZSB9IGZyb20gJy4vaG9tZXBhZ2UuanMnO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9mb290ZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudVBhZ2UuanMnO1xuXG5sb2FkQ29udGVudChjcmVhdGVIZWFkZXIoKSk7XG5sb2FkQ29udGVudChjcmVhdGVGb290ZXIoKSk7XG5sb2FkVGFiKGNyZWF0ZUhvbWVwYWdlKCkpO1xuXG5zZXRDc3NWYXJzKCk7XG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvYWRUYWIoY3JlYXRlSG9tZXBhZ2UoKSkpO1xuXG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkVGFiKGNyZWF0ZU1lbnUoKSkpOyJdLCJzb3VyY2VSb290IjoiIn0=
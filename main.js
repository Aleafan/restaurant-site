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

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
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

const loadMenu = () => {
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

    // const mainOld = document.querySelector('main');
    const content = document.getElementById('content');
    const footer = document.querySelector('footer');
    // content.removeChild(mainOld);
    content.insertBefore(main, footer);
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
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");





// loadHeader();
// loadHomepage();
// loadFooter();

(0,_menuPage_js__WEBPACK_IMPORTED_MODULE_3__.loadMenu)();

// Calculate and set CSS variables
const headerHeight = document.querySelector('#heading-wrapper').offsetHeight;
const footerHeight = document.querySelector('footer').offsetHeight;
const offset = headerHeight + footerHeight;
document.documentElement.style.setProperty('--offset-header', `${headerHeight}px`);
document.documentElement.style.setProperty('--offset', `${offset}px`);

// Correct 100vh rendering on mobiles
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDOURPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hEOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQ3hGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNKO0FBQ0E7QUFDQTs7QUFFekM7QUFDQTtBQUNBOztBQUVBLHNEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUUsMERBQTBELE9BQU87O0FBRWpFO0FBQ0E7QUFDQSxzREFBc0QsR0FBRyxLIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9hZEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9ICfCqSAyMDIxIHwgV2Vic2l0ZSBjcmVhdGVkIGJ5IEFsZWFmYW4nO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59IiwiZXhwb3J0IGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRpbmctd3JhcHBlcicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdTYW50byBQYWxhdG8nO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGgxKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LXRvZ2dsZXInKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdik7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtYmFycycsICdmYS0yeCcpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdG9nZ2xlSWNvbik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcblxuICBjb25zdCBsaW5rcyA9IFsnSE9NRScsICdNRU5VJywgJ0NPTlRBQ1QnXTtcbiAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgYS50ZXh0Q29udGVudCA9IGxpbms7XG4gICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5sZXQgbmF2TWVudVNob3cgPSBmYWxzZTtcblxuZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgIG5hdk1lbnVTaG93ID0gIW5hdk1lbnVTaG93O1xuICAgIHRoaXMucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ3NjYWxlLWJ0bicpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW5hdicpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVJY29uKCkge1xuICAgIGlmIChuYXZNZW51U2hvdykge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmYS10aW1lcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZmEtdGltZXMnKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc2NhbGUtYnRuJyk7XG59IiwiZXhwb3J0IGNvbnN0IGxvYWRIb21lcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQnKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgY29uc3QgdmhXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZoV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZoLXdyYXBwZXInKTtcbiAgXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnVFJBVFRPUklBIElUQUxJQU5BJztcbiAgdmhXcmFwcGVyLmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSAnRGVsaWNpb3VzIEl0YWxpYW4gZm9vZCBzZXJ2ZWQgc2luY2UgMTg2NSc7XG4gIHZoV3JhcHBlci5hcHBlbmRDaGlsZChwMSk7XG5cbiAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XG4gIHZoV3JhcHBlci5hcHBlbmRDaGlsZChmaWd1cmUpO1xuXG4gIGNvbnN0IGJsb2NrcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdibG9ja3F1b3RlJyk7XG4gIGJsb2NrcXVvdGUuc2V0QXR0cmlidXRlKCdjaXRlJywgJ2h0dHBzOi8vd3d3LmNvbWRlLW1hc3QuY29tJyk7XG4gIGZpZ3VyZS5hcHBlbmRDaGlsZChibG9ja3F1b3RlKTtcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSAnTG9jYXRlZCBhdCB0aGUgaGVhcnQgb2YgdGhlIGJ1enppbmcgU2FuIExvcmVuem8gbWFya2V0IGFyZWEsIFRyYXR0b3JpYSBTYW50byBQYWxhdG8gZG9lcyB0b3Atbm90Y2ggcmVuZGl0aW9ucyBvZiBGbG9yZW50aW5lIGFuZCBUdXNjYW4gY2xhc3NpY3MgYXQgYWZmb3JkYWJsZSBwcmljZXMuJztcbiAgYmxvY2txdW90ZS5hcHBlbmRDaGlsZChwMik7XG5cbiAgY29uc3QgZmlnY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcbiAgZmlndXJlLmFwcGVuZENoaWxkKGZpZ2NhcHRpb24pO1xuXG4gIGNvbnN0IGNpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjaXRlJyk7XG4gIGNpdGUudGV4dENvbnRlbnQgPSAn4oCUQ29tZGUgTmFzdCBUcmF2ZWxsZXInO1xuICBmaWdjYXB0aW9uLmFwcGVuZENoaWxkKGNpdGUpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQodmhXcmFwcGVyKTtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufSIsImNvbnN0IGFudGlwYXN0aSA9IHtcbiAgICBuYW1lOiAnQU5USVBBU1RJJyxcbiAgICBpdGVtczogW1xuICAgICAgICAnZnJpdHRvIG1pc3RvIG9mIHNxdWlkLCBwcmF3bnMgJiBhbmNob3ZpZXMsIGN1cnJ5IG1heW9ubmFpc2UnLFxuICAgICAgICAnZHVvIG9mIHF1YWlsLCBnb2xkZW4gYmVldHJvb3QgcHVyZWUsIG11c2hyb29tICYgdGh5bWUgc2FsYWQnLFxuICAgICAgICAnZGVlcCBmcmllZCBlZ2csIGxlZWsgJiBzY2Ftb3J6YSBtb3Vzc2UsIHRhcGVuYWRlLCBmcmVzaCBvcmVnYW5vJyxcbiAgICAgICAgJ3NlYSBiYXNzIGNydWRvLCBhdm9jYWRvICYgc2FtcGhpcmUgc2FsYWQsIHBhc3Npb24gZnJ1aXQsIGJhc2lsLCBwb3Bjb3JuJ1xuICAgIF0sXG4gICAgcHJpY2VzOiBbMTEsIDExLCA5LCAxM11cbn07XG5jb25zdCBwYXN0YSA9IHtcbiAgICBuYW1lOiAnUEFTVEEnLFxuICAgIGl0ZW1zOiBbXG4gICAgICAgICdnYXJnYW5lbGxpIHJvbWFnbm9saSwgbGFtYiByYWdvdXQsIGdyZWVuIGJlYW5zLCBzYWx2YSBjcmVtYXNjbyBjaGVlc2UsIGdyYXBlZnJ1aXQgemVzdCcsXG4gICAgICAgICdzcGFnaGV0dGkgcXVhZHJhdGkgYWxsYSBjYXJib25hcmEsIGd1YW5jaWFsZSwgcGFybWlnaWFubyByZWdnaWFubyAzNiBtb250aHMsIHBlY29yaW5vLCBlZ2dzJyxcbiAgICAgICAgJ2xpbmd1aW5lIGFnbGlvLCBvbGlvLCBwZXBlcm9uY2lubyB3aXRoIGxvYnN0ZXIsIGF2b2NhZG8sIGNhcmRhbW9tIG9pbCcsXG4gICAgICAgICdzbW9rZWQgZ25vY2NoaSBjYWNpbyBlIHBlcGUsIHdpbGQgbXVzaHJvb21zLCBiZWV0cm9vdCBjaGlwcydcbiAgICBdLFxuICAgIHByaWNlczogWzE3LCAxNiwgMTksIDE2XVxufVxuY29uc3QgbWFpbnMgPSB7XG4gICAgbmFtZTogJ01BSU5TJyxcbiAgICBpdGVtczogW1xuICAgICAgICAnc2VhIGJyZWFtIGZpbGxldCwgZ3JpbGxlZCBsZXR0dWNlLCBjYXJyb3QgY3JlYW0sIGJsYWNrIG9saXZlcywgcGljbyBkZSBnYWxsbycsXG4gICAgICAgICdoYW5nZXIgc3RlYWsgdGFnbGlhdGEsIGdyaWxsZWQgYXNwYXJhZ3VzLCBiYWJ5IHBvdGF0b2VzLCB3YXNhYmkgemFiYWlvbmUnLFxuICAgICAgICAnZ3JpbGxlZCBvY3RvcHVzLCBwdXLDqSAmIHBpY2tsZWQgY291cmdldHRlLCB3aGVhdCBzYWxhZCwgbWludCcsXG4gICAgICAgICdkdWNrIGJyZWFzdCwgcmVkIGZydWl0cywgc2VlZCBncmFub2xhLCBnb2F04oCZcyBjaGVlc2UgY3JlYW0sIG1haXRha2UgbXVzaHJvb21zJyxcbiAgICBdLFxuICAgIHByaWNlczogWzE5LCAyMCwgMjEsIDE5XVxufVxuY29uc3QgZHJpbmtzID0ge1xuICAgIG5hbWU6ICdEUklOS1MnLFxuICAgIGl0ZW1zOiBbXG4gICAgICAgICdMdW5hcmRpLCBTYXV2aWdub24gQmxhbmMgLSB3aGl0ZSB3aW5lJyxcbiAgICAgICAgJ1RpbW8sIFZlcm1lbnRpbm8gLSB3aGl0ZSB3aW5lJyxcbiAgICAgICAgJ0x1bmFyZGksIENhYmVybmV0IFNhdXZpZ25vbiAtIHJlZCB3aW5lJyxcbiAgICAgICAgJ01vbnRlcHVsY2lhbm8gRFxcJ0FicnV6em8sIE1vbnRlcHVsY2lhbm8gLSByZWQgd2luZScsXG4gICAgICAgICdUZXJlc2EgUml6emksIEdsZXJhIC0gcHJvc2VjY28nLFxuICAgICAgICAnR2xhc3Mgb2Ygd2F0ZXInXG4gICAgXSxcbiAgICBwcmljZXM6IFsxNywgMjAsIDIxLCAxOSwgMjAsIDUwXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvZm9vZC13ODAwLmpwZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0Zvb2QgYW5kIHdpbmUgc2VydmVkIGluIGEgcmVzdGF1cmFudCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgbWVudSA9IFthbnRpcGFzdGksIHBhc3RhLCBtYWlucywgZHJpbmtzXTtcblxuICAgIG1lbnUuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoMy50ZXh0Q29udGVudCA9IGNhdGVnb3J5Lm5hbWU7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgICAgIGNhdGVnb3J5Lml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICAgICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKHAxKTtcblxuICAgICAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMi50ZXh0Q29udGVudCA9IGDigqwke2NhdGVnb3J5LnByaWNlc1tpbmRleF19YDtcbiAgICAgICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFydGljbGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc3QgbWFpbk9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgICAvLyBjb250ZW50LnJlbW92ZUNoaWxkKG1haW5PbGQpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1haW4sIGZvb3Rlcik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSG9tZXBhZ2UgfSBmcm9tICcuL2hvbWVwYWdlLmpzJztcbmltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgeyBsb2FkRm9vdGVyIH0gZnJvbSAnLi9mb290ZXIuanMnO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL21lbnVQYWdlLmpzJztcblxuLy8gbG9hZEhlYWRlcigpO1xuLy8gbG9hZEhvbWVwYWdlKCk7XG4vLyBsb2FkRm9vdGVyKCk7XG5cbmxvYWRNZW51KCk7XG5cbi8vIENhbGN1bGF0ZSBhbmQgc2V0IENTUyB2YXJpYWJsZXNcbmNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkaW5nLXdyYXBwZXInKS5vZmZzZXRIZWlnaHQ7XG5jb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5vZmZzZXRIZWlnaHQ7XG5jb25zdCBvZmZzZXQgPSBoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQ7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tb2Zmc2V0LWhlYWRlcicsIGAke2hlYWRlckhlaWdodH1weGApO1xuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLW9mZnNldCcsIGAke29mZnNldH1weGApO1xuXG4vLyBDb3JyZWN0IDEwMHZoIHJlbmRlcmluZyBvbiBtb2JpbGVzXG5jb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApOyJdLCJzb3VyY2VSb290IjoiIn0=
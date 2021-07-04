/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactTab": () => (/* binding */ createContactTab)
/* harmony export */ });
const address = {
  name: 'ADDRESS',
  paragraphs: [
      'Paseo de Gracia 7',
      '09453 Florence'
  ]
};
const contact = {
  name: 'CONTACT',
  paragraphs: [
    'ciao@santo-palato.it',
    'Tel. +12 34 567 89 01'
  ],
  button: {
    id: 'reservation',
    type: 'button',
    textContent: 'RESERVATIONS',
  }
};
const hours = {
  name: 'OPENING HOURS',
  paragraphs: [
    'Monday: Closed',
    'Tuesday: Closed',
    'Wednesday: 20:00-00:00',
    'Thursday: 20:00-00:00',
    'Friday: 13:00-17:00 + 20:00-00:00',
    'Saturday: 13:00-17:00 + 20:00-00:00',
    'Sunday: 13:00-17:00 + 19:00-23:00'
  ]
};

const createContactTab = () => {
  const main = document.createElement('main');
  main.classList.add('background');

  const div = document.createElement('div');
  div.setAttribute('id', 'contact');
  main.appendChild(div);

  const h2 = document.createElement('h2');
  h2.textContent = 'CONTACT US:';
  div.appendChild(h2);

  const section = document.createElement('section');
  section.classList.add('flex-container');
  div.appendChild(section);

  const contacts = [address, contact, hours];
  contacts.forEach(contact => {
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = contact.name;
    article.appendChild(h3);

    contact.paragraphs.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      article.appendChild(p);
    });

    if (contact.button) {
      const button = document.createElement('button');
      button.setAttribute('id', contact.button.id);
      button.setAttribute('type', contact.button.type);
      button.textContent = contact.button.textContent;
      article.appendChild(button);
    }

    section.appendChild(article);
  });

  return main;
}

/***/ }),

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
  icon.classList.add('fas', 'fa-bars', 'fa-2x', 'toggler');
  button.appendChild(icon);

  icon.addEventListener('transitionend', toggleIcon);

  const linksWrapper = document.createElement('div');
  linksWrapper.setAttribute('id', 'links-wrapper');
  header.appendChild(linksWrapper);

  const nav = document.createElement('nav');
  linksWrapper.appendChild(nav);

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

    a.addEventListener('click', toggleNav);
  });

  const socialLinks = document.createElement('ul');
  socialLinks.setAttribute('id', 'social-links');
  linksWrapper.appendChild(socialLinks);

  const icons = [['fab', 'fa-facebook', 'fa-lg'], ['fab', 'fa-instagram-square', 'fa-lg'], ['fab', 'fa-twitter-square', 'fa-lg']];
  icons.forEach(icon => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    li.appendChild(a);
    const i = document.createElement('i');
    icon.forEach(className => i.classList.add(className));
    a.appendChild(i);

    socialLinks.appendChild(li);
  })

  return header;
}

let navMenuShow = false;

function toggleNav() {
    navMenuShow = !navMenuShow;
    document.querySelector('.toggler').classList.add('scale-btn');
    const linksWrapper = document.getElementById('links-wrapper');
    linksWrapper.classList.toggle('show-nav');
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
  element.classList.add('opacity');
  const content = document.getElementById('content');
  const footer = document.querySelector('footer');
  const previousTab = document.querySelector('main');
  if (previousTab) {
    content.removeChild(previousTab);
  }
  content.insertBefore(element, footer);

  setTimeout(() => element.classList.remove('opacity'), 20);
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
    main.classList.add('tab');

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
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactPage.js */ "./src/contactPage.js");







(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)((0,_header_js__WEBPACK_IMPORTED_MODULE_2__.createHeader)());
(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)((0,_footer_js__WEBPACK_IMPORTED_MODULE_3__.createFooter)());
(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)((0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createHomepage)());

(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setCssVars)();

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)((0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createHomepage)()));

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)((0,_menuPage_js__WEBPACK_IMPORTED_MODULE_4__.createMenu)()));

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)((0,_contactPage_js__WEBPACK_IMPORTED_MODULE_5__.createContactTab)()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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Q29udGVudCI6WyJjb25zdCBhZGRyZXNzID0ge1xuICBuYW1lOiAnQUREUkVTUycsXG4gIHBhcmFncmFwaHM6IFtcbiAgICAgICdQYXNlbyBkZSBHcmFjaWEgNycsXG4gICAgICAnMDk0NTMgRmxvcmVuY2UnXG4gIF1cbn07XG5jb25zdCBjb250YWN0ID0ge1xuICBuYW1lOiAnQ09OVEFDVCcsXG4gIHBhcmFncmFwaHM6IFtcbiAgICAnY2lhb0BzYW50by1wYWxhdG8uaXQnLFxuICAgICdUZWwuICsxMiAzNCA1NjcgODkgMDEnXG4gIF0sXG4gIGJ1dHRvbjoge1xuICAgIGlkOiAncmVzZXJ2YXRpb24nLFxuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIHRleHRDb250ZW50OiAnUkVTRVJWQVRJT05TJyxcbiAgfVxufTtcbmNvbnN0IGhvdXJzID0ge1xuICBuYW1lOiAnT1BFTklORyBIT1VSUycsXG4gIHBhcmFncmFwaHM6IFtcbiAgICAnTW9uZGF5OiBDbG9zZWQnLFxuICAgICdUdWVzZGF5OiBDbG9zZWQnLFxuICAgICdXZWRuZXNkYXk6IDIwOjAwLTAwOjAwJyxcbiAgICAnVGh1cnNkYXk6IDIwOjAwLTAwOjAwJyxcbiAgICAnRnJpZGF5OiAxMzowMC0xNzowMCArIDIwOjAwLTAwOjAwJyxcbiAgICAnU2F0dXJkYXk6IDEzOjAwLTE3OjAwICsgMjA6MDAtMDA6MDAnLFxuICAgICdTdW5kYXk6IDEzOjAwLTE3OjAwICsgMTk6MDAtMjM6MDAnXG4gIF1cbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250YWN0VGFiID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQnKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTOic7XG4gIGRpdi5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbnRhaW5lcicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbiAgY29uc3QgY29udGFjdHMgPSBbYWRkcmVzcywgY29udGFjdCwgaG91cnNdO1xuICBjb250YWN0cy5mb3JFYWNoKGNvbnRhY3QgPT4ge1xuICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBjb250YWN0Lm5hbWU7XG4gICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBjb250YWN0LnBhcmFncmFwaHMuZm9yRWFjaChwYXJhZ3JhcGggPT4ge1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHAudGV4dENvbnRlbnQgPSBwYXJhZ3JhcGg7XG4gICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKHApO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbnRhY3QuYnV0dG9uKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgY29udGFjdC5idXR0b24uaWQpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbnRhY3QuYnV0dG9uLnR5cGUpO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29udGFjdC5idXR0b24udGV4dENvbnRlbnQ7XG4gICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1haW47XG59IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9ICfCqSAyMDIxIHwgV2Vic2l0ZSBjcmVhdGVkIGJ5IEFsZWFmYW4nO1xuICByZXR1cm4gZm9vdGVyO1xufSIsImV4cG9ydCBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRpbmctd3JhcHBlcicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdTYW50byBQYWxhdG8nO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGgxKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LXRvZ2dsZXInKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdik7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtYmFycycsICdmYS0yeCcsICd0b2dnbGVyJyk7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcblxuICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0b2dnbGVJY29uKTtcblxuICBjb25zdCBsaW5rc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGlua3NXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlua3Mtd3JhcHBlcicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobGlua3NXcmFwcGVyKTtcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbGlua3NXcmFwcGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGNvbnN0IGxpbmtzID0gWydob21lJywgJ21lbnUnLCAnY29udGFjdCddO1xuICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICBhLnNldEF0dHJpYnV0ZSgnaWQnLCBsaW5rKTtcbiAgICBhLnRleHRDb250ZW50ID0gbGluay50b1VwcGVyQ2FzZSgpO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdik7XG4gIH0pO1xuXG4gIGNvbnN0IHNvY2lhbExpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgc29jaWFsTGlua3Muc2V0QXR0cmlidXRlKCdpZCcsICdzb2NpYWwtbGlua3MnKTtcbiAgbGlua3NXcmFwcGVyLmFwcGVuZENoaWxkKHNvY2lhbExpbmtzKTtcblxuICBjb25zdCBpY29ucyA9IFtbJ2ZhYicsICdmYS1mYWNlYm9vaycsICdmYS1sZyddLCBbJ2ZhYicsICdmYS1pbnN0YWdyYW0tc3F1YXJlJywgJ2ZhLWxnJ10sIFsnZmFiJywgJ2ZhLXR3aXR0ZXItc3F1YXJlJywgJ2ZhLWxnJ11dO1xuICBpY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGljb24uZm9yRWFjaChjbGFzc05hbWUgPT4gaS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgIGEuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICBzb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChsaSk7XG4gIH0pXG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxubGV0IG5hdk1lbnVTaG93ID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICBuYXZNZW51U2hvdyA9ICFuYXZNZW51U2hvdztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlcicpLmNsYXNzTGlzdC5hZGQoJ3NjYWxlLWJ0bicpO1xuICAgIGNvbnN0IGxpbmtzV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rcy13cmFwcGVyJyk7XG4gICAgbGlua3NXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbmF2Jyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUljb24oKSB7XG4gICAgaWYgKG5hdk1lbnVTaG93KSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZhLXRpbWVzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdmYS10aW1lcycpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzY2FsZS1idG4nKTtcbn0iLCJjb25zdCBsb2FkQ29udGVudCA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5jb25zdCBsb2FkVGFiID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgcHJldmlvdXNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGlmIChwcmV2aW91c1RhYikge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJldmlvdXNUYWIpO1xuICB9XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGZvb3Rlcik7XG5cbiAgc2V0VGltZW91dCgoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKSwgMjApO1xufVxuXG5jb25zdCBzZXRDc3NWYXJzID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGluZy13cmFwcGVyJykub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IG9mZnNldCA9IGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodDtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLW9mZnNldC1oZWFkZXInLCBgJHtoZWFkZXJIZWlnaHR9cHhgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLW9mZnNldCcsIGAke29mZnNldH1weGApO1xuXG4gIC8vIENvcnJlY3QgMTAwdmggcmVuZGVyaW5nIG9uIG1vYmlsZXNcbiAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xufVxuXG5leHBvcnQgeyBsb2FkQ29udGVudCwgbG9hZFRhYiwgc2V0Q3NzVmFycyB9IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUhvbWVwYWdlID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICBtYWluLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICBjb25zdCB2aFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmhXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndmgtd3JhcHBlcicpO1xuICBcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9ICdUUkFUVE9SSUEgSVRBTElBTkEnO1xuICB2aFdyYXBwZXIuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9ICdEZWxpY2lvdXMgSXRhbGlhbiBmb29kIHNlcnZlZCBzaW5jZSAxODY1JztcbiAgdmhXcmFwcGVyLmFwcGVuZENoaWxkKHAxKTtcblxuICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcbiAgdmhXcmFwcGVyLmFwcGVuZENoaWxkKGZpZ3VyZSk7XG5cbiAgY29uc3QgYmxvY2txdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jsb2NrcXVvdGUnKTtcbiAgYmxvY2txdW90ZS5zZXRBdHRyaWJ1dGUoJ2NpdGUnLCAnaHR0cHM6Ly93d3cuY29tZGUtbWFzdC5jb20nKTtcbiAgZmlndXJlLmFwcGVuZENoaWxkKGJsb2NrcXVvdGUpO1xuXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi50ZXh0Q29udGVudCA9ICdMb2NhdGVkIGF0IHRoZSBoZWFydCBvZiB0aGUgYnV6emluZyBTYW4gTG9yZW56byBtYXJrZXQgYXJlYSwgVHJhdHRvcmlhIFNhbnRvIFBhbGF0byBkb2VzIHRvcC1ub3RjaCByZW5kaXRpb25zIG9mIEZsb3JlbnRpbmUgYW5kIFR1c2NhbiBjbGFzc2ljcyBhdCBhZmZvcmRhYmxlIHByaWNlcy4nO1xuICBibG9ja3F1b3RlLmFwcGVuZENoaWxkKHAyKTtcblxuICBjb25zdCBmaWdjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlnY2FwdGlvbicpO1xuICBmaWd1cmUuYXBwZW5kQ2hpbGQoZmlnY2FwdGlvbik7XG5cbiAgY29uc3QgY2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NpdGUnKTtcbiAgY2l0ZS50ZXh0Q29udGVudCA9ICfigJRDb21kZSBOYXN0IFRyYXZlbGxlcic7XG4gIGZpZ2NhcHRpb24uYXBwZW5kQ2hpbGQoY2l0ZSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZCh2aFdyYXBwZXIpO1xuICBcbiAgcmV0dXJuIG1haW47XG59IiwiY29uc3QgYW50aXBhc3RpID0ge1xuICAgIG5hbWU6ICdBTlRJUEFTVEknLFxuICAgIGl0ZW1zOiBbXG4gICAgICAgICdmcml0dG8gbWlzdG8gb2Ygc3F1aWQsIHByYXducyAmIGFuY2hvdmllcywgY3VycnkgbWF5b25uYWlzZScsXG4gICAgICAgICdkdW8gb2YgcXVhaWwsIGdvbGRlbiBiZWV0cm9vdCBwdXJlZSwgbXVzaHJvb20gJiB0aHltZSBzYWxhZCcsXG4gICAgICAgICdkZWVwIGZyaWVkIGVnZywgbGVlayAmIHNjYW1vcnphIG1vdXNzZSwgdGFwZW5hZGUsIGZyZXNoIG9yZWdhbm8nLFxuICAgICAgICAnc2VhIGJhc3MgY3J1ZG8sIGF2b2NhZG8gJiBzYW1waGlyZSBzYWxhZCwgcGFzc2lvbiBmcnVpdCwgYmFzaWwsIHBvcGNvcm4nXG4gICAgXSxcbiAgICBwcmljZXM6IFsxMSwgMTEsIDksIDEzXVxufTtcbmNvbnN0IHBhc3RhID0ge1xuICAgIG5hbWU6ICdQQVNUQScsXG4gICAgaXRlbXM6IFtcbiAgICAgICAgJ2dhcmdhbmVsbGkgcm9tYWdub2xpLCBsYW1iIHJhZ291dCwgZ3JlZW4gYmVhbnMsIHNhbHZhIGNyZW1hc2NvIGNoZWVzZSwgZ3JhcGVmcnVpdCB6ZXN0JyxcbiAgICAgICAgJ3NwYWdoZXR0aSBxdWFkcmF0aSBhbGxhIGNhcmJvbmFyYSwgZ3VhbmNpYWxlLCBwYXJtaWdpYW5vIHJlZ2dpYW5vIDM2IG1vbnRocywgcGVjb3Jpbm8sIGVnZ3MnLFxuICAgICAgICAnbGluZ3VpbmUgYWdsaW8sIG9saW8sIHBlcGVyb25jaW5vIHdpdGggbG9ic3RlciwgYXZvY2FkbywgY2FyZGFtb20gb2lsJyxcbiAgICAgICAgJ3Ntb2tlZCBnbm9jY2hpIGNhY2lvIGUgcGVwZSwgd2lsZCBtdXNocm9vbXMsIGJlZXRyb290IGNoaXBzJ1xuICAgIF0sXG4gICAgcHJpY2VzOiBbMTcsIDE2LCAxOSwgMTZdXG59XG5jb25zdCBtYWlucyA9IHtcbiAgICBuYW1lOiAnTUFJTlMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICAgICdzZWEgYnJlYW0gZmlsbGV0LCBncmlsbGVkIGxldHR1Y2UsIGNhcnJvdCBjcmVhbSwgYmxhY2sgb2xpdmVzLCBwaWNvIGRlIGdhbGxvJyxcbiAgICAgICAgJ2hhbmdlciBzdGVhayB0YWdsaWF0YSwgZ3JpbGxlZCBhc3BhcmFndXMsIGJhYnkgcG90YXRvZXMsIHdhc2FiaSB6YWJhaW9uZScsXG4gICAgICAgICdncmlsbGVkIG9jdG9wdXMsIHB1csOpICYgcGlja2xlZCBjb3VyZ2V0dGUsIHdoZWF0IHNhbGFkLCBtaW50JyxcbiAgICAgICAgJ2R1Y2sgYnJlYXN0LCByZWQgZnJ1aXRzLCBzZWVkIGdyYW5vbGEsIGdvYXTigJlzIGNoZWVzZSBjcmVhbSwgbWFpdGFrZSBtdXNocm9vbXMnLFxuICAgIF0sXG4gICAgcHJpY2VzOiBbMTksIDIwLCAyMSwgMTldXG59XG5jb25zdCBkcmlua3MgPSB7XG4gICAgbmFtZTogJ0RSSU5LUycsXG4gICAgaXRlbXM6IFtcbiAgICAgICAgJ0x1bmFyZGksIFNhdXZpZ25vbiBCbGFuYyAtIHdoaXRlIHdpbmUnLFxuICAgICAgICAnVGltbywgVmVybWVudGlubyAtIHdoaXRlIHdpbmUnLFxuICAgICAgICAnTHVuYXJkaSwgQ2FiZXJuZXQgU2F1dmlnbm9uIC0gcmVkIHdpbmUnLFxuICAgICAgICAnTW9udGVwdWxjaWFubyBEXFwnQWJydXp6bywgTW9udGVwdWxjaWFubyAtIHJlZCB3aW5lJyxcbiAgICAgICAgJ1RlcmVzYSBSaXp6aSwgR2xlcmEgLSBwcm9zZWNjbycsXG4gICAgICAgICdHbGFzcyBvZiB3YXRlcidcbiAgICBdLFxuICAgIHByaWNlczogWzE3LCAyMCwgMjEsIDE5LCAyMCwgNTBdXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2Zvb2QtdzgwMC5qcGcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIGFuZCB3aW5lIHNlcnZlZCBpbiBhIHJlc3RhdXJhbnQnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGNvbnN0IG1lbnUgPSBbYW50aXBhc3RpLCBwYXN0YSwgbWFpbnMsIGRyaW5rc107XG5cbiAgICBtZW51LmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGgzKTtcblxuICAgICAgICBjYXRlZ29yeS5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDEudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChwMSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDIudGV4dENvbnRlbnQgPSBg4oKsJHtjYXRlZ29yeS5wcmljZXNbaW5kZXhdfWA7XG4gICAgICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKHAyKTtcblxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYWluO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZENvbnRlbnQsIGxvYWRUYWIsIHNldENzc1ZhcnMgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZXBhZ2UgfSBmcm9tICcuL2hvbWVwYWdlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vZm9vdGVyLmpzJztcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICcuL21lbnVQYWdlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RUYWIgfSBmcm9tICcuL2NvbnRhY3RQYWdlLmpzJztcblxubG9hZENvbnRlbnQoY3JlYXRlSGVhZGVyKCkpO1xubG9hZENvbnRlbnQoY3JlYXRlRm9vdGVyKCkpO1xubG9hZFRhYihjcmVhdGVIb21lcGFnZSgpKTtcblxuc2V0Q3NzVmFycygpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkVGFiKGNyZWF0ZUhvbWVwYWdlKCkpKTtcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZFRhYihjcmVhdGVNZW51KCkpKTtcblxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZFRhYihjcmVhdGVDb250YWN0VGFiKCkpKTsiXSwic291cmNlUm9vdCI6IiJ9
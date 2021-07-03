import { loadHomepage } from './homepage.js';
import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';
import { loadMenu } from './menuPage.js';

// loadHeader();
// loadHomepage();
// loadFooter();

loadMenu();

// Calculate and set CSS variables
const headerHeight = document.querySelector('#heading-wrapper').offsetHeight;
const footerHeight = document.querySelector('footer').offsetHeight;
const offset = headerHeight + footerHeight;
document.documentElement.style.setProperty('--offset-header', `${headerHeight}px`);
document.documentElement.style.setProperty('--offset', `${offset}px`);

// Correct 100vh rendering on mobiles
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
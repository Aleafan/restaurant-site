import { loadHomepage } from './homepage.js';
import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';

loadHeader();
loadHomepage();
loadFooter();

// Correct 100vh rendering on mobiles
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Find header's and footer's height to correct homepage main content height
const headerHeight = document.querySelector('#heading-wrapper').offsetHeight;
const footerHeight = document.querySelector('footer').offsetHeight;
const offset = headerHeight + footerHeight;
document.documentElement.style.setProperty('--offset', `${offset}px`);
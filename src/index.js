import { loadContent, loadTab, setCssVars } from './helpers.js';
import { createHomepage } from './homepage.js';
import { createHeader } from './header.js';
import { createFooter } from './footer.js';
import { createMenu } from './menuPage.js';
import { createContactTab } from './contactPage.js';

loadContent(createHeader());
loadContent(createFooter());
loadTab(createHomepage());

setCssVars();

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => loadTab(createHomepage()));

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => loadTab(createMenu()));

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => loadTab(createContactTab()));
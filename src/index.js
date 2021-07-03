import { loadContent, loadTab, setCssVars } from './helpers.js';
import { createHomepage } from './homepage.js';
import { createHeader } from './header.js';
import { createFooter } from './footer.js';
import { createMenu } from './menuPage.js';

loadContent(createHeader());
loadContent(createFooter());
loadTab(createHomepage());

setCssVars();

const homeTab = document.getElementById('home');
homeTab.addEventListener('click', () => loadTab(createHomepage()));

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', () => loadTab(createMenu()));
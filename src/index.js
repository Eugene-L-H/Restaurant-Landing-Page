import { buildHeader } from './modules/buildHeadFoot.js';
import { buildFooter } from './modules/buildHeadFoot.js';
import { pageLoad } from './modules/pageload.js';
import { navTabHome} from './modules/navTabHome.js';
import { navTabMenu} from './modules/navTabMenu.js';
import { navTabContact} from './modules/navTabContact.js';



pageLoad(buildHeader, buildFooter);

const homeTab = document.querySelector('#homeTab');
const menuTab = document.querySelector('#menuTab');
const contactTab = document.querySelector('#contactTab');
const pageContent = document.querySelector('#pageContent');

homeTab.addEventListener('click', () => {
  pageContent.innerHTML = '';
  pageContent.append(navTabHome());
  body.style('height', '100vh');
})

menuTab.addEventListener('click', () => {
  pageContent.innerHTML = '';
  pageContent.append(navTabMenu());
})

contactTab.addEventListener('click', () => {
  pageContent.innerHTML = '';
  pageContent.append(navTabContact());
})
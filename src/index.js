import { buildHeader } from './modules/buildHeadFoot.js';
import { buildFooter } from './modules/buildHeadFoot.js';
import { pageLoad } from './modules/pageload.js';
import { translucentHeader } from './modules/translucentHeader.js';
import { navTabHome } from './modules/navTabHome.js';
import { navTabMenu } from './modules/navTabMenu.js';
import { navTabContact } from './modules/navTabContact.js';
import { hightLightNavItem } from './modules/highlightNavItem.js'
import { removeHighlight } from './modules/highlightNavItem.js'

pageLoad(buildHeader, buildFooter);

const header = document.querySelector('header');
const homeTab = document.querySelector('#homeTab');
const menuTab = document.querySelector('#menuTab');
const contactTab = document.querySelector('#contactTab');
const pageContent = document.querySelector('#pageContent');

homeTab.addEventListener('click', () => {
  translucentHeader(header);
  pageContent.innerHTML = '';
  pageContent.append(navTabHome());
  hightLightNavItem(homeTab);
  removeHighlight(menuTab);
  removeHighlight(contactTab);
})

menuTab.addEventListener('click', () => {
  translucentHeader(header);
  header.setAttribute
  pageContent.innerHTML = '';
  pageContent.append(navTabMenu());
  hightLightNavItem(menuTab);
  removeHighlight(homeTab);
  removeHighlight(contactTab);
})

contactTab.addEventListener('click', () => {
  translucentHeader(header);
  header.setAttribute
  pageContent.innerHTML = '';
  pageContent.append(navTabContact());
  hightLightNavItem(contactTab);
  removeHighlight(homeTab);
  removeHighlight(menuTab);
})
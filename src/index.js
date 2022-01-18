import { buildHeader } from './modules/buildHeadFoot.js';
import { buildFooter } from './modules/buildHeadFoot.js';
import { pageLoad } from './modules/pageload.js';

pageLoad(buildHeader, buildFooter);
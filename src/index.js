import { pageLoad } from './modules/pageload.js';
import { buildHeader } from './modules/buildHeadFoot.js';
import { buildFooter } from './modules/buildHeadFoot.js';

pageLoad(buildHeader, buildFooter);
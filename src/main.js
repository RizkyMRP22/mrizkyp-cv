import { renderWebView } from './organisms/renderWebView.js';
import { cvData } from './data.js';
import './atoms/timestamp.js';
import { initializeToggleButtons } from './atoms/toggleSection.js';
import './organisms/download.js';
import { branchCheck } from './atoms/branchCheck.js';

window.onload = () => {
  renderWebView(cvData);
  initializeToggleButtons();
  branchCheck();
};
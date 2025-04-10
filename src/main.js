import { renderWebView } from './organisms/renderWebView.js';
import { cvData } from './data.js';
import './atoms/timestamp.js';
import { initializeToggleButtons } from './atoms/toggleSection.js';
import './organisms/download.js';
import { branchCheck } from './atoms/branchCheck.js';

import { createDownloadButton } from './atoms/downloadButton.js';
import { createLoadingOverlay, showLoading, hideLoading } from './atoms/loadingOverlay.js';

window.onload = () => {
  renderWebView(cvData);
  initializeToggleButtons();
  branchCheck();
  document.body.appendChild(createLoadingOverlay());
  document.querySelector('.flex.justify-end').appendChild(createDownloadButton());

  window.addEventListener('download:clicked', async () => {
    showLoading();
    // do PDF generation...
    setTimeout(() => {
      hideLoading();
    }, 3000);
  });
};
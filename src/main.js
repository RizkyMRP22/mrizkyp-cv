import { renderWebView } from './organisms/renderWebView.js';
import { cvData } from './data.js';
import './atoms/timestamp.js';
import { initializeToggleButtons } from './atoms/toggleSection.js';
import './organisms/download.js';
import { branchCheck } from './atoms/branchCheck.js';
import { fetchProfile } from './api/profile.js';

import { createDownloadButton } from './atoms/downloadButton.js';
import { createLoadingOverlay, showLoading, hideLoading } from './atoms/loadingOverlay.js';

window.onload = async () => {
  const profile = await fetchProfile();

  if (profile) {
    renderWebView(profile);
    window.cvData = profile;
  } else {
    document.body.innerHTML = '<p class="text-red-500 text-center mt-10">Failed to load profile data.</p>';
  }

  // renderWebView(cvData);
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
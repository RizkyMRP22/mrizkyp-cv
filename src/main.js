import { renderWebView } from './organisms/renderWebView.js';
import { cvData } from './data.js';
import './atoms/timestamp.js';
import { initializeToggleButtons } from './atoms/toggleSection.js';
import './organisms/download.js';
import { branchCheck } from './atoms/branchCheck.js';
import { fetchProfile } from './api/profile.js';

import { createDownloadButton } from './atoms/downloadButton.js';
import { createLoadingOverlay, showLoading, hideLoading } from './atoms/loadingOverlay.js';
import { createWelcomeOverlay, hideWelcomeOverlay } from './atoms/welcomeOverlay.js';
import { renderFooter } from './atoms/footer.js';

window.onload = async () => {
  // ✅ 1. Show Welcome Overlay on Load
  const welcomeOverlay = createWelcomeOverlay();
  document.body.appendChild(welcomeOverlay);
  setTimeout(() => {
    hideWelcomeOverlay();
  }, 1500); // Show for 1.5 seconds

  // ✅ 2. Fetch Profile and Render Web View
  const profile = await fetchProfile();

  if (profile) {
    renderWebView(profile);
    window.cvData = profile;
  } else {
    document.body.innerHTML = '<p class="text-red-500 text-center mt-10">Failed to load profile data.</p>';
    return;
  }

  // ✅ 3. Initialize Page Features
  initializeToggleButtons();
  branchCheck();

  // ✅ 4. Inject Loading Overlay
  document.getElementById('loading-overlay-placeholder')?.appendChild(createLoadingOverlay());

  // ✅ 5. Inject Download Button
  const downloadButton = createDownloadButton();
  document.querySelector('.flex.justify-end')?.appendChild(downloadButton);

  // ✅ 6. Handle Download Action
  window.addEventListener('download:clicked', async () => {
    showLoading();
    // Simulate PDF generation delay
    setTimeout(() => {
      hideLoading();
    }, 3000);
  });

  renderFooter();

};
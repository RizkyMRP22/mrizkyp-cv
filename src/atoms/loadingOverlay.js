export function createLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.className = 'fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center hidden';
    overlay.innerHTML = `
      <div class="text-center">
        <svg class="animate-spin h-8 w-8 text-blue-600 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <p class="text-blue-700 text-sm font-medium">Downloading CV...</p>
      </div>
    `;
    return overlay;
  }
  
  export function showLoading() {
    document.getElementById('loading-overlay')?.classList.remove('hidden');
  }
  
  export function hideLoading() {
    document.getElementById('loading-overlay')?.classList.add('hidden');
  }
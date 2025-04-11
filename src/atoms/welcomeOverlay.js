// src/atoms/welcomeOverlay.js

export function createWelcomeOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'welcome-overlay';
    overlay.className = 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-gray-800 transition-opacity duration-500';
  
    overlay.innerHTML = `
      <div class="animate-pulse text-center">
        <!-- Friendly Welcome -->
        <div class="mb-2 text-2xl font-bold">Welcome to MRizkyP's Profile</div>
        <p class="mb-6 text-sm text-gray-500">Preparing your experience, just a moment...</p>
        
        <!-- Skeleton Avatar -->
        <div class="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-4"></div>
        
        <!-- Skeleton Text Lines -->
        <div class="w-48 h-4 bg-gray-300 rounded mb-2 mx-auto"></div>
        <div class="w-40 h-4 bg-gray-200 rounded mb-2 mx-auto"></div>
        <div class="w-32 h-4 bg-gray-100 rounded mx-auto"></div>
      </div>
    `;
  
    return overlay;
  }

export function showWelcomeOverlay() {
    const overlay = document.getElementById('welcome-overlay');
    overlay?.classList.remove('opacity-0');
}

export function hideWelcomeOverlay() {
    const overlay = document.getElementById('welcome-overlay');
    if (overlay) {
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.remove(), 500);
    }
}
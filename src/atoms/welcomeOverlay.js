export function createWelcomeOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'welcome-overlay';
  overlay.className = `
    fixed inset-0 z-50 flex flex-col items-center justify-center 
    bg-white text-gray-800 transition-opacity duration-500
    px-4 text-center
  `;

  overlay.innerHTML = `
    <div class="animate-pulse" role="dialog" aria-label="Welcome overlay" aria-busy="true">
      <!-- Friendly Welcome -->
      <h1 class="mb-2 text-2xl sm:text-3xl font-bold text-blue-600">
        Welcome to MRizkyP’s Profile
      </h1>
      <p class="mb-6 text-sm sm:text-base text-gray-500">
        Just a moment... we're preparing your experience 🚀
      </p>
      
      <!-- Skeleton Avatar -->
      <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
      
      <!-- Skeleton Text Lines -->
      <div class="w-48 h-4 bg-gray-200 rounded mb-2 mx-auto"></div>
      <div class="w-40 h-4 bg-gray-200 rounded mb-2 mx-auto"></div>
      <div class="w-32 h-4 bg-gray-200 rounded mx-auto"></div>
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
    setTimeout(() => overlay.remove(), 500); // match transition duration
  }
}
export function createDownloadButton() {
    const button = document.createElement('button');
    button.id = 'download-btn';
    button.className = 'w-10 h-10 md:w-auto md:h-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2';
    button.innerHTML = `
      <i class="fa-solid fa-download block md:hidden text-lg"></i>
      <span class="hidden md:inline">Download CV</span>
    `;
  
    button.addEventListener('click', () => {
      const event = new CustomEvent('download:clicked');
      window.dispatchEvent(event);
    });
  
    return button;
  }
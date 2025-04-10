export function renderSection({ id, icon, title, content }) {
  const sectionEl = document.getElementById(id);
  if (!sectionEl) return;

  sectionEl.innerHTML = `
    <section class="mb-4 border-b border-gray-300">
      <div class="flex justify-between items-center px-4 py-2 bg-white">
        <h2 class="text-2xl font-semibold flex items-center gap-2 cursor-pointer" data-testid="header-${id}" onclick="toggleSection('${id}')">
          ${icon} ${title}
        </h2>
        <button class="toggle-btn text-blue-500 text-xl font-bold" data-testid="button-toggle-${id}" id="toggle-btn-${id}">➕</button>
      </div>
      <div class="section-content px-4 pb-4 hidden" id="${id}-content">${content}</div>
    </section>
  `;
}

window.toggleSection = function(id) {
  const contentEl = document.getElementById(`${id}-content`);
  const toggleBtn = document.getElementById(`toggle-btn-${id}`);
  if (contentEl.classList.contains('hidden')) {
    contentEl.classList.remove('hidden');
    toggleBtn.innerHTML = '➖';
  } else {
    contentEl.classList.add('hidden');
    toggleBtn.innerHTML = '➕';
  }
};
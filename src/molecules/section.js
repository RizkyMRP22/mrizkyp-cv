export function renderSection({ id, icon, title, content }) {
  const sectionEl = document.getElementById(id);
  if (!sectionEl) return;

  const contentHTML = `
    <section class="mb-4 border-b border-gray-300 cursor-pointer" id="section-${id}">
      <div class="flex justify-between items-center px-4 py-2 bg-white" onclick="toggleSection('${id}')">
        <h2 class="text-2xl font-semibold flex items-center gap-2 cursor-pointer" data-testid="header-${id}">
          ${icon} ${title}
        </h2>
        <button
          class="toggle-btn text-gray-600 text-xl"
          data-testid="button-toggle-${id}"
          id="toggle-btn-${id}"
          onclick="event.stopPropagation(); toggleSection('${id}')"
        >
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>
      <div class="section-content px-4 pb-4" id="${id}-content">
        ${content}
      </div>
    </section>
  `;

  sectionEl.innerHTML = contentHTML;
}

window.toggleSection = function(id) {
  const contentEl = document.getElementById(`${id}-content`);
  const toggleBtn = document.getElementById(`toggle-btn-${id}`);
  const iconEl = toggleBtn.querySelector('i');

  if (contentEl.classList.contains('hidden')) {
    contentEl.classList.remove('hidden');
    iconEl.classList.remove('fa-chevron-down');
    iconEl.classList.add('fa-chevron-up');
  } else {
    contentEl.classList.add('hidden');
    iconEl.classList.remove('fa-chevron-up');
    iconEl.classList.add('fa-chevron-down');
  }
};
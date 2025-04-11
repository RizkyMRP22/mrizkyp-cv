export function initializeToggleButtons() {
  document.querySelectorAll(".header-toggle").forEach(header => {
    header.addEventListener("click", () => {
      const id = header.dataset.sectionId;
      const contentEl = document.getElementById(`${id}-content`);
      const toggleBtn = document.getElementById(`toggle-btn-${id}`);
      const iconEl = toggleBtn.querySelector("i");

      const isHidden = contentEl.classList.toggle("hidden");

      iconEl.classList.toggle("fa-chevron-down", isHidden);
      iconEl.classList.toggle("fa-chevron-up", !isHidden);
    });
  });
}
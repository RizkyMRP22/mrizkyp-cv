// Handles toggle buttons for each CV section
export function initializeToggleButtons() {
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.parentElement.nextElementSibling;
      content.classList.toggle("hidden");
      btn.textContent = content.classList.contains("hidden") ? "➕" : "➖";
    });
  });
}
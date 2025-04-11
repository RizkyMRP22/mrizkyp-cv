export function renderFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.innerHTML = `
        <footer class="text-center text-xs text-gray-500 py-4 mt-6">
          <p>&copy; ${new Date().getFullYear()} — Made with ❤️ by MRizkyP</p>
        </footer>
      `;
    }
  }
// Sets access time in the top-left corner
document.addEventListener("DOMContentLoaded", () => {
    const accessTimeElement = document.getElementById("access-time");
    if (accessTimeElement) {
      const now = new Date();
      const localTime = now.toLocaleString("en-GB", { hour12: false });
      accessTimeElement.textContent = `CV Accessed: ${localTime}`;
    }
  });
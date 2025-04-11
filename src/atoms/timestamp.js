document.addEventListener("DOMContentLoaded", () => {
  const accessTimeElement = document.getElementById("access-time");

  if (accessTimeElement) {
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);

    accessTimeElement.textContent = `🕒 Accessed: ${formattedDate}`;
    accessTimeElement.title = now.toISOString(); // optional: raw timestamp on hover
  }
});
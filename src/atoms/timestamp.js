document.addEventListener("DOMContentLoaded", () => {
  const accessTimeElement = document.getElementById("access-time");

  if (accessTimeElement) {
    const now = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let zoneLabel = "";

    if (timeZone === "Asia/Jakarta") {
      zoneLabel = "WIB";
    } else if (timeZone === "Asia/Makassar") {
      zoneLabel = "WITA";
    } else if (timeZone === "Asia/Jayapura") {
      zoneLabel = "WIT";
    }

    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);

    accessTimeElement.textContent = `🕒 Accessed: ${formattedDate} ${zoneLabel}`;
    accessTimeElement.title = now.toISOString(); // optional: raw timestamp on hover
  }
});
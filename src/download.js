document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("download-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      const header = document.createElement("div");
      header.id = "pdf-header";
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.left = "0";
      header.style.padding = "10px";
      header.style.fontSize = "10px";
      header.style.zIndex = "9999";

      const now = new Date();
      const localTime = now.toLocaleString('en-GB', {
        hour12: false,
        timeZoneName: 'short'
      });
      header.textContent = `Downloaded: ${localTime}`;
      document.body.appendChild(header);

      renderATSView(cvData);
      const atsElement = document.getElementById("cv-ats");
      atsElement.classList.remove("hidden");

      const opt = {
        margin:       10,
        filename:     "Rizky_MRP_CV_ATS.pdf",
        image:        { type: "jpeg", quality: 0.98 },
        html2canvas:  { scale: 3, useCORS: true },
        jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      html2pdf()
        .set(opt)
        .from(document.getElementById("cv-ats"))
        .save()
        .then(() => {
          document.body.removeChild(header);
          document.getElementById("cv-ats").classList.add("hidden");
        });
    });
  }
});

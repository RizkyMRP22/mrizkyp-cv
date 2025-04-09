
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("download-btn");
  const now = new Date();
  const localTime = now.toLocaleString('en-GB', {
    hour12: false,
    // timeZoneName: 'short'
  });

  if (btn) {
    btn.addEventListener("click", () => {
      renderATSView(cvData);
      const atsElement = document.getElementById("cv-ats");
      atsElement.classList.remove("hidden");

      const opt = {
        margin:       10,
        filename:     `mrizkyp_cv_${localTime}.pdf`,
        image:        { type: "jpeg", quality: 0.98 },
        html2canvas:  { scale: 3, useCORS: true },
        jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      html2pdf()
        .set(opt)
        .from(document.getElementById("cv-ats"))
        .save()
        .then(() => document.getElementById("cv-ats").classList.add("hidden"));
    });
  }
});

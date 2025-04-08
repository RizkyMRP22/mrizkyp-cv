
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("download-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      renderATSView(cvData);
      const atsElement = document.getElementById("cv-ats");
      atsElement.classList.remove("hidden");

      const opt = {
        margin: 5,
        filename: "Rizky_MRP_CV_ATS.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 3,
          useCORS: true
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait"
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy']
        }
      };

      html2pdf()
        .set(opt)
        .from(atsElement)
        .save()
        .then(() => atsElement.classList.add("hidden"));
    });
  }
});

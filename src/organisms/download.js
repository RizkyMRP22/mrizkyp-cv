import { renderATSView } from "./renderATSView.js";
import { cvData } from "../data.js";
import { fetchProfile } from '../api/profile.js';

document.addEventListener("DOMContentLoaded", async function () {
  const profile = await fetchProfile();

  const btn = document.getElementById("download-btn");
  const now = new Date();
  const localTime = now.toLocaleString('en-GB', { hour12: false });

  if (btn) {
    btn.addEventListener("click", () => {
      const overlay = document.getElementById("loading-overlay");
      overlay.classList.remove("hidden");
      renderATSView(profile);
      const atsElement = document.getElementById("cv-ats");
      atsElement.classList.remove("hidden");

      const opt = {
        margin: 10,
        filename: `mrizkyp_cv_${localTime}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      html2pdf().set(opt).from(atsElement).save().then(() => {
        overlay.classList.add("hidden");
        atsElement.classList.add("hidden");
      });
    });
  }
});
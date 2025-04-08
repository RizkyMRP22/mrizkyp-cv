window.onload = function () {
  document.getElementById("name").textContent = cvData.name;
  document.getElementById("title").textContent = cvData.title;
  document.getElementById("contact").innerHTML = `
    📍 ${cvData.location} · 📧 ${cvData.email} · 📞 ${cvData.phone}<br/>
    🌐 <a href="${cvData.github}" class="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a> · 
    <a href="${cvData.linkedin}" class="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  `;

  // Experience
  const expEl = document.getElementById("experiences");
  cvData.experiences.forEach(exp => {
    const div = document.createElement("div");
    div.classList.add("mb-6");
    div.innerHTML = `
      <h3 class="font-bold">${exp.role} – ${exp.company}</h3>
      <p class="text-sm text-gray-600">${exp.years}${exp.location ? " · " + exp.location : ""}</p>
      ${
        exp.bullets.length
          ? `<ul class="list-disc list-inside text-sm mt-1">
               ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
             </ul>`
          : ""
      }
    `;
    expEl.appendChild(div);
  });

  // Education
  const edu = cvData.education;
  document.getElementById("education").innerHTML = `
    <p><strong>${edu.degree}</strong><br>${edu.university} — ${edu.years}</p>
  `;

  // Skills
  document.getElementById("skills").innerHTML = `
    <strong>Languages:</strong> ${cvData.skills.languages.join(", ")}<br>
    <strong>Frameworks:</strong> ${cvData.skills.frameworks.join(", ")}<br>
    <strong>Tools:</strong> ${cvData.skills.tools.join(", ")}
  `;
  // Projects
  const projEl = document.getElementById("projects");
  cvData.projects.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${p.link}" class="text-blue-500 font-medium" target="_blank" rel="noopener noreferrer">${p.name}</a> – ${p.desc}`;
    projEl.appendChild(li);
  });

  // Certifications
  const certEl = document.getElementById("certifications");
  cvData.certifications.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    certEl.appendChild(li);
  });
};

  // // Download to PDF
// function downloadPDF() {
//   const element = document.getElementById("cv-content");
//   const opt = {
//     margin:       0.5,
//     filename:     'Rizky_MRP_CV.pdf',
//     image:        { type: 'jpeg', quality: 0.98 },
//     html2canvas:  { scale: 2 },
//     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//   };
//   html2pdf().set(opt).from(element).save();
// }

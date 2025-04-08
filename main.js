window.onload = function () {
  document.getElementById("name").textContent = cvData.name;
  document.getElementById("title").textContent = cvData.title;
  document.getElementById("contact").innerHTML = `
    📍 ${cvData.location} · 📧 ${cvData.email} · 📞 ${cvData.phone}<br/>
    🌐 <a href="${cvData.github}" class="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a> · 
    <a href="${cvData.linkedin}" class="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  `;

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

  const edu = cvData.education;
  document.getElementById("education").innerHTML = `
    <p><strong>${edu.degree}</strong><br>${edu.university} — ${edu.years}</p>
  `;

  document.getElementById("skills").innerHTML = `
    <strong>Languages:</strong> ${cvData.skills.languages.join(", ")}<br>
    <strong>Frameworks:</strong> ${cvData.skills.frameworks.join(", ")}<br>
    <strong>Tools:</strong> ${cvData.skills.tools.join(", ")}
  `;

  const projEl = document.getElementById("projects");
  cvData.projects.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${p.link}" class="text-blue-500 font-medium" target="_blank" rel="noopener noreferrer">${p.name}</a> – ${p.desc}`;
    projEl.appendChild(li);
  });

  const certEl = document.getElementById("certifications");
  cvData.certifications.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    certEl.appendChild(li);
  });
};

  const element = document.getElementById("cv-content");
  const opt = {
    margin:       0.5,
    filename:     'Rizky_MRP_CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}


function renderATS() {
  const ats = document.getElementById("cv-ats");
  ats.innerHTML = `
    <h1 class="text-xl font-bold">${cvData.name}</h1>
    <p>${cvData.location} | ${cvData.email} | ${cvData.phone}</p>
    <p>GitHub: ${cvData.github} | LinkedIn: ${cvData.linkedin}</p>

    <h2 class="mt-4 font-semibold">Professional Summary</h2>
    <p>Experienced QA Engineer and Technical Lead with expertise in test automation, CI/CD pipelines, infrastructure testing, and squad leadership.</p>

    <h2 class="mt-4 font-semibold">Experience</h2>
    ${cvData.experiences.map(exp => `
      <p><strong>${exp.role} – ${exp.company}</strong> (${exp.years})</p>
      <ul class="list-disc list-inside">
        ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    `).join("")}

    <h2 class="mt-4 font-semibold">Education</h2>
    <p>${cvData.education.degree} – ${cvData.education.university} (${cvData.education.years})</p>

    <h2 class="mt-4 font-semibold">Skills</h2>
    <p>${[
      ...cvData.skills.languages,
      ...cvData.skills.frameworks,
      ...cvData.skills.tools
    ].join(", ")}</p>

    <h2 class="mt-4 font-semibold">Projects</h2>
    ${cvData.projects.map(p => `<p>${p.name} – ${p.desc}</p>`).join("")}

    <h2 class="mt-4 font-semibold">Certifications</h2>
    <ul class="list-disc list-inside">
      ${cvData.certifications.map(c => `<li>${c}</li>`).join("")}
    </ul>
  `;
}

document.getElementById("download-btn")?.addEventListener("click", () => {
  renderATS();
  const element = document.getElementById("cv-ats");
  element.classList.remove("hidden");

  const opt = {
    margin: 0.5,
    filename: "Rizky_MRP_CV_ATS.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => element.classList.add("hidden"));
});

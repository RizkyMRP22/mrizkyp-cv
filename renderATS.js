function renderATSView(cvData) {
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
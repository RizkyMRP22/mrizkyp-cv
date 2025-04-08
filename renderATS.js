function renderATSView(cvData) {
  const ats = document.getElementById("cv-ats");
  ats.innerHTML = `
    <h1>${cvData.name}</h1>
    <p>${cvData.location} | ${cvData.email} ${cvData.phone ? '| ' + cvData.phone : ''}</p>
    <p>GitHub: ${cvData.github}</p>
    <p>LinkedIn: ${cvData.linkedin}</p>

    <h2>Professional Summary</h2>
    <p>${cvData.summary}</p>

    <h2>Experience</h2>
    ${cvData.experiences.map(exp => `
      <p><strong>${exp.role} – ${exp.company}</strong></p>
      <p>${exp.location ? exp.location + " · " : ""}${exp.years}</p>
      ${exp.bullets.length ? `
        <ul>
          ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>` : ""}
    `).join("")}

    <h2>Education</h2>
    <p>${cvData.education.degree}</p>
    <p>${cvData.education.university} (${cvData.education.years})</p>

    <h2>Skills</h2>
    <p><strong>Languages:</strong> ${cvData.skills.languages.join(", ")}</p>
    <p><strong>Frameworks:</strong> ${cvData.skills.frameworks.join(", ")}</p>
    <p><strong>Tools:</strong> ${cvData.skills.tools.join(", ")}</p>

    <h2>Projects</h2>
    <ul>
      ${cvData.projects.map(p => `<li><strong>${p.name}:</strong> ${p.desc}</li>`).join("")}
    </ul>

    <h2>Certifications</h2>
    <ul>
      ${cvData.certifications.map(cert =>
        cert.link && cert.link.startsWith("http")
          ? `<li><a href="${cert.link}" target="_blank" rel="noopener noreferrer">${cert.name}</a></li>`
          : `<li>${cert.name}</li>`
      ).join("")}
    </ul>
  `;
}
function renderATSView(cvData) {
  const ats = document.getElementById("cv-ats");
  ats.innerHTML = `
    ${renderHeader(cvData)}
    ${renderSummary(cvData.summary)}
    ${renderExperience(cvData.experiences)}
    ${renderEducation(cvData.education)}
    ${renderSkills(cvData.skills)}
    ${renderProjects(cvData.projects)}
    ${renderCertifications(cvData.certifications)}
  `;
}

function renderHeader({ name, location, email, phone, github, linkedin }) {
  const now = new Date();
  const localTime = now.toLocaleString('en-GB', {
    hour12: false,
    timeZoneName: 'short'
  });

  return `
    <div style="position: fixed; top: 0; left: 0; padding: 10px; font-size: 10px; width: 100%;">
      Downloaded: ${localTime}
    </div>
    <div style="margin-top: 40px;">
      <h1>${name}</h1>
      <p>${location} | ${email}${phone ? ' | ' + phone : ''}</p>
      <p>GitHub: <em>${github}</em></p>
      <p>LinkedIn: <em>${linkedin}</em></p>
    </div>
  `;
}

function renderSummary(summary) {
  return `
    <h2>Professional Summary</h2>
    <p>${summary}</p>
  `;
}

function renderExperience(experiences) {
  return `
    <h2>Experience</h2>
    ${experiences.map(exp => `
      <p><strong>${exp.role} – ${exp.company}</strong></p>
      <p>${exp.location ? exp.location + " · " : ""}${exp.years}</p>
      ${exp.bullets.length ? `<ul>${exp.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
    `).join("")}
  `;
}

function renderEducation({ degree, university, years }) {
  return `
    <h2>Education</h2>
    <p>${degree}</p>
    <p>${university} (${years})</p>
  `;
}

function renderSkills({ languages, frameworks, tools }) {
  return `
    <h2>Skills</h2>
    <p><strong>Languages:</strong> ${languages.join(", ")}</p>
    <p><strong>Frameworks:</strong> ${frameworks.join(", ")}</p>
    <p><strong>Tools:</strong> ${tools.join(", ")}</p>
  `;
}

function renderProjects(projects) {
  return `
    <h2>Projects</h2>
    <ul>${projects.map(p => `<li><strong>${p.name}:</strong> ${p.desc}</li>`).join("")}</ul>
  `;
}

function renderCertifications(certifications) {
  return `
    <h2>Certifications</h2>
    <ul>
      ${certifications.map(cert =>
        cert.link && cert.link.startsWith("http")
          ? `<li><a href="${cert.link}" target="_blank" rel="noopener noreferrer"><em>${cert.name}</em></a></li>`
          : `<li>${cert.name}</li>`
      ).join("")}
    </ul>
  `;
}
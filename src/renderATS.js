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
  return `
      <h1>${name}</h1>
      <p>Email: ${email}${phone ? ' | Phone: ' + phone : ''}</p>
      <p>
        GitHub: <a href="${github}" target="_blank" rel="noopener noreferrer"><em-i>${github}</em-i></a> | 
        LinkedIn: <a href="${linkedin}" target="_blank" rel="noopener noreferrer"><em-i>${linkedin}</em-i></a>
      </p>
      <p>Location: ${location}</p>
  `;
}

function renderSummary(summary) {
  return `
    <h2>PROFESSIONAL PROFILE</h2>
    <p>${summary}</p>
  `;
}

function renderExperience(experiences) {
  return `
    <h2>PROFESSIONAL EXPERIENCE</h2>
    ${experiences.map(exp => `
      <p><strong>${exp.role} – ${exp.company}</strong></p>
      <p>${exp.location ? exp.location + " · " : ""}${exp.years}</p>
      ${exp.bullets.length ? `<ul>${exp.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
    `).join("")}
  `;
}

function renderEducation({ degree, university, years }) {
  return `
    <h2>EDUCATION</h2>
    <p>${degree}</p>
    <p>${university} (${years})</p>
  `;
}

function renderSkills({ languages, frameworks, tools }) {
  return `
    <h2>TECHNICAL SKILLS</h2>
    <p><strong>Languages:</strong> ${languages.join(", ")}</p>
    <p><strong>Frameworks:</strong> ${frameworks.join(", ")}</p>
    <p><strong>Tools:</strong> ${tools.join(", ")}</p>
  `;
}

function renderProjects(projects) {
  return `
    <h2>PROJECTS</h2>
    <ul>${projects.map(p => `<li><strong>${p.name}:</strong> ${p.desc}</li>`).join("")}</ul>
  `;
}

function renderCertifications(certifications) {
  return `
    <h2>CERTIFICATIONS & COURSES</h2>
    <ul>
      ${certifications
        .filter(cert => cert.name && cert.name.trim() !== "")
        .map(cert => {
          const details = [cert.name.trim(), cert.provider?.trim(), cert.years?.trim()]
            .filter(Boolean)
            .join(" – ");
          return cert.link && cert.link.startsWith("http")
            ? `<li><a href="${cert.link}" target="_blank" rel="noopener noreferrer"><em>${details}</em></a></li>`
            : `<li>${details}</li>`;
        })
        .join("")}
    </ul>
  `;
}

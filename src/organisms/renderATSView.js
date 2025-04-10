export function renderATSView(cvData) {
    const ats = document.getElementById("cv-ats");
    ats.innerHTML = `
      <h1>${cvData.name}</h1>
      <p>Email: ${cvData.email}${cvData.phone ? ' | Phone: ' + cvData.phone : ''}</p>
      <p>
        GitHub:<em-i>${cvData.github}</em-i> | LinkedIn:<em-i> ${cvData.linkedin}</em-i>
      </p>
      <p>Location: ${cvData.location}</p>
  
      <h2>PROFESSIONAL PROFILE</h2>
      <p>${cvData.summary}</p>
  
      <h2>PROFESSIONAL EXPERIENCE</h2>
      ${cvData.experiences.map(exp => `
        <p><strong>${exp.role} – ${exp.company}</strong></p>
        <p>${exp.location ? exp.location + " · " : ""}${exp.years}</p>
        ${exp.bullets.length ? `<ul>${exp.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
      `).join("")}
  
      <h2>EDUCATION</h2>
      <p>${cvData.education.degree}</p>
      <p>${cvData.education.university} (${cvData.education.years})</p>
  
      <h2>TECHNICAL SKILLS</h2>
      <p><strong>Languages:</strong> ${cvData.skills.languages.join(", ")}</p>
      <p><strong>Frameworks:</strong> ${cvData.skills.frameworks.join(", ")}</p>
      <p><strong>Tools:</strong> ${cvData.skills.tools.join(", ")}</p>
  
      <h2>CERTIFICATIONS & COURSES</h2>
      <ul>
        ${cvData.certifications
          .filter(cert => cert.name && cert.name.trim() !== "")
          .map(cert => {
            const details = [cert.name.trim(), cert.provider?.trim(), cert.years?.trim()].filter(Boolean).join(" – ");
            return cert.link && cert.link.startsWith("http")
              ? `<li><a href="${cert.link}" target="_blank" rel="noopener noreferrer"><em>${details}</em></a></li>`
              : `<li>${details}</li>`;
          }).join("")}
      </ul>
    `;
  }
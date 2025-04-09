function renderWebView(cvData) {
  renderPhoto(cvData.photo);
  document.getElementById("name").textContent = cvData.name;
  document.getElementById("title").textContent = cvData.title;
  renderContactSection(cvData);
  renderSummarySection(cvData.summary);
  renderExperiencesSection(cvData.experiences);
  renderEducationSection(cvData.education);
  renderSkillsSection(cvData.skills);
  renderProjectsSection(cvData.projects);
  renderCertificationsSection(cvData.certifications);
}

function renderPhoto(photoUrl) {
  const photoImg = document.getElementById("profile-photo");
  const photoWrapper = document.getElementById("profile-photo-wrapper");
  const photoLink = document.getElementById("profile-photo-link");

  if (photoImg) {
    photoImg.src = photoUrl;
    photoImg.style.maxWidth = "150px";
    photoImg.style.maxHeight = "150px";
    photoImg.setAttribute("data-testid", "image-profile-photo");
  }

  if (photoWrapper && photoLink && !photoLink.contains(photoWrapper)) {
    photoLink.href = photoUrl;
    photoLink.appendChild(photoWrapper);
  }
}

function renderContactSection(cvData) {
  const cleanedPhone = cvData.phone.replace(/[^0-9]/g, '');
  const whatsappPhone = cleanedPhone.startsWith('08') ? '62' + cleanedPhone.slice(1) : cleanedPhone;
  document.getElementById("contact").innerHTML = `
    <span class="inline-flex items-center gap-1" data-testid="text-location">
      <i class="fas fa-map-marker-alt"></i> ${cvData.location}
    </span> <br/> 
    <span class="text-black-500 inline-flex items-center gap-1 cursor-pointer hover:underline hover:text-blue-500 transition-colors duration-150" title="Copy email" data-testid="text-email" onclick="navigator.clipboard.writeText('${cvData.email}').then(() => alert('Email copied!'))">
      <i class="far fa-envelope"></i> ${cvData.email}
    </span> · 
    <a href="https://wa.me/${whatsappPhone}" class="text-green-500 inline-flex items-center gap-1 hover:underline hover:text-green-600 transition-colors duration-150" title="Open WhatsApp" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp">
      <i class="fab fa-whatsapp"></i> Chat on WhatsApp
    </a><br/>
    <a href="${cvData.github}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150" title="Open GitHub" target="_blank" rel="noopener noreferrer" data-testid="link-github">
      <i class="fab fa-github"></i> GitHub
    </a> · 
    <a href="${cvData.linkedin}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150" title="Open LinkedIn" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
  `;
}

function renderSummarySection(summary) {
  document.getElementById("summary").innerHTML = `<p data-testid="text-summary">${summary}</p>`;
}

function renderExperiencesSection(experiences) {
  const expEl = document.getElementById("experiences");
  expEl.innerHTML = '';
  experiences.forEach(exp => {
    const div = document.createElement("div");
    div.classList.add("mb-6");
    div.innerHTML = `
      <h3 class="font-bold" data-testid="header-experience-role">${exp.role} – ${exp.company}</h3>
      <p class="text-sm text-gray-600" data-testid="text-experience-meta">${exp.years}${exp.location ? " · " + exp.location : ""}</p>
      ${exp.bullets.length ? `<ul class="list-disc list-inside text-sm mt-1" data-testid="text-experience-bullets">${exp.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
    `;
    expEl.appendChild(div);
  });
}

function renderEducationSection(education) {
  document.getElementById("education").innerHTML = `
    <p data-testid="text-education"><strong>${education.degree}</strong><br>${education.university} (${education.years})</p>
  `;
}

function renderSkillsSection(skills) {
  document.getElementById("skills").innerHTML = `
    <span data-testid="text-skills-languages"><strong>Languages:</strong> ${skills.languages.join(", ")}</span><br>
    <span data-testid="text-skills-frameworks"><strong>Frameworks:</strong> ${skills.frameworks.join(", ")}</span><br>
    <span data-testid="text-skills-tools"><strong>Tools:</strong> ${skills.tools.join(", ")}</span>
  `;
}

function renderProjectsSection(projects) {
  const projEl = document.getElementById("projects");
  projEl.innerHTML = '';
  projects.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${p.link}" class="text-blue-500 font-medium" target="_blank" rel="noopener noreferrer" data-testid="link-project-${index}">${p.name}</a> – <span data-testid="text-project-desc-${index}">${p.desc}</span>`;
    projEl.appendChild(li);
  });
}

function renderCertificationsSection(certifications) {
  const certEl = document.getElementById("certifications");
  certEl.innerHTML = '';

  certifications.forEach((cert, index) => {
    if (!cert.name || cert.name.trim() === "") return;

    const details = [
      cert.name.trim(),
      cert.provider?.trim(),
      cert.years?.trim()
    ].filter(Boolean).join(" – "); // Combine only non-empty parts

    const li = document.createElement("li");

    if (cert.link && cert.link.trim() !== "" && cert.link.startsWith("http")) {
      li.innerHTML = `<a href="${cert.link}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" data-testid="link-certification-${index}">${details}</a>`;
    } else {
      li.textContent = details;
      li.setAttribute("data-testid", `text-certification-${index}`);
    }

    certEl.appendChild(li);
  });
}

window.onload = function () {
  renderWebView(cvData);
};
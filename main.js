window.onload = function () {
  document.getElementById("name").textContent = cvData.name;
  document.getElementById("title").textContent = cvData.title;
  document.getElementById("contact").innerHTML = `
    📍 ${cvData.location} · 📧 ${cvData.email} · 📞 ${cvData.phone}<br/>
    🌐 <a href="${cvData.github}" class="text-blue-500">GitHub</a> · 
    <a href="${cvData.linkedin}" class="text-blue-500">LinkedIn</a>
  `;

  // Experience
  const expEl = document.getElementById("experiences");
  cvData.experiences.forEach(exp => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3 class="font-bold">${exp.role} – ${exp.company}</h3>
      <p class="text-sm text-gray-600">${exp.years}</p>
      <ul class="list-disc list-inside text-sm mt-1">
        ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
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
    li.innerHTML = `<a href="${p.link}" class="text-blue-500 font-medium">${p.name}</a> – ${p.desc}`;
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

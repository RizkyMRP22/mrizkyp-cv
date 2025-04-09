// Render visual CV when page loads
function renderWebView(cvData) {
  const photoImg = document.getElementById("profile-photo");
  photoImg.src = cvData.photo;
  photoImg.style.maxWidth = "150px";
  photoImg.style.maxHeight = "150px";
  const photoLink = document.getElementById("profile-photo-link");
  photoLink.href = cvData.photo;
  document.getElementById("name").textContent = cvData.name;
  document.getElementById("title").textContent = cvData.title;
  const cleanedPhone = cvData.phone.replace(/[^0-9]/g, '');
  const whatsappPhone = cleanedPhone.startsWith('08')
    ? '62' + cleanedPhone.slice(1)
    : cleanedPhone;
  document.getElementById("contact").innerHTML = `
    📍 ${cvData.location} <br/> 
    ✉️ <span class="text-black-500 cursor-pointer" title="Copy email" onclick="navigator.clipboard.writeText('${cvData.email}').then(() => alert('Email copied!'))">${cvData.email}</span> · 
    📞 <a href="https://wa.me/${whatsappPhone}" class="text-green-500" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a><br/>
    <a href="${cvData.github}" class="text-blue-500 inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-github"></i> GitHub
    </a> · 
    <a href="${cvData.linkedin}" class="text-blue-500 inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
       <i class="fab fa-linkedin"></i> LinkedIn
    </a>
  `;

  document.getElementById("summary").innerHTML = `
    <p>${cvData.summary}</p>
  `;

  const expEl = document.getElementById("experiences");
  cvData.experiences.forEach(exp => {
    const div = document.createElement("div");
    div.classList.add("mb-6");
    div.innerHTML = `
      <h3 class="font-bold">${exp.role} – ${exp.company}</h3>
      <p class="text-sm text-gray-600">${exp.years}${exp.location ? " · " + exp.location : ""}</p>
      ${exp.bullets.length
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
    <p><strong>${edu.degree}</strong><br>${edu.university} (${edu.years})</p>
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
  cvData.certifications.forEach(cert => {
    const li = document.createElement("li");
    if (cert.link && cert.link.startsWith("http")) {
      li.innerHTML = `<a href="${cert.link}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">${cert.name}</a>`;
    } else {
      li.textContent = cert.name;
    }
    certEl.appendChild(li); 
  });
}

window.onload = function () {
  renderWebView(cvData);
};
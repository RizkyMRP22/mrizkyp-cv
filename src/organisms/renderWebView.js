import { renderPhoto } from "../atoms/photo.js";
import { renderContactSection } from "../molecules/contactInfo.js";
import { renderSection } from "../molecules/section.js";

export function renderWebView(cvData) {
  const formattedSummary = cvData.summary.replace(/\n\n/g, '<br><br>'); // Replace \n\n with <br><br>

  document.getElementById("profile").innerHTML = `
    <header class="text-center mb-12">
      <a id="profile-photo-link" href="#" target="_blank" rel="noopener noreferrer" class="inline-block p-1 border-4 border-blue-200 rounded-full hover:border-blue-500 transition" data-testid="link-profile-photo">
        <div id="profile-photo-wrapper" class="rounded-full overflow-hidden w-32 h-32">
          <img id="profile-photo" src="" alt="Profile Photo" class="w-full h-full object-cover" />
        </div>
      </a>
      <h1 id="name" class="text-4xl font-bold" data-testid="header-name">${cvData.name}</h1>
      <p id="title" class="text-lg text-gray-600" data-testid="text-title">${cvData.title}</p>
      <p id="contact" class="text-sm mt-2" data-testid="text-contact"></p>
    </header>
  `;

  renderPhoto(cvData.photo);
  renderContactSection(cvData);

  renderSection({
    id: "summary",
    icon: "📝",
    title: "Summary",
    content: `<p data-testid="text-summary">${cvData.summary}</p>`
  });

  const experiencesHTML = cvData.experiences.map((exp, index) => `
    <div class="mb-6">
      <h3 class="font-bold" data-testid="header-experience-role">${exp.role} – ${exp.company}</h3>
      <p class="text-sm text-gray-600" data-testid="text-experience-meta">${exp.years}${exp.location ? " · " + exp.location : ""}</p>
      ${exp.bullets.length ? `<ul class="list-disc list-inside text-sm mt-1" data-testid="text-experience-bullets">${exp.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
    </div>`).join("");

  renderSection({ id: "experiences", icon: "💼", title: "Experience", content: experiencesHTML });

  renderSection({
    id: "education",
    icon: "🎓",
    title: "Education",
    content: `<p data-testid="text-education"><strong>${cvData.education.degree}</strong><br>${cvData.education.university} (${cvData.education.years})</p>`
  });

  renderSection({
    id: "skills",
    icon: "🛠️",
    title: "Skills",
    content: `
      <div data-testid="text-skills-tools">
        <ul>${cvData.tech_skill.map(skillCategory => `
          <div style="margin-bottom: 0.5em;">
            <strong>${skillCategory.category}:</strong> ${skillCategory.tools.join(", ")}
          </div>
        `).join("")}</ul>
      </div>
    `
  });

  const projectsHTML = cvData.projects.map((p, index) => `
    <li><a href="${p.link}" class="text-blue-500 font-medium" target="_blank" rel="noopener noreferrer" data-testid="link-project-${index}">${p.name}</a> – 
    <span data-testid="text-project-desc-${index}">${p.desc}</span></li>`).join("");

  renderSection({
    id: "projects",
    icon: "📂",
    title: "Projects",
    content: `<ul class="list-disc list-inside text-sm">${projectsHTML}</ul>`
  });

  const certsTableRows = cvData.certifications
  .filter(cert => cert.name && cert.name.trim() !== "")
  .map((cert, index) => {
    const type = cert.type || "-";
    const name = cert.name.trim();
    const provider = cert.provider?.trim() || "-";
    const years = cert.years?.trim() || "-";

    const hasValidLink = cert.link && cert.link.startsWith("http");
    const action = hasValidLink
      ? `<a href="${cert.link}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" data-testid="link-certification-${index}">View</a>`
      : `<span class="text-gray-400 cursor-not-allowed" data-testid="disabled-certification-${index}">Not Available</span>`;

    return `
      <tr class="border-b">
        <td class="px-4 py-2">${type}</td>
        <td class="px-4 py-2" data-testid="text-certification-${index}">${name}</td>
        <td class="px-4 py-2">${provider}</td>
        <td class="px-4 py-2">${years}</td>
        <td class="px-4 py-2">${action}</td>
      </tr>
    `;
  }).join("");

  renderSection({
    id: "certifications",
    icon: "📜",
    title: "Certifications & Courses",
    content: `
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto text-sm border-collapse border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 text-left whitespace-nowrap">Type</th>
              <th class="px-4 py-2 text-left whitespace-nowrap">Name</th>
              <th class="px-4 py-2 text-left whitespace-nowrap">Provider</th>
              <th class="px-4 py-2 text-left whitespace-nowrap">Years</th>
              <th class="px-4 py-2 text-left whitespace-nowrap">Certificate</th>
            </tr>
          </thead>
          <tbody>
            ${certsTableRows}
          </tbody>
        </table>
      </div>
    `
  });
}
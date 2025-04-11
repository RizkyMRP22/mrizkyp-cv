(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function y(e){const n=document.getElementById("profile-photo"),r=document.getElementById("profile-photo-wrapper"),t=document.getElementById("profile-photo-link");!e||typeof e!="string"||(n&&(n.src=e,n.alt="MRizkyP profile photo",n.className="w-full h-full object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-105",n.setAttribute("data-testid","image-profile-photo")),t&&(t.href=e,t.target="_blank",t.setAttribute("aria-label","View full-size profile photo")),r&&t&&!t.contains(r)&&t.appendChild(r))}function b(e){const n=e.phone.replace(/[^0-9]/g,""),r=n.startsWith("08")?"62"+n.slice(1):n;document.getElementById("contact").innerHTML=`
      <span class="inline-flex items-center gap-1" data-testid="text-location">
        <i class="fas fa-map-marker-alt"></i> ${e.location}
      </span> <br/> 
  
      <span
        class="inline-flex items-center gap-1 cursor-pointer hover:underline hover:text-blue-500 transition"
        title="Click to copy email"
        data-testid="text-email"
        onclick="navigator.clipboard.writeText('${e.email}').then(() => alert('📧 Email copied to clipboard'))"
      >
        <i class="far fa-envelope text-gray-500"></i> ${e.email}
      </span>
  
      <a href="https://wa.me/${r}" class="text-green-500 inline-flex items-center gap-1 hover:underline hover:text-green-600 transition-colors duration-150"
        title="Open WhatsApp" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp">
        <i class="fab fa-whatsapp"></i> Chat Me
      </a><br/>
  
      <a href="${e.github}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150"
        title="Open GitHub" target="_blank" rel="noopener noreferrer" data-testid="link-github">
        <i class="fab fa-github"></i> GitHub
      </a> · 
  
      <a href="${e.linkedin}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150"
        title="Open LinkedIn" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
    `}function a({id:e,icon:n,title:r,content:t}){const o=document.getElementById(e);if(!o)return;const s=`
    <section class="mb-4 border-b border-gray-300" id="section-${e}">
      <div 
        class="flex justify-between items-center px-4 py-2 bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        onclick="toggleSection('${e}')"
      >
        <h2 
          class="text-2xl font-semibold flex items-center gap-2 cursor-pointer transition-colors duration-200"
          data-testid="header-${e}"
        >
          ${n} ${r}
        </h2>
        <button
          class="toggle-btn text-gray-500 hover:text-gray-700 text-xl transition-colors duration-200"
          data-testid="button-toggle-${e}"
          id="toggle-btn-${e}"
          onclick="event.stopPropagation(); toggleSection('${e}')"
        >
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>
      <div class="section-content px-4 pb-4" id="${e}-content">
        ${t}
      </div>
    </section>
  `;o.innerHTML=s}window.toggleSection=function(e){const n=document.getElementById(`${e}-content`),t=document.getElementById(`toggle-btn-${e}`).querySelector("i");n.classList.contains("hidden")?(n.classList.remove("hidden"),t.classList.remove("fa-chevron-down"),t.classList.add("fa-chevron-up")):(n.classList.add("hidden"),t.classList.remove("fa-chevron-up"),t.classList.add("fa-chevron-down"))};function x(e){const n=e.summary.replace(/\n\n/g,"<br><br>");document.getElementById("profile").innerHTML=`
    <header class="text-center mb-12">
      <a id="profile-photo-link" href="#" target="_blank" rel="noopener noreferrer"
        class="inline-block border-4 border-blue-200 rounded-full hover:border-blue-500 transition duration-300">
        <div id="profile-photo-wrapper" class="rounded-full overflow-hidden w-32 h-32 mx-auto">
          <img id="profile-photo" src="" alt="Profile photo" />
        </div>
      </a>
      <h1 id="name" class="text-4xl font-bold mt-4" data-testid="header-name">${e.name}</h1>
      <p id="title" class="text-lg text-gray-600" data-testid="text-title">${e.title}</p>
      <p id="contact" class="text-sm mt-2" data-testid="text-contact"></p>
    </header>
  `,y(e.photo),b(e),a({id:"summary",icon:"📝",title:"Summary",content:`<p class="text-sm text-gray-700 leading-relaxed" data-testid="text-summary">${n}</p>`});const r=e.experiences.map((i,l)=>`
    <div class="mb-6">
      <h3 class="font-semibold text-base" data-testid="header-experience-role">${i.role} – ${i.company}</h3>
      <p class="text-sm text-gray-500 mb-1" data-testid="text-experience-meta">${i.years}${i.location?" · "+i.location:""}</p>
      ${i.bullets.length?`<ul class="list-disc list-inside text-sm text-gray-700 space-y-1" data-testid="text-experience-bullets">${i.bullets.map(d=>`<li>${d}</li>`).join("")}</ul>`:""}
    </div>`).join("");a({id:"experiences",icon:"💼",title:"Experience",content:r}),a({id:"education",icon:"🎓",title:"Education",content:`
      <div class="text-sm text-gray-700" data-testid="text-education">
        <strong>${e.education.degree}</strong><br>
        ${e.education.university} (${e.education.years})
      </div>
    `});const t=e.tech_skill.map(i=>`
    <li class="mb-1"><strong>${i.category}:</strong> ${i.tools.join(", ")}</li>
  `).join("");a({id:"skills",icon:"🛠️",title:"Skills",content:`
      <ul class="list-inside list-disc text-sm text-gray-700" data-testid="text-skills-tools">
        ${t}
      </ul>
    `});const o=e.projects.map((i,l)=>`
    <li class="mb-1">
      <a href="${i.link}" class="text-blue-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer"
        data-testid="link-project-${l}">${i.name}</a> – 
      <span data-testid="text-project-desc-${l}">${i.desc}</span>
    </li>`).join("");a({id:"projects",icon:"📂",title:"Projects",content:`<ul class="list-disc list-inside text-sm text-gray-700">${o}</ul>`});const s=e.certifications.filter(i=>i.name&&i.name.trim()!=="").map((i,l)=>{var c,m;const d=i.type||"-",p=i.name.trim(),f=((c=i.provider)==null?void 0:c.trim())||"-",h=((m=i.years)==null?void 0:m.trim())||"-",g=i.link&&i.link.startsWith("http")?`<a href="${i.link}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" data-testid="link-certification-${l}">View</a>`:`<span class="text-gray-400 cursor-not-allowed" data-testid="disabled-certification-${l}">Not Available</span>`;return`
        <tr class="border-b">
          <td class="px-4 py-2">${d}</td>
          <td class="px-4 py-2" data-testid="text-certification-${l}">${p}</td>
          <td class="px-4 py-2">${f}</td>
          <td class="px-4 py-2">${h}</td>
          <td class="px-4 py-2">${g}</td>
        </tr>
      `}).join("");a({id:"certifications",icon:"📜",title:"Certifications & Courses",content:`
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm border-collapse border border-gray-300">
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="px-4 py-2 text-left">Type</th>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Provider</th>
              <th class="px-4 py-2 text-left">Years</th>
              <th class="px-4 py-2 text-left">Certificate</th>
            </tr>
          </thead>
          <tbody>
            ${s}
          </tbody>
        </table>
      </div>
    `})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("access-time");if(e){const n=new Date,r=new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).format(n);e.textContent=`🕒 Accessed: ${r}`,e.title=n.toISOString()}});function w(){document.querySelectorAll(".header-toggle").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.sectionId,r=document.getElementById(`${n}-content`),o=document.getElementById(`toggle-btn-${n}`).querySelector("i"),s=r.classList.toggle("hidden");o.classList.toggle("fa-chevron-down",s),o.classList.toggle("fa-chevron-up",!s)})})}function $(e){const n=document.getElementById("cv-ats"),r=e.summary.replace(/\n\n/g,"<br><br>");n.innerHTML=`
      <h1>${e.name}</h1>
      <p>Email: ${e.email}${e.phone?" | Phone: "+e.phone:""}</p>
      <p>
        GitHub:<em-i>${e.github}</em-i> | LinkedIn:<em-i> ${e.linkedin}</em-i>
      </p>
      <p>Location: ${e.location}</p>
  
      <h2>PROFESSIONAL PROFILE</h2>
      <p>${r}</p>
  
      <h2>PROFESSIONAL EXPERIENCE</h2>
      ${e.experiences.map(t=>`
        <p><strong>${t.role} – ${t.company}</strong></p>
        <p>${t.location?t.location+" · ":""}${t.years}</p>
        ${t.bullets.length?`<ul>${t.bullets.map(o=>`<li>${o}</li>`).join("")}</ul>`:""}
      `).join("")}
  
      <h2>EDUCATION</h2>
      <p>${e.education.degree}</p>
      <p>${e.education.university} (${e.education.years})</p>
  
      <h2>TECHNICAL SKILLS</h2>
      <ul>${e.tech_skill.map(t=>`
        <li style="margin-bottom: 0.5em;">
          <strong>${t.category}:</strong> ${t.tools.join(", ")}
        </li>
      `).join("")}</ul>

      <h2>PROJECTS</h2>
      <ul>${e.projects.map(t=>`<li><strong>${t.name}:</strong> ${t.desc}</li>`).join("")}</ul>
  
      <h2>CERTIFICATIONS & COURSES</h2>
      <ul>
        ${e.certifications.filter(t=>t.name&&t.name.trim()!=="").map(t=>{var s,i;const o=[t.name.trim(),(s=t.provider)==null?void 0:s.trim(),(i=t.years)==null?void 0:i.trim()].filter(Boolean).join(" – ");return t.link&&t.link.startsWith("http")?`<li><a href="${t.link}" target="_blank" rel="noopener noreferrer"><em>${o}</em></a></li>`:`<li>${o}</li>`}).join("")}
      </ul>
    `}const v="https://8dc89cd8-e2f7-4444-ad1f-764405691864.mock.pstmn.io",L={PROFILE_DETAIL:"/profile-detail"};async function E(e,n={}){const r=`${v}${e}`;try{const t=await fetch(r,{headers:{"Content-Type":"application/json",...n.headers||{}},...n});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const o=await t.json();if(o.code!==200)throw new Error(o.message||"API error");return o.data}catch(t){return console.error(`API error [${r}]:`,t.message),null}}function u(){return E(L.PROFILE_DETAIL)}document.addEventListener("DOMContentLoaded",async function(){const e=await u(),n=document.getElementById("download-btn"),t=new Date().toLocaleString("en-GB",{hour12:!1});n&&n.addEventListener("click",()=>{const o=document.getElementById("loading-overlay");o.classList.remove("hidden"),$(e);const s=document.getElementById("cv-ats");s.classList.remove("hidden");const i={margin:10,filename:`mrizkyp_cv_${t}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:3,useCORS:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}};html2pdf().set(i).from(s).save().then(()=>{o.classList.add("hidden"),s.classList.add("hidden")})})});function k(){if(typeof __GIT_BRANCH__<"u"){const e=__GIT_BRANCH__.toLowerCase();if(e==="develop"||e==="dev"){const n=document.createElement("div");n.textContent="Development Mode",n.className="fixed top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded shadow z-50",document.body.appendChild(n)}}}function I(){const e=document.createElement("button");return e.id="download-btn",e.className="w-10 h-10 md:w-auto md:h-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2",e.innerHTML=`
      <i class="fa-solid fa-download block md:hidden text-lg"></i>
      <span class="hidden md:inline">Download CV</span>
    `,e.addEventListener("click",()=>{const n=new CustomEvent("download:clicked");window.dispatchEvent(n)}),e}function T(){const e=document.createElement("div");return e.id="loading-overlay",e.className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center hidden",e.innerHTML=`
      <div class="text-center">
        <svg class="animate-spin h-8 w-8 text-blue-600 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <p class="text-blue-700 text-sm font-medium">Downloading CV...</p>
      </div>
    `,e}function B(){var e;(e=document.getElementById("loading-overlay"))==null||e.classList.remove("hidden")}function S(){var e;(e=document.getElementById("loading-overlay"))==null||e.classList.add("hidden")}function C(){const e=document.createElement("div");return e.id="welcome-overlay",e.className=`
    fixed inset-0 z-50 flex flex-col items-center justify-center 
    bg-white text-gray-800 transition-opacity duration-500
    px-4 text-center
  `,e.innerHTML=`
    <div class="animate-pulse" role="dialog" aria-label="Welcome overlay" aria-busy="true">
      <!-- Friendly Welcome -->
      <h1 class="mb-2 text-2xl sm:text-3xl font-bold text-blue-600">
        Welcome to MRizkyP’s Profile
      </h1>
      <p class="mb-6 text-sm sm:text-base text-gray-500">
        Just a moment... we're preparing your experience 🚀
      </p>
      
      <!-- Skeleton Avatar -->
      <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
      
      <!-- Skeleton Text Lines -->
      <div class="w-48 h-4 bg-gray-200 rounded mb-2 mx-auto"></div>
      <div class="w-40 h-4 bg-gray-200 rounded mb-2 mx-auto"></div>
      <div class="w-32 h-4 bg-gray-200 rounded mx-auto"></div>
    </div>
  `,e}function j(){const e=document.getElementById("welcome-overlay");e&&(e.classList.add("opacity-0"),setTimeout(()=>e.remove(),500))}function O(){const e=document.getElementById("footer");e&&(e.innerHTML=`
        <footer class="text-center text-xs text-gray-500 py-4 mt-6">
          <p>&copy; ${new Date().getFullYear()} — Made with ❤️ by MRizkyP</p>
        </footer>
      `)}window.onload=async()=>{var t,o;const e=C();document.body.appendChild(e),setTimeout(()=>{j()},1500);const n=await u();if(n)x(n),window.cvData=n;else{document.body.innerHTML='<p class="text-red-500 text-center mt-10">Failed to load profile data.</p>';return}w(),k(),(t=document.getElementById("loading-overlay-placeholder"))==null||t.appendChild(T());const r=I();(o=document.querySelector(".flex.justify-end"))==null||o.appendChild(r),window.addEventListener("download:clicked",async()=>{B(),setTimeout(()=>{S()},3e3)}),O()};

(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function p(e){const o=document.getElementById("profile-photo"),s=document.getElementById("profile-photo-wrapper"),n=document.getElementById("profile-photo-link");o&&(o.src=e,o.style.maxWidth="150px",o.style.maxHeight="150px",o.setAttribute("data-testid","image-profile-photo")),s&&n&&!n.contains(s)&&(n.href=e,n.appendChild(s))}function m(e){const o=e.phone.replace(/[^0-9]/g,""),s=o.startsWith("08")?"62"+o.slice(1):o;document.getElementById("contact").innerHTML=`
      <span class="inline-flex items-center gap-1" data-testid="text-location">
        <i class="fas fa-map-marker-alt"></i> ${e.location}
      </span> <br/> 
  
      <span class="text-black-500 inline-flex items-center gap-1 cursor-pointer hover:underline hover:text-blue-500 transition-colors duration-150" title="Copy email" data-testid="text-email"
        onclick="navigator.clipboard.writeText('${e.email}').then(() => alert('Email copied!'))">
        <i class="far fa-envelope"></i> ${e.email}
      </span> · 
  
      <a href="https://wa.me/${s}" class="text-green-500 inline-flex items-center gap-1 hover:underline hover:text-green-600 transition-colors duration-150"
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
    `}function l({id:e,icon:o,title:s,content:n}){const t=document.getElementById(e);if(!t)return;const i=`
    <section class="mb-4 border-b border-gray-300 cursor-pointer" id="section-${e}">
      <div class="flex justify-between items-center px-4 py-2 bg-white" onclick="toggleSection('${e}')">
        <h2 class="text-2xl font-semibold flex items-center gap-2 cursor-pointer" data-testid="header-${e}">
          ${o} ${s}
        </h2>
        <button
          class="toggle-btn text-blue-500 text-xl font-bold"
          data-testid="button-toggle-${e}"
          id="toggle-btn-${e}"
          onclick="event.stopPropagation(); toggleSection('${e}')"
        >▲</button>
      </div>
      <div class="section-content px-4 pb-4" id="${e}-content">
        ${n}
      </div>
    </section>
  `;t.innerHTML=i}window.toggleSection=function(e){const o=document.getElementById(`${e}-content`),s=document.getElementById(`toggle-btn-${e}`);o.classList.contains("hidden")?(o.classList.remove("hidden"),s.innerHTML="▲"):(o.classList.add("hidden"),s.innerHTML="▼")};function u(e){document.getElementById("profile").innerHTML=`
    <header class="text-center mb-12">
      <a id="profile-photo-link" href="#" target="_blank" rel="noopener noreferrer" class="inline-block p-1 border-4 border-blue-200 rounded-full hover:border-blue-500 transition" data-testid="link-profile-photo">
        <div id="profile-photo-wrapper" class="rounded-full overflow-hidden w-32 h-32">
          <img id="profile-photo" src="" alt="Profile Photo" class="w-full h-full object-cover" />
        </div>
      </a>
      <h1 id="name" class="text-4xl font-bold" data-testid="header-name">${e.name}</h1>
      <p id="title" class="text-lg text-gray-600" data-testid="text-title">${e.title}</p>
      <p id="contact" class="text-sm mt-2" data-testid="text-contact"></p>
    </header>
  `,p(e.photo),m(e),l({id:"summary",icon:"📝",title:"Summary",content:`<p data-testid="text-summary">${e.summary}</p>`});const o=e.experiences.map((t,i)=>`
    <div class="mb-6">
      <h3 class="font-bold" data-testid="header-experience-role">${t.role} – ${t.company}</h3>
      <p class="text-sm text-gray-600" data-testid="text-experience-meta">${t.years}${t.location?" · "+t.location:""}</p>
      ${t.bullets.length?`<ul class="list-disc list-inside text-sm mt-1" data-testid="text-experience-bullets">${t.bullets.map(r=>`<li>${r}</li>`).join("")}</ul>`:""}
    </div>`).join("");l({id:"experiences",icon:"💼",title:"Experience",content:o}),l({id:"education",icon:"🎓",title:"Education",content:`<p data-testid="text-education"><strong>${e.education.degree}</strong><br>${e.education.university} (${e.education.years})</p>`}),l({id:"skills",icon:"🛠️",title:"Skills",content:`
      <span data-testid="text-skills-languages"><strong>Languages:</strong> ${e.skills.languages.join(", ")}</span><br>
      <span data-testid="text-skills-frameworks"><strong>Frameworks:</strong> ${e.skills.frameworks.join(", ")}</span><br>
      <span data-testid="text-skills-tools"><strong>Tools:</strong> ${e.skills.tools.join(", ")}</span>`});const s=e.projects.map((t,i)=>`
    <li><a href="${t.link}" class="text-blue-500 font-medium" target="_blank" rel="noopener noreferrer" data-testid="link-project-${i}">${t.name}</a> – 
    <span data-testid="text-project-desc-${i}">${t.desc}</span></li>`).join("");l({id:"projects",icon:"📂",title:"Projects",content:`<ul class="list-disc list-inside text-sm">${s}</ul>`});const n=e.certifications.filter(t=>t.name&&t.name.trim()!=="").map((t,i)=>{var a,d;const r=[t.type,t.name.trim(),(a=t.provider)==null?void 0:a.trim(),(d=t.years)==null?void 0:d.trim()].filter(Boolean).join(" – ");return t.link&&t.link.startsWith("http")?`<li><a href="${t.link}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" data-testid="link-certification-${i}">${r}</a></li>`:`<li data-testid="text-certification-${i}">${r}</li>`}).join("");l({id:"certifications",icon:"📜",title:"Certifications & Courses",content:`<ul class="list-disc list-inside text-sm">${n}</ul>`})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("access-time");if(e){const s=new Date().toLocaleString("en-GB",{hour12:!1});e.textContent=`CV Accessed: ${s}`}});function f(){document.querySelectorAll(".toggle-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.parentElement.nextElementSibling;o.classList.toggle("hidden"),e.textContent=o.classList.contains("hidden")?"▼":"▲"})})}function h(e){const o=document.getElementById("cv-ats"),s=e.summary.replace(/\n\n/g,"<br><br>");o.innerHTML=`
      <h1>${e.name}</h1>
      <p>Email: ${e.email}${e.phone?" | Phone: "+e.phone:""}</p>
      <p>
        GitHub:<em-i>${e.github}</em-i> | LinkedIn:<em-i> ${e.linkedin}</em-i>
      </p>
      <p>Location: ${e.location}</p>
  
      <h2>PROFESSIONAL PROFILE</h2>
      <p>${s}</p>
  
      <h2>PROFESSIONAL EXPERIENCE</h2>
      ${e.experiences.map(n=>`
        <p><strong>${n.role} – ${n.company}</strong></p>
        <p>${n.location?n.location+" · ":""}${n.years}</p>
        ${n.bullets.length?`<ul>${n.bullets.map(t=>`<li>${t}</li>`).join("")}</ul>`:""}
      `).join("")}
  
      <h2>EDUCATION</h2>
      <p>${e.education.degree}</p>
      <p>${e.education.university} (${e.education.years})</p>
  
      <h2>TECHNICAL SKILLS</h2>
      <p><strong>Languages:</strong> ${e.skills.languages.join(", ")}</p>
      <p><strong>Frameworks:</strong> ${e.skills.frameworks.join(", ")}</p>
      <p><strong>Tools:</strong> ${e.skills.tools.join(", ")}</p>

      <h2>PROJECTS</h2>
      <ul>${e.projects.map(n=>`<li><strong>${n.name}:</strong> ${n.desc}</li>`).join("")}</ul>
  
      <h2>CERTIFICATIONS & COURSES</h2>
      <ul>
        ${e.certifications.filter(n=>n.name&&n.name.trim()!=="").map(n=>{var i,r;const t=[n.name.trim(),(i=n.provider)==null?void 0:i.trim(),(r=n.years)==null?void 0:r.trim()].filter(Boolean).join(" – ");return n.link&&n.link.startsWith("http")?`<li><a href="${n.link}" target="_blank" rel="noopener noreferrer"><em>${t}</em></a></li>`:`<li>${t}</li>`}).join("")}
      </ul>
    `}const g="https://8dc89cd8-e2f7-4444-ad1f-764405691864.mock.pstmn.io",b={PROFILE_DETAIL:"/profile-detail"};async function y(e,o={}){const s=`${g}${e}`;try{const n=await fetch(s,{headers:{"Content-Type":"application/json",...o.headers||{}},...o});if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);const t=await n.json();if(t.code!==200)throw new Error(t.message||"API error");return t.data}catch(n){return console.error(`API error [${s}]:`,n.message),null}}function c(){return y(b.PROFILE_DETAIL)}document.addEventListener("DOMContentLoaded",async function(){const e=await c(),o=document.getElementById("download-btn"),n=new Date().toLocaleString("en-GB",{hour12:!1});o&&o.addEventListener("click",()=>{const t=document.getElementById("loading-overlay");t.classList.remove("hidden"),h(e);const i=document.getElementById("cv-ats");i.classList.remove("hidden");const r={margin:10,filename:`mrizkyp_cv_${n}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:3,useCORS:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}};html2pdf().set(r).from(i).save().then(()=>{t.classList.add("hidden"),i.classList.add("hidden")})})});function $(){if(typeof __GIT_BRANCH__<"u"){const e=__GIT_BRANCH__.toLowerCase();if(e==="develop"||e==="dev"){const o=document.createElement("div");o.textContent="Development Mode",o.className="fixed top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded shadow z-50",document.body.appendChild(o)}}}function x(){const e=document.createElement("button");return e.id="download-btn",e.className="w-10 h-10 md:w-auto md:h-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2",e.innerHTML=`
      <i class="fa-solid fa-download block md:hidden text-lg"></i>
      <span class="hidden md:inline">Download CV</span>
    `,e.addEventListener("click",()=>{const o=new CustomEvent("download:clicked");window.dispatchEvent(o)}),e}function w(){const e=document.createElement("div");return e.id="loading-overlay",e.className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center hidden",e.innerHTML=`
      <div class="text-center">
        <svg class="animate-spin h-8 w-8 text-blue-600 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <p class="text-blue-700 text-sm font-medium">Downloading CV...</p>
      </div>
    `,e}function k(){var e;(e=document.getElementById("loading-overlay"))==null||e.classList.remove("hidden")}function L(){var e;(e=document.getElementById("loading-overlay"))==null||e.classList.add("hidden")}window.onload=async()=>{const e=await c();e?(u(e),window.cvData=e):document.body.innerHTML='<p class="text-red-500 text-center mt-10">Failed to load profile data.</p>',f(),$(),document.body.appendChild(w()),document.querySelector(".flex.justify-end").appendChild(x()),window.addEventListener("download:clicked",async()=>{k(),setTimeout(()=>{L()},3e3)})};

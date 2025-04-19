(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();let u="";function h(e){switch(e){case"Asia/Jakarta":return"WIB";case"Asia/Makassar":return"WITA";case"Asia/Jayapura":return"WIT";default:return""}}function w(e,t){return`🕒 Accessed: ${new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).format(e)} ${t}`}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("access-time");if(e){const t=new Date,o=Intl.DateTimeFormat().resolvedOptions().timeZone,n=h(o);u=w(t,n),e.textContent=u,e.title=t.toISOString(),e.setAttribute("data-testid","access-time")}});function y(){return u}function v(e,t,o,n){return`
    <html>
      <head>
        <title>${t} Photo</title>
        <style>
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #000;
          }
          .photo-container {
            position: relative;
            display: inline-block;
          }
          img {
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
          }
          .info-overlay {
            position: absolute;
            bottom: 8px;
            right: 8px;
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 6px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-family: sans-serif;
            text-align: right;
          }
        </style>
      </head>
      <body>
        <div class="photo-container" data-testid="photo-preview-container">
          <img src="${e}" alt="${t} profile photo" data-testid="photo-preview-image" />
          <div class="info-overlay" data-testid="photo-preview-overlay">
            <p data-testid="photo-preview-name">${t}</p>
            <p data-testid="photo-preview-title">${o}</p>
            <p data-testid="photo-preview-time">${n}</p>
          </div>
        </div>
      </body>
    </html>
  `}function x(e,t,o){const n=document.getElementById("profile-photo"),i=document.getElementById("profile-photo-wrapper"),a=document.getElementById("profile-photo-link");!e||typeof e!="string"||(n&&(n.src=e,n.alt=`${t} profile photo`,n.className="w-full h-full object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-105",n.setAttribute("data-testid","profile-photo")),a&&(a.href="#",a.setAttribute("data-testid","profile-photo-link"),a.onclick=s=>{s.preventDefault();const r=window.open("","_blank");r.document.write(v(e,t,o,y())),r.document.close()}),i&&a&&!a.contains(i)&&(i.setAttribute("data-testid","profile-photo-wrapper"),a.appendChild(i)),i&&i.classList.add("relative"))}function $(e){return`
    <span class="inline-flex items-center gap-1" data-testid="text-location">
      <i class="fas fa-map-marker-alt"></i> ${e}
    </span><br/>
  `}function k(e){return`
    <span
      class="inline-flex items-center gap-1 cursor-pointer hover:underline hover:text-blue-500 transition"
      title="Click to copy email"
      data-testid="text-email"
      onclick="navigator.clipboard.writeText('${e}').then(() => alert('📧 Email copied to clipboard'))"
    >
      <i class="far fa-envelope text-gray-500"></i> ${e}
    </span>
  `}function I(e){const t=e.replace(/[^0-9]/g,"");return`
    <a href="https://wa.me/${t.startsWith("08")?"62"+t.slice(1):t}" class="text-green-500 inline-flex items-center gap-1 hover:underline hover:text-green-600 transition-colors duration-150"
      title="Open WhatsApp" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp">
      <i class="fab fa-whatsapp"></i> Chat Me
    </a><br/>
  `}function L(e,t){return`
    <a href="${e}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150"
      title="Open GitHub" target="_blank" rel="noopener noreferrer" data-testid="link-github">
      <i class="fab fa-github"></i> GitHub
    </a> · 
    <a href="${t}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150"
      title="Open LinkedIn" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
  `}function E(e){document.getElementById("contact").innerHTML=`
    ${$(e.location)}
    ${k(e.email)}
    ${I(e.phone)}
    ${L(e.github,e.linkedin)}
  `}function C({id:e,icon:t,title:o,content:n}){return`
    <section class="mb-4 border-b border-gray-300" id="section-${e}">
      <div 
        class="flex justify-between items-center px-4 py-2 bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        onclick="toggleSection('${e}')"
      >
        <h2 
          class="text-2xl font-semibold flex items-center gap-2 cursor-pointer transition-colors duration-200"
          data-testid="header-${e}"
        >
          ${t?`${t} `:""}${o}
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
        ${n}
      </div>
    </section>
  `}function T(e,t){e.classList.toggle("fa-chevron-up",!t),e.classList.toggle("fa-chevron-down",t)}function m({id:e,icon:t="",title:o,content:n}){const i=document.getElementById(e);i&&(i.innerHTML=C({id:e,icon:t,title:o,content:n}))}window.toggleSection=function(e){const t=document.getElementById(`${e}-content`),n=document.getElementById(`toggle-btn-${e}`).querySelector("i"),i=t.classList.toggle("hidden");T(n,i)};function j(e){return e.map(t=>`<th class="px-4 py-2 text-center border">${t}</th>`).join("")}function B(e){return e.map(t=>`
      <tr class="border-b">
        ${t.map(o=>`<td class="px-4 py-2 border">${o}</td>`).join("")}
      </tr>
    `).join("")}function f({headers:e=[],rows:t=[]}){if(!e.length||!t.length)return"";const o=j(e),n=B(t);return`
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border-collapse border border-gray-300 mt-1">
        <thead class="bg-gray-100 text-gray-700 text-center">
          <tr>
            ${o}
          </tr>
        </thead>
        <tbody class="text-center">
          ${n}
        </tbody>
      </table>
    </div>
  `}function A(e,t){const o=document.getElementById(e);o&&(o.classList.toggle("hidden"),t.textContent=o.classList.contains("hidden")?"Show More":"Show Less")}window.toggleExperienceDetails=A;function P(e){return e.map((t,o)=>{var i,a,s;const n=`experience-content-${o}`;return`
      <section class="${o!==e.length-1?"mb-8 pb-4 border-b border-gray-200":""}">
        <h3 class="text-lg font-semibold text-black-700 mb-1" data-testid="header-experience-role">
          ${t.role} – ${t.company}
        </h3>
        <p class="text-sm text-gray-500 mb-2" data-testid="text-experience-meta">
          ${t.duration||t.years}${t.location?" · "+t.location:""}
        </p>
        <button onclick="toggleExperienceDetails('${n}', this)" class="text-sm text-blue-500 hover:underline">
          Show More
        </button>
        <div id="${n}" class="hidden mt-2">
          ${(i=t.bullets)!=null&&i.length?`
            <div class="text-sm text-gray-700 mb-2" data-testid="text-bullets">
              <strong class="block text-gray-800 mb-1">Contribution:</strong>
              <ul class="list-disc text-justify list-inside space-y-1 pl-4" data-testid="text-experience-bullets">
                ${t.bullets.map(r=>`<li>${r}</li>`).join("")}
              </ul>
            </div>`:""}
          ${(a=t.impact)!=null&&a.length?`
            <div class="text-sm text-gray-700 mb-2" data-testid="text-impacts">
              <strong class="block text-gray-800 mb-1">Impact:</strong>
              <ul class="list-disc text-justify list-inside space-y-1 pl-4" data-testid="text-experience-impact">
                ${t.impact.map(r=>`<li>${r}</li>`).join("")}
              </ul>
            </div>`:""}
          ${(s=t.product)!=null&&s.length?`
            <div class="text-sm text-gray-700" data-testid="text-product">
              <strong class="block text-gray-800 mb-1">Product:</strong>
              ${f({headers:["Name","Framework","Platform","Duration"],rows:t.product.map(r=>[r.name||"-",Array.isArray(r.framework)?r.framework.join(", "):r.framework||"-",Array.isArray(r.platform)?r.platform.join(", "):r.platform||"-",r.duration||"-"])})}
            </div>`:""}
        </div>
      </section>`}).join("")}function S(e){return e.map(t=>`
    <li class="mb-1 text-justify"><strong>${t.category}:</strong> ${t.tools.join(", ")}</li>
  `).join("")}function M(e){return e.map((t,o)=>`
    <li class="mb-1 text-justify">
      <a href="${t.link}" class="text-blue-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer"
        data-testid="link-project-${o}">${t.name}</a> – 
      <span data-testid="text-project-desc-${o}">${t.desc}</span>
    </li>
  `).join("")}function H(e){return`
    <div class="text-sm text-gray-700" data-testid="text-education">
      <strong>${e.degree}</strong><br>
      ${e.university} (${e.years})
    </div>
  `}function O(e){const t=e.summary.replace(/\n\n/g,"<br><br>");document.getElementById("profile").innerHTML=`
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
  `,x(e.photo,e.name,e.title),E(e),m({id:"summary",icon:"📝",title:"Summary",content:`
      <p class="text-sm text-justify text-gray-700 leading-relaxed" data-testid="text-summary">${t}</p>
    `});const o=P(e.experiences);m({id:"experiences",icon:"💼",title:"Experience",content:o}),m({id:"education",icon:"🎓",title:"Education",content:H(e.education)}),m({id:"skills",icon:"🛠️",title:"Skills",content:`
      <ul class="list-inside list-disc text-sm text-gray-700" data-testid="text-skills-tools">
        ${S(e.tech_skill)}
      </ul>
    `}),m({id:"projects",icon:"📂",title:"Projects",content:`
      <ul class="list-disc list-inside text-sm text-gray-700">
        ${M(e.projects)}
      </ul>
    `}),m({id:"certifications",icon:"📜",title:"Certifications & Courses",content:f({headers:["Type","Name","Provider","Years","Certificate"],rows:e.certifications.filter(n=>n.name&&n.name.trim()!=="").map((n,i)=>{var p,g;const a=n.type||"-",s=n.name.trim(),r=((p=n.provider)==null?void 0:p.trim())||"-",l=((g=n.years)==null?void 0:g.trim())||"-",c=n.link&&n.link.startsWith("http")?`<a href="${n.link}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" data-testid="link-certification-${i}">View</a>`:`<span class="text-gray-400 cursor-not-allowed" data-testid="disabled-certification-${i}">Not Available</span>`;return[a,`<span data-testid="text-certification-${i}">${s}</span>`,r,l,c]})})})}function N(e,t){e.classList.toggle("fa-chevron-down",t),e.classList.toggle("fa-chevron-up",!t)}function z(e){return e.classList.toggle("hidden")}function _(){document.querySelectorAll(".header-toggle").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.sectionId,o=document.getElementById(`${t}-content`),n=document.getElementById(`toggle-btn-${t}`),i=n.querySelector("i");e.setAttribute("data-testid",`toggle-section-header-${t}`),o.setAttribute("data-testid",`toggle-section-content-${t}`),n.setAttribute("data-testid",`toggle-section-button-${t}`),i.setAttribute("data-testid",`toggle-section-icon-${t}`);const a=z(o);N(i,a)})})}const J="https://pyplcerpnbnphvgyppou.supabase.co",F={PROFILE:"/rest/v1/cv?select=data"};async function D(e,t={}){const o=`${J}${e}`;try{const n=await fetch(o,{headers:{"Content-Type":"application/json",...t.headers||{}},...t});if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return(await n.json())[0].data}catch(n){return console.error(`API error [${o}]:`,n.message),null}}function b(){const e={headers:{apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cGxjZXJwbmJucGh2Z3lwcG91Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDUxOTc1OSwiZXhwIjoyMDYwMDk1NzU5fQ.Iwya0raPROgSj_dgaHH0PLphJlwgUnYfCODxdxqgrkY",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cGxjZXJwbmJucGh2Z3lwcG91Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDUxOTc1OSwiZXhwIjoyMDYwMDk1NzU5fQ.Iwya0raPROgSj_dgaHH0PLphJlwgUnYfCODxdxqgrkY"}};return D(F.PROFILE,e)}function Z(){return window.location.origin.replace(/^https?:\/\//,"").replace(/\/$/,"")}function W({name:e,email:t,phone:o,github:n,linkedin:i,location:a}){return Z(),`
    <div class="break-inside-avoid">
      <h1>${e}</h1>
      <p>Location: ${a} | Email: ${t}${o?" | Phone: "+o:""}</p>
      <p>GitHub: ${n} | LinkedIn: ${i}</p>
      <p>Portofolio: https://rizkymrp22.github.io/mrizkyp-cv/</p>
    </div>
  `}function G(e){return`
    <section class="break-inside-avoid">
      <h2>Professional Profile</h2>
      <p>${e.replace(/\n\n/g,"<br><br>")}</p>
    </section>
  `}function R(e){return`
    <section class="experience-section break-inside-avoid">
      <h2>Professional Experience</h2>
      ${e.map(t=>{var o,n;return`
            <div>
              <h3>${t.role} — ${t.company}</h3>
              <p>${t.location?t.location+" • ":""}${t.duration||t.years}</p>
              ${(o=t.bullets)!=null&&o.length?`
                <p><strong>Contribution:</strong></p>
                <ul>${t.bullets.map(i=>`<li>${i}</li>`).join("")}</ul>
              `:""}
              ${(n=t.impact)!=null&&n.length?`
                <p><strong>Impact:</strong></p>
                <ul>${t.impact.map(i=>`<li>${i}</li>`).join("")}</ul>
              `:""}
            </div>
          `}).join("")}
    </section>
  `}function V(e){return`
    <section class="break-inside-avoid">
      <h2>Education</h2>
      <p>${e.degree}</p>
      <p>${e.university} (${e.years})</p>
    </section>
  `}function Y(e){return`
    <section class="break-inside-avoid">
      <h2>Technical Skills</h2>
      <ul>
        ${e.map(t=>`<li><strong>${t.category}:</strong> ${t.tools.join(", ")}</li>`).join("")}
      </ul>
    </section>
  `}function U(e){return`
    <section class="break-inside-avoid">
      <h2>Projects</h2>
      <ul>
        ${e.map(t=>`<li><strong>${t.name}:</strong> ${t.desc}</li>`).join("")}
      </ul>
    </section>
  `}function X(e){return`
    <section class="break-inside-avoid">
      <h2>Certifications & Courses</h2>
      <ul>
        ${e.filter(t=>t.name&&t.name.trim()!=="").map(t=>{var n,i,a;const o=[t.name.trim(),(n=t.provider)==null?void 0:n.trim(),(i=t.years)==null?void 0:i.trim()].filter(Boolean).join(" — ");return(a=t.link)!=null&&a.startsWith("http")?`<li class="break-inside-avoid"><a href="${t.link}" target="_blank" rel="noopener noreferrer"><em>${o}</em></a></li>`:`<li class="break-inside-avoid">${o}</li>`}).join("")}
      </ul>
    </section>
  `}function q(e){const t=document.getElementById("cv-ats");if(!t){console.error("ATS container element not found!");return}t.innerHTML=`
    <div class="cv-wrapper">
      ${W(e)}
      ${G(e.summary)}
      ${R(e.experiences)}
      ${V(e.education)}
      ${Y(e.tech_skill)}
      ${U(e.projects)}
      ${X(e.certifications)}
    </div>
  `}function Q(){return'<i class="fa-solid fa-download block md:hidden text-lg" data-testid="download-button-icon"></i>'}function K(){return'<span class="hidden md:inline" data-testid="download-button-label">Download CV</span>'}function ee(){const e=document.createElement("button");return e.id="download-btn",e.className="w-10 h-10 md:w-auto md:h-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2",e.setAttribute("data-testid","download-button"),e.innerHTML=`
      ${Q()}
      ${K()}
    `,e.addEventListener("click",()=>{const t=new CustomEvent("download:clicked");window.dispatchEvent(t)}),e}function te(){const e=document.createElement("div");e.id="preview-dialog",e.className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden",e.setAttribute("data-testid","preview-dialog");const t=document.createElement("div");t.className="bg-white rounded-lg shadow-xl w-full h-full max-w-[95%] mx-auto my-2 flex flex-col",t.setAttribute("data-testid","preview-dialog-content");const o=document.createElement("div");o.className="flex justify-between items-center p-4 border-b",o.setAttribute("data-testid","preview-dialog-header");const n=document.createElement("h2");n.className="text-xl font-semibold",n.textContent="Preview Profile",n.setAttribute("data-testid","preview-dialog-title");const i=document.createElement("button");i.className="text-gray-500 hover:text-gray-700",i.innerHTML='<i class="fas fa-times"></i>',i.setAttribute("data-testid","preview-dialog-close-button"),i.onclick=()=>{e.classList.add("hidden");const d=document.getElementById("cv-ats");d&&d.classList.add("hidden");const c=document.getElementById("loading-overlay");c&&c.classList.add("hidden")};const a=document.createElement("div");a.id="preview-content",a.className="flex-1 overflow-auto p-4",a.setAttribute("data-testid","preview-dialog-body");const s=document.createElement("style");s.textContent=`
        #preview-content {
            scrollbar-width: thin;
            scrollbar-color: #cbd5e0 #f7fafc;
            width: 100%;
            font-family: "Georgia", "Times New Roman", serif;
            font-size: 11pt;
            line-height: 1.5;
            color: #000;
            background-color: #fff;
            box-sizing: border-box;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            display: flex;
            justify-content: center;
        }
        
        #preview-content .cv-wrapper {
            padding: 2.5cm 2cm 2cm 2cm;
            box-sizing: border-box;
            width: 100%;
            max-width: 1000px;
            background: #fff;
            min-height: 297mm;
            margin: 0 auto;
        }
        
        #preview-content h1 {
            font-size: 22pt;
            font-weight: bold;
            margin-bottom: 8pt;
            color: #1a1a1a;
        }
        
        #preview-content h2 {
            font-size: 14pt;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 24pt;
            margin-bottom: 10pt;
            border-bottom: 1.5px solid #000;
            padding-bottom: 3pt;
            color: #1a1a1a;
            break-before: avoid;
            page-break-after: avoid;
        }
        
        #preview-content h3 {
            font-size: 12pt;
            font-weight: bold;
            margin-top: 24pt;
            margin-bottom: 4pt;
            color: #1a1a1a;
            page-break-after: avoid;
        }
        
        #preview-content section {
            margin-bottom: 24pt;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        #preview-content p {
            text-align: justify;
            margin: 6pt 0 8pt;
            orphans: 3;
            widows: 3;
        }
        
        #preview-content li {
            list-style-type: disc;
            margin-left: 20pt;
            margin-bottom: 6pt;
            text-align: left;
            page-break-inside: avoid;
            break-inside: avoid;
            orphans: 3;
            widows: 3;
        }
        
        #preview-content ul {
            padding-left: 0;
            margin-bottom: 16pt;
        }
        
        #preview-content .break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
            orphans: 3;
            widows: 3;
        }
        
        #preview-content table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8pt;
            margin-bottom: 12pt;
            table-layout: fixed;
            page-break-inside: avoid;
        }
        
        #preview-content th, #preview-content td {
            border: 1px solid #ccc;
            padding: 4pt 6pt;
            text-align: left;
            font-size: 10pt;
            word-wrap: break-word;
            vertical-align: top;
            page-break-inside: avoid;
        }
        
        #preview-content::-webkit-scrollbar {
            width: 8px;
        }
        
        #preview-content::-webkit-scrollbar-track {
            background: #f7fafc;
        }
        
        #preview-content::-webkit-scrollbar-thumb {
            background-color: #cbd5e0;
            border-radius: 4px;
        }
        
        #preview-content::-webkit-scrollbar-thumb:hover {
            background-color: #a0aec0;
        }
        
        @media (max-width: 640px) {
            #preview-dialog .dialog-content {
                margin: 0;
                border-radius: 0;
            }
            
            #preview-content .cv-wrapper {
                padding: 1.5cm 1cm 1cm 1cm;
            }
        }
    `,document.head.appendChild(s);const r=document.createElement("div");r.className="flex justify-end p-4 border-t",r.setAttribute("data-testid","preview-dialog-footer");const l=document.createElement("button");return l.className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition",l.innerHTML='<i class="fas fa-download mr-2"></i>Download CV',l.setAttribute("data-testid","preview-dialog-download-button"),l.onclick=()=>{const d=document.getElementById("loading-overlay");d&&d.classList.remove("hidden");const c=new CustomEvent("download:confirmed");window.dispatchEvent(c),e.classList.add("hidden")},o.appendChild(n),o.appendChild(i),r.appendChild(l),t.appendChild(o),t.appendChild(a),t.appendChild(r),e.appendChild(t),e}function ne(e){const t=document.getElementById("preview-dialog"),o=document.getElementById("preview-content");t&&o&&(o.innerHTML=e,t.classList.remove("hidden"))}function oe(e){return{margin:[10,0,10,0],filename:e,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,scrollY:0,windowWidth:1200,windowHeight:void 0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait",compress:!0},pagebreak:{mode:["avoid-all","css","legacy"],before:".page-break-before",after:".page-break-after",avoid:["tr","td","div.break-inside-avoid","li"]}}}function ie(e){const t=document.getElementById("cv-ats");q(e),t.classList.remove("hidden"),ne(t.innerHTML),window.addEventListener("download:confirmed",()=>{const n=new Date().toLocaleString("sv").replace(/ /g,"_").replace(/:/g,"-"),i=`CV_${e.name}_${n}.pdf`,a=document.getElementById("loading-overlay");a&&a.classList.remove("hidden"),setTimeout(()=>{html2pdf().set(oe(i)).from(t).save().then(()=>{console.log("PDF generated successfully!")}).catch(s=>{console.error("Error generating PDF:",s),alert("Failed to generate PDF. Please check the console for errors.")}).finally(()=>{t.classList.add("hidden"),a&&a.classList.add("hidden")})},100)},{once:!0})}async function ae(){var i;const e=await b(),t=ee();(i=document.getElementById("download-button-container"))==null||i.appendChild(t);const o=te();document.body.appendChild(o);const n=document.getElementById("download-btn");n&&n.addEventListener("click",()=>{ie(e)})}document.addEventListener("DOMContentLoaded",ae);function re(e){const t=document.createElement("div");t.textContent=e,t.className="fixed top-2 right-2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded shadow z-50",t.setAttribute("data-testid","branch-tag"),document.body.appendChild(t)}function se(){if(typeof __GIT_BRANCH__<"u"){const e=__GIT_BRANCH__.toLowerCase();e!=="master"&&e!=="main"&&re("Development Mode")}}function le(){return`
    <div class="text-center" data-testid="loading-overlay-content">
      <svg class="animate-spin h-8 w-8 text-blue-600 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-testid="loading-spinner">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      <p class="text-blue-700 text-sm font-medium" data-testid="loading-text">Downloading CV...</p>
    </div>
  `}function de(){const e=document.createElement("div");return e.id="loading-overlay",e.className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center hidden",e.setAttribute("data-testid","loading-overlay"),e.innerHTML=le(),e}function ce(){var e;(e=document.getElementById("loading-overlay"))==null||e.classList.remove("hidden")}function me(){var e;(e=document.getElementById("loading-overlay"))==null||e.classList.add("hidden")}function ue(){return`
    <div class="animate-pulse" role="dialog" aria-label="Welcome overlay" aria-busy="true" data-testid="welcome-overlay-content">
      <!-- Friendly Welcome -->
      <h1 class="mb-2 text-2xl sm:text-3xl font-bold text-blue-600" data-testid="welcome-overlay-title">
        Welcome to MRizkyP's Profile
      </h1>
      <p class="mb-6 text-sm sm:text-base text-gray-500" data-testid="welcome-overlay-message">
        Just a moment... we're preparing your experience 🚀
      </p>

      <!-- Skeleton Avatar -->
      <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 mx-auto mb-4" data-testid="welcome-overlay-avatar"></div>

      <!-- Skeleton Text Lines -->
      <div class="w-48 h-4 bg-gray-200 rounded mb-2 mx-auto" data-testid="welcome-overlay-skeleton-1"></div>
      <div class="w-40 h-4 bg-gray-200 rounded mb-2 mx-auto" data-testid="welcome-overlay-skeleton-2"></div>
      <div class="w-32 h-4 bg-gray-200 rounded mx-auto" data-testid="welcome-overlay-skeleton-3"></div>
    </div>
  `}function pe(){const e=document.createElement("div");return e.id="welcome-overlay",e.className=`
    fixed inset-0 z-50 flex flex-col items-center justify-center 
    bg-white text-gray-800 transition-opacity duration-500
    px-4 text-center
  `,e.setAttribute("data-testid","welcome-overlay"),e.innerHTML=ue(),e}function ge(){const e=document.getElementById("welcome-overlay");e&&(e.classList.add("opacity-0"),setTimeout(()=>e.remove(),500))}function fe(){return`
    <footer class="text-center text-xs text-gray-500 py-4 mt-6" data-testid="footer">
      <p data-testid="footer-text">&copy; ${new Date().getFullYear()} — Made with ❤️ by MRizkyP</p>
    </footer>
  `}function be(){const e=document.getElementById("footer");e&&(e.innerHTML=fe())}async function he(){var o;const e=pe();document.body.appendChild(e),setTimeout(()=>{ge()},1500);const t=await b();if(t)O(t),window.cvData=t;else{document.body.innerHTML='<p class="text-red-500 text-center mt-10">Failed to load profile data.</p>';return}_(),se(),(o=document.getElementById("loading-overlay-placeholder"))==null||o.appendChild(de()),window.addEventListener("download:clicked",async()=>{ce(),setTimeout(()=>{me()},3e3)}),be()}document.addEventListener("DOMContentLoaded",he);

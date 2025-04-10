(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function m(e){const i=document.getElementById("profile-photo"),n=document.getElementById("profile-photo-wrapper"),s=document.getElementById("profile-photo-link");i&&(i.src=e,i.style.maxWidth="150px",i.style.maxHeight="150px",i.setAttribute("data-testid","image-profile-photo")),n&&s&&!s.contains(n)&&(s.href=e,s.appendChild(n))}function p(e){const i=e.phone.replace(/[^0-9]/g,""),n=i.startsWith("08")?"62"+i.slice(1):i;document.getElementById("contact").innerHTML=`
      <span class="inline-flex items-center gap-1" data-testid="text-location">
        <i class="fas fa-map-marker-alt"></i> ${e.location}
      </span> <br/> 
  
      <span class="text-black-500 inline-flex items-center gap-1 cursor-pointer hover:underline hover:text-blue-500 transition-colors duration-150" title="Copy email" data-testid="text-email"
        onclick="navigator.clipboard.writeText('${e.email}').then(() => alert('Email copied!'))">
        <i class="far fa-envelope"></i> ${e.email}
      </span> · 
  
      <a href="https://wa.me/${n}" class="text-green-500 inline-flex items-center gap-1 hover:underline hover:text-green-600 transition-colors duration-150"
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
    `}function r({id:e,icon:i,title:n,content:s}){const t=document.getElementById(e);if(!t)return;const o=`
    <section class="mb-4 border-b border-gray-300 cursor-pointer" id="section-${e}">
      <div class="flex justify-between items-center px-4 py-2 bg-white" onclick="toggleSection('${e}')">
        <h2 class="text-2xl font-semibold flex items-center gap-2 cursor-pointer" data-testid="header-${e}">
          ${i} ${n}
        </h2>
        <button
          class="toggle-btn text-blue-500 text-xl font-bold"
          data-testid="button-toggle-${e}"
          id="toggle-btn-${e}"
          onclick="event.stopPropagation(); toggleSection('${e}')"
        >▲</button>
      </div>
      <div class="section-content px-4 pb-4" id="${e}-content">
        ${s}
      </div>
    </section>
  `;t.innerHTML=o}window.toggleSection=function(e){const i=document.getElementById(`${e}-content`),n=document.getElementById(`toggle-btn-${e}`);i.classList.contains("hidden")?(i.classList.remove("hidden"),n.innerHTML="▲"):(i.classList.add("hidden"),n.innerHTML="▼")};function u(e){document.getElementById("profile").innerHTML=`
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
  `,m(e.photo),p(e),r({id:"summary",icon:"📝",title:"Summary",content:`<p data-testid="text-summary">${e.summary}</p>`});const i=e.experiences.map((t,o)=>`
    <div class="mb-6">
      <h3 class="font-bold" data-testid="header-experience-role">${t.role} – ${t.company}</h3>
      <p class="text-sm text-gray-600" data-testid="text-experience-meta">${t.years}${t.location?" · "+t.location:""}</p>
      ${t.bullets.length?`<ul class="list-disc list-inside text-sm mt-1" data-testid="text-experience-bullets">${t.bullets.map(a=>`<li>${a}</li>`).join("")}</ul>`:""}
    </div>`).join("");r({id:"experiences",icon:"💼",title:"Experience",content:i}),r({id:"education",icon:"🎓",title:"Education",content:`<p data-testid="text-education"><strong>${e.education.degree}</strong><br>${e.education.university} (${e.education.years})</p>`}),r({id:"skills",icon:"🛠️",title:"Skills",content:`
      <span data-testid="text-skills-languages"><strong>Languages:</strong> ${e.skills.languages.join(", ")}</span><br>
      <span data-testid="text-skills-frameworks"><strong>Frameworks:</strong> ${e.skills.frameworks.join(", ")}</span><br>
      <span data-testid="text-skills-tools"><strong>Tools:</strong> ${e.skills.tools.join(", ")}</span>`});const n=e.projects.map((t,o)=>`
    <li><a href="${t.link}" class="text-blue-500 font-medium" target="_blank" rel="noopener noreferrer" data-testid="link-project-${o}">${t.name}</a> – 
    <span data-testid="text-project-desc-${o}">${t.desc}</span></li>`).join("");r({id:"projects",icon:"📂",title:"Projects",content:`<ul class="list-disc list-inside text-sm">${n}</ul>`});const s=e.certifications.filter(t=>t.name&&t.name.trim()!=="").map((t,o)=>{var l,d;const a=[t.type,t.name.trim(),(l=t.provider)==null?void 0:l.trim(),(d=t.years)==null?void 0:d.trim()].filter(Boolean).join(" – ");return t.link&&t.link.startsWith("http")?`<li><a href="${t.link}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" data-testid="link-certification-${o}">${a}</a></li>`:`<li data-testid="text-certification-${o}">${a}</li>`}).join("");r({id:"certifications",icon:"📜",title:"Certifications & Courses",content:`<ul class="list-disc list-inside text-sm">${s}</ul>`})}const c={photo:"https://raw.githubusercontent.com/RizkyMRP22/mrizkyp-cv/main/assets/image.png",name:"Mohammad Rizky Pratama",title:"Technical Lead & QA Engineer at Telkom Indonesia | CTFL - ISTQB",location:"Jakarta, Indonesia",email:"rizkymrp22@gmail.com",phone:"081350672619",github:"https://github.com/rizkymrp22",linkedin:"https://www.linkedin.com/in/mrizkyp22",summary:`Technical Lead and QA Engineer with over 5 years of experience at Telkom Indonesia, combining strong technical expertise with leadership in agile software development and quality assurance. Proven ability to lead cross-functional teams, define technical requirements, and ensure high-quality delivery of B2B digital products across the full software development lifecycle.</br>
  <br>Expert in test automation (Katalon Studio, Postman, JMeter), CI/CD pipelines (Jenkins), and incident management, with hands-on experience in improving development processes through data-driven insights. Skilled in JavaScript, TypeScript, Python, and frameworks such as Node.js and Playwright.js.</br>
  <br>Certified in ISTQB CTFL & CTAL-TA, with additional credentials in Scrum Mastery and Data Analytics. Former Industrial QA Lecturer at Telkom University, with a passion for mentoring and aligning industry practices with academic development.</br>
  <br>Dedicated to delivering scalable, user-centric, and reliable software solutions that support business growth and operational excellence.`,experiences:[{role:"Technical Lead B2B Regional Support",company:"Telkom Indonesia",years:"Jul 2024 – Present",location:"Jakarta, Indonesia",bullets:["Analyzed business needs and translated them into detailed technical requirements","Defined technical specifications aligned with customer profiling and market sizing objectives","Identified and assigned appropriate team resources","Collaborated with UI/UX Designers to create intuitive interfaces based on business workflows","Developed and managed a realistic implementation timeline using agile methodology","Led sprint planning and progress tracking to ensure timely delivery and alignment with business goals","Manage and analyze incident tickets from the operational team to identify root causes","Improve incident monitoring and update mechanisms for better visibility","Use insights from incident analysis to enhance the development process and refine backlog items to reduce recurring issues","Collaborate with Product Owner and management to support decision-making in development priorities, resolving obstacles, and handling non-technical needs"]},{role:"Industrial Lecturer",company:"Telkom University",years:"Mar 2022 – Dec 2023",location:"Bandung, Indonesia",bullets:["Appointed as the QA Class Coordinator for the Industrial Class program in collaboration with Telkom Indonesia","Delivered both synchronous and asynchronous mentoring sessions for QA students, including internship guidance","Assessed student performance through exams, classroom activities and internship","Developed QA learning modules and final exam materials aligned with industry needs"]},{role:"Software Quality Assurance Engineer",company:"Telkom Indonesia",years:"Dec 2018 – Present",location:"Jakarta, Indonesia",bullets:["Collaborate with Management, PO, Design team, and DEV team","Ensure business requirements are ready for development (Backlog, Design, and Document)","Lead multiple squads","Conduct talent recruitment interviews","Serve as a mentor","Manage production processes","Create Test Case Management with Xray and Confluence","Create Bug Management using JIRA and Confluence","Implement test automation for Android, iOS, Web, and API with Katalon Studio","Automate API testing with Newman Postman","Conduct performance testing using JMeter","Implement CI/CD testing using Jenkins","Manage infrastructure automation tests","Lead R&D for testing tools"]},{role:"Software Quality Assurance Engineer (Internship)",company:"Telkom Indonesia",years:"Jul 2018 – Dec 2018",location:"Bandung, Indonesia",bullets:[]}],education:{degree:"Bachelor's Degree in Computer Engineering",university:"Telkom University",years:"2013 – 2020"},skills:{languages:["JavaScript","TypeScript","Python"],frameworks:["Node.js","Playwright.JS"],tools:["Katalon Studio","JMeter","Postman","JIRA","Confluence","Jenkins CI","Docker","Git","Firebase","SQL","NoSQL"]},projects:[{name:"MyIndiBiz Assistant",link:"https://github.com/RizkyMRP22/myindibiz-assistant",desc:"Assistant for B2B market profiling and sizing"},{name:"MyTens GoBeyond",link:"https://newgobeyond.mytens.co.id/",desc:"Presales and Sales Funneling project in telkom"},{name:"MyTens Care",link:"https://care.mytens.co.id/",desc:"After sales projecte in telkom"},{name:"MyTens AMP",link:"https://cms.mytens.co.id/",desc:"Approval management project"}],certifications:[{type:"Cource",name:"Certified ISTQB® Test Analyst Advanced Level (CTAL-TA)",provider:"",link:"https://digilearn.udemy.com/certificate/UC-625b73c1-c112-4a91-8302-763d7967fa8b/",years:"2024"},{type:"Certification",name:"Certified Indonesia Scrum Master (ISM) 1",provider:"EKIPA",link:"https://drive.google.com/file/d/1OXEBQ3lSmikFh9BFl1Y5A1xT6bG4Cokd/view?usp=sharing",years:"2020"},{type:"Certification",name:"Certified Indonesia Scrum Master (ISM) 2",provider:"EKIPA",link:"https://drive.google.com/file/d/1pGWhDOxxhIgFrxwGoNhMVbu78fTOEgws/view?usp=sharing",years:"2021"},{type:"Cource",name:"Katalon Studio - Step by Step for Beginners",provider:"Udemy",link:"",years:""},{type:"Certification",name:"Google Data Analytics",provider:"Coursera",link:"https://www.coursera.org/account/accomplishments/specialization/certificate/D3A8DKD9QQSC",years:"2023"},{type:"Certification",name:"Certified Tester Foundation Level (CTFL)",provider:"ISTQB",link:"http://scr.istqb.org/?name=Mohammad+Rizky+Pratama&number=21-CTFL-187617-12&orderBy=relevancy&orderDirection=&dateStart=&dateEnd=&expiryStart=&expiryEnd=&certificationBody=&examProvider=&certificationLevel=&country=&resultsPerPage=10",years:"2021"},{type:"Certification",name:"Continuous Delivery and Devops",provider:"coursera",link:"",years:"2021"}]};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("access-time");if(e){const n=new Date().toLocaleString("en-GB",{hour12:!1});e.textContent=`CV Accessed: ${n}`}});function g(){document.querySelectorAll(".toggle-btn").forEach(e=>{e.addEventListener("click",()=>{const i=e.parentElement.nextElementSibling;i.classList.toggle("hidden"),e.textContent=i.classList.contains("hidden")?"▼":"▲"})})}function h(e){const i=document.getElementById("cv-ats");i.innerHTML=`
      <h1>${e.name}</h1>
      <p>Email: ${e.email}${e.phone?" | Phone: "+e.phone:""}</p>
      <p>
        GitHub:<em-i>${e.github}</em-i> | LinkedIn:<em-i> ${e.linkedin}</em-i>
      </p>
      <p>Location: ${e.location}</p>
  
      <h2>PROFESSIONAL PROFILE</h2>
      <p>${e.summary}</p>
  
      <h2>PROFESSIONAL EXPERIENCE</h2>
      ${e.experiences.map(n=>`
        <p><strong>${n.role} – ${n.company}</strong></p>
        <p>${n.location?n.location+" · ":""}${n.years}</p>
        ${n.bullets.length?`<ul>${n.bullets.map(s=>`<li>${s}</li>`).join("")}</ul>`:""}
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
        ${e.certifications.filter(n=>n.name&&n.name.trim()!=="").map(n=>{var t,o;const s=[n.name.trim(),(t=n.provider)==null?void 0:t.trim(),(o=n.years)==null?void 0:o.trim()].filter(Boolean).join(" – ");return n.link&&n.link.startsWith("http")?`<li><a href="${n.link}" target="_blank" rel="noopener noreferrer"><em>${s}</em></a></li>`:`<li>${s}</li>`}).join("")}
      </ul>
    `}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("download-btn"),n=new Date().toLocaleString("en-GB",{hour12:!1});e&&e.addEventListener("click",()=>{const s=document.getElementById("loading-overlay");s.classList.remove("hidden"),h(c);const t=document.getElementById("cv-ats");t.classList.remove("hidden");const o={margin:10,filename:`mrizkyp_cv_${n}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:3,useCORS:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}};html2pdf().set(o).from(t).save().then(()=>{s.classList.add("hidden"),t.classList.add("hidden")})})});function f(){if(typeof __GIT_BRANCH__<"u"){const e=__GIT_BRANCH__.toLowerCase();if(e==="develop"||e==="dev"){const i=document.createElement("div");i.textContent="Development Mode",i.className="fixed top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded shadow z-50",document.body.appendChild(i)}}}window.onload=()=>{u(c),g(),f()};

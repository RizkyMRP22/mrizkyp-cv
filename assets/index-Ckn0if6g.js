(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();let g="";function b(e){switch(e){case"Asia/Jakarta":return"WIB";case"Asia/Makassar":return"WITA";case"Asia/Jayapura":return"WIT";default:return""}}function w(e,t){return`🕒 Accessed: ${new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).format(e)} ${t}`}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("access-time");if(e){const t=new Date,o=Intl.DateTimeFormat().resolvedOptions().timeZone,n=b(o);g=w(t,n),e.textContent=g,e.title=t.toISOString(),e.setAttribute("data-testid","access-time")}});function y(){return g}function x(e,t,o,n){return`
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
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .photo-container {
            position: relative;
            display: inline-block;
            pointer-events: none;
          }
          canvas {
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            pointer-events: none;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
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
            pointer-events: none;
          }
          .watermark-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%);
            background-size: 100px 100px;
            pointer-events: none;
            opacity: 0.1;
          }
          
          /* Enhanced Loading Animation Styles */
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            flex-direction: column;
            backdrop-filter: blur(5px);
          }
          
          .loading-content {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .loading-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.1);
            border-top: 4px solid #007bff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          
          .loading-text {
            color: white;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 18px;
            margin-bottom: 20px;
            font-weight: 500;
          }
          
          .progress-steps {
            display: flex;
            justify-content: center;
            margin-top: 15px;
            gap: 8px;
          }
          
          .step {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
          }
          
          .step.active {
            background: #007bff;
            transform: scale(1.2);
          }
          
          .step-text {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            margin-top: 15px;
            font-family: system-ui, -apple-system, sans-serif;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          /* Download Button Styles */
          .download-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 24px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            font-family: system-ui, -apple-system, sans-serif;
            font-weight: 500;
            font-size: 15px;
            box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
          }
          
          .download-btn:hover {
            background: #0056b3;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
          }
          
          .download-btn:disabled {
            background: #cccccc;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
          }
        </style>
      </head>
      <body>
        <div class="photo-container" data-testid="photo-preview-container">
          <canvas id="photo-canvas" data-testid="photo-preview-image"></canvas>
          <div class="watermark-overlay"></div>

        </div>
        
        <!-- Enhanced Loading Overlay -->
        <div class="loading-overlay">
          <div class="loading-content">
            <div class="loading-spinner"></div>
            <div class="loading-text">Processing your image</div>
            <div class="progress-steps">
              <div class="step active" id="step1"></div>
              <div class="step" id="step2"></div>
              <div class="step" id="step3"></div>
            </div>
            <div class="step-text" id="stepText">Loading image...</div>
          </div>
        </div>
        
        <script>
          // Define watermark function in the preview window scope
          function addWatermarkToImage(image, fullname, title, accessTime) {
            return new Promise((resolve, reject) => {
              try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Set canvas size to match image
                canvas.width = image.width;
                canvas.height = image.height;

                // Draw the original image
                ctx.drawImage(image, 0, 0);

                // Add semi-transparent black overlay at the bottom
                const overlayHeight = 120; // Height of the dark overlay
                const gradient = ctx.createLinearGradient(0, canvas.height - overlayHeight, 0, canvas.height);
                gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, canvas.height - overlayHeight, canvas.width, overlayHeight);

                // Set text style for watermark
                ctx.textAlign = 'left';
                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;

                // Calculate text position
                const margin = 20;
                const lineHeight = 30;
                let y = canvas.height - overlayHeight + margin;

                // Draw fullname
                ctx.font = 'bold 28px system-ui, -apple-system, sans-serif';
                ctx.fillStyle = '#FFFFFF';
                ctx.fillText(fullname, margin, y + lineHeight);

                // Draw title
                ctx.font = '20px system-ui, -apple-system, sans-serif';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.fillText(title, margin, y + lineHeight * 2);

                // Draw access time with clock icon
                ctx.font = '16px system-ui, -apple-system, sans-serif';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                const clockIcon = '🕐';
                const accessTimeText = \`\${clockIcon} Accessed: ${n}\`;
                ctx.fillText(accessTimeText, margin, y + lineHeight * 3);

                // Convert canvas to blob
                canvas.toBlob((blob) => {
                  if (!blob) {
                    reject(new Error('Failed to create image blob'));
                    return;
                  }
                  resolve(URL.createObjectURL(blob));
                }, 'image/jpeg', 0.9);
              } catch (error) {
                reject(new Error(\`Watermark generation failed: \${error.message}\`));
              }
            });
          }

          // Prevent DevTools
          setInterval(() => {
            if (window.outerHeight - window.innerHeight > 100 || 
                window.outerWidth - window.innerWidth > 100) {
              document.body.innerHTML = 'Developer tools are not allowed.';
            }
          }, 1000);

          const canvas = document.getElementById('photo-canvas');
          const ctx = canvas.getContext('2d');
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = '${e}';
          
          img.onload = () => {
            // Calculate dimensions to maintain aspect ratio
            const maxWidth = window.innerWidth * 0.9;
            const maxHeight = window.innerHeight * 0.9;
            let width = img.width;
            let height = img.height;
            
            if (width > maxWidth) {
              height = (maxWidth / width) * height;
              width = maxWidth;
            }
            if (height > maxHeight) {
              width = (maxHeight / height) * width;
              height = maxHeight;
            }
            
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            // Add semi-transparent black overlay at the bottom
            const overlayHeight = 120;
            const gradient = ctx.createLinearGradient(0, canvas.height - overlayHeight, 0, canvas.height);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, canvas.height - overlayHeight, canvas.width, overlayHeight);

            // Set text style for watermark
            ctx.textAlign = 'left';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;

            // Calculate text position
            const margin = 20;
            const lineHeight = 30;
            let y = canvas.height - overlayHeight + margin;

            // Draw fullname
            ctx.font = 'bold 28px system-ui, -apple-system, sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText('${t}', margin, y + lineHeight);

            // Draw title
            ctx.font = '20px system-ui, -apple-system, sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillText('${o}', margin, y + lineHeight * 2);

            // Draw access time with clock icon
            ctx.font = '16px system-ui, -apple-system, sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            const clockIcon = '🕐';
            const accessTimeText = \` ${n}\`;
            ctx.fillText(accessTimeText, margin, y + lineHeight * 3);
          };
          
          function updateLoadingState(step) {
            const steps = document.querySelectorAll('.step');
            const stepText = document.getElementById('stepText');
            const loadingText = document.querySelector('.loading-text');
            
            steps.forEach((s, index) => {
              s.classList.remove('active');
              if (index < step) s.classList.add('active');
            });
            
            switch(step) {
              case 1:
                stepText.textContent = 'Loading image...';
                loadingText.textContent = 'Processing your image';
                break;
              case 2:
                stepText.textContent = 'Generating watermark...';
                loadingText.textContent = 'Almost there';
                break;
              case 3:
                stepText.textContent = 'Preparing download...';
                loadingText.textContent = 'Finalizing';
                break;
            }
          }
          
          // Create and add download button with enhanced loading state
          const downloadBtn = document.createElement('button');
          downloadBtn.textContent = 'Download with Watermark';
          downloadBtn.className = 'download-btn';
          
          downloadBtn.onclick = async () => {
            try {
              // Show loading overlay and disable button
              const loadingOverlay = document.querySelector('.loading-overlay');
              loadingOverlay.style.display = 'flex';
              downloadBtn.disabled = true;
              downloadBtn.textContent = 'Processing...';
              
              // Step 1: Load image
              updateLoadingState(1);
              const img = new Image();
              img.crossOrigin = 'anonymous';
              
              await new Promise((resolve, reject) => {
                img.onload = () => {
                  console.log('Image loaded successfully:', img.width, 'x', img.height);
                  resolve();
                };
                img.onerror = (error) => {
                  console.error('Image load error:', error);
                  reject(new Error('Failed to load image. Please check the image URL and try again.'));
                };
                img.src = '${e}';
              });
              
              // Step 2: Generate watermark
              updateLoadingState(2);
              await new Promise(resolve => setTimeout(resolve, 500));
              console.log('Starting watermark generation...');
              const watermarkedUrl = await addWatermarkToImage(img, '${t}', '${o}', '${n}')
                .catch(error => {
                  console.error('Watermark generation error:', error);
                  throw new Error('Failed to add watermark to image: ' + error.message);
                });
              console.log('Watermark generated successfully');
              
              // Step 3: Prepare download
              updateLoadingState(3);
              await new Promise(resolve => setTimeout(resolve, 500));
              
              // Create and trigger download
              const a = document.createElement('a');
              a.href = watermarkedUrl;
              a.download = \`${t.toLowerCase().replace(/\s+/g,"-")}-watermarked.jpg\`;
              document.body.appendChild(a);
              
              console.log('Initiating download...');
              a.click();
              document.body.removeChild(a);
              
              // Cleanup
              URL.revokeObjectURL(watermarkedUrl);
              console.log('Download process completed');
              
            } catch (error) {
              console.error('Download process failed:', error);
              alert(error.message || 'Failed to generate watermarked image. Please try again.');
            } finally {
              // Hide loading overlay and reset button
              const loadingOverlay = document.querySelector('.loading-overlay');
              loadingOverlay.style.display = 'none';
              downloadBtn.disabled = false;
              downloadBtn.textContent = 'Download with Watermark';
            }
          };
          
          document.body.appendChild(downloadBtn);
          
          // Prevent right-click menu
          document.addEventListener('contextmenu', (e) => e.preventDefault());
          
          // Prevent keyboard shortcuts
          document.addEventListener('keydown', (e) => {
            if (
              // Prevent Ctrl/Cmd + S
              (e.key === 's' && (e.ctrlKey || e.metaKey)) ||
              // Prevent Ctrl/Cmd + P
              (e.key === 'p' && (e.ctrlKey || e.metaKey)) ||
              // Prevent PrtScr
              e.key === 'PrintScreen' ||
              // Prevent Ctrl/Cmd + Shift + I/J/C (DevTools)
              ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'j' || e.key === 'c')) ||
              // Prevent F12
              e.key === 'F12'
            ) {
              e.preventDefault();
              return false;
            }
          });
          
          // Prevent drag and drop
          document.addEventListener('dragstart', (e) => e.preventDefault());
          
          // Disable copy
          document.addEventListener('copy', (e) => e.preventDefault());
          
          // Prevent selection
          document.addEventListener('selectstart', (e) => e.preventDefault());
          
          // Disable right-click on canvas specifically
          canvas.addEventListener('contextmenu', (e) => e.preventDefault());
        <\/script>
      </body>
    </html>
  `}function v(e,t,o){const n=document.getElementById("profile-photo"),a=document.getElementById("profile-photo-wrapper"),i=document.getElementById("profile-photo-link");!e||typeof e!="string"||(n&&(n.src=e,n.alt=`${t} profile photo`,n.className="w-full h-full object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-105",n.setAttribute("data-testid","profile-photo"),n.style.pointerEvents="none",n.setAttribute("draggable","false"),n.addEventListener("contextmenu",r=>r.preventDefault())),i&&(i.href="#",i.setAttribute("data-testid","profile-photo-link"),i.onclick=async r=>{r.preventDefault();const s=window.open("","_blank");s.document.write(x(e,t,o,y())),s.document.close()}),a&&i&&!i.contains(a)&&(a.setAttribute("data-testid","profile-photo-wrapper"),i.appendChild(a)),a&&a.classList.add("relative"),document.addEventListener("keydown",r=>{if((r.ctrlKey||r.metaKey)&&(r.key==="s"||r.key==="p"))return r.preventDefault(),!1}))}function k(e){return`
    <span class="inline-flex items-center gap-1" data-testid="text-location">
      <i class="fas fa-map-marker-alt"></i> ${e}
    </span><br/>
  `}function $(e){return`
    <span
      class="inline-flex items-center gap-1 cursor-pointer hover:underline hover:text-blue-500 transition"
      title="Click to copy email"
      data-testid="text-email"
      onclick="navigator.clipboard.writeText('${e}').then(() => alert('📧 Email copied to clipboard'))"
    >
      <i class="far fa-envelope text-gray-500"></i> ${e}
    </span> <a>·</a>
  `}function L(e){const t=e.replace(/[^0-9]/g,"");return`
    <a href="https://wa.me/${t.startsWith("08")?"62"+t.slice(1):t}" class="text-green-500 inline-flex items-center gap-1 hover:underline hover:text-green-600 transition-colors duration-150"
      title="Open WhatsApp" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp">
      <i class="fab fa-whatsapp"></i> Chat Me
    </a><br/>
  `}function E(e,t){return`
    <a href="${e}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150"
      title="Open GitHub" target="_blank" rel="noopener noreferrer" data-testid="link-github">
      <i class="fab fa-github"></i> GitHub
    </a> · 
    <a href="${t}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150"
      title="Open LinkedIn" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
  `}function C(e){document.getElementById("contact").innerHTML=`
    ${k(e.location)}
    ${$(e.email)}
    ${L(e.phone)}
    ${E(e.github,e.linkedin)}
  `}function I({id:e,icon:t,title:o,content:n}){return`
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
  `}function T(e,t){e.classList.toggle("fa-chevron-up",!t),e.classList.toggle("fa-chevron-down",t)}function m({id:e,icon:t="",title:o,content:n}){const a=document.getElementById(e);a&&(a.innerHTML=I({id:e,icon:t,title:o,content:n}))}window.toggleSection=function(e){const t=document.getElementById(`${e}-content`),n=document.getElementById(`toggle-btn-${e}`).querySelector("i"),a=t.classList.toggle("hidden");T(n,a)};function S(e){return e.map(t=>`<th class="px-4 py-2 text-center border">${t}</th>`).join("")}function P(e){return e.map(t=>`
      <tr class="border-b">
        ${t.map(o=>`<td class="px-4 py-2 border">${o}</td>`).join("")}
      </tr>
    `).join("")}function h({headers:e=[],rows:t=[]}){if(!e.length||!t.length)return"";const o=S(e),n=P(t);return`
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
  `}function j(e,t){const o=document.getElementById(e);o&&(o.classList.toggle("hidden"),t.textContent=o.classList.contains("hidden")?"Show More":"Show Less")}window.toggleExperienceDetails=j;function H(e){return e.map((t,o)=>{var a,i,r;const n=`experience-content-${o}`;return`
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
          ${(a=t.bullets)!=null&&a.length?`
            <div class="text-sm text-gray-700 mb-2" data-testid="text-bullets">
              <strong class="block text-gray-800 mb-1">Contribution:</strong>
              <ul class="list-disc text-justify list-inside space-y-1 pl-4" data-testid="text-experience-bullets">
                ${t.bullets.map(s=>`<li>${s}</li>`).join("")}
              </ul>
            </div>`:""}
          ${(i=t.impact)!=null&&i.length?`
            <div class="text-sm text-gray-700 mb-2" data-testid="text-impacts">
              <strong class="block text-gray-800 mb-1">Impact:</strong>
              <ul class="list-disc text-justify list-inside space-y-1 pl-4" data-testid="text-experience-impact">
                ${t.impact.map(s=>`<li>${s}</li>`).join("")}
              </ul>
            </div>`:""}
          ${(r=t.product)!=null&&r.length?`
            <div class="text-sm text-gray-700" data-testid="text-product">
              <strong class="block text-gray-800 mb-1">Product:</strong>
              ${h({headers:["Name","Framework","Platform","Duration"],rows:t.product.map(s=>[s.name||"-",Array.isArray(s.framework)?s.framework.join(", "):s.framework||"-",Array.isArray(s.platform)?s.platform.join(", "):s.platform||"-",s.duration||"-"])})}
            </div>`:""}
        </div>
      </section>`}).join("")}function B(e){return e.map(t=>`
    <li class="mb-1 text-justify"><strong>${t.category}:</strong> ${t.tools.join(", ")}</li>
  `).join("")}function A(e){return e.map((t,o)=>`
    <li class="mb-1 text-justify">
      <a href="${t.link}" class="text-blue-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer"
        data-testid="link-project-${o}">${t.name}</a> – 
      <span data-testid="text-project-desc-${o}">${t.desc}</span>
    </li>
  `).join("")}function O(e){return`
    <div class="text-sm text-gray-700" data-testid="text-education">
      <strong>${e.degree}</strong><br>
      ${e.university} (${e.years})
    </div>
  `}function D(e){const t=e.summary.replace(/\n\n/g,"<br><br>");document.getElementById("profile").innerHTML=`
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
  `,v(e.photo,e.name,e.title),C(e),m({id:"summary",icon:"📝",title:"Summary",content:`
      <p class="text-sm text-justify text-gray-700 leading-relaxed" data-testid="text-summary">${t}</p>
    `});const o=H(e.experiences);m({id:"experiences",icon:"💼",title:"Experience",content:o}),m({id:"education",icon:"🎓",title:"Education",content:O(e.education)}),m({id:"skills",icon:"🛠️",title:"Skills",content:`
      <ul class="list-inside list-disc text-sm text-gray-700" data-testid="text-skills-tools">
        ${B(e.tech_skill)}
      </ul>
    `}),m({id:"projects",icon:"📂",title:"Projects",content:`
      <ul class="list-disc list-inside text-sm text-gray-700">
        ${A(e.projects)}
      </ul>
    `}),m({id:"certifications",icon:"📜",title:"Certifications & Courses",content:h({headers:["Type","Name","Provider","Years","Certificate"],rows:e.certifications.filter(n=>n.name&&n.name.trim()!=="").map((n,a)=>{var p,u;const i=n.type||"-",r=n.name.trim(),s=((p=n.provider)==null?void 0:p.trim())||"-",l=((u=n.years)==null?void 0:u.trim())||"-",c=n.link&&n.link.startsWith("http")?`<a href="${n.link}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" data-testid="link-certification-${a}">View</a>`:`<span class="text-gray-400 cursor-not-allowed" data-testid="disabled-certification-${a}">Not Available</span>`;return[i,`<span data-testid="text-certification-${a}">${r}</span>`,s,l,c]})})})}function M(e,t){e.classList.toggle("fa-chevron-down",t),e.classList.toggle("fa-chevron-up",!t)}function z(e){return e.classList.toggle("hidden")}function N(){document.querySelectorAll(".header-toggle").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.sectionId,o=document.getElementById(`${t}-content`),n=document.getElementById(`toggle-btn-${t}`),a=n.querySelector("i");e.setAttribute("data-testid",`toggle-section-header-${t}`),o.setAttribute("data-testid",`toggle-section-content-${t}`),n.setAttribute("data-testid",`toggle-section-button-${t}`),a.setAttribute("data-testid",`toggle-section-icon-${t}`);const i=z(o);M(a,i)})})}const F="https://pyplcerpnbnphvgyppou.supabase.co",W={PROFILE:"/rest/v1/cv?select=data"};async function _(e,t={}){const o=`${F}${e}`;try{const n=await fetch(o,{headers:{"Content-Type":"application/json",...t.headers||{}},...t});if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return(await n.json())[0].data}catch(n){return console.error(`API error [${o}]:`,n.message),null}}function f(){const e={headers:{apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cGxjZXJwbmJucGh2Z3lwcG91Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDUxOTc1OSwiZXhwIjoyMDYwMDk1NzU5fQ.Iwya0raPROgSj_dgaHH0PLphJlwgUnYfCODxdxqgrkY",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cGxjZXJwbmJucGh2Z3lwcG91Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDUxOTc1OSwiZXhwIjoyMDYwMDk1NzU5fQ.Iwya0raPROgSj_dgaHH0PLphJlwgUnYfCODxdxqgrkY"}};return _(W.PROFILE,e)}function J(){return window.location.origin.replace(/^https?:\/\//,"").replace(/\/$/,"")}function R({name:e,email:t,phone:o,github:n,linkedin:a,location:i}){return J(),`
    <div class="break-inside-avoid">
      <h1>${e}</h1>
      <p>Location: ${i} | Email: ${t}${o?" | Phone: "+o:""}</p>
      <p>GitHub: ${n} | LinkedIn: ${a}</p>
      <p>Portofolio: https://rizkymrp22.github.io/mrizkyp-cv/</p>
    </div>
  `}function G(e){return`
    <section class="break-inside-avoid">
      <h2>Professional Profile</h2>
      <p>${e.replace(/\n\n/g,"<br><br>")}</p>
    </section>
  `}function Z(e){return`
    <section class="experience-section break-inside-avoid">
      <h2>Professional Experience</h2>
      ${e.map(t=>{var o,n;return`
            <div>
              <h3>${t.role} — ${t.company}</h3>
              <p>${t.location?t.location+" • ":""}${t.duration||t.years}</p>
              ${(o=t.bullets)!=null&&o.length?`
                <p><strong>Contribution:</strong></p>
                <ul>${t.bullets.map(a=>`<li>${a}</li>`).join("")}</ul>
              `:""}
              ${(n=t.impact)!=null&&n.length?`
                <p><strong>Impact:</strong></p>
                <ul>${t.impact.map(a=>`<li>${a}</li>`).join("")}</ul>
              `:""}
            </div>
          `}).join("")}
    </section>
  `}function U(e){return`
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
  `}function V(e){return`
    <section class="break-inside-avoid">
      <h2>Projects</h2>
      <ul>
        ${e.map(t=>`<li><strong>${t.name}:</strong> ${t.desc}</li>`).join("")}
      </ul>
    </section>
  `}function q(e){return`
    <section class="break-inside-avoid">
      <h2>Certifications & Courses</h2>
      <ul>
        ${e.filter(t=>t.name&&t.name.trim()!=="").map(t=>{var n,a,i;const o=[t.name.trim(),(n=t.provider)==null?void 0:n.trim(),(a=t.years)==null?void 0:a.trim()].filter(Boolean).join(" — ");return(i=t.link)!=null&&i.startsWith("http")?`<li class="break-inside-avoid"><a href="${t.link}" target="_blank" rel="noopener noreferrer"><em>${o}</em></a></li>`:`<li class="break-inside-avoid">${o}</li>`}).join("")}
      </ul>
    </section>
  `}function K(e){const t=document.getElementById("cv-ats");if(!t){console.error("ATS container element not found!");return}t.innerHTML=`
    <div class="cv-wrapper">
      ${R(e)}
      ${G(e.summary)}
      ${Z(e.experiences)}
      ${U(e.education)}
      ${Y(e.tech_skill)}
      ${V(e.projects)}
      ${q(e.certifications)}
    </div>
  `}function X(){return'<i class="fa-solid fa-download block md:hidden text-lg" data-testid="download-button-icon"></i>'}function Q(){return'<span class="hidden md:inline" data-testid="download-button-label">Download CV</span>'}function ee(){const e=document.createElement("button");return e.id="download-btn",e.className="w-10 h-10 md:w-auto md:h-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2",e.setAttribute("data-testid","download-button"),e.innerHTML=`
      ${X()}
      ${Q()}
    `,e.addEventListener("click",()=>{const t=new CustomEvent("download:clicked");window.dispatchEvent(t)}),e}function te(){const e=document.createElement("div");e.id="preview-dialog",e.className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden",e.setAttribute("data-testid","preview-dialog");const t=document.createElement("div");t.className="bg-white rounded-lg shadow-xl w-full h-full max-w-[95%] mx-auto my-2 flex flex-col",t.setAttribute("data-testid","preview-dialog-content");const o=document.createElement("div");o.className="flex justify-between items-center p-4 border-b",o.setAttribute("data-testid","preview-dialog-header");const n=document.createElement("h2");n.className="text-xl font-semibold",n.textContent="Preview Profile",n.setAttribute("data-testid","preview-dialog-title");const a=document.createElement("button");a.className="text-gray-500 hover:text-gray-700",a.innerHTML='<i class="fas fa-times"></i>',a.setAttribute("data-testid","preview-dialog-close-button"),a.onclick=()=>{e.classList.add("hidden");const d=document.getElementById("cv-ats");d&&d.classList.add("hidden");const c=document.getElementById("loading-overlay");c&&c.classList.add("hidden")};const i=document.createElement("div");i.id="preview-content",i.className="flex-1 overflow-auto p-4",i.setAttribute("data-testid","preview-dialog-body");const r=document.createElement("style");r.textContent=`
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
    `,document.head.appendChild(r);const s=document.createElement("div");s.className="flex justify-end p-4 border-t",s.setAttribute("data-testid","preview-dialog-footer");const l=document.createElement("button");return l.className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition",l.innerHTML='<i class="fas fa-download mr-2"></i>Download CV',l.setAttribute("data-testid","preview-dialog-download-button"),l.onclick=()=>{const d=document.getElementById("loading-overlay");d&&d.classList.remove("hidden");const c=new CustomEvent("download:confirmed");window.dispatchEvent(c),e.classList.add("hidden")},o.appendChild(n),o.appendChild(a),s.appendChild(l),t.appendChild(o),t.appendChild(i),t.appendChild(s),e.appendChild(t),e}function ne(e){const t=document.getElementById("preview-dialog"),o=document.getElementById("preview-content");t&&o&&(o.innerHTML=e,t.classList.remove("hidden"))}function oe(e){return{margin:[10,0,10,0],filename:e,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,scrollY:0,windowWidth:1200,windowHeight:void 0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait",compress:!0},pagebreak:{mode:["avoid-all","css","legacy"],before:".page-break-before",after:".page-break-after",avoid:["tr","td","div.break-inside-avoid","li"]}}}function ae(e){const t=document.getElementById("cv-ats");K(e),t.classList.remove("hidden"),ne(t.innerHTML),window.addEventListener("download:confirmed",()=>{const n=new Date().toLocaleString("sv").replace(/ /g,"_").replace(/:/g,"-"),a=`CV_${e.name}_${n}.pdf`,i=document.getElementById("loading-overlay");i&&i.classList.remove("hidden"),setTimeout(()=>{html2pdf().set(oe(a)).from(t).save().then(()=>{console.log("PDF generated successfully!")}).catch(r=>{console.error("Error generating PDF:",r),alert("Failed to generate PDF. Please check the console for errors.")}).finally(()=>{t.classList.add("hidden"),i&&i.classList.add("hidden")})},100)},{once:!0})}async function ie(){var a;const e=await f(),t=ee();(a=document.getElementById("download-button-container"))==null||a.appendChild(t);const o=te();document.body.appendChild(o);const n=document.getElementById("download-btn");n&&n.addEventListener("click",()=>{ae(e)})}document.addEventListener("DOMContentLoaded",ie);function re(e){const t=document.createElement("div");t.textContent=e,t.className="fixed top-2 right-2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded shadow z-50",t.setAttribute("data-testid","branch-tag"),document.body.appendChild(t)}function se(){if(typeof __GIT_BRANCH__<"u"){const e=__GIT_BRANCH__.toLowerCase();e!=="master"&&e!=="main"&&re("Development Mode")}}function le(){const e=document.createElement("div");e.className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4";const t=document.createElement("div");t.className="text-red-500 text-6xl mb-4",t.innerHTML="⚠️";const o=document.createElement("h1");o.className="text-2xl font-bold text-gray-800 mb-2",o.textContent="Failed to Load Profile";const n=document.createElement("p");n.className="text-gray-600 text-center mb-6",n.textContent="We couldn't load your profile data. Please try refreshing the page or contact support if the problem persists.";const a=document.createElement("button");return a.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",a.textContent="Retry",a.onclick=()=>window.location.reload(),e.appendChild(t),e.appendChild(o),e.appendChild(n),e.appendChild(a),e}function de(){return`
    <div class="text-center" data-testid="loading-overlay-content">
      <svg class="animate-spin h-8 w-8 text-blue-600 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-testid="loading-spinner">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      <p class="text-blue-700 text-sm font-medium" data-testid="loading-text">Downloading CV...</p>
    </div>
  `}function ce(){const e=document.createElement("div");return e.id="loading-overlay",e.className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center hidden",e.setAttribute("data-testid","loading-overlay"),e.innerHTML=de(),e}function me(){var e;(e=document.getElementById("loading-overlay"))==null||e.classList.remove("hidden")}function ge(){var e;(e=document.getElementById("loading-overlay"))==null||e.classList.add("hidden")}function pe(){return`
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
  `}function ue(){const e=document.createElement("div");return e.id="welcome-overlay",e.className=`
    fixed inset-0 z-50 flex flex-col items-center justify-center 
    bg-white text-gray-800 transition-opacity duration-500
    px-4 text-center
  `,e.setAttribute("data-testid","welcome-overlay"),e.innerHTML=pe(),e}function he(){const e=document.getElementById("welcome-overlay");e&&(e.classList.add("opacity-0"),setTimeout(()=>e.remove(),500))}function fe(){return`
    <footer class="text-center text-xs text-gray-500 py-4 mt-6" data-testid="footer">
      <p data-testid="footer-text">&copy; ${new Date().getFullYear()} — Made with ❤️ by MRizkyP</p>
    </footer>
  `}function be(){const e=document.getElementById("footer");e&&(e.innerHTML=fe())}async function we(){var o;const e=ue();document.body.appendChild(e),setTimeout(()=>{he()},1500);const t=await f();if(t)D(t),window.cvData=t;else{document.body.innerHTML="",document.body.appendChild(le());return}N(),se(),(o=document.getElementById("loading-overlay-placeholder"))==null||o.appendChild(ce()),window.addEventListener("download:clicked",async()=>{me(),setTimeout(()=>{ge()},3e3)}),be()}document.addEventListener("DOMContentLoaded",we);

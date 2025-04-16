import { getLatestAccessTime } from "./timestamp";

export function renderPhoto(photoUrl, fullname, title) {
  const photoImg = document.getElementById("profile-photo");
  const photoWrapper = document.getElementById("profile-photo-wrapper");
  const photoLink = document.getElementById("profile-photo-link");

  // ✅ Validate photo URL
  if (!photoUrl || typeof photoUrl !== "string") return;

  // ✅ Set photo attributes and styling
  if (photoImg) {
    photoImg.src = photoUrl;
    photoImg.alt = `${fullname} profile photo`;
    photoImg.className = "w-full h-full object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-105";
    photoImg.setAttribute("data-testid", "image-profile-photo");
  }

  // ✅ Update link to open image in new tab with overlay
  if (photoLink) {
    photoLink.href = "#";
    photoLink.onclick = (e) => {
      e.preventDefault();

      const newTab = window.open("", "_blank");
      newTab.document.write(`
        <html>
          <head>
            <title>${fullname} Photo</title>
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
            <div class="photo-container">
              <img src="${photoUrl}" alt="${fullname} profile photo" />
              <div class="info-overlay">
                <p>${fullname}</p>
                <p>${title}</p>
                <p>${getLatestAccessTime()}</p>
              </div>
            </div>
          </body>
        </html>
      `);
      newTab.document.close();
    };
  }

  // ✅ Ensure wrapper is in link (avoid duplicate)
  if (photoWrapper && photoLink && !photoLink.contains(photoWrapper)) {
    photoLink.appendChild(photoWrapper);
  }

  // ✅ Add overlay text with full name and website
  if (photoWrapper) {
    photoWrapper.classList.add("relative"); // Ensure positioning context
  }
}
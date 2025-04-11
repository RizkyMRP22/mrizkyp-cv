export function renderPhoto(photoUrl) {
  const photoImg = document.getElementById("profile-photo");
  const photoWrapper = document.getElementById("profile-photo-wrapper");
  const photoLink = document.getElementById("profile-photo-link");

  // ✅ Validate photo URL
  if (!photoUrl || typeof photoUrl !== "string") return;

  // ✅ Set photo attributes and styling
  if (photoImg) {
    photoImg.src = photoUrl;
    photoImg.alt = "MRizkyP profile photo";
    photoImg.className = "w-full h-full object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-105";
    photoImg.setAttribute("data-testid", "image-profile-photo");
  }

  // ✅ Update link to open image in new tab
  if (photoLink) {
    photoLink.href = photoUrl;
    photoLink.target = "_blank";
    photoLink.setAttribute("aria-label", "View full-size profile photo");
  }

  // ✅ Ensure wrapper is in link (avoid duplicate)
  if (photoWrapper && photoLink && !photoLink.contains(photoWrapper)) {
    photoLink.appendChild(photoWrapper);
  }
}
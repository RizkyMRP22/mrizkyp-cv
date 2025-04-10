export function renderPhoto(photoUrl) {
    const photoImg = document.getElementById("profile-photo");
    const photoWrapper = document.getElementById("profile-photo-wrapper");
    const photoLink = document.getElementById("profile-photo-link");
  
    if (photoImg) {
      photoImg.src = photoUrl;
      photoImg.style.maxWidth = "150px";
      photoImg.style.maxHeight = "150px";
      photoImg.setAttribute("data-testid", "image-profile-photo");
    }
  
    if (photoWrapper && photoLink && !photoLink.contains(photoWrapper)) {
      photoLink.href = photoUrl;
      photoLink.appendChild(photoWrapper);
    }
  }
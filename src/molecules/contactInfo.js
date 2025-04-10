export function renderContactSection(cvData) {
    const cleanedPhone = cvData.phone.replace(/[^0-9]/g, '');
    const whatsappPhone = cleanedPhone.startsWith('08') ? '62' + cleanedPhone.slice(1) : cleanedPhone;
  
    document.getElementById("contact").innerHTML = `
      <span class="inline-flex items-center gap-1" data-testid="text-location">
        <i class="fas fa-map-marker-alt"></i> ${cvData.location}
      </span> <br/> 
  
      <span class="text-black-500 inline-flex items-center gap-1 cursor-pointer hover:underline hover:text-blue-500 transition-colors duration-150" title="Copy email" data-testid="text-email"
        onclick="navigator.clipboard.writeText('${cvData.email}').then(() => alert('Email copied!'))">
        <i class="far fa-envelope"></i> ${cvData.email}
      </span> · 
  
      <a href="https://wa.me/${whatsappPhone}" class="text-green-500 inline-flex items-center gap-1 hover:underline hover:text-green-600 transition-colors duration-150"
        title="Open WhatsApp" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp">
        <i class="fab fa-whatsapp"></i> Chat Me
      </a><br/>
  
      <a href="${cvData.github}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150"
        title="Open GitHub" target="_blank" rel="noopener noreferrer" data-testid="link-github">
        <i class="fab fa-github"></i> GitHub
      </a> · 
  
      <a href="${cvData.linkedin}" class="text-blue-500 inline-flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors duration-150"
        title="Open LinkedIn" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
    `;
  }
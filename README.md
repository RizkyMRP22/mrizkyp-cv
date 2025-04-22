# 🌐 Rizky MRP – Dynamic CV

A modern, interactive, and responsive Curriculum Vitae (CV) designed using **HTML**, **Tailwind CSS**, **Vite**, and **JavaScript**. This CV follows the **Atomic Design Pattern**, and all content is dynamically generated from a single `data.js` source file — allowing easy updates without directly editing the layout.

🔗 **Live Demo**: [View My CV](https://rizkymrp22.github.io/mrizkyp-cv)

---

## ✨ Features

- ⚡ **Modular Atomic Architecture** (atoms, molecules, organisms)
- 🎨 Clean, responsive design using **Tailwind CSS**
- 🔄 All content generated dynamically from `data.js`
- 💾 One-click **PDF download** (ATS version)
- 🧠 Built with **ES Modules**, powered by **Vite**
- 🚀 Easily deployable on **GitHub Pages**

---

## 🗂️ Project Structure

```
mrizkyp-cv/
├── assets/                      # Static files
│   ├── ats.css                 # Print/PDF-specific styles
│   └── image.png               # Profile image
├── dist/                       # Built output (auto-generated)
├── node_modules/               # Dependencies (ignored in Git)
├── src/                        # Source code (modular structure)
│   ├── atoms/                  # Reusable UI logic
│   │   ├── branchCheck.js
│   │   ├── photo.js
│   │   ├── timestamp.js
│   │   └── toggleSection.js
│   ├── molecules/              # Content blocks
│   │   ├── contactInfo.js
│   │   └── section.js
│   ├── organisms/              # Rendering & PDF logic
│   │   ├── download.js
│   │   ├── renderATSView.js
│   │   └── renderWebView.js
│   ├── data.js                 # Personal profile data
│   ├── main.css                # Tailwind entry point
│   └── main.js                 # JS entry point
├── .gitignore
├── index.html                  # Main HTML entry
├── package.json
├── package-lock.json
├── README.md                   # Project docs
├── tailwind.config.js          # Tailwind setup
└── vite.config.js              # Vite setup
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the app locally
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

> Make sure to update `vite.config.js` with your correct `base` path if deploying to GitHub Pages.

---

## 🧩 Inspired By

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

Made with 💙 by [@rizkymrp22](https://github.com/rizkymrp22)

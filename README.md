# 🚀 JSON-Driven Developer Portfolio Template

A modern, highly attractive, and fully responsive developer portfolio where all content is dynamically driven by a single JSON file. Supporting smooth page transitions, scroll animations, and three beautiful interactive themes: **Light**, **Dark**, and **Cyberpunk**.

---

## ✨ Features

- **Dynamic Data-Driven**: Update the entire portfolio (bio, skills, projects, links) simply by editing a single JSON file.
- **Three Curated Themes**:
  - ☀️ **Light**: Clean, minimal, high-contrast.
  - 🌙 **Dark**: Modern, slate-gray developer theme (matches OS preference by default).
  - ⚡ **Cyberpunk**: Glow-in-the-dark borders, grid scanner backgrounds, and neon accents.
- **Fluid Motion**: Scroll-triggered slide-ins, project filtering, and interactive card hovers powered by Framer Motion.
- **Modular Components**: Structured with reusable React files (`Navbar`, `HeroSection`, `SkillsSection`, `ProjectsGrid`, `ProjectCard`, `Footer`).
- **Fully Responsive**: Optimized layout for smartphones, tablets, and desktop displays.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (initialized with Vite)
- **Styling**: Tailwind CSS v4 (design token values dynamically bound to CSS custom properties)
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 🚀 Getting Started

Follow these steps to run the portfolio on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Faraz-AhmedDev/json-folio.git
cd json-folio
```

### 2. Install Dependencies
Install all the required package nodes:
```bash
npm install
```

### 3. Start the Development Server
Run the local dev server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To bundle the project into optimized static assets for deployment:
```bash
npm run build
```
Verify the build assets locally:
```bash
npm run preview
```

---

## ✍️ Customizing Your Portfolio

To personalize the portfolio with your details, open the [src/data/portfolio.json](file:///Volumes/FarazDev/json-folio/src/data/portfolio.json) file and edit the data fields:

- **`personalInfo`**: Modify your name, role/tagline, biography, and social links (GitHub, LinkedIn, Twitter/X, Email, Resume link).
- **`skills`**: Add, remove, or edit technical skills. They will automatically be grouped and rendered by the `category` attribute (e.g., *Frontend*, *Backend*, *DevOps*, *Tools*).
- **`projects`**: Declare project items. Add your descriptions, list of technologies used as `tags`, image URLs, repository link, and live deployment site link.

---

## 🌐 1-Click Deployment

This template is static and configured to be deployed immediately:

1. **Vercel**: Import your repository directly from the Vercel dashboard. The build command `npm run build` and output directory `dist` are automatically configured.
2. **Netlify**: Connect your GitHub repository to Netlify and choose the default build parameters (`npm run build` using the `dist` directory).

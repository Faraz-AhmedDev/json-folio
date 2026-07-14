import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsGrid from "./components/ProjectsGrid";
import Footer from "./components/Footer";
import portfolioData from "./data/portfolio.json";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    // Default to system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e) => {
      const saved = localStorage.getItem("theme");
      if (!saved) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  return (
    <div className="min-h-screen bg-bg-base text-text-main transition-colors duration-300">
      {/* Header / Navigation Bar */}
      <Navbar
        personalInfo={portfolioData.personalInfo}
        currentTheme={theme}
        setTheme={setTheme}
      />

      {/* Main Core Layout Sections */}
      <main>
        <HeroSection
          personalInfo={portfolioData.personalInfo}
          currentTheme={theme}
        />
        <SkillsSection skills={portfolioData.skills} currentTheme={theme} />
        <ProjectsGrid projects={portfolioData.projects} currentTheme={theme} />
      </main>

      {/* Footer Section */}
      <Footer personalInfo={portfolioData.personalInfo} currentTheme={theme} />
    </div>
  );
}

export default App;

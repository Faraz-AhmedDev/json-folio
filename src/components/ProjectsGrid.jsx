import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects, currentTheme }) {
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique tags across all projects
  const allTags = useMemo(() => {
    const tagsSet = new Set(['All']);
    projects.forEach((project) => {
      if (project.tags) {
        project.tags.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet);
  }, [projects]);

  // Filter projects by selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') return projects;
    return projects.filter((project) => project.tags && project.tags.includes(selectedTag));
  }, [projects, selectedTag]);

  return (
    <section id="projects" className="py-20 bg-bg-base border-t border-theme/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main mb-4">
            {currentTheme === 'cyberpunk' ? (
              <span className="text-primary cyber-glow-text font-mono">
                [PROJECTS_LEDGER]
              </span>
            ) : (
              <span>My Projects</span>
            )}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-text-muted max-w-lg mx-auto">
            A curated showcase of applications, interfaces, and open-source contributions I've worked on.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                selectedTag === tag
                  ? 'bg-primary border-primary text-white shadow-md shadow-primary/25'
                  : 'bg-bg-card border-theme/50 text-text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {tag === 'All' && currentTheme === 'cyberpunk' ? 'ALL_BUILD' : tag}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id || project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectCard project={project} currentTheme={currentTheme} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted font-mono text-sm">NO_DATA::NO_PROJECTS_FOUND_FOR_TAG</p>
          </div>
        )}

      </div>
    </section>
  );
}

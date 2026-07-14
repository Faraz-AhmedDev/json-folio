import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectCard({ project, currentTheme }) {
  const formatUrl = (val) => {
    if (val && !/^https?:\/\//i.test(val) && !val.startsWith('/') && !val.startsWith('#')) {
      return `https://${val}`;
    }
    return val;
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="flex flex-col h-full rounded-2xl border border-theme/40 bg-bg-card shadow-sm hover:shadow-theme-hover transition-all duration-300 overflow-hidden cyber-glow-border group"
    >
      {/* Project Image Header */}
      <div className="relative aspect-video overflow-hidden border-b border-theme/20 bg-bg-base">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Cyberpunk Scanline / Tint Layer */}
        {currentTheme === 'cyberpunk' && (
          <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-color-dodge" />
        )}
      </div>

      {/* Project Info Body */}
      <div className="p-6 flex-grow flex flex-col items-start text-left">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-2xs font-mono font-semibold rounded bg-primary/10 border border-primary/20 text-primary uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-main mb-2 font-mono group-hover:text-primary transition-colors duration-200">
          {currentTheme === 'cyberpunk' ? `> ${project.title}` : project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-muted mb-6 leading-relaxed flex-grow font-sans">
          {project.description}
        </p>

        {/* Links Footer */}
        <div className="flex items-center space-x-4 w-full pt-4 border-t border-theme/15 mt-auto">
          {project.github && (
            <a
              href={formatUrl(project.github)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-sm font-semibold text-text-muted hover:text-primary transition-colors font-mono cursor-pointer"
            >
              <Github className="h-4 w-4" />
              <span>Source</span>
            </a>
          )}
          
          {project.live && (
            <a
              href={formatUrl(project.live)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-sm font-semibold text-text-muted hover:text-primary transition-colors font-mono cursor-pointer ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

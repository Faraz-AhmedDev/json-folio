import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Wrench, Cpu } from 'lucide-react';

export default function SkillsSection({ skills, currentTheme }) {
  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill.name);
    return acc;
  }, {});

  // Map category names to Lucide icons
  const categoryIcons = {
    Frontend: Code2,
    Backend: Server,
    DevOps: Cloud,
    Tools: Wrench,
    Other: Cpu,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-20 bg-bg-base border-t border-theme/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main mb-4">
            {currentTheme === 'cyberpunk' ? (
              <span className="text-primary cyber-glow-text font-mono">
                [SKILLS_MATRIX]
              </span>
            ) : (
              <span>My Technical Skills</span>
            )}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-text-muted max-w-lg mx-auto">
            A comprehensive list of technologies and frameworks I specialize in to build responsive and modern web platforms.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(categories).map(([category, items]) => {
            const Icon = categoryIcons[category] || categoryIcons.Other;
            return (
              <motion.div
                key={category}
                variants={cardVariants}
                className="p-6 rounded-2xl border border-theme/40 bg-bg-card shadow-sm hover:shadow-theme-hover transition-all duration-300 flex flex-col items-start text-left group cyber-glow-border relative overflow-hidden"
              >
                {/* Decorative border top line for Cyberpunk */}
                {currentTheme === 'cyberpunk' && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
                )}

                {/* Category Icon */}
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-bold text-text-main mb-4 font-mono uppercase tracking-wide">
                  {category}
                </h3>

                {/* List of Skills */}
                <div className="flex flex-wrap gap-2 w-full">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md border border-theme bg-bg-base/70 text-text-muted hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

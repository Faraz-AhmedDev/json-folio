import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ArrowRight } from 'lucide-react';

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function HeroSection({ personalInfo, currentTheme }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Select icons dynamically
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail,
    resume: FileText,
  };

  const getSocialUrl = (key, val) => {
    if (key === 'email') return `mailto:${val}`;
    return val;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Background Elements based on Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {currentTheme === 'cyberpunk' ? (
          <>
            {/* Cyberpunk grid lines & neon scanlines */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[linear-gradient(to_bottom,rgba(255,0,127,0.1)_50%,rgba(0,240,255,0.1)_50%)] bg-[length:100%_4px]" />
            <motion.div
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_10px_rgba(255,0,127,0.5)]"
            />
            {/* Cyberpunk blur blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[100px]" />
          </>
        ) : (
          <>
            {/* Soft decorative background circles for Light/Dark */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-10 -left-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-[80px] sm:blur-[120px]"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-10 -right-10 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-secondary/10 blur-[90px] sm:blur-[140px]"
            />
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Animated Welcome Badge */}
            <motion.div variants={itemVariants} className="inline-flex mb-4">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider rounded-full border border-primary/30 bg-primary/10 text-primary uppercase font-mono">
                {currentTheme === 'cyberpunk' ? 'SYSTEM_INIT::READY' : 'Welcome to my folio'}
              </span>
            </motion.div>

            {/* Title / Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-text-main"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-text-muted mb-6"
            >
              {personalInfo.tagline}
            </motion.h2>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-muted max-w-xl mb-8 leading-relaxed font-sans"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer font-mono"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-theme/50 bg-bg-card hover:bg-primary/5 text-text-main font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all font-mono"
              >
                Let's Talk
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center space-x-5">
              {Object.entries(personalInfo.socials).map(([key, value]) => {
                if (!value || value === '#') return null;
                const IconComponent = socialIcons[key] || Github;
                return (
                  <a
                    key={key}
                    href={getSocialUrl(key, value)}
                    target={key !== 'email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-theme/40 bg-bg-card hover:border-primary hover:text-primary transition-all text-text-muted hover:shadow-sm"
                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Code IDE terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-theme/50 bg-bg-card shadow-theme-hover transition-all duration-300 cyber-glow-border">
              {/* Header block (Mock Window controls) */}
              <div className="flex items-center justify-between px-4 py-3 bg-bg-base border-b border-theme/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-text-muted">
                  developer.json — Editor
                </div>
                <div className="w-4" /> {/* Spacer */}
              </div>

              {/* IDE Content */}
              <div className="p-5 font-mono text-sm leading-relaxed text-left overflow-x-auto bg-bg-card">
                <pre className="text-text-muted">
                  <code>
                    <span className="text-primary">const</span>{' '}
                    <span className="text-secondary">developer</span> = &#123;
                    <br />
                    &nbsp;&nbsp;name:{' '}
                    <span className="text-accent">
                      "{personalInfo.name}"
                    </span>
                    ,<br />
                    &nbsp;&nbsp;role:{' '}
                    <span className="text-accent">
                      "{personalInfo.tagline.split(' & ')[0]}"
                    </span>
                    ,<br />
                    &nbsp;&nbsp;skills: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-accent">"React"</span>,{' '}
                    <span className="text-accent">"TailwindCSS"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-accent">"TypeScript"</span>,{' '}
                    <span className="text-accent">"Node.js"</span>
                    <br />
                    &nbsp;&nbsp;],
                    <br />
                    &nbsp;&nbsp;coffeeLover:{' '}
                    <span className="text-yellow-500">true</span>,
                    <br />
                    &nbsp;&nbsp;hardWorker:{' '}
                    <span className="text-yellow-500">true</span>,
                    <br />
                    &nbsp;&nbsp;status:{' '}
                    <span className="text-accent">"Open for Roles"</span>
                    <br />
                    &#125;;
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

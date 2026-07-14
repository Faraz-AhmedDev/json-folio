import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Zap, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ personalInfo, currentTheme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themes = [
    { id: 'light', name: 'Light Mode', icon: Sun, color: 'text-amber-500' },
    { id: 'dark', name: 'Dark Mode', icon: Moon, color: 'text-indigo-400' },
    { id: 'cyberpunk', name: 'Cyberpunk', icon: Zap, color: 'text-pink-500' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const activeThemeObj = themes.find((t) => t.id === currentTheme) || themes[1];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-theme/20 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <a
              href="#home"
              className="text-xl font-bold tracking-wider hover:opacity-85 transition-opacity"
            >
              {currentTheme === 'cyberpunk' ? (
                <span className="text-primary cyber-glow-text font-mono">
                  &lt;{personalInfo.name.replace(/\s+/g, '').toLowerCase()}.dev /&gt;
                </span>
              ) : (
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              )}
            </a>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-text-muted hover:text-text-main transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            {/* Desktop Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-theme/50 bg-bg-card hover:bg-primary/5 transition-all text-text-main"
              >
                <activeThemeObj.icon className={`h-4 w-4 ${activeThemeObj.color}`} />
                <span className="text-sm font-medium">{activeThemeObj.name}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>

              <AnimatePresence>
                {showThemeMenu && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowThemeMenu(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 rounded-xl border border-theme bg-bg-card shadow-lg z-20 py-1"
                    >
                      {themes.map((t) => {
                        const Icon = t.icon;
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              setTheme(t.id);
                              setShowThemeMenu(false);
                            }}
                            className={`flex items-center space-x-3 w-full px-4 py-2 text-sm text-left hover:bg-primary/10 transition-colors ${
                              currentTheme === t.id ? 'text-primary font-bold bg-primary/5' : 'text-text-muted hover:text-text-main'
                            }`}
                          >
                            <Icon className={`h-4 w-4 ${t.color}`} />
                            <span>{t.name}</span>
                          </button>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button and theme selector */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Quick Toggle for Mobile */}
            <button
              onClick={() => {
                const currentIndex = themes.findIndex((t) => t.id === currentTheme);
                const nextIndex = (currentIndex + 1) % themes.length;
                setTheme(themes[nextIndex].id);
              }}
              className="p-2 rounded-lg border border-theme/40 hover:bg-primary/5 text-text-muted hover:text-text-main transition-all"
              aria-label="Toggle theme"
            >
              <activeThemeObj.icon className={`h-5 w-5 ${activeThemeObj.color}`} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-muted hover:text-text-main focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-theme/20 bg-bg-card/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-text-muted hover:text-text-main hover:bg-primary/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-theme/20 pt-4 mt-2 px-3">
                <p className="text-xs text-text-muted mb-2">Select Theme</p>
                <div className="grid grid-cols-3 gap-2">
                  {themes.map((t) => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setIsOpen(false);
                        }}
                        className={`flex flex-col items-center justify-center p-2 rounded-lg border text-xs gap-1 transition-all ${
                          currentTheme === t.id
                            ? 'border-primary bg-primary/10 text-primary font-semibold'
                            : 'border-theme/40 text-text-muted hover:text-text-main hover:bg-primary/5'
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${t.color}`} />
                        <span>{t.id.charAt(0).toUpperCase() + t.id.slice(1)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  Sun, 
  Moon 
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openQuoteModal, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to adjust floating navbar elevation & blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // About Us comes immediately after Home as requested
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'network', label: 'Global Network' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-2 sm:px-4 lg:px-6 max-w-[96%] xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto transition-all duration-300">
      {/* Floating Pill Container */}
      <div 
        className={`w-full rounded-2xl transition-all duration-300 border ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-slate-900/10 dark:shadow-black/50 border-slate-200 dark:border-slate-800 py-2.5 px-5 sm:px-8' 
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg shadow-slate-900/5 dark:shadow-black/40 border-slate-200/80 dark:border-slate-800/80 py-3 sm:py-3.5 px-5 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 text-left focus:outline-none group"
            aria-label="Ramsydex Global Logistics Home"
          >
            <Logo variant="auto" className="h-9 sm:h-10" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 relative ${
                    isActive
                      ? 'text-red-600 bg-red-50 dark:text-white dark:bg-slate-800/90 shadow-sm'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Request a Quote CTA */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:scale-105 active:scale-95 transition-all shadow-sm focus:outline-none"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle visual theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Request a Quote Button */}
            <button
              onClick={openQuoteModal}
              className="px-4 sm:px-5 py-2.5 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg hover:shadow-red-600/25 transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={openQuoteModal}
              className="sm:hidden px-3 py-1.5 bg-red-600 text-white text-xs font-bold rounded-xl shadow"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-4 sm:p-5 animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-red-50 text-red-600 border border-red-200 dark:bg-red-600/15 dark:text-red-400 dark:border-red-500/30 font-bold'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-red-600 dark:text-red-400' : 'text-slate-400 dark:text-slate-500'}`} />
                </button>
              );
            })}

            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <span>Request a Fast Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 pt-1">
                <a href="tel:+60378901288" className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>+60 3-7890 1288</span>
                </a>
                <span className="text-amber-500 font-semibold">32 Yrs Logistics</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

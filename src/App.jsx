import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import QuoteModal from './components/QuoteModal';

// Pages
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import NetworkPage from './pages/NetworkPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

const VALID_PAGES = ['home', 'solutions', 'network', 'about', 'gallery', 'contact', 'privacy', 'terms'];

function getInitialPage() {
  if (typeof window === 'undefined') return 'home';

  // 1. Check URL hash (e.g. #about, #/about, #solutions)
  const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
  if (VALID_PAGES.includes(hash)) {
    return hash;
  }

  // 2. Check URL pathname (e.g. /about, /solutions)
  const path = window.location.pathname.replace(/^\/|\/$/g, '').trim().toLowerCase();
  if (VALID_PAGES.includes(path)) {
    return path;
  }

  // 3. Fall back to persisted page in localStorage
  const saved = localStorage.getItem('rgl-active-page');
  if (saved && VALID_PAGES.includes(saved)) {
    return saved;
  }

  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  // Synchronize activePage with localStorage and browser URL history
  useEffect(() => {
    localStorage.setItem('rgl-active-page', activePage);

    const currentHash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
    if (activePage === 'home') {
      if (currentHash && VALID_PAGES.includes(currentHash)) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else if (currentHash !== activePage) {
      window.history.pushState(null, '', `#${activePage}`);
    }
  }, [activePage]);

  // Support browser Back and Forward navigation buttons
  useEffect(() => {
    const handleLocationChange = () => {
      const page = getInitialPage();
      setActivePage(page);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Theme management: defaults to 'light' as requested
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('rgl-theme');
    if (saved) return saved;
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('rgl-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleOpenQuoteModal = (initialData = null) => {
    setQuoteInitialData(initialData);
    setQuoteModalOpen(true);
  };

  const handleSelectQuoteFromEstimator = (estimatorData) => {
    handleOpenQuoteModal(estimatorData);
  };

  const handleSelectCorridorForQuote = (corridorName) => {
    handleOpenQuoteModal({
      service: 'Freight & Transportation',
      route: `Central Malaysia Hub ↔ ${corridorName}`,
      cargoType: 'Standard Pallets',
      units: 2,
      transit: 'Priority Schedule'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-red-600 selection:text-white transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openQuoteModal={() => handleOpenQuoteModal(null)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage} 
            openQuoteModal={() => handleOpenQuoteModal(null)} 
            onSelectQuoteFromEstimator={handleSelectQuoteFromEstimator} 
          />
        )}

        {activePage === 'solutions' && (
          <SolutionsPage 
            openQuoteModal={() => handleOpenQuoteModal(null)} 
          />
        )}

        {activePage === 'network' && (
          <NetworkPage 
            openQuoteModal={() => handleOpenQuoteModal(null)}
            onSelectCorridorForQuote={handleSelectCorridorForQuote}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            openQuoteModal={() => handleOpenQuoteModal(null)} 
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}

        {activePage === 'privacy' && (
          <PrivacyPolicyPage 
            setActivePage={setActivePage} 
          />
        )}

        {activePage === 'terms' && (
          <TermsPage 
            setActivePage={setActivePage} 
          />
        )}

        {/* 404 Fallback */}
        {!['home', 'solutions', 'network', 'about', 'gallery', 'contact', 'privacy', 'terms'].includes(activePage) && (
          <div className="py-28 px-4 text-center max-w-xl mx-auto">
            <h2 className="text-6xl font-black text-red-500 font-mono-tech mb-4">404</h2>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Shipment Not Located</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              The operational page or shipment route you requested could not be found.
            </p>
            <button
              onClick={() => setActivePage('home')}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition-all"
            >
              Return to Operational Gateway
            </button>
          </div>
        )}
      </main>

      {/* Global Interactive Quote Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        initialData={quoteInitialData}
      />

      {/* Sticky Bottom-Right WhatsApp Quick Contact */}
      <WhatsAppFloat />

      {/* Global Footer */}
      <Footer 
        setActivePage={setActivePage} 
        openQuoteModal={() => handleOpenQuoteModal(null)} 
      />
    </div>
  );
}

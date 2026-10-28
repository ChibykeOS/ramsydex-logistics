import React from 'react';
import Logo from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Globe2, 
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function Footer({ setActivePage, openQuoteModal }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-8">
          {/* Col 1 & 2: Brand & Overview */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              Ramsydex Global Logistics is Central Malaysia's strategic freight forwarder, customs broker, and supply chain operator. Backed by 32 years of operational pedigree connecting ASEAN and global markets.
            </p>

            <div className="flex flex-col gap-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="font-semibold text-white">SSM Registration:</span>
                <span className="font-mono-tech text-amber-400">202401048291 (1584132-K)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="font-semibold text-white">Operational Hub:</span>
                <span>Central Malaysia (Port Klang & KLIA Tri-Axis)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Core Solutions */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2.5">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('solutions')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Freight & Transportation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('solutions')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Customs & Trade Clearance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('solutions')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Quality Control (QC) Inspection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('solutions')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Bonded Supply Chain Staging
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('solutions')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Destination Last-Mile Deliveries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('solutions')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Express Courier Routing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Network */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Explore & Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Operational Gateway (Home)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-white transition-colors text-left"
                >
                  About Us (32-Year Pedigree)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('solutions')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Core Solutions & Fleet
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('network')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Interactive World Trade Map
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('gallery')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Operational Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Central Desk
                </button>
              </li>
              <li>
                <button 
                  onClick={openQuoteModal} 
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1 text-left"
                >
                  <span>Request Instant Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Central Malaysia Contact & Desk */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2.5">
              Central Malaysia Desk
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Central Logistics Corridor, Seksyen U8, Bukit Jelutong, 40150 Shah Alam, Selangor Darul Ehsan, Malaysia
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+60378901288" className="hover:text-white transition-colors">
                  +60 3-7890 1288
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:dispatch@ramsydex.com" className="hover:text-white transition-colors">
                  dispatch@ramsydex.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold">Hours (GMT+8):</span>
                  <span>Mon – Fri: 08:30 – 18:00</span>
                  <span className="block">Sat: 08:30 – 13:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations & Statutory Compliance Strip - Below writeups, Above the bottom divider line */}
        <div className="pb-8 border-b border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full">
            <div className="py-3 px-5 bg-slate-900/90 border border-slate-800 rounded-2xl text-xs font-semibold text-slate-200 flex items-center justify-center gap-2.5 shadow-sm hover:border-slate-700 transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Customs Agent Licensed</span>
            </div>

            <div className="py-3 px-5 bg-slate-900/90 border border-slate-800 rounded-2xl text-xs font-semibold text-slate-200 flex items-center justify-center gap-2.5 shadow-sm hover:border-slate-700 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>MAFFA / FIATA Standard</span>
            </div>

            <div className="py-3 px-5 bg-slate-900/90 border border-slate-800 rounded-2xl text-xs font-semibold text-slate-200 flex items-center justify-center gap-2.5 shadow-sm hover:border-slate-700 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>ISO 9001:2015 Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Ramsydex Global Logistics Sdn Bhd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy (PDPA 2010)
            </button>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Standard Trading Terms (MFFA STC)
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-slate-200 transition-colors"
            >
              Support Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

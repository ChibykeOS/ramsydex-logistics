import React from 'react';
import InteractiveWorldMap from '../components/InteractiveWorldMap';
import { 
  Globe, 
  MapPin, 
  Truck, 
  Ship, 
  Plane, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Navigation,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';

export default function NetworkPage({ openQuoteModal, onSelectCorridorForQuote }) {
  const tradeCorridors = [
    {
      title: 'Intra-Asia Trade Corridors',
      route: 'Central Malaysia (Port Klang / KLIA) ↔ Greater China & East Asia',
      destinations: 'Shenzhen, Shanghai, Ningbo, Hong Kong, Tokyo, Busan, Jakarta, Ho Chi Minh',
      turnaround: 'Ocean: 5 – 9 Days | Air: 24 – 36 Hours',
      features: [
        'Direct maritime loops with premier container lines (Maersk, CMA CGM, ONE, Evergreen)',
        'Daily scheduled air cargo charters from KLIA to Shenzhen and Hong Kong hubs',
        'Direct customs K1/K2 clearance and Form D / ACFTA preferential duty processing'
      ],
      icon: Ship
    },
    {
      title: 'ASEAN Cross-Border Trucking Corridors',
      route: 'Central Malaysia (Shah Alam) ↔ Singapore & Thailand',
      destinations: 'Singapore (Jurong / Tuas / Changi), Thailand (Bangkok / Sadao / Laem Chabang)',
      turnaround: 'Singapore: 18 – 24 Hours | Thailand: 36 – 48 Hours',
      features: [
        'Bonded overland trucking fleet with hydraulic tail-lifts and electronic seal monitoring',
        'Cross-border customs manifest filing at Tuas, Woodlands, Bukit Kayu Hitam, and Sadao',
        'Avoids costly ocean demurrage and airfreight premiums for high-velocity regional supply chains'
      ],
      icon: Truck
    },
    {
      title: 'Asia-Europe Mainline Corridors',
      route: 'Central Malaysia ↔ Continental Europe & UK',
      destinations: 'Rotterdam, Antwerp, Hamburg, Frankfurt, London Heathrow',
      turnaround: 'Ocean: 20 – 26 Days | Air: 2 – 3 Days',
      features: [
        'Port Klang direct deep-sea container sailings bypassing intermediate hub transshipments',
        'Temperature-controlled airfreight for pharmaceutical, life sciences, and precision electronics',
        'Complete EUR1 documentation, phytosanitary certificates, and EU customs liaison'
      ],
      icon: Plane
    },
    {
      title: 'Trans-Pacific North America Corridors',
      route: 'Central Malaysia ↔ United States & Canada',
      destinations: 'Los Angeles, Long Beach, Oakland, New York / New Jersey, Chicago',
      turnaround: 'Ocean: 18 – 24 Days | Air: 3 – 4 Days',
      features: [
        'Direct ocean container lanes linking Port Klang to US West Coast terminals',
        'US Customs and Border Protection (CBP) ISF 10+2 pre-filing compliance support',
        'Consolidated LCL staging and export container stuffing at our Central Malaysia logistics park'
      ],
      icon: Globe
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md overflow-hidden">
        {/* Background Atmosphere Image (adds 0 height) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/port-klang.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-35 dark:opacity-40 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 via-45% to-transparent dark:from-slate-950 dark:via-slate-950/75 dark:via-45% dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 dark:from-slate-950/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Network & Trade Corridors</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Interactive Global Trade Lanes & Customs Network
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Strategically centered in Central Malaysia (Shah Alam / Port Klang / KLIA tri-axis), Ramsydex connects your cargo directly to major global economic hubs with reliable linehauls and customs pre-clearance.
            </p>
          </div>

          {/* Right Image Showcase Card (Desktop - strictly bounded height to ensure 0 height increase) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <div className="relative h-44 xl:h-48 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
              <img
                src="/images/port-klang.jpg"
                alt="Port Klang Maritime Gateway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              {/* Corner accent notch */}
              <div 
                className="absolute top-0 right-0 w-8 h-8 bg-red-600 pointer-events-none z-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />
              {/* Floating caption pill */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  Port Klang Gateway
                </span>
                <span className="text-[10px] font-mono-tech text-amber-400 font-semibold bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded-lg border border-amber-500/20">
                  Direct Sailings
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORLD MAP SECTION */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <InteractiveWorldMap onSelectCorridor={(corridor) => {
          if (onSelectCorridorForQuote) {
            onSelectCorridorForQuote(corridor);
          } else {
            openQuoteModal();
          }
        }} />
      </section>

      {/* TRADE CORRIDORS LIST */}
      <section className="py-16 px-4 sm:px-8 bg-slate-100/70 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Primary Commercial Arteries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Key Trade Corridors Connected to Central Malaysia
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              High-frequency routes engineered with predictable cut-off times, customs documentation, and tracked departures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradeCorridors.map((tc, idx) => {
              const Icon = tc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-md hover:shadow-xl group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-amber-500 dark:text-amber-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                            {tc.title}
                          </h3>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-tech">{tc.turnaround}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 text-xs">
                      <span className="text-slate-500 dark:text-slate-400 uppercase font-bold block text-[10px]">Route Focus:</span>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">{tc.route}</span>
                      <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-1">
                        Gateways: {tc.destinations}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tc.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Scheduled Departures: Daily & Weekly</span>
                    <button
                      onClick={openQuoteModal}
                      className="px-4 py-2 bg-slate-100 hover:bg-red-600 hover:text-white dark:bg-slate-800 dark:hover:bg-red-600 text-slate-800 dark:text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <span>Inquire Route</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOMS COVERAGE SECTION */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Customs Authority & Brokerage Pedigree</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                  Decades of Cross-Border Customs Mastery
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  With 32 years of operational exposure, Ramsydex brings seasoned experience in clearing customs across multiple international borders. We liaise directly with port authorities, customs officers, and bonded inspection agencies to prevent bureaucratic bottlenecks before they occur.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex flex-col justify-between">
                  <span className="text-amber-600 dark:text-amber-400 font-extrabold text-base block mb-1">Direct SMK EDI</span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Direct electronic interface with Royal Malaysian Customs for real-time manifest filing.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex flex-col justify-between">
                  <span className="text-red-600 dark:text-red-400 font-extrabold text-base block mb-1">FTA Tariff Optimization</span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Form D (ATIGA), ACFTA, and bilateral trade certificate validation for preferential tariff rates.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex flex-col justify-between">
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-base block mb-1">Zero Dwell Commitment</span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Pre-clearance documentation submitted prior to vessel and aircraft arrival.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col">
              <div className="h-full flex flex-col items-center justify-between bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl text-center shadow-sm transition-colors">
                <div className="flex flex-col items-center justify-center flex-1 my-auto">
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Rapid Customs Consultation</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                    Unsure about HS tariff codes, import duties, or strategic trade permits in Malaysia? Get direct advice from licensed brokers.
                  </p>
                </div>
                <div className="w-full pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                  <button
                    onClick={openQuoteModal}
                    className="w-full py-3 px-4 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Consult Our Customs Desk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

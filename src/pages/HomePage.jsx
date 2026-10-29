import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Ship, 
  Plane, 
  ClipboardCheck, 
  Package, 
  Layers, 
  Send, 
  Clock, 
  ChevronRight, 
  Globe, 
  MapPin, 
  FileCheck, 
  Sparkles,
  BarChart3,
  Building2,
  ExternalLink
} from 'lucide-react';
import InteractiveRateEstimator from '../components/InteractiveRateEstimator';
import InteractiveWorldMap from '../components/InteractiveWorldMap';

export default function HomePage({ setActivePage, openQuoteModal, onSelectQuoteFromEstimator }) {
  const services = [
    {
      id: 'freight',
      title: 'Freight & Transportation',
      image: '/images/freight-transport.jpg',
      desc: 'Multi-modal cargo transit connecting commercial trucking, ocean containers, and airfreight.',
      bullets: [
        '1-Tonne to 40FT bonded trailer fleet',
        'Daily departures across Malaysia & ASEAN',
        'End-to-end door delivery & port staging'
      ]
    },
    {
      id: 'customs',
      title: 'Customs & Trade Services',
      image: '/images/customs-clearance.jpg',
      desc: 'Licensed customs brokerage expediting K1/K2 clearance at Port Klang, KLIA, and border gates.',
      bullets: [
        'Direct Port Klang & KLIA customs filing',
        'HS tariff optimization & duty advisory',
        'Bonded cross-border transit (SG & TH)'
      ]
    },
    {
      id: 'qc',
      title: 'Quality Control (QC) & Inspection',
      image: '/images/qc-inspection.jpg',
      desc: 'Rigorous cargo inspection and SKU audits safeguarding shipment integrity before dispatch.',
      bullets: [
        '100% carton, barcode & SKU verification',
        'Damage audits & factory seal checks',
        'Digital inspection reports within 4h'
      ]
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Inbound Cargo Receiving',
      desc: 'Consolidated shipments arrive via ocean, air or overland borders at our Central Malaysia gateway with immediate barcode check-in.',
      icon: Ship
    },
    {
      num: '02',
      title: 'QC Check & Customs Clearance',
      desc: 'Licensed customs filing alongside rigorous carton audits, SKU validation, and digital photo inspection logs.',
      icon: FileCheck
    },
    {
      num: '03',
      title: 'Central Hub Sorting & Staging',
      desc: 'Cross-dock sorting, palletization, and staging at our Bukit Jelutong / Shah Alam tri-axis logistics facility.',
      icon: Layers
    },
    {
      num: '04',
      title: 'Last-Mile Delivery with Signed POD',
      desc: 'Direct commercial dispatch to destination with verified electronic proof of delivery (POD) transmitted in real-time.',
      icon: Truck
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* HERO SECTION */}
      <section className="relative min-h-[520px] lg:min-h-[600px] flex items-start justify-center overflow-hidden border-b border-slate-800">
        {/* Realistic Non-AI Logistics Photography Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-logistics.jpg"
            alt="Central Malaysia Logistics Hub Operations"
            className="w-full h-full object-cover object-center filter brightness-[0.58] contrast-105"
          />
          {/* Transparent brand gradient overlay allowing image to be seen */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/30" />
          <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />
          
          {/* Brand aerodynamic speed glow lines */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 lg:pt-10 pb-14 lg:pb-20 flex flex-col items-center text-center">
          {/* 2-Line Headline from Brief */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-5xl mb-5 drop-shadow-lg">
            Connecting Global Markets with Reliable Supply Chain & Distribution Solutions from Central Malaysia
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed mb-8 font-normal drop-shadow-md">
            Your single-source enterprise partner for multi-modal freight forwarding, licensed customs clearance, inbound quality control (QC), and regional last-mile distribution.
          </p>

          {/* Action Buttons (Sample: DSV) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={openQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-base shadow-2xl shadow-red-600/30 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                setActivePage('solutions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2.5 hover:border-amber-400/50"
            >
              <span>Explore Solutions</span>
              <ChevronRight className="w-5 h-5 text-amber-400" />
            </button>
          </div>

          {/* Fast Service Mode Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs text-slate-400">
            <span className="text-slate-500 uppercase font-bold tracking-wider mr-1">Direct Gateways:</span>
            {['Port Klang Ocean Freight', 'KLIA Airfreight', 'Cross-Border Trucking (SG/TH)', 'Licensed Customs Brokerage', 'Inbound QC Staging'].map((pill, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 backdrop-blur-sm">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST NUMBERS BAR (Measurable, backed by data) */}
      <section className="relative z-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-7 px-4 sm:px-6 lg:px-8 shadow-sm transition-colors">
        <div className="max-w-[96%] xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 xl:gap-8">
          {/* Stat 1 */}
          <div className="flex flex-col border-l-2 border-red-600 pl-3.5 sm:pl-4 lg:pl-4 xl:pl-5">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white text-gradient-gold">
              32+ Years
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 whitespace-nowrap">
              Logistics Excellence
            </div>
            <p 
              title="Leadership & supply chain track record across ASEAN corridors"
              className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap"
            >
              Proven track record across ASEAN
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col border-l-2 border-amber-500 pl-3.5 sm:pl-4 lg:pl-4 xl:pl-5">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Tri-Axis Hub
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 whitespace-nowrap">
              Central Malaysia Gateway
            </div>
            <p 
              title="Shah Alam HQ • 28 mins to Port Klang • 35 mins to KLIA"
              className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap"
            >
              Shah Alam • 28m Port Klang • 35m KLIA
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col border-l-2 border-red-600 pl-3.5 sm:pl-4 lg:pl-4 xl:pl-5">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white text-gradient-gold">
              140+ Routes
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 whitespace-nowrap">
              Global Network & Customs
            </div>
            <p 
              title="Intra-Asia, Europe & cross-border bonded trucking"
              className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap"
            >
              Intra-Asia, Europe & bonded trucking
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col border-l-2 border-emerald-500 pl-3.5 sm:pl-4 lg:pl-4 xl:pl-5">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
              99.5%
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 whitespace-nowrap">
              On-Time Delivery Performance
            </div>
            <p 
              title="Audited operational rate backed by GPS & signed electronic POD"
              className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap"
            >
              Audited rate with GPS & signed e-POD
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID (DSV Style) */}
      <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive B2B Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered Supply Chain & Transport Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-2.5">
            Core commercial freight, customs clearance, and quality assurance capabilities built for high-velocity supply chains.
          </p>
        </div>

        {/* 3 Core Service Cards with Brand Gradient Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div key={svc.id} className="relative group flex flex-col h-full">
              {/* Vibrant Ambient Gradient Shadow (Red to Amber from attachment) */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 rounded-[2rem] blur-xl opacity-25 group-hover:opacity-55 transition-all duration-500 pointer-events-none" />

              {/* Card Container */}
              <div className="relative z-10 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl shadow-red-500/10 group-hover:shadow-2xl group-hover:shadow-red-500/20 group-hover:border-red-400/40 dark:group-hover:border-red-500/40 transition-all duration-300 flex-1 flex flex-col group-hover:-translate-y-1.5">
                {/* Photo */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {svc.title}
                    </h3>
                    
                    {/* Summarized complete 2-line write-up */}
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mb-5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                      {svc.desc}
                    </p>

                    {/* 3 Checked Bullet Points (Single-line only) */}
                    <ul className="space-y-2.5 mb-6 border-t border-slate-200 dark:border-slate-800 pt-4">
                      {svc.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className="truncate whitespace-nowrap font-medium" title={bullet}>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setActivePage('solutions');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-between group/btn"
                    >
                      <span>View Technical Specifications</span>
                      <ArrowRight className="w-4 h-4 text-amber-500 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Solutions CTA Button Below Cards */}
        <div className="mt-8 sm:mt-10 text-center flex flex-col items-center">
          <button
            onClick={() => {
              setActivePage('solutions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-red-600/25 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Explore All 6 B2B Logistics Capabilities</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 font-medium">
            Including Supply Chain Warehousing, Destination Last Mile, and Time-Critical Express Courier
          </p>
        </div>
      </section>

      {/* INTELLIGENT ESTIMATOR SECTION */}
      <section className="pt-2 pb-12 sm:pt-4 sm:pb-14 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <InteractiveRateEstimator onSelectQuote={onSelectQuoteFromEstimator} />
      </section>

      {/* GLOBAL NETWORK MAP SECTION */}
      <section className="py-20 px-4 sm:px-8 bg-slate-100/70 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Globe className="w-3.5 h-3.5" />
                <span>Cross-Border Trade Corridors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                Strategic Gateway to 140+ Trade Lanes
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Ramsydex orchestrates direct trade lanes linking our Central Malaysia Hub (Shah Alam) with Singapore, Thailand, China, Europe, and the Americas. Experience bonded overland tracking and priority customs clearance.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('network');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold text-sm rounded-xl shadow-lg flex items-center gap-2 hover:opacity-95 transition-all shrink-0 self-start md:self-auto"
            >
              <span>View Global Network & Focus Countries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <InteractiveWorldMap onSelectCorridor={(corridor) => {
            openQuoteModal({ service: corridor });
          }} />
        </div>
      </section>

      {/* 4-STEP WORKFLOW BAR */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Rigorous Execution Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Ramsydex Delivers Seamless Velocity
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            A battle-tested 4-step workflow ensuring full customs adherence, cargo safety, and verified delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            const isRed = idx % 2 === 0; // Alternates between brand Crimson Red (#DE141C) and Amber Gold (#FDCA13)

            return (
              <div
                key={step.num}
                className={`bg-white dark:bg-slate-900 border rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 ${
                  isRed
                    ? 'border-slate-200 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-red-500/50'
                    : 'border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50'
                }`}
              >
                {/* Diagonal Brand Corner Triangle (Crimson Red / Amber Gold from logo) */}
                <div 
                  className={`absolute top-0 right-0 w-14 h-14 sm:w-16 sm:h-16 pointer-events-none transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                    isRed 
                      ? 'bg-gradient-to-bl from-red-600 via-red-600 to-red-500' 
                      : 'bg-gradient-to-bl from-amber-400 via-amber-400 to-amber-500'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5 pr-8">
                    <div className={`p-3 rounded-2xl transition-colors ${
                      isRed
                        ? 'bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400 border border-red-200/70 dark:border-red-900/40 group-hover:bg-red-600 group-hover:text-white'
                        : 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200/70 dark:border-amber-900/40 group-hover:bg-amber-500 group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-2xl font-black font-mono-tech transition-colors ${
                      isRed
                        ? 'text-slate-300 dark:text-slate-700 group-hover:text-red-600 dark:group-hover:text-red-400'
                        : 'text-slate-300 dark:text-slate-700 group-hover:text-amber-500 dark:group-hover:text-amber-400'
                    }`}>
                      {step.num}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 transition-colors ${
                    isRed
                      ? 'text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400'
                      : 'text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-[11px] font-semibold">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isRed ? 'text-red-500' : 'text-amber-500'}`} />
                  <span className={isRed ? 'text-red-600 dark:text-red-400' : 'text-amber-600 dark:text-amber-400'}>
                    Quality Assured Milestone
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM ACTION CTA BANNER */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-slate-900 to-amber-950 border border-red-500/30 p-8 sm:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              Central Malaysia Operational Readiness
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Need a Reliable Logistics and Customs Partner?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Connect with our Central Malaysia operations desk for formal rate quotations, bonded staging consultations, or urgent cross-border clearance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openQuoteModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-sm rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Request a Quote Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+60378901288"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Call Central Desk: +60 3-7890 1288</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

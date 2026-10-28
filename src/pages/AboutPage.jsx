import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Globe2, 
  Target, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Building,
  Anchor,
  Plane,
  Truck,
  Compass
} from 'lucide-react';

export default function AboutPage({ openQuoteModal }) {
  const valuePillars = [
    {
      num: '01',
      title: 'Global Network Connectivity',
      desc: 'Seamlessly bridging Malaysian enterprise manufacturing with Intra-Asia, European, and North American trade lanes through integrated sea, air, and bonded road channels.',
      icon: Globe2
    },
    {
      num: '02',
      title: 'Reliable & Secure Cargo Handling',
      desc: 'Zero-compromise security protocols, continuous GPS telematics, bonded customs licenses, and verified electronic proof of delivery protecting shipment chain-of-custody.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Optimized Logistics Workflows',
      desc: 'Precision execution combining pre-arrival customs clearance, rigorous 5-point inbound QC inspection, and dedicated staging hubs to reduce port dwell times and eliminate waste.',
      icon: Target
    }
  ];

  const credentials = [
    {
      title: 'Registered Customs Agent',
      body: 'Direct licensed EDI integration with the Royal Malaysian Customs Department for streamlined SMK export and import clearance.',
      authority: 'Royal Malaysian Customs Department'
    },
    {
      title: 'International Freight Standards',
      body: 'Operating in adherence to MAFFA (Malaysia Airfreight Forwarders Association) and FIATA global standard trading conditions.',
      authority: 'MAFFA / FIATA Alignment'
    },
    {
      title: 'Quality Management Framework',
      body: 'Standardized operational procedures and continuous improvement protocols compliant with ISO 9001:2015 quality handling.',
      authority: 'Quality Standard Compliance'
    },
    {
      title: 'Marine & Cargo Transit Insurance',
      body: 'Comprehensive transit insurance options safeguarding high-value commercial consignments from origin collection to final destination delivery.',
      authority: 'Underwritten Commercial Protection'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md overflow-hidden">
        {/* Background Atmosphere Image (adds 0 height) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/warehouse-team.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-35 dark:opacity-40 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 via-45% to-transparent dark:from-slate-950 dark:via-slate-950/75 dark:via-45% dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 dark:from-slate-950/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Us & Credibility</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              32 Years of Logistics & Supply Chain Pedigree
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Delivering trusted stability, strategic operational infrastructure, and resilient freight connectivity from our Central Malaysia command hub.
            </p>
          </div>

          {/* Right Image Showcase Card (Desktop - strictly bounded height to ensure 0 height increase) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <div className="relative h-44 xl:h-48 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
              <img
                src="/images/warehouse-team.jpg"
                alt="Ramsydex Logistics Operational Pedigree"
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
                  Bukit Jelutong Facility
                </span>
                <span className="text-[10px] font-mono-tech text-amber-400 font-semibold bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded-lg border border-amber-500/20">
                  Est. 1992 (32 Yrs)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 32 YEARS STORY & FOUNDATION */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 font-mono-tech">
                <span>Operational Heritage & Stability</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                A 32-Year Background Built on Execution, Trust & Resilience
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded on the bedrock of Malaysian industrial growth, Ramsydex Global Logistics brings together over three decades of cumulative supply chain leadership. Over 32 years, our team has navigated evolving customs regulations, port expansions, cross-border infrastructure booms, and global trade shifts.
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Unlike asset-light digital brokers that outsource critical touchpoints, Ramsydex operates on the ground with dedicated logistics staging facilities in Central Malaysia, licensed customs brokers at Port Klang and KLIA, and an owned fleet of bonded transport vehicles.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-gradient-gold block font-mono-tech">1992 – 2026</span>
                <span className="text-xs text-slate-800 dark:text-slate-300 font-semibold mt-1 block">32+ Years Experience</span>
                <span className="text-[11px] text-slate-500">Decades of unbroken operational trust</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block font-mono-tech">99.5%</span>
                <span className="text-xs text-slate-800 dark:text-slate-300 font-semibold mt-1 block">On-Time Performance</span>
                <span className="text-[11px] text-slate-500">Audited across linehaul runs</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 group flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-0 flex flex-col justify-end">
              <img
                src="/images/supply-chain.jpg"
                alt="Ramsydex Central Malaysia Logistics Hub & Staging Facility"
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="relative z-10 p-6">
                <div className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-600 text-white font-bold shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Central Malaysia Logistics Hub</h4>
                      <p className="text-xs text-slate-300">Shah Alam / Bukit Jelutong Logistics Corridor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 px-4 sm:px-8 bg-slate-100/80 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-md group">
            {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
            <div 
              className="absolute top-0 right-0 w-12 h-12 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
            />

            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-3">
                <Target className="w-4 h-4 text-red-500" />
                <span>Our Corporate Mission</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                Connecting Global Markets with Resilient Supply Chain Infrastructure
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To connect global markets, provide secure and efficient supply chain infrastructure, and support sustainable business growth for importers, exporters, and manufacturers from logistics planning through to verified final delivery.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium">
              Reliability • Transparency • Operational Precision
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-md group">
            {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
            <div 
              className="absolute top-0 right-0 w-12 h-12 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
            />

            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
                <Eye className="w-4 h-4 text-amber-500" />
                <span>Our Strategic Vision</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                The Preferred Logistics & Customs Gateway for Southeast Asia
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be Southeast Asia’s most trusted multi-modal logistics partner, recognized for setting the benchmark in zero-defect quality control (QC), rapid customs clearance, and seamless cross-border freight velocity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium">
              Excellence • Accountability • Continuous Innovation
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUE PILLARS */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Three Core Value Pillars
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            The foundational standards governing every container, pallet, and parcel entrusted to Ramsydex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-md hover:shadow-xl relative overflow-hidden"
              >
                {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
                <div 
                  className="absolute top-0 right-0 w-11 h-11 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono-tech text-slate-300 dark:text-slate-700 group-hover:text-red-500 transition-colors">
                      {p.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-amber-500 dark:text-amber-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Certified Enterprise Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CENTRAL MALAYSIA HUB STRATEGIC ADVANTAGE */}
      <section className="py-20 px-4 sm:px-8 bg-slate-100/70 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Geographic Tri-Axis Advantage</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                  Why Central Malaysia is the Optimal Logistics Command Center
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Positioned in Bukit Jelutong / Shah Alam (Central Malaysia), our hub sits at the vital intersection of Malaysia’s premier sea, air, and highway infrastructure. This tri-axis nexus allows us to move cargo in and out of terminals hours faster than peripheral operators.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Anchor className="w-5 h-5 text-red-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Port Klang (Northport & Westport)</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Direct container drayage & vessel cut-off clearance</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400 font-mono-tech shrink-0 ml-2">28 Mins</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Kuala Lumpur International Airport (KLIA)</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Air Cargo Village & priority airfreight dispatch</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400 font-mono-tech shrink-0 ml-2">35 Mins</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">North-South Expressway (E1/E2) & KESAS</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Immediate highway access to Singapore & Thailand borders</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 font-mono-tech shrink-0 ml-2">Direct On-Ramp</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group h-full flex flex-col justify-between">
                {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
                <div 
                  className="absolute top-0 right-0 w-12 h-12 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />

                <div className="flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Central Malaysia Staging Capabilities:</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Equipped for high-velocity industrial handling and customs transit.</p>

                  <div className="grid grid-cols-2 gap-4 text-xs flex-1">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
                      {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
                      <div 
                        className="absolute top-0 right-0 w-7 h-7 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                      />
                      <div>
                        <span className="text-amber-600 dark:text-amber-400 font-bold block mb-1">High-Bay Staging</span>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Multi-tier pallet racking for bonded goods, components, and retail stock.</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
                      {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
                      <div 
                        className="absolute top-0 right-0 w-7 h-7 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                      />
                      <div>
                        <span className="text-red-500 font-bold block mb-1">Cross-Docking Bays</span>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Rapid container un-stuffing and direct trans-loading to distribution trucks.</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
                      {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
                      <div 
                        className="absolute top-0 right-0 w-7 h-7 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                      />
                      <div>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Climate Staging</span>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Temperature-stable staging area for sensitive electronics and perishables.</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
                      {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
                      <div 
                        className="absolute top-0 right-0 w-7 h-7 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                      />
                      <div>
                        <span className="text-slate-800 dark:text-white font-bold block mb-1">24/7 Monitored</span>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Full perimeter security, CCTV surveillance, and biometric access control.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Ready to stage your shipments?</span>
                  <button
                    onClick={openQuoteModal}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white rounded-xl text-xs font-bold shadow-md shadow-red-600/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Request Hub Facility Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS, LICENCES & ACCREDITATIONS BLOCK */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Regulatory Standards & Licences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Accreditations, Licences & Compliance
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Fully certified and insured to protect your commercial cargo at every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-md relative overflow-hidden group"
            >
              {/* Geometric Diagonal Corner Notch (Red-to-Amber Blend) */}
              <div 
                className="absolute top-0 right-0 w-10 h-10 pointer-events-none bg-gradient-to-r from-[#DE141C] to-[#FDCA13] shadow-sm z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />

              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-amber-500 dark:text-amber-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{cred.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{cred.body}</p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                {cred.authority}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

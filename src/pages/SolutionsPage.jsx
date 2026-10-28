import React, { useState } from 'react';
import { 
  Truck, 
  Ship, 
  Plane, 
  ClipboardCheck, 
  Package, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck, 
  Camera, 
  Barcode, 
  Layers, 
  Boxes, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export default function SolutionsPage({ openQuoteModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const detailedServices = [
    {
      id: 'freight-transport',
      title: 'Freight & Transportation',
      category: 'transport',
      subtitle: 'Multi-Modal Domestic, Cross-Border & Maritime Transit',
      image: '/images/freight-transport.jpg',
      cargoTypes: 'Industrial Pallets (Standard/Euro), Full Container Loads (FCL 20ft/40ft/40HC), Less than Container Loads (LCL), Temperature-Controlled, Oversized Machinery',
      fleet: '1-Tonne Box Vans, 3-Tonne & 5-Tonne Bonded Tail-Lift Lorries, 10-Tonne Curtainsiders, 40FT Intermodal Prime Movers',
      operatingAreas: 'Peninsular Malaysia, Port Klang Corridor, Cross-Border to Singapore (Tuas/Woodlands) & Thailand (Sadao), Regional ASEAN Feeder Ports',
      description: 'We orchestrate synchronized freight operations designed for enterprise shippers who cannot afford dwell delays. From single-pallet urgent distribution to 40FT container drayage, our scheduled linehauls connect manufacturing corridors in Shah Alam, Penang, and Johor directly to ocean and air hubs.',
      highlights: [
        'GPS-monitored fleet with real-time telematics and speed compliance',
        'Daily scheduled linehaul departures ensuring predictable delivery windows',
        'Bonded truck licensing allowing sealed in-transit customs transit without intermediate tax exposure',
        'All-weather secured box trucks and curtainsiders with hydraulic tail-lifts'
      ]
    },
    {
      id: 'customs-trade',
      title: 'Customs & Trade Services',
      category: 'customs',
      subtitle: 'Licensed Direct Electronic Declaration & Multi-Border Facilitation',
      image: '/images/customs-clearance.jpg',
      cargoTypes: 'Commercial goods, raw manufacturing materials, electronic components, industrial chemicals (non-hazardous/DG certified), retail inventory',
      fleet: 'Dedicated customs liaison personnel at port/airport terminals & bonded escort transport',
      operatingAreas: 'Port Klang (Northport & Westport), KLIA Cargo Village, Penang International Airport/Port, Johor Port / Tanjung Pelepas, Bukit Kayu Hitam / Sadao, Singapore Borders',
      description: 'Navigating trade regulations requires meticulous accuracy. Ramsydex operates as a licensed customs brokerage with direct electronic data interchange (EDI) access to the Royal Malaysian Customs Department (Sistem Maklumat Kastam - SMK / Dagang Net), ensuring pre-arrival manifest filings, proper HS classification, and duty exemption declarations.',
      highlights: [
        'Direct electronic submission of Customs Forms (K1 Import, K2 Export, K8 Bonded Transit, K9)',
        'Tariff Code (HS) advisory to prevent penalty classification and optimize preferential FTA rates (ATIGA, Form D, ACFTA)',
        'Strategic pre-clearance protocol to prevent costly demurrage and port detention charges',
        'Cross-border bonded customs escorts for high-value and bonded transit shipments'
      ]
    },
    {
      id: 'qc-inspection',
      title: 'Quality Control (QC) & Inspection',
      category: 'qc',
      subtitle: 'Zero-Defect Verification & Timestamped Photographic Proofs',
      image: '/images/qc-inspection.jpg',
      cargoTypes: 'Cartons, inner master boxes, palletized consumer electronics, apparel, medical devices, precision engineered parts',
      fleet: 'Clean-room staging zone, barcode scanner verification bays, calibrated digital scales, photo-documentation booth',
      operatingAreas: 'Central Malaysia Logistics Park Staging Facility (Shah Alam / Bukit Jelutong)',
      description: 'Prevent downstream disputes and customer returns with our dedicated inbound and outbound QC inspection services. Before any consignment is dispatched or staged for last-mile delivery, our certified QC technicians conduct thorough structural, quantity, and barcode audits.',
      highlights: [
        '100% Carton Exterior Inspection: Assessing crush damage, watermarks, moisture, and corner integrity',
        'Physical Piece & Master Carton Count Verification against commercial packing lists',
        'High-speed SKU & Barcode Scanning confirming serial accuracy and GS1 readability',
        'Factory Tamper Seal Verification with serial log recording',
        'Comprehensive Timestamped Photo Inspection Report generated within 4 hours'
      ]
    },
    {
      id: 'supply-chain-solutions',
      title: 'Supply Chain Solutions',
      category: 'warehouse',
      subtitle: 'Bonded Staging, Cross-Docking & Distribution Management',
      image: '/images/supply-chain.jpg',
      cargoTypes: 'Bulk palletized goods, FMCG inventory, manufacturing spares, buffer stock',
      fleet: 'High-reach electric reach trucks, counterbalanced forklifts, automated pallet wrappers',
      operatingAreas: 'Central Malaysia Hub, Port Klang staging, nationwide distribution networks',
      description: 'Transform logistics from a cost center into a strategic competitive advantage. We provide scalable warehousing, cross-dock consolidation, and staging workflows tailored for manufacturers importing components or retailers distributing across Southeast Asia.',
      highlights: [
        'High-bay secured pallet racking with 24/7 CCTV surveillance and biometric access',
        'Cross-dock sorting: Direct transfer from inbound ocean containers to outbound regional lorries',
        'Value-added kitting, repacking, heat-shrink pallet wrapping, and customized compliance labeling',
        'Digital inventory visibility with cycle counting and real-time stock status'
      ]
    },
    {
      id: 'last-mile-deliveries',
      title: 'Destination Last Mile Deliveries',
      category: 'transport',
      subtitle: 'Commercial Facilities, Retail Distribution Centers & Precision Drops',
      image: '/images/last-mile.jpg',
      cargoTypes: 'Pallets, bulky freight, loose cartons, store restocking deliveries',
      fleet: '1-Tonne urban delivery vans, 3-Tonne & 5-Tonne city box lorries with tail-lifts',
      operatingAreas: 'Klang Valley, Greater Kuala Lumpur, Selangor industrial corridors, nationwide delivery hubs',
      description: 'The final leg is where your brand reputation is made. Ramsydex guarantees precise delivery appointments, white-glove offloading, and instant digital proof of delivery (e-POD) signed and time-stamped on glass.',
      highlights: [
        'Strict scheduled delivery windows to major hypermarkets, industrial plants, and retail DCs',
        'Hydraulic tail-lift offloading with manual and powered pallet jack assistance',
        'Immediate electronic Proof of Delivery (e-POD) transmitted to the consignor within minutes',
        'Reverse logistics and return carton management protocols'
      ]
    },
    {
      id: 'courier-express',
      title: 'Courier & Time-Critical Services',
      category: 'courier',
      subtitle: 'Same-Day Urgent Dispatch & Next-Flight-Out Solutions',
      image: '/images/courier-express.jpg',
      cargoTypes: 'Critical spares, medical samples, original legal/shipping manifests, high-priority parcels',
      fleet: 'Express motorcycle dispatch riders, dedicated rapid response vans',
      operatingAreas: 'Central Malaysia metropolitan zone, cross-border express air shuttle',
      description: 'When downtime costs thousands per hour, our Courier & Time-Critical desk activates within minutes. Whether delivering critical replacement parts to Port Klang vessel berths or urgent trade documentation to corporate headquarters, we provide continuous custody monitoring.',
      highlights: [
        'Same-day express dispatch across the Klang Valley and Central Malaysia corridor',
        'Next-Flight-Out (NFO) air courier connections for intra-regional emergencies',
        'Direct door-to-desk handover with signature and photographic receipt',
        'Dedicated 24/7 dispatch hotline with real-time courier milestone updates'
      ]
    }
  ];

  // Comparison Matrix data (Kuehne + Nagel style)
  const comparisonFeatures = [
    {
      feature: 'Standard Freight Transport',
      standard: 'Terminal-to-terminal basic transit',
      ramsydex: 'End-to-End Managed Transit with Dedicated Logistics Desk',
      isAdvantage: true
    },
    {
      feature: 'Quality Control (QC) & Carton Audit',
      standard: 'None (Cargo moved as received)',
      ramsydex: 'Comprehensive 5-point inspection with digital photo report in 4h',
      isAdvantage: true
    },
    {
      feature: 'Customs Clearance & Documentation',
      standard: 'Shipper handles or outsourced third-party',
      ramsydex: 'In-house licensed Customs Agent with direct Port Klang & KLIA EDI',
      isAdvantage: true
    },
    {
      feature: 'Cross-Border Bonded Trucking',
      standard: 'Unbonded / subject to checkpoint offload',
      ramsydex: 'Bonded licensed fleet for non-stop Malaysia ↔ SG / TH transit',
      isAdvantage: true
    },
    {
      feature: 'Value-Added Repacking & Relabeling',
      standard: 'Extra third-party arrangement',
      ramsydex: 'In-house hub repacking, strapping, shrink-wrapping & SKU labeling',
      isAdvantage: true
    },
    {
      feature: 'Proof of Delivery (POD)',
      standard: 'Delayed paper delivery slips (days later)',
      ramsydex: 'Instant Electronic POD with digital signature & photos',
      isAdvantage: true
    },
    {
      feature: 'Transit Insurance & Cargo Protection',
      standard: 'Limited basic carrier liability',
      ramsydex: 'Comprehensive Marine All-Risk Cargo Insurance Options',
      isAdvantage: true
    },
    {
      feature: 'Client Communications Desk',
      standard: 'General call center ticketing',
      ramsydex: 'Direct Central Malaysia desk with guaranteed < 24h response time',
      isAdvantage: true
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md overflow-hidden">
        {/* Background Atmosphere Image (adds 0 height) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/freight-transport.jpg"
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
              <span>Core Solutions & Operational Capabilities</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              End-to-End Logistics, Customs & Quality Control
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Detailed operational specifications covering accepted cargo formats, vehicle fleet configurations, licensed multi-region customs clearance, and our zero-defect QC inspection protocol.
            </p>
          </div>

          {/* Right Image Showcase Card (Desktop - strictly bounded height to ensure 0 height increase) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <div className="relative h-44 xl:h-48 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
              <img
                src="/images/freight-transport.jpg"
                alt="Ramsydex Multi-Modal Fleet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              {/* Corner accent notch */}
              <div 
                className="absolute top-0 right-0 w-8 h-8 bg-amber-500 pointer-events-none z-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />
              {/* Floating caption pill */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  Fleet & Linehauls
                </span>
                <span className="text-[10px] font-mono-tech text-amber-400 font-semibold bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded-lg border border-amber-500/20">
                  GPS Telematics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES LISTING */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-16">
          {detailedServices.map((svc, index) => (
            <div
              key={svc.id}
              id={svc.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg dark:shadow-2xl grid grid-cols-1 lg:grid-cols-12 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Left Column: Visual & Fleet specs */}
              <div className="lg:col-span-5 relative bg-slate-100 dark:bg-slate-800 flex flex-col justify-between">
                <div className="relative h-64 lg:h-72 w-full overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover filter brightness-95 dark:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow">
                    Capability 0{index + 1}
                  </span>
                </div>

                {/* Technical Specifications Panel */}
                <div className="p-6 bg-slate-50 dark:bg-slate-950/90 border-t border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-between">
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block text-[10px]">
                        Accepted Cargo Types
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">{svc.cargoTypes}</p>
                    </div>

                    <div>
                      <span className="text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block text-[10px]">
                        Vehicle & Fleet Specifications
                      </span>
                      <p className="text-amber-600 dark:text-amber-400 font-semibold mt-0.5 leading-snug">{svc.fleet}</p>
                    </div>

                    <div>
                      <span className="text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block text-[10px]">
                        Primary Operating Corridors
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-snug">{svc.operatingAreas}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/80">
                    <button
                      onClick={openQuoteModal}
                      className="w-full py-2.5 px-4 bg-slate-100 hover:bg-red-600 hover:text-white dark:bg-slate-800 dark:hover:bg-red-600 text-slate-800 dark:text-slate-100 dark:hover:text-white font-bold text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 shadow-sm group"
                    >
                      <span>Inquire About {svc.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:text-white dark:text-amber-400 group-hover:dark:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: In-depth Description & Value Highlights */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1 font-mono-tech">
                    {svc.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Operational Highlights & Standards:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {svc.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span>Backed by Central Malaysia SLA & 24h Inquiry Response</span>
                  </div>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold font-mono-tech">
                    32-Year Pedigree
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED QUALITY CONTROL (QC) INSPECTION SECTION */}
      <section className="py-16 px-4 sm:px-8 bg-slate-100/80 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  <span>Specialized Value-Added Capability</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                  Dedicated Inbound & Outbound QC Inspection Service
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  Most freight forwarders only transport boxes without verifying contents. Ramsydex operates a dedicated Quality Control inspection bay inside our Central Malaysia logistics park, giving importers and exporters 100% peace of mind before cargo moves forward.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 shrink-0 mt-0.5">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Physical Carton & Integrity Audit</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Inspection for crushing, water exposure, carton rupture, and improper stacking during overseas transit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
                    <Barcode className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Barcode, SKU & Serial Number Validation</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Laser barcode scanning ensuring supplier shipments match Purchase Order (PO) manifests and retail compliance codes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Digital Photo Inspection Reports in 4 Hours</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      High-resolution photos of carton condition, factory seals, master packaging, and discrepancies sent directly to your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual QC Certificate / Report Simulator */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">RGL Certified QC Inspection Protocol</span>
                    </div>
                    <span className="text-[11px] font-mono-tech text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-semibold">
                      SLA: Turnaround &lt; 4 Hours
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs flex-1 flex flex-col justify-between">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200">Stage 1: Container Destuffing & Seal Audit</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Verified</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Factory seal match against Bill of Lading serial before unsealing.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200">Stage 2: Piece & Carton Count Reconcile</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Zero Discrepancy</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Tallying master cartons and loose cartons against packing list manifests.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200">Stage 3: Barcode / Label Compliance</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">GS1 Standard Passed</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Verification of EAN/UPC barcodes, hazard pictograms, and country-of-origin markings.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200">Stage 4: Digital Report & Cloud Upload</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">PDF + High-Res Photos</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Automated transmission to client logistics team prior to domestic dispatch.</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>100% Verified Quality Chain of Custody</span>
                  </div>
                  <span className="font-mono-tech text-amber-600 dark:text-amber-400 font-semibold">Zero-Defect Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-REGION CUSTOMS CLEARANCE SECTION */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Eliminating Port Dwell Time</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Multi-Region Customs Clearance Coverage
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Direct EDI customs broker access across all major Malaysian maritime, aviation, and overland border checkpoints to prevent detention penalties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold mb-4">
              <Ship className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Maritime Ports Clearance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Rapid customs declaration at Port Klang (Northport and Westport), Penang Port, and Port of Tanjung Pelepas (PTP). Immediate K1 (Import) and K2 (Export) clearance.
            </p>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-3">
              <li>• Direct EDI link to Royal Malaysian Customs</li>
              <li>• Wharfside inspection attendance & clearance</li>
              <li>• Demurrage & detention avoidance scheduling</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-bold mb-4">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Air Cargo Terminals (KLIA)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Direct presence at KLIA Free Commercial Zone (FCZ) and Air Cargo Village. Priority turnaround for critical time-sensitive imports and temperature-controlled airfreight.
            </p>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-3">
              <li>• Same-day AWB airfreight processing</li>
              <li>• Duty exemption & specialized permit filing</li>
              <li>• Immediate transfer to bonded regional lorries</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold mb-4">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Cross-Border Overland Checkpoints</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Pre-filed customs manifests for overland transport connecting Peninsular Malaysia to Singapore (Tuas & Woodlands) and Thailand (Bukit Kayu Hitam & Sadao).
            </p>
            <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-3">
              <li>• ASEAN Customs Transit System (ACTS) support</li>
              <li>• Form D / ATIGA preferential tariff clearance</li>
              <li>• Bonded vehicle escort across sovereign borders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STANDARD VS VALUE-ADDED SERVICES TABLE (Kuehne + Nagel Style) */}
      <section className="py-16 px-4 sm:px-8 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Service Matrix Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Standard Freight vs. Ramsydex Value-Added Handling
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Sampled after top European logistics benchmarks (Kuehne + Nagel), clearly illustrating how our value-added services protect your supply chain.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs uppercase font-extrabold tracking-wider">
                    <th className="py-4 px-6 text-slate-600 dark:text-slate-400 w-1/3">Operational Feature</th>
                    <th className="py-4 px-6 text-slate-600 dark:text-slate-400 w-1/3">Standard Freight Carrier</th>
                    <th className="py-4 px-6 text-amber-600 dark:text-amber-400 bg-red-50/50 dark:bg-red-950/20 w-1/3 border-l border-red-200 dark:border-red-500/30">
                      Ramsydex Premium Integrated Handling
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80 text-xs sm:text-sm">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                        <span>{row.standard}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-900 dark:text-white font-medium bg-red-50/30 dark:bg-red-950/10 border-l border-red-200 dark:border-red-500/30">
                        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{row.ramsydex}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER FROM BRIEF */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Need a Reliable Logistics and Customs Partner?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8">
              Request a quote today and let our Central Malaysia operations desk design a customized transit and customs solution for your cargo.
            </p>

            <button
              onClick={openQuoteModal}
              className="px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm rounded-xl shadow-2xl transition-all inline-flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Request a Quote Today</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

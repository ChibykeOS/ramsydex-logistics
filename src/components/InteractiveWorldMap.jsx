import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  Truck, 
  Ship, 
  Plane, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2,
  Navigation
} from 'lucide-react';

export default function InteractiveWorldMap({ onSelectCorridor }) {
  const [activePin, setActivePin] = useState('malaysia');

  // Network Nodes Coordinates (scaled on 1000x520 world map)
  const networkNodes = [
    {
      id: 'malaysia',
      name: 'Central Malaysia Operational Hub (HQ)',
      country: 'Malaysia (Shah Alam / Port Klang / KLIA)',
      role: 'Global Headquarters & Primary Consolidation Gateway',
      x: 745,
      y: 295,
      isHQ: true,
      modes: ['Ocean Freight', 'Air Cargo', 'Cross-Border Trucking', 'Inbound QC Hub'],
      transitTime: 'Departure Base',
      customs: 'Direct EDI Customs clearance with Royal Malaysian Customs (Northport/Westport & KLIA)',
      frequency: 'Daily 24/7 Operations',
      stats: '32+ Years operations | 150,000+ sq ft staging capacity'
    },
    {
      id: 'singapore',
      name: 'Singapore Commercial & Port Gateway',
      country: 'Singapore (Jurong / Changi / Tuas)',
      role: 'Cross-Border Road & Intermodal Feeder Gateway',
      x: 748,
      y: 310,
      modes: ['Bonded Overland Trucking', 'Air Shuttle', 'Barge/Feeder'],
      transitTime: '18 – 24 Hours (Overland)',
      customs: 'Pre-cleared Tuas & Woodlands checkpoint documentation & Permit declaration',
      frequency: 'Daily Scheduled Departures',
      stats: 'Direct bonded express link to Jurong industrial zone'
    },
    {
      id: 'thailand',
      name: 'Thailand Northern ASEAN Corridor',
      country: 'Thailand (Bangkok / Sadao / Laem Chabang)',
      role: 'Cross-Border Overland Trade Engine',
      x: 735,
      y: 265,
      modes: ['Cross-Border Trucking', 'Ocean Freight', 'Air Express'],
      transitTime: '36 – 48 Hours (Overland)',
      customs: 'Sadao & Bukit Kayu Hitam customs manifest & ASEAN Form D compliance',
      frequency: '3x Weekly Departures',
      stats: 'Cross-docking for automotive & electronics assembly'
    },
    {
      id: 'china',
      name: 'Greater China Manufacturing Corridors',
      country: 'China (Shenzhen, Shanghai, Ningbo, Hong Kong)',
      role: 'Raw Material Inflow & Export Distribution',
      x: 795,
      y: 235,
      modes: ['Ocean Container (FCL/LCL)', 'Direct Air Cargo'],
      transitTime: '6 – 9 Days (Ocean) | 24h (Air)',
      customs: 'China CIQ & Customs export declarations, K1/K2 clearance upon MY arrival',
      frequency: 'Daily Ocean Sailings & Air Charters',
      stats: 'Direct lanes connecting Pearl River & Yangtze River manufacturing hubs'
    },
    {
      id: 'europe',
      name: 'Europe Main Gateways',
      country: 'Europe (Rotterdam, Hamburg, Frankfurt, Antwerp)',
      role: 'Industrial Machinery & High-Tech Trade Corridor',
      x: 510,
      y: 155,
      modes: ['Ocean Container Freight', 'Priority Airfreight'],
      transitTime: '20 – 26 Days (Ocean) | 2 – 3 Days (Air)',
      customs: 'Full EU customs declaration, EUR1 certificate, and bonded transit protocols',
      frequency: 'Weekly Direct Container Loops',
      stats: 'Direct air links to Frankfurt (FRA) & sea to Rotterdam (RTM)'
    },
    {
      id: 'middle_east',
      name: 'Middle East Hub',
      country: 'UAE (Dubai / Jebel Ali)',
      role: 'Transshipment & Regional Trade Bridge',
      x: 635,
      y: 230,
      modes: ['Ocean Freight', 'Air Cargo'],
      transitTime: '10 – 14 Days (Ocean) | 36 Hours (Air)',
      customs: 'GCC customs compliance & free zone staging protocols',
      frequency: 'Twice Weekly Sailings',
      stats: 'Serving Middle East & African markets'
    },
    {
      id: 'usa',
      name: 'North America Trans-Pacific Corridors',
      country: 'United States (Los Angeles, Long Beach, New York)',
      role: 'Trans-Pacific Consumer & Tech Export Lane',
      x: 215,
      y: 195,
      modes: ['Trans-Pacific Ocean Freight', 'Direct Air Cargo'],
      transitTime: '18 – 24 Days (Ocean) | 3 – 4 Days (Air)',
      customs: 'US CBP, ISF 10+2 filing, FDA/EPA regulatory handling',
      frequency: 'Scheduled Weekly Vessel Departures',
      stats: 'Direct container lanes from Port Klang to US West Coast'
    },
    {
      id: 'australia',
      name: 'Australasia Trade Lane',
      country: 'Australia (Sydney, Melbourne, Fremantle)',
      role: 'Ocean & Air Distribution Corridor',
      x: 885,
      y: 410,
      modes: ['Ocean Container (FCL/LCL)', 'Scheduled Air Cargo'],
      transitTime: '12 – 16 Days (Ocean) | 2 Days (Air)',
      customs: 'Australian Border Force & Biosecurity (DAFF) compliance certification',
      frequency: 'Weekly Sailings',
      stats: 'Fumigation & biosecurity clearance verification'
    }
  ];

  const activeNode = networkNodes.find((n) => n.id === activePin) || networkNodes[0];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl relative transition-colors">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Interactive Global Trade Lanes</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connected Directly to Central Malaysia
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Click any pinpoint on the world map to inspect trade corridor frequencies, transit durations, and customs protocols managed by Ramsydex Global Logistics.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs bg-slate-50 dark:bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-sm transition-colors">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600 ring-4 ring-red-600/25"></span>
            <span className="text-slate-900 dark:text-white font-bold">Central Malaysia Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-amber-400"></span>
            <span className="text-slate-600 dark:text-slate-300 font-medium">Partner Gateways</span>
          </div>
        </div>
      </div>

      {/* SVG Interactive World Map Container */}
      <div className="relative w-full aspect-[16/9] max-h-[520px] bg-slate-100/90 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-inner p-2 sm:p-4 transition-colors">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 tech-grid-light dark:tech-grid-pattern opacity-60 pointer-events-none" />

        <svg
          viewBox="0 0 1000 520"
          className="w-full h-full object-contain"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DE141C" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#EAB114" stopOpacity="0.55" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Simplified Stylized World Continents Background (Vector Outlines) */}
          <g className="fill-slate-200/90 dark:fill-slate-800/80 stroke-slate-300/70 dark:stroke-slate-700/50 stroke-[0.5] transition-colors" opacity="0.95">
            {/* North America */}
            <path d="M 120 80 Q 180 60 260 90 Q 290 120 280 180 Q 260 220 220 250 Q 180 230 160 170 Q 130 130 120 80 Z" />
            {/* South America */}
            <path d="M 270 270 Q 330 290 340 360 Q 320 440 280 470 Q 260 410 270 340 Z" />
            {/* Europe */}
            <path d="M 470 110 Q 550 100 570 150 Q 540 190 490 180 Q 460 150 470 110 Z" />
            {/* Africa */}
            <path d="M 480 200 Q 560 210 580 270 Q 570 380 520 410 Q 480 340 470 260 Z" />
            {/* Asia Mainland */}
            <path d="M 590 100 Q 750 80 840 150 Q 860 230 810 270 Q 720 290 640 230 Q 600 170 590 100 Z" />
            {/* Southeast Asia Islands / Peninsular */}
            <path d="M 720 280 Q 770 290 770 330 Q 730 350 720 310 Z" />
            {/* Australia */}
            <path d="M 820 360 Q 910 350 920 420 Q 860 460 810 420 Z" />
          </g>

          {/* Trade Route Arcs from Central Malaysia (x: 745, y: 295) */}
          {networkNodes.filter(n => !n.isHQ).map((node) => {
            const isSelected = activePin === node.id;
            // Generate bezier curve
            const midX = (745 + node.x) / 2;
            const midY = (295 + node.y) / 2 - Math.abs(745 - node.x) * 0.15;
            return (
              <g key={`corridor-${node.id}`}>
                <path
                  d={`M 745 295 Q ${midX} ${midY} ${node.x} ${node.y}`}
                  fill="none"
                  stroke={isSelected ? '#EAB114' : 'url(#routeGrad)'}
                  strokeWidth={isSelected ? '2.8' : '1.3'}
                  strokeDasharray={isSelected ? 'none' : '4 3'}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}

          {/* Pinpoints */}
          {networkNodes.map((node) => {
            const isHQ = node.isHQ;
            const isSelected = activePin === node.id;

            return (
              <g
                key={node.id}
                onClick={() => setActivePin(node.id)}
                className="cursor-pointer group"
                transform={`translate(${node.x}, ${node.y})`}
              >
                {/* Central Malaysia HQ special glowing ring */}
                {isHQ ? (
                  <>
                    <circle r="22" fill="#DE141C" opacity="0.22" className="animate-ping" />
                    <circle r="12" fill="#DE141C" opacity="0.4" />
                    <circle r="7" fill="#DE141C" stroke="#FFFFFF" strokeWidth="2" filter="url(#glow)" />
                    <circle r="2.5" fill="#FDCA13" />
                  </>
                ) : (
                  <>
                    {isSelected && (
                      <circle r="14" fill="#EAB114" opacity="0.35" className="animate-ping" />
                    )}
                    <circle
                      r={isSelected ? '7' : '4.5'}
                      fill={isSelected ? '#EAB114' : '#F59E0B'}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      className="transition-all duration-200 group-hover:scale-125 dark:stroke-slate-950 shadow"
                    />
                  </>
                )}

                {/* Node Label */}
                <text
                  x={node.x > 750 ? 12 : -12}
                  y="4"
                  textAnchor={node.x > 750 ? 'start' : 'end'}
                  fontSize={isHQ ? '11' : '9.5'}
                  className={`pointer-events-none font-sans select-none transition-colors ${
                    isHQ
                      ? 'fill-slate-900 dark:fill-white font-extrabold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]'
                      : isSelected
                      ? 'fill-amber-600 dark:fill-amber-300 font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]'
                      : 'fill-slate-700 dark:fill-slate-300 font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                  }`}
                >
                  {node.name.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* On-Map Quick Floating Badge */}
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 rounded-xl px-3 py-2 text-[11px] text-slate-700 dark:text-slate-300 hidden sm:flex items-center gap-2 shadow-sm">
          <Navigation className="w-3.5 h-3.5 text-red-500 animate-spin" />
          <span>Active Trade Corridors: <strong className="text-slate-900 dark:text-white">140+ Global Ports & Gateways</strong></span>
        </div>
      </div>

      {/* Selected Node Details Card */}
      <div className="mt-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-colors shadow-sm">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                  activeNode.isHQ 
                    ? 'bg-red-600 text-white' 
                    : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 font-semibold'
                }`}>
                  {activeNode.isHQ ? 'HQ Operational Hub' : 'Strategic Destination Corridor'}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-tech">{activeNode.country}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {activeNode.name}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeNode.role}. {activeNode.stats}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-1">
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex flex-col justify-between">
                <span className="text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block mb-1 text-[10px]">Transit Schedule</span>
                <span className="text-amber-600 dark:text-amber-400 font-extrabold text-sm">{activeNode.transitTime}</span>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex flex-col justify-between">
                <span className="text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block mb-1 text-[10px]">Departure Frequency</span>
                <span className="text-slate-900 dark:text-white font-bold text-sm">{activeNode.frequency}</span>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex flex-col justify-between">
                <span className="text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block mb-1 text-[10px]">Available Modes</span>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {activeNode.modes.map((m, idx) => (
                    <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-transparent px-2 py-0.5 rounded text-[10px] font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Customs clearance protocol callout */}
          <div className="lg:max-w-xs w-full flex flex-col">
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl shadow-sm transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Customs & Compliance Protocol</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {activeNode.customs}
                </p>
              </div>

              <button
                onClick={() => onSelectCorridor && onSelectCorridor(activeNode.name)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-red-600 text-white dark:bg-slate-800 dark:hover:bg-red-600 dark:text-white font-bold text-xs rounded-xl transition-all shadow hover:shadow-md flex items-center justify-center gap-2 mt-auto"
              >
                <span>Inquire About This Route</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

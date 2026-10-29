import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Truck, 
  Plane, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  Navigation, 
  Sparkles,
  Play,
  Pause,
  Calendar,
  Anchor,
  Zap,
  Sun,
  Moon
} from 'lucide-react';
import { WORLD_MAP_PATH } from '../data/worldMapPath';

// Network Nodes Coordinates (scaled on 1000x520 world map, Miller Cylindrical projection)
const NETWORK_NODES = [
  {
    id: 'malaysia',
    name: 'Central Malaysia Operational Hub (HQ)',
    country: 'Malaysia (Shah Alam / Port Klang / KLIA)',
    role: 'Global Operations Headquarters & Tri-Axis Consolidation Hub',
    x: 782,
    y: 307,
    isHQ: true,
    modes: ['Ocean Freight', 'Air Cargo', 'Cross-Border Trucking', 'Inbound QC Hub'],
    category: 'all',
    transitTime: 'Departure Base',
    customs: 'Direct EDI customs clearance with Royal Malaysian Customs (Northport/Westport & KLIA)',
    frequency: '24/7 Real-Time Dispatch',
    stats: '32+ Years operations | 150,000+ sq ft bonded staging facility',
    badge: 'HQ Tri-Axis Hub',
    flag: '🇲🇾',
    code: 'MY (PKG / KUL)'
  },
  {
    id: 'singapore',
    name: 'Singapore Commercial & Port Gateway',
    country: 'Singapore (Jurong / Changi / Tuas)',
    role: 'Cross-Border Road & Intermodal Feeder Gateway',
    x: 790,
    y: 319,
    modes: ['Bonded Overland Trucking', 'Air Shuttle', 'Barge/Feeder'],
    category: 'asean',
    transitTime: '18 – 24 Hours (Overland)',
    customs: 'Pre-cleared Tuas & Woodlands checkpoint documentation & GST/Permit declaration',
    frequency: 'Daily Scheduled Departures',
    stats: 'Direct bonded express link to Jurong industrial zone',
    badge: 'Intra-ASEAN Bonded',
    flag: '🇸🇬',
    code: 'SG (SIN / JUR)'
  },
  {
    id: 'thailand',
    name: 'Thailand Northern ASEAN Corridor',
    country: 'Thailand (Bangkok / Sadao / Laem Chabang)',
    role: 'Cross-Border Overland Trade Engine',
    x: 778,
    y: 275,
    modes: ['Cross-Border Trucking', 'Ocean Freight', 'Air Express'],
    category: 'asean',
    transitTime: '36 – 48 Hours (Overland)',
    customs: 'Sadao & Bukit Kayu Hitam customs manifest & ASEAN Form D compliance',
    frequency: '3x Weekly Departures',
    stats: 'Cross-docking for automotive & electronics assembly',
    badge: 'Intra-ASEAN Overland',
    flag: '🇹🇭',
    code: 'TH (BKK / LCH)'
  },
  {
    id: 'china',
    name: 'Greater China Manufacturing Corridors',
    country: 'China (Shenzhen, Guangzhou, Ningbo, Shanghai, HK)',
    role: 'Raw Material Inflow & Export Distribution',
    x: 818,
    y: 252,
    modes: ['Ocean Container (FCL/LCL)', 'Direct Air Cargo'],
    category: 'ocean',
    transitTime: '6 – 9 Days (Ocean) | 24h (Air)',
    customs: 'China CIQ & Customs export declarations, K1/K2 clearance upon MY arrival',
    frequency: 'Daily Ocean Sailings & Air Charters',
    stats: 'Direct lanes connecting Pearl River & Yangtze River manufacturing hubs',
    badge: 'East Asia Maritime',
    flag: '🇨🇳',
    code: 'CN (SZX / SHA / HKG)'
  },
  {
    id: 'japan',
    name: 'Japan & East Asia Pacific Corridors',
    country: 'Japan (Tokyo / Yokohama / Osaka)',
    role: 'Precision Auto & High-Tech Components Arteries',
    x: 888,
    y: 218,
    modes: ['Ocean Container Freight', 'Priority Airfreight'],
    category: 'ocean',
    transitTime: '7 – 10 Days (Ocean) | 24 – 36h (Air)',
    customs: 'Japan Customs pre-clearance, temperature-controlled electronics manifest',
    frequency: 'Weekly Scheduled Departures',
    stats: 'Direct container loops to Port Klang Northport/Westport',
    badge: 'Pacific Maritime',
    flag: '🇯🇵',
    code: 'JP (TYO / YOK)'
  },
  {
    id: 'india',
    name: 'South Asia Trade Gateway',
    country: 'India (Nhava Sheva / Mumbai / Chennai)',
    role: 'Industrial Chemical & Textile Freight Arteries',
    x: 702,
    y: 265,
    modes: ['Ocean Container (FCL/LCL)', 'Air Cargo'],
    category: 'ocean',
    transitTime: '5 – 8 Days (Ocean) | 2 Days (Air)',
    customs: 'Indian ICEGATE digital customs clearance & ASEAN-India FTA certification',
    frequency: 'Twice Weekly Sailings',
    stats: 'Direct Bay of Bengal & Arabian Sea sea routes',
    badge: 'South Asia Maritime',
    flag: '🇮🇳',
    code: 'IN (NSA / BOM)'
  },
  {
    id: 'middle_east',
    name: 'Middle East Strategic Hub',
    country: 'UAE (Dubai / Jebel Ali Port)',
    role: 'Transshipment & Regional Trade Bridge',
    x: 654,
    y: 248,
    modes: ['Ocean Freight', 'Air Cargo'],
    category: 'ocean',
    transitTime: '10 – 14 Days (Ocean) | 36 Hours (Air)',
    customs: 'GCC customs compliance & free zone staging protocols',
    frequency: 'Twice Weekly Sailings',
    stats: 'Serving Middle East, North Africa & Central Asia corridors',
    badge: 'Gulf Transshipment',
    flag: '🇦🇪',
    code: 'AE (DXB / JEA)'
  },
  {
    id: 'europe',
    name: 'Europe Main Gateways',
    country: 'Europe (Rotterdam, Hamburg, Frankfurt, Antwerp)',
    role: 'Industrial Machinery & High-Tech Trade Corridor',
    x: 518,
    y: 168,
    modes: ['Ocean Container Freight', 'Priority Airfreight'],
    category: 'air',
    transitTime: '20 – 26 Days (Ocean) | 2 – 3 Days (Air)',
    customs: 'Full EU customs declaration, EUR1 certificate, and bonded transit protocols',
    frequency: 'Weekly Direct Container Loops & Scheduled Charters',
    stats: 'Direct air links to Frankfurt (FRA) & sea to Rotterdam (RTM)',
    badge: 'Intercontinental Loop',
    flag: '🇪🇺',
    code: 'EU (RTM / FRA)'
  },
  {
    id: 'usa',
    name: 'North America Trans-Pacific Corridors',
    country: 'United States (Los Angeles, Long Beach, New York)',
    role: 'Trans-Pacific Consumer & Tech Export Lane',
    x: 172,
    y: 223,
    modes: ['Trans-Pacific Ocean Freight', 'Direct Air Cargo'],
    category: 'air',
    transitTime: '18 – 24 Days (Ocean) | 3 – 4 Days (Air)',
    customs: 'US CBP, ISF 10+2 filing, FDA/EPA regulatory handling',
    frequency: 'Scheduled Weekly Vessel Departures',
    stats: 'Direct container lanes from Port Klang to US West Coast',
    badge: 'Trans-Pacific Route',
    flag: '🇺🇸',
    code: 'US (LAX / NYC)'
  },
  {
    id: 'australia',
    name: 'Australasia Trade Lane',
    country: 'Australia (Sydney, Melbourne, Fremantle)',
    role: 'Ocean & Air Distribution Corridor',
    x: 915,
    y: 405,
    modes: ['Ocean Container (FCL/LCL)', 'Scheduled Air Cargo'],
    category: 'ocean',
    transitTime: '12 – 16 Days (Ocean) | 2 Days (Air)',
    customs: 'Australian Border Force & Biosecurity (DAFF) compliance certification',
    frequency: 'Weekly Sailings',
    stats: 'Fumigation & biosecurity clearance verification',
    badge: 'Australasia Direct',
    flag: '🇦🇺',
    code: 'AU (SYD / MEL)'
  }
];

export default function InteractiveWorldMap({ onSelectCorridor }) {
  const [activePin, setActivePin] = useState('singapore');
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'asean', 'ocean', 'air'
  const [isAutoTour, setIsAutoTour] = useState(false);
  const [hoveredPin, setHoveredPin] = useState(null);
  
  // Map specific theme: 'auto' (syncs with document dark mode), or manual 'light' / 'dark'
  const [mapTheme, setMapTheme] = useState('auto');
  const [isSystemDark, setIsSystemDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  // Keep synced with global theme changes
  useEffect(() => {
    const checkDark = () => {
      setIsSystemDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const effectiveDark = mapTheme === 'auto' ? isSystemDark : mapTheme === 'dark';

  // Auto-tour rotation
  useEffect(() => {
    if (!isAutoTour) return;
    const destinations = NETWORK_NODES.filter(n => !n.isHQ);
    const interval = setInterval(() => {
      setActivePin(prev => {
        const currentIndex = destinations.findIndex(d => d.id === prev);
        const nextIndex = (currentIndex + 1) % destinations.length;
        return destinations[nextIndex].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoTour]);

  // Corridor route curve calculator
  const getArcD = (fromX, fromY, toX, toY, id) => {
    if (id === 'singapore') {
      return `M ${fromX} ${fromY} Q 785 315 ${toX} ${toY}`;
    }
    if (id === 'thailand') {
      return `M ${fromX} ${fromY} Q 773 293 ${toX} ${toY}`;
    }
    if (id === 'china') {
      return `M ${fromX} ${fromY} Q 806 270 ${toX} ${toY}`;
    }
    if (id === 'japan') {
      return `M ${fromX} ${fromY} Q 848 242 ${toX} ${toY}`;
    }
    if (id === 'india') {
      return `M ${fromX} ${fromY} Q 740 274 ${toX} ${toY}`;
    }
    if (id === 'middle_east') {
      return `M ${fromX} ${fromY} Q 714 256 ${toX} ${toY}`;
    }
    if (id === 'europe') {
      return `M ${fromX} ${fromY} Q 640 185 ${toX} ${toY}`;
    }
    if (id === 'usa') {
      return `M ${fromX} ${fromY} Q 465 110 ${toX} ${toY}`;
    }
    if (id === 'australia') {
      return `M ${fromX} ${fromY} Q 865 375 ${toX} ${toY}`;
    }
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2 - 35;
    return `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
  };

  const activeNode = NETWORK_NODES.find((n) => n.id === activePin) || NETWORK_NODES[1];
  const hqNode = NETWORK_NODES.find((n) => n.isHQ);

  // Filtered nodes based on active mode filter
  const isNodeVisible = (node) => {
    if (node.isHQ) return true;
    if (filterMode === 'all') return true;
    if (filterMode === 'asean') return node.category === 'asean';
    if (filterMode === 'ocean') return node.category === 'ocean';
    if (filterMode === 'air') return node.category === 'air';
    return true;
  };

  const getLabelCoords = (node) => {
    switch (node.id) {
      case 'malaysia':
        return { x: node.x, y: node.y - 14, anchor: 'middle' };
      case 'singapore':
        return { x: node.x + 10, y: node.y + 12, anchor: 'start' };
      case 'thailand':
        return { x: node.x - 10, y: node.y + 4, anchor: 'end' };
      case 'china':
        return { x: node.x + 10, y: node.y - 2, anchor: 'start' };
      case 'japan':
        return { x: node.x + 10, y: node.y - 4, anchor: 'start' };
      case 'india':
        return { x: node.x - 10, y: node.y + 4, anchor: 'end' };
      case 'middle_east':
        return { x: node.x - 10, y: node.y + 4, anchor: 'end' };
      case 'europe':
        return { x: node.x, y: node.y - 12, anchor: 'middle' };
      case 'usa':
        return { x: node.x - 10, y: node.y + 4, anchor: 'end' };
      case 'australia':
        return { x: node.x + 10, y: node.y + 6, anchor: 'start' };
      default:
        return { x: node.x + 10, y: node.y, anchor: 'start' };
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 lg:p-9 shadow-xl dark:shadow-2xl relative transition-all">
      {/* Header & Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-600/10 to-amber-500/10 border border-amber-500/25 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5 text-red-500" />
            <span>Interactive Global Trade Lanes</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono-tech normal-case font-semibold">140+ Ports Linked</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Strategic Arteries to Central Malaysia
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Select any global port or regional gateway to inspect transit velocity, customs declaration pathways, and commercial sailing departures.
          </p>
        </div>

        {/* Filter Controls & Auto Tour & Map Theme */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-1 text-xs font-semibold">
            {[
              { id: 'all', label: 'All Corridors' },
              { id: 'asean', label: 'Intra-ASEAN' },
              { id: 'ocean', label: 'Maritime Loops' },
              { id: 'air', label: 'Air Express' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterMode(tab.id)}
                className={`px-3 py-1.5 rounded-lg transition-all text-xs ${
                  filterMode === tab.id
                    ? 'bg-white dark:bg-slate-800 text-red-600 dark:text-amber-400 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsAutoTour(!isAutoTour)}
            className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              isAutoTour
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-slate-300'
            }`}
            title="Automatically cycles through trade lanes"
          >
            {isAutoTour ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span className="hidden sm:inline">{isAutoTour ? 'Pause Tour' : 'Auto Tour'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive SVG Map Canvas (Supports Light and Dark Modes) */}
      <div className={`relative w-full aspect-[16/9] min-h-[380px] max-h-[540px] rounded-2xl border overflow-hidden shadow-xl p-0 transition-all duration-300 ${
        effectiveDark 
          ? 'bg-slate-950 border-slate-800/80 shadow-2xl' 
          : 'bg-[#eaf0f8] border-slate-200/90 shadow-lg'
      }`}>
        {/* Oceanic Background Gradient */}
        <div className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
          effectiveDark
            ? 'bg-gradient-to-b from-[#0a1120] via-[#090d16] to-[#050811]'
            : 'bg-gradient-to-b from-[#eaf1f9] via-[#e2ebf6] to-[#d6e3f2]'
        }`} />

        {/* Ambient Spotlights centered around Malaysia/ASEAN and Europe */}
        <div className={`absolute top-[50%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
          effectiveDark ? 'bg-red-600/10' : 'bg-red-500/15'
        }`} />
        <div className={`absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
          effectiveDark ? 'bg-amber-500/10' : 'bg-amber-400/20'
        }`} />

        {/* HUD Overlay Stats in Map Corners */}
        <div className="absolute top-3.5 left-4 z-20 flex items-center gap-3">
          <div className={`backdrop-blur-md border rounded-xl px-3 py-1.5 text-[11px] flex items-center gap-2 shadow-lg transition-colors duration-300 ${
            effectiveDark
              ? 'bg-slate-900/85 border-slate-700/80 text-slate-300'
              : 'bg-white/95 border-slate-200 text-slate-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>OPERATIONAL HUB: <strong className={effectiveDark ? 'text-white' : 'text-slate-950'}>SHAH ALAM / PORT KLANG</strong></span>
          </div>
        </div>

        <div className="absolute top-3.5 right-4 z-20 flex items-center gap-2">
          <div className={`backdrop-blur-md border rounded-xl px-3 py-1.5 text-[11px] font-mono-tech flex items-center gap-1.5 shadow-lg transition-colors duration-300 hidden md:flex ${
            effectiveDark
              ? 'bg-slate-900/85 border-slate-700/80 text-amber-400'
              : 'bg-white/95 border-slate-200 text-amber-700 font-semibold'
          }`}>
            <Navigation className={`w-3.5 h-3.5 ${effectiveDark ? 'text-amber-400' : 'text-amber-600'}`} />
            <span>EDI CONNECT: LIVE (ROYAL MYS CUSTOMS)</span>
          </div>

          {/* Quick Map Theme Toggle Button */}
          <button
            onClick={() => setMapTheme(effectiveDark ? 'light' : 'dark')}
            className={`backdrop-blur-md border rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1.5 shadow-lg font-semibold transition-all ${
              effectiveDark
                ? 'bg-slate-900/85 border-slate-700/80 text-amber-400 hover:text-white'
                : 'bg-white/95 border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-white'
            }`}
            title={`Switch map to ${effectiveDark ? 'light' : 'dark'} mode`}
            aria-label="Toggle map theme"
          >
            {effectiveDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] hidden sm:inline">Light Map</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-slate-700" />
                <span className="text-[11px] hidden sm:inline">Dark Map</span>
              </>
            )}
          </button>
        </div>

        {/* SVG World Map */}
        <svg
          viewBox="0 0 1000 520"
          className="w-full h-full object-contain relative z-10 select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Trade Route Gradient */}
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DE141C" stopOpacity="0.85" />
              <stop offset="60%" stopColor={effectiveDark ? '#F59E0B' : '#D97706'} stopOpacity="0.8" />
              <stop offset="100%" stopColor={effectiveDark ? '#FDCA13' : '#B45309'} stopOpacity="0.9" />
            </linearGradient>

            {/* Active Highlighted Route Gradient */}
            <linearGradient id="activeRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DE141C" />
              <stop offset="50%" stopColor={effectiveDark ? '#FDCA13' : '#EA580C'} />
              <stop offset="100%" stopColor={effectiveDark ? '#F59E0B' : '#D97706'} />
            </linearGradient>

            {/* Glowing filter */}
            <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="hqGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Graticules / Subtle Coordinate Grid */}
          <g 
            stroke={effectiveDark ? 'rgba(51,65,85,0.45)' : 'rgba(148,163,184,0.4)'} 
            strokeWidth="0.5" 
            strokeDasharray="2,4" 
            pointerEvents="none"
          >
            {/* Longitude lines */}
            <line x1="172" y1="20" x2="172" y2="490" />
            <line x1="333" y1="20" x2="333" y2="490" />
            <line x1="500" y1="20" x2="500" y2="490" stroke={effectiveDark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.15)'} />
            <line x1="667" y1="20" x2="667" y2="490" />
            <line x1="833" y1="20" x2="833" y2="490" />
            {/* Latitude lines */}
            <line x1="20" y1="135" x2="980" y2="135" />
            <line x1="20" y1="227" x2="980" y2="227" stroke={effectiveDark ? 'rgba(234,177,20,0.18)' : 'rgba(217,119,6,0.25)'} />
            <line x1="20" y1="307" x2="980" y2="307" stroke={effectiveDark ? 'rgba(222,20,28,0.22)' : 'rgba(222,20,28,0.35)'} strokeWidth="0.8" />
            <line x1="20" y1="394" x2="980" y2="394" stroke={effectiveDark ? 'rgba(234,177,20,0.18)' : 'rgba(217,119,6,0.25)'} />
          </g>

          {/* Latitude Labels */}
          <text x="30" y="304" fill={effectiveDark ? 'rgba(255,255,255,0.25)' : 'rgba(71,85,105,0.6)'} fontSize="8" fontFamily="monospace">0° EQUATOR</text>
          <text x="30" y="224" fill={effectiveDark ? 'rgba(255,255,255,0.18)' : 'rgba(71,85,105,0.5)'} fontSize="7" fontFamily="monospace">23.5°N TROPIC</text>
          <text x="30" y="391" fill={effectiveDark ? 'rgba(255,255,255,0.18)' : 'rgba(71,85,105,0.5)'} fontSize="7" fontFamily="monospace">23.5°S TROPIC</text>

          {/* Realistic High-Fidelity World Continents Vector */}
          <g className="transition-all duration-300" opacity="0.95">
            <path
              d={WORLD_MAP_PATH}
              fill={effectiveDark ? '#182235' : '#cbd5e1'}
              stroke={effectiveDark ? '#2e3e57' : '#94a3b8'}
              strokeWidth="0.85"
              className={`transition-colors duration-300 ${
                effectiveDark ? 'hover:fill-[#1d293f]' : 'hover:fill-[#bac8db]'
              }`}
            />
          </g>

          {/* Trade Route Arcs Connecting Central Malaysia Hub (782, 307) to Destination Ports */}
          {NETWORK_NODES.filter(n => !n.isHQ).map((node) => {
            const isVisible = isNodeVisible(node);
            const isSelected = activePin === node.id;
            const isHovered = hoveredPin === node.id;
            const arcD = getArcD(hqNode.x, hqNode.y, node.x, node.y, node.id);

            return (
              <g 
                key={`corridor-group-${node.id}`} 
                className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-15'}`}
              >
                {/* Subtle Base Route Track */}
                <path
                  d={arcD}
                  fill="none"
                  stroke="#DE141C"
                  strokeOpacity={isSelected ? (effectiveDark ? '0.4' : '0.5') : (effectiveDark ? '0.2' : '0.25')}
                  strokeWidth={isSelected ? '2.5' : '1'}
                />

                {/* Animated Glowing Corridor Flow */}
                <path
                  d={arcD}
                  fill="none"
                  stroke={isSelected || isHovered ? 'url(#activeRouteGrad)' : 'url(#routeGrad)'}
                  strokeWidth={isSelected ? '2.8' : isHovered ? '2.2' : '1.4'}
                  strokeDasharray="6 14"
                  className="animate-corridor-flow"
                  filter={isSelected ? 'url(#routeGlow)' : undefined}
                />

                {/* Extra High-Voltage Beam for Selected Route */}
                {isSelected && (
                  <path
                    d={arcD}
                    fill="none"
                    stroke={effectiveDark ? '#FFF7CD' : '#FFFFFF'}
                    strokeWidth="1.2"
                    strokeDasharray="12 36"
                    className="animate-corridor-flow"
                  />
                )}
              </g>
            );
          })}

          {/* Node Pinpoints */}
          {NETWORK_NODES.map((node) => {
            const isHQ = node.isHQ;
            const isSelected = activePin === node.id;
            const isHovered = hoveredPin === node.id;
            const isVisible = isNodeVisible(node);
            const label = getLabelCoords(node);

            return (
              <g
                key={node.id}
                onClick={() => {
                  setActivePin(node.id);
                  setIsAutoTour(false);
                }}
                onMouseEnter={() => setHoveredPin(node.id)}
                onMouseLeave={() => setHoveredPin(null)}
                className={`cursor-pointer transition-all duration-200 ${isVisible ? 'opacity-100' : 'opacity-25'}`}
              >
                {/* Central Malaysia HQ Special Glowing Beacon */}
                {isHQ ? (
                  <g transform={`translate(${node.x}, ${node.y})`}>
                    <circle r="32" fill="#DE141C" opacity={effectiveDark ? '0.12' : '0.18'} className="animate-ping" />
                    <circle r="20" fill="#DE141C" opacity={effectiveDark ? '0.25' : '0.35'} className="animate-ping-slow" />
                    <circle r="12" fill="#DE141C" opacity={effectiveDark ? '0.45' : '0.55'} />
                    <circle r="6.5" fill="#DE141C" stroke="#FFFFFF" strokeWidth="2.2" filter="url(#hqGlow)" />
                    <circle r="2.5" fill="#FDCA13" />
                  </g>
                ) : (
                  <g transform={`translate(${node.x}, ${node.y})`}>
                    {/* Active Radar Ping */}
                    {isSelected && (
                      <>
                        <circle r="22" fill={effectiveDark ? '#FDCA13' : '#EA580C'} opacity={effectiveDark ? '0.18' : '0.25'} className="animate-ping" />
                        <circle r="12" fill={effectiveDark ? '#F59E0B' : '#EA580C'} opacity={effectiveDark ? '0.35' : '0.45'} />
                      </>
                    )}
                    {isHovered && !isSelected && (
                      <circle r="12" fill={effectiveDark ? '#FDCA13' : '#EA580C'} opacity="0.25" className="animate-ping-slow" />
                    )}

                    {/* Outer Border / Ring */}
                    <circle
                      r={isSelected ? '6.5' : isHovered ? '5.5' : '4'}
                      fill={isSelected ? (effectiveDark ? '#FDCA13' : '#D97706') : (effectiveDark ? '#F59E0B' : '#EA580C')}
                      stroke="#FFFFFF"
                      strokeWidth={isSelected ? '2' : '1.2'}
                      className="transition-all duration-200 shadow"
                    />

                    {/* Center dot */}
                    <circle
                      r={isSelected ? '2.5' : '1.5'}
                      fill={isSelected ? (effectiveDark ? '#78350F' : '#FFFFFF') : '#FFFFFF'}
                    />
                  </g>
                )}

                {/* Node Text Label */}
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor={label.anchor}
                  fontSize={isHQ ? '10' : isSelected ? '9' : '8'}
                  className={`pointer-events-none font-sans select-none transition-all ${
                    isHQ
                      ? effectiveDark 
                        ? 'fill-white font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]'
                        : 'fill-slate-950 font-extrabold drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]'
                      : isSelected
                      ? effectiveDark
                        ? 'fill-amber-300 font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]'
                        : 'fill-amber-900 font-extrabold drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]'
                      : effectiveDark
                        ? 'fill-slate-300 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                        : 'fill-slate-800 font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]'
                  }`}
                >
                  {isHQ ? '★ HQ - Central Malaysia' : `${node.flag} ${node.name.split(' ')[0]}`}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Floating Tooltip on Map */}
        {hoveredPin && hoveredPin !== activePin && (() => {
          const hoveredNode = NETWORK_NODES.find(n => n.id === hoveredPin);
          if (!hoveredNode) return null;
          return (
            <div 
              className={`absolute pointer-events-none z-30 backdrop-blur-md border rounded-xl px-3 py-2 shadow-2xl text-xs max-w-xs transition-all ${
                effectiveDark
                  ? 'bg-slate-900/95 border-amber-500/40 text-white'
                  : 'bg-white/95 border-amber-500/50 text-slate-900 shadow-slate-400/20'
              }`}
              style={{
                left: `${Math.min(75, Math.max(10, (hoveredNode.x / 1000) * 100))}%`,
                top: `${Math.min(70, Math.max(15, (hoveredNode.y / 520) * 100 - 14))}%`
              }}
            >
              <div className="flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400">
                <span>{hoveredNode.flag}</span>
                <span>{hoveredNode.name}</span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                Velocity: <span className="font-mono font-semibold text-slate-900 dark:text-white">{hoveredNode.transitTime}</span>
              </div>
              <div className="text-[10px] text-amber-600 dark:text-amber-500 font-medium">Click to inspect corridor</div>
            </div>
          );
        })()}

        {/* Bottom Bar: Mode Legend & Scale */}
        <div className="absolute bottom-3 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 text-xs pointer-events-none">
          <div className={`backdrop-blur-md border rounded-xl px-3.5 py-1.5 text-[11px] flex items-center gap-3 shadow-lg pointer-events-auto transition-colors duration-300 ${
            effectiveDark
              ? 'bg-slate-900/85 border-slate-700/80 text-slate-300'
              : 'bg-white/95 border-slate-200 text-slate-700'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 ring-2 ring-red-500/40" />
              <span className={`font-semibold ${effectiveDark ? 'text-white' : 'text-slate-900'}`}>Central MY Base</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${effectiveDark ? 'bg-amber-400' : 'bg-amber-500'}`} />
              <span className={effectiveDark ? 'text-slate-300' : 'text-slate-700'}>Active Corridors</span>
            </div>
            <div className={`hidden sm:flex items-center gap-1 ${effectiveDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <Anchor className="w-3 h-3 text-cyan-500" />
              <span>Ocean</span>
              <span className="mx-1">•</span>
              <Plane className="w-3 h-3 text-amber-500" />
              <span>Air</span>
              <span className="mx-1">•</span>
              <Truck className="w-3 h-3 text-emerald-500" />
              <span>Overland</span>
            </div>
          </div>

          <div className={`backdrop-blur-md border rounded-xl px-3 py-1.5 text-[10px] font-mono-tech hidden sm:flex items-center gap-2 shadow-lg transition-colors duration-300 ${
            effectiveDark
              ? 'bg-slate-900/85 border-slate-700/80 text-slate-400'
              : 'bg-white/95 border-slate-200 text-slate-500 font-semibold'
          }`}>
            <span>PROJECTION: MILLER CYLINDRICAL (WGS84)</span>
          </div>
        </div>
      </div>

      {/* Selected Corridor Dossier Card Below Map */}
      <div className="mt-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all shadow-md">
        {/* Subtle Brand Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-amber-400" />

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 ${
                  activeNode.isHQ 
                    ? 'bg-red-600 text-white' 
                    : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 font-semibold'
                }`}>
                  <span>{activeNode.flag}</span>
                  <span>{activeNode.badge}</span>
                </span>

                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-tech">
                  {activeNode.code}
                </span>

                {!activeNode.isHQ && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium ml-auto">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Direct Trade Lane from Central Malaysia</span>
                  </span>
                )}
              </div>

              {/* Title & Role */}
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                {activeNode.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeNode.role}. {activeNode.stats}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs pt-1">
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1 text-[10px]">
                  <Clock className="w-3 h-3 text-red-500" />
                  <span>Transit Schedule</span>
                </div>
                <span className="text-amber-600 dark:text-amber-400 font-extrabold text-sm sm:text-base">
                  {activeNode.transitTime}
                </span>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1 text-[10px]">
                  <Calendar className="w-3 h-3 text-amber-500" />
                  <span>Departure Velocity</span>
                </div>
                <span className="text-slate-900 dark:text-white font-bold text-sm sm:text-base">
                  {activeNode.frequency}
                </span>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1 text-[10px]">
                  <Zap className="w-3 h-3 text-emerald-500" />
                  <span>Transit Modalities</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {activeNode.modes.map((m, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-transparent px-2 py-0.5 rounded text-[10px] font-medium"
                    >
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
                className="w-full py-2.5 px-4 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white font-bold text-xs rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-auto"
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
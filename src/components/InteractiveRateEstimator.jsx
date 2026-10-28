import React, { useState, useEffect, useRef } from 'react';
import { 
  Calculator, 
  Truck, 
  Plane, 
  Ship, 
  ClipboardCheck, 
  Package, 
  ArrowRight, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  Shield,
  HelpCircle,
  ChevronDown,
  MapPin,
  Layers,
  Check
} from 'lucide-react';

const CARGO_OPTIONS = [
  { value: 'pallets', label: 'Standard Industrial Pallets', spec: '120 × 100 cm', desc: 'Standard warehouse pallet' },
  { value: 'euro-pallets', label: 'Euro Pallets (EUR/EPAL)', spec: '120 × 80 cm', desc: 'European standard pallet' },
  { value: 'loose-cartons', label: 'Loose Cartons / Stackable', spec: 'Consolidated LCL', desc: 'Boxed cargo for sorting' },
  { value: 'fcl-20ft', label: '20FT Container (FCL)', spec: '33.2 CBM Capacity', desc: 'Dedicated dry container' },
  { value: 'fcl-40ft', label: '40FT / 40HC Container (FCL)', spec: '67.7 – 76.4 CBM', desc: 'High-cube ocean van' },
  { value: 'machinery-crates', label: 'Heavy Machinery Crates', spec: 'Oversized Cargo', desc: 'Custom fumigated crating' }
];

export default function InteractiveRateEstimator({ onSelectQuote }) {
  const [serviceType, setServiceType] = useState('freight-crossborder');
  const [route, setRoute] = useState('my-sg');
  const [cargoType, setCargoType] = useState('pallets');
  const [units, setUnits] = useState(4);
  const [isRouteOpen, setIsRouteOpen] = useState(false);
  const [isCargoOpen, setIsCargoOpen] = useState(false);

  const routeRef = useRef(null);
  const cargoRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (routeRef.current && !routeRef.current.contains(event.target)) {
        setIsRouteOpen(false);
      }
      if (cargoRef.current && !cargoRef.current.contains(event.target)) {
        setIsCargoOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsRouteOpen(false);
        setIsCargoOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Estimates database
  const estimatesData = {
    'freight-crossborder': {
      name: 'Cross-Border Bonded Trucking',
      icon: Truck,
      routes: {
        'my-sg': { label: 'Central MY (Shah Alam) ↔ Singapore (Jurong/Changi)', transit: '18 – 28 Hours', customs: 'Direct K2 export & Singapore customs clearance via Tuas/Woodlands', mode: 'Bonded 5-Tonne / 40ft Curtainsider' },
        'my-th': { label: 'Central MY ↔ Thailand (Bangkok / Sadao)', transit: '36 – 48 Hours', customs: 'Sadao / Bukit Kayu Hitam cross-border manifest & Form D filing', mode: 'Heavy Haulage Bonded Trailer' },
        'my-peninsular': { label: 'Central MY ↔ Penang / Johor Ports', transit: 'Same Day / 24 Hours', customs: 'Domestic inter-state bonded movement', mode: 'Express 3T / 5T Box Truck' }
      }
    },
    'freight-ocean': {
      name: 'Ocean Freight Shipping (FCL & LCL)',
      icon: Ship,
      routes: {
        'my-china': { label: 'Port Klang ↔ Shanghai / Ningbo / Shenzhen', transit: '6 – 9 Days', customs: 'Customs Form K1/K2, Bill of Lading, Certificate of Origin', mode: 'FCL 20ft/40ft & Consolidated LCL' },
        'my-eu': { label: 'Port Klang ↔ Rotterdam / Hamburg / Antwerp', transit: '22 – 28 Days', customs: 'EUR1, Full customs compliance & port staging', mode: 'Ocean Container Freight' },
        'my-sg': { label: 'Port Klang ↔ Port of Singapore', transit: '1 – 2 Days', customs: 'Feeder coastal customs clearance', mode: 'Direct Coastal Feeder' }
      }
    },
    'freight-air': {
      name: 'Air Cargo Express',
      icon: Plane,
      routes: {
        'my-eu': { label: 'KLIA (KUL) ↔ Frankfurt / Amsterdam / London', transit: '2 – 3 Days', customs: 'Priority Airway Bill (AWB) & urgent customs turnaround', mode: 'Scheduled Freighter / Belly Cargo' },
        'my-china': { label: 'KLIA (KUL) ↔ Hong Kong / Shenzhen / Guangzhou', transit: '24 – 36 Hours', customs: 'Rapid cross-border customs filing', mode: 'Direct Air Freighter' },
        'my-sg': { label: 'KLIA (KUL) ↔ Singapore Changi (SIN)', transit: 'Same-Day / 12 Hours', customs: 'Express transit clearance', mode: 'Dedicated Air Cargo Shuttle' }
      }
    },
    'qc-inspection': {
      name: 'Quality Control (QC) & Bonded Staging',
      icon: ClipboardCheck,
      routes: {
        'my-peninsular': { label: 'Central Malaysia Hub (Shah Alam Facility)', transit: '4 – 8 Hours turnaround', customs: 'Customs seal verification & inventory count', mode: 'Climate-controlled staging bay' },
        'my-sg': { label: 'Cross-Border Inbound Staging for Singapore distribution', transit: 'Under 12 Hours', customs: 'Pre-export SKU & damage verification', mode: 'Multi-tiered racking facility' }
      }
    }
  };

  const currentService = estimatesData[serviceType] || estimatesData['freight-crossborder'];
  const availableRoutes = currentService.routes;
  const activeRouteKey = availableRoutes[route] ? route : Object.keys(availableRoutes)[0];
  const activeRouteData = availableRoutes[activeRouteKey];

  const handleServiceChange = (newService) => {
    setServiceType(newService);
    const newRoutes = estimatesData[newService].routes;
    setRoute(Object.keys(newRoutes)[0]);
    setIsRouteOpen(false);
    setIsCargoOpen(false);
  };

  const selectedCargoOption = CARGO_OPTIONS.find(c => c.value === cargoType) || CARGO_OPTIONS[0];

  const handleTransferToQuote = () => {
    if (onSelectQuote) {
      onSelectQuote({
        service: currentService.name,
        route: activeRouteData.label,
        cargoType: cargoType,
        units: units,
        transit: activeRouteData.transit
      });
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors">
      {/* Decorative ambient speed lines */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator & Planner</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Calculate Transit Time & Operational Protocol
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Simulate your cargo routing from our Central Malaysia Hub with immediate customs requirements and turnaround schedule.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start lg:self-center bg-slate-100 dark:bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700/60">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Live Malaysian Customs Rules Applied</span>
        </div>
      </div>

      {/* Step 1: Select Service Mode */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
          <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400 border border-red-200/80 dark:border-red-900/50 flex items-center justify-center text-[10px] font-black">1</span>
          <span>Select Primary Service Mode</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'freight-crossborder', label: 'Cross-Border Trucking', icon: Truck, tag: 'MY ↔ SG / TH' },
            { id: 'freight-ocean', label: 'Ocean Freight (FCL/LCL)', icon: Ship, tag: 'Port Klang' },
            { id: 'freight-air', label: 'Air Cargo Express', icon: Plane, tag: 'KLIA Cargo' },
            { id: 'qc-inspection', label: 'QC & Staging Hub', icon: ClipboardCheck, tag: 'Central Malaysia' }
          ].map((mode) => {
            const Icon = mode.icon;
            const isSelected = serviceType === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => handleServiceChange(mode.id)}
                className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-red-50/80 dark:bg-gradient-to-br dark:from-red-950/40 dark:to-slate-900 border-red-500 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className={`p-2.5 rounded-xl mb-3 ${
                  isSelected ? 'bg-red-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-sm font-bold leading-tight ${isSelected ? 'text-red-700 dark:text-white' : 'text-slate-800 dark:text-slate-300'}`}>
                  {mode.label}
                </span>
                <span className="text-[11px] text-amber-600 dark:text-amber-400/90 font-mono-tech mt-1">
                  {mode.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2 & 3: Route, Cargo Format & Units */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Route Selector - Custom Themed Dropdown */}
        <div className="relative" ref={routeRef}>
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5">
            <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400 border border-red-200/80 dark:border-red-900/50 flex items-center justify-center text-[10px] font-black">2</span>
            <span>Trade Corridor / Route</span>
          </label>
          
          {/* Custom Trigger Button */}
          <button
            type="button"
            onClick={() => {
              setIsRouteOpen(!isRouteOpen);
              setIsCargoOpen(false);
            }}
            className={`w-full flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/80 border rounded-2xl px-3.5 py-3 text-left transition-all duration-200 focus:outline-none ${
              isRouteOpen 
                ? 'border-red-500 ring-2 ring-red-500/20 bg-white dark:bg-slate-800 shadow-md' 
                : 'border-slate-200 dark:border-slate-700 hover:border-red-500/60 dark:hover:border-red-500/60 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/40 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                  {activeRouteData.label}
                </p>
                <p className="text-[11px] font-medium text-amber-600 dark:text-amber-400 truncate mt-0.5">
                  Est. {activeRouteData.transit}
                </p>
              </div>
            </div>
            <div className="p-1 text-slate-400 shrink-0">
              <ChevronDown className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${isRouteOpen ? 'rotate-180 text-red-500' : ''}`} />
            </div>
          </button>

          {/* Custom Menu Popup */}
          {isRouteOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150 max-h-72 overflow-y-auto">
              <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 mb-1">
                Select Corridor Route
              </div>
              {Object.entries(availableRoutes).map(([key, data]) => {
                const isSelected = activeRouteKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setRoute(key);
                      setIsRouteOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all duration-150 flex items-center justify-between gap-2.5 mb-1 last:mb-0 ${
                      isSelected
                        ? 'bg-red-50/90 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-200/80 dark:border-red-900/50 shadow-xs'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-transparent'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-semibold truncate">
                        {data.label}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] font-mono-tech font-bold text-amber-600 dark:text-amber-400">
                          {data.transit}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                          • {data.mode}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="p-1 rounded-full bg-red-600 text-white shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Cargo Type - Custom Themed Dropdown */}
        <div className="relative" ref={cargoRef}>
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5">
            <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 border border-amber-200/80 dark:border-amber-900/50 flex items-center justify-center text-[10px] font-black">3</span>
            <span>Cargo Packaging Type</span>
          </label>
          
          {/* Custom Trigger Button */}
          <button
            type="button"
            onClick={() => {
              setIsCargoOpen(!isCargoOpen);
              setIsRouteOpen(false);
            }}
            className={`w-full flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/80 border rounded-2xl px-3.5 py-3 text-left transition-all duration-200 focus:outline-none ${
              isCargoOpen 
                ? 'border-amber-500 ring-2 ring-amber-500/20 bg-white dark:bg-slate-800 shadow-md' 
                : 'border-slate-200 dark:border-slate-700 hover:border-amber-500/60 dark:hover:border-amber-500/60 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/40 shrink-0">
                <Package className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                  {selectedCargoOption.label}
                </p>
                <p className="text-[11px] font-medium text-amber-600 dark:text-amber-400 truncate mt-0.5">
                  {selectedCargoOption.spec}
                </p>
              </div>
            </div>
            <div className="p-1 text-slate-400 shrink-0">
              <ChevronDown className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${isCargoOpen ? 'rotate-180 text-amber-500' : ''}`} />
            </div>
          </button>

          {/* Custom Menu Popup */}
          {isCargoOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150 max-h-72 overflow-y-auto">
              <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 mb-1">
                Select Packaging Type
              </div>
              {CARGO_OPTIONS.map((opt) => {
                const isSelected = cargoType === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setCargoType(opt.value);
                      setIsCargoOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all duration-150 flex items-center justify-between gap-2.5 mb-1 last:mb-0 ${
                      isSelected
                        ? 'bg-amber-50/90 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/50 shadow-xs'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-transparent'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-semibold truncate">
                        {opt.label}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] font-mono-tech font-bold text-amber-600 dark:text-amber-400">
                          {opt.spec}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                          • {opt.desc}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="p-1 rounded-full bg-amber-500 text-slate-950 shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Quantity/Units */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5">
            <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-[10px] font-black">4</span>
            <span>Quantity / Units</span>
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700 pointer-events-none">
              <Layers className="w-4 h-4" />
            </div>
            <input
              type="number"
              min="1"
              max="500"
              value={units}
              onChange={(e) => setUnits(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl pl-12 pr-28 py-3.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 dark:focus:border-red-500 transition-all duration-200 font-mono-tech"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setUnits(prev => Math.max(1, prev - 1))}
                className="w-7 h-7 rounded-lg bg-slate-200/80 dark:bg-slate-700 hover:bg-red-600 hover:text-white text-slate-700 dark:text-slate-200 flex items-center justify-center text-sm font-bold transition-colors"
                title="Decrease"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => setUnits(prev => prev + 1)}
                className="w-7 h-7 rounded-lg bg-slate-200/80 dark:bg-slate-700 hover:bg-red-600 hover:text-white text-slate-700 dark:text-slate-200 flex items-center justify-center text-sm font-bold transition-colors"
                title="Increase"
              >
                +
              </button>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 shadow-2xs ml-0.5">
                Units
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Result Output Panel */}
      <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-1 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Estimated Turnaround Time */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Estimated Turnaround</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white text-gradient-gold">
                {activeRouteData.transit}
              </div>
              <span className="text-[12px] text-slate-400 font-medium">Door-to-door or hub dispatch</span>
            </div>
          </div>

          {/* Operational Transport Fleet */}
          <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Allocated Fleet Specification</span>
              <div className="text-sm font-bold text-slate-100 mt-1">
                {activeRouteData.mode}
              </div>
              <span className="text-[12px] text-slate-400">GPS Tracked & Bonded Cargo Seal</span>
            </div>
          </div>

          {/* Transfer to Quote CTA */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <button
              onClick={handleTransferToQuote}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-red-600/20 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Lock In Quote For This Route</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-slate-400 text-center">
              Pre-fills your exact cargo specs for formal 24h quote
            </span>
          </div>
        </div>

        {/* Regulatory & Customs Checklist Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold text-slate-200">Customs Protocol:</span>
            <span className="text-slate-400">{activeRouteData.customs}</span>
          </div>
          <div className="flex items-center gap-2 text-amber-400 font-semibold shrink-0">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Includes Inbound QC Check & Signed POD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

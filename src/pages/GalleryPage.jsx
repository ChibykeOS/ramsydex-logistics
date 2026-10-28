import React, { useState } from 'react';
import { 
  X, 
  Maximize2, 
  Truck, 
  Building, 
  Ship, 
  Plane, 
  CheckCircle2, 
  Sparkles,
  Camera
} from 'lucide-react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'fleet',
      title: 'Commercial Linehaul Prime Movers',
      caption: 'Heavy haulage container trailers operating scheduled linehauls across Peninsular Malaysia.',
      image: '/images/freight-transport.jpg',
      tag: 'Transport Fleet'
    },
    {
      id: 2,
      category: 'hub',
      title: 'Central Malaysia Hub Racking Facility',
      caption: 'High-bay pallet staging and inventory consolidation warehouse in Bukit Jelutong, Shah Alam.',
      image: '/images/supply-chain.jpg',
      tag: 'Hub Operations'
    },
    {
      id: 3,
      category: 'qc',
      title: 'Inbound Carton QC Verification Bay',
      caption: 'Precision barcode scanning and master carton damage audits conducted prior to distribution.',
      image: '/images/qc-inspection.jpg',
      tag: 'Quality Control'
    },
    {
      id: 4,
      category: 'cargo',
      title: 'Port Klang Deep-Sea Container Terminal',
      caption: 'Direct wharfside container staging and customs K1/K2 clearance at Port Klang.',
      image: '/images/port-klang.jpg',
      tag: 'Maritime Freight'
    },
    {
      id: 5,
      category: 'fleet',
      title: 'Destination Last-Mile Delivery Fleet',
      caption: 'Urban delivery vans and tail-lift lorries dispatched for commercial distribution.',
      image: '/images/last-mile.jpg',
      tag: 'Last Mile'
    },
    {
      id: 6,
      category: 'cargo',
      title: 'KLIA Cargo Terminal Airfreight Staging',
      caption: 'High-priority air cargo handling and charter palletization at KLIA Cargo Village.',
      image: '/images/air-cargo.jpg',
      tag: 'Airfreight'
    },
    {
      id: 7,
      category: 'hub',
      title: 'Operations Command & Dispatch Desk',
      caption: '24/7 telematics monitoring and real-time fleet coordination team.',
      image: '/images/hub-operations.jpg',
      tag: 'Operations Desk'
    },
    {
      id: 8,
      category: 'cargo',
      title: 'Ocean Container Vessel Feeder Loading',
      caption: 'Intermodal container transfer connecting Port Klang with regional ASEAN ports.',
      image: '/images/ocean-cargo.jpg',
      tag: 'Ocean Freight'
    },
    {
      id: 9,
      category: 'fleet',
      title: 'Priority Courier & Express Dispatch',
      caption: 'Rapid parcel routing and time-critical industrial spares delivery in Central Malaysia.',
      image: '/images/courier-express.jpg',
      tag: 'Express Courier'
    },
    {
      id: 10,
      category: 'hub',
      title: 'Warehouse Specialist Cross-Dock Staging',
      caption: 'Skilled inventory handlers orchestrating pallet strapping and shrink-wrap staging.',
      image: '/images/warehouse-team.jpg',
      tag: 'Cross-Docking'
    },
    {
      id: 11,
      category: 'qc',
      title: 'Customs & Regulatory Documentation Check',
      caption: 'Licensed customs agent inspecting shipping manifests and Certificate of Origin documents.',
      image: '/images/customs-clearance.jpg',
      tag: 'Customs Office'
    },
    {
      id: 12,
      category: 'cargo',
      title: 'Central Logistics Gateway at Dusk',
      caption: 'Night linehaul departures departing Central Malaysia for Singapore and Thailand borders.',
      image: '/images/hero-logistics.jpg',
      tag: 'Linehaul Dispatch'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md overflow-hidden">
        {/* Background Atmosphere Image (adds 0 height) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/hero-logistics.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-35 dark:opacity-40 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 via-45% to-transparent dark:from-slate-950 dark:via-slate-950/75 dark:via-45% dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 dark:from-slate-950/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Operational Gallery</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Field Operations, Fleet & Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Real photography showcasing our commercial fleet, Central Malaysia hub operations, customs gate procedures, and precision QC inspection workflows.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                { id: 'all', label: 'All Photos (12)' },
                { id: 'fleet', label: 'Fleet & Lorries' },
                { id: 'hub', label: 'Hub & Warehousing' },
                { id: 'cargo', label: 'Air & Ocean Cargo' },
                { id: 'qc', label: 'QC & Customs Staging' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image Showcase Card (Desktop - strictly bounded height to ensure 0 height increase) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <div className="relative h-48 xl:h-52 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
              <img
                src="/images/hero-logistics.jpg"
                alt="Central Logistics Operations"
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
                  Linehaul Gateway
                </span>
                <span className="text-[10px] font-mono-tech text-amber-400 font-semibold bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded-lg border border-amber-500/20">
                  12 Active Assets
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-md hover:shadow-xl relative"
            >
              {/* Photo Box */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <span className="absolute top-3 right-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 rounded-full text-[10px] font-bold text-amber-400">
                  {item.tag}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40">
                  <span className="p-3 bg-red-600 text-white rounded-full shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-slate-900">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Central Malaysia Operations</span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">View High-Res</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL POPUP */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono-tech mb-1 block">
                  {activePhoto.tag} • Central Malaysia Hub
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {activePhoto.caption}
                </p>
              </div>

              <button
                onClick={() => setActivePhoto(null)}
                className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors shrink-0"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

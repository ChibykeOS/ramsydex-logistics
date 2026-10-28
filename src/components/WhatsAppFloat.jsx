import React from 'react';

export default function WhatsAppFloat() {
  const phoneNumber = "60123899128"; // Central Malaysia Dispatch WhatsApp
  const defaultMessage = encodeURIComponent("Hello Ramsydex Logistics, I would like to inquire about freight transport and customs clearance services from Central Malaysia.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-white/95 dark:bg-slate-900/95 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 px-4 py-2.5 rounded-full shadow-xl shadow-slate-900/10 dark:shadow-black/50 text-xs font-bold backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-emerald-500/70 dark:hover:border-emerald-500/70 active:scale-95 group focus:outline-none"
        title="Chat with Central Malaysia Dispatch on WhatsApp"
        aria-label="Dispatch Online - Chat on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="tracking-wide">Dispatch Online</span>
      </a>
    </div>
  );
}

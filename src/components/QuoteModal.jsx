import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Package, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialData = null }) {
  const [selectedTopic, setSelectedTopic] = useState('Freight Quote');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceNeeded: 'Freight Quote',
    origin: '',
    destination: '',
    cargoDetails: '',
    pdpaConsent: false,
    honeypot: '' // spam trap
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const topics = [
    'Freight Quote',
    'Customs Clearance',
    'QC Inspection',
    'Supply Chain',
    'Last Mile / Courier',
    'General Inquiry'
  ];

  useEffect(() => {
    if (initialData) {
      if (initialData.service) {
        // Map service name to topics
        if (initialData.service.includes('Freight') || initialData.service.includes('Trucking') || initialData.service.includes('Ocean') || initialData.service.includes('Air')) {
          setSelectedTopic('Freight Quote');
        } else if (initialData.service.includes('QC')) {
          setSelectedTopic('QC Inspection');
        } else if (initialData.service.includes('Customs')) {
          setSelectedTopic('Customs Clearance');
        }
      }
      setFormData(prev => ({
        ...prev,
        serviceNeeded: initialData.service || prev.serviceNeeded,
        origin: initialData.route ? initialData.route.split('↔')[0]?.trim() : prev.origin,
        destination: initialData.route ? initialData.route.split('↔')[1]?.trim() : prev.destination,
        cargoDetails: initialData.cargoType 
          ? `${initialData.units || 1} units of ${initialData.cargoType}. Estimated transit: ${initialData.transit || 'N/A'}`
          : prev.cargoDetails
      }));
    }
  }, [initialData]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setFormData(prev => ({
      ...prev,
      serviceNeeded: topic
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check honeypot spam protection
    if (formData.honeypot) {
      console.warn("Spam bot detected");
      return;
    }

    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      setErrorMsg("Please complete all required business contact fields.");
      return;
    }

    if (!formData.pdpaConsent) {
      setErrorMsg("Please accept the Personal Data Protection Act (PDPA) consent checkbox.");
      return;
    }

    setLoading(true);

    // Simulate submission to dispatch CRM
    setTimeout(() => {
      const generatedRef = 'RGL-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setReferenceId('');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      serviceNeeded: selectedTopic,
      origin: '',
      destination: '',
      cargoDetails: '',
      pdpaConsent: false,
      honeypot: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col transition-colors my-auto">
        {/* Top Gradient Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 shrink-0" />

        {/* Modal Header */}
        <div className="px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0 bg-white dark:bg-slate-900">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Central Malaysia Operational Response Desk</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
              Request B2B Logistics & Customs Quote
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white dark:hover:bg-slate-700 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 overflow-y-auto flex-1">
          {submitted ? (
            /* Thank You State */
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 dark:text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Inquiry Logged Successfully!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                Your quote request has been transmitted directly to our Central Malaysia operations desk.
              </p>

              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 max-w-sm mx-auto mb-6 text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Tracking Reference:</span>
                  <span className="text-sm font-mono-tech font-bold text-amber-600 dark:text-amber-400">{referenceId}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Selected Service:</span>
                  <span className="text-xs text-slate-800 dark:text-slate-200">{formData.serviceNeeded}</span>
                </div>
                <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <span>Guaranteed Response:</span>
                  <span>Within 24 Hours (Business Days)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/60123899128?text=${encodeURIComponent(`Hello Ramsydex Logistics, I just submitted Quote Ref ${referenceId} for ${formData.serviceNeeded} (${formData.company}). Can we connect?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Immediately on WhatsApp</span>
                </a>

                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Simple Single-Page Form */
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              {/* Topic Selector Pills */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Select Topic / Service Type
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {topics.map((topic) => {
                    const isSelected = selectedTopic === topic;
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => handleTopicClick(topic)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                          isSelected
                            ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md shadow-red-600/30 ring-2 ring-red-500/50'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
                        }`}
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. David Tan"
                    className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Industrial Sdn Bhd"
                    className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+60 12-345 6789"
                    className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Service Scope Indicator */}
              <div className="flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Selected Service Scope:</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">{formData.serviceNeeded}</span>
              </div>

              {/* Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Cargo Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="e.g. Shah Alam / Port Klang / Shenzhen"
                    className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Cargo Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Singapore / Bangkok / Frankfurt"
                    className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Cargo Details / Pallet Count */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Cargo Details / Pallet Count / Volume
                </label>
                <textarea
                  name="cargoDetails"
                  rows={2}
                  value={formData.cargoDetails}
                  onChange={handleChange}
                  placeholder="e.g. 8 standard pallets, approx 3,200 kg electronics, requires inbound QC carton inspection"
                  className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white resize-none"
                />
              </div>

              {/* Honeypot Spam Protection (Hidden) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              {/* PDPA Consent Checkbox */}
              <div className="flex items-start gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="pdpaConsent"
                  name="pdpaConsent"
                  checked={formData.pdpaConsent}
                  onChange={handleChange}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="pdpaConsent" className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                  I agree to be contacted by Ramsydex Global Logistics in compliance with Malaysia's PDPA 2010. See <span className="text-red-500 underline">Privacy Policy</span>.
                </label>
              </div>

              {errorMsg && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-500/40 text-red-700 dark:text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* 24-Hour Desk Promise Callout */}
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    <strong>24-Hour Promise:</strong> Inquiries reviewed within 24 hours during business hours (Mon–Fri 08:30–18:00 GMT+8).
                  </span>
                </div>
              </div>

              {/* Action Buttons: Cancel and Submit */}
              <div className="flex flex-col-reverse sm:flex-row items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5 text-slate-400" />
                  <span>Cancel</span>
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 py-2.5 px-5 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmitting to Central Desk...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

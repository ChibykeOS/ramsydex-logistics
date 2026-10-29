import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Building,
  Navigation,
  Truck,
  Globe
} from 'lucide-react';

export default function ContactPage() {
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
    honeypot: ''
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

    if (formData.honeypot) {
      console.warn("Spam detected");
      return;
    }

    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      setErrorMsg("Please fill in all required business contact fields.");
      return;
    }

    if (!formData.pdpaConsent) {
      setErrorMsg("Please accept the Personal Data Protection Act (PDPA) consent checkbox.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const generatedRef = 'RGL-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md overflow-hidden">
        {/* Background Atmosphere Image (adds 0 height) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/hub-operations.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-35 dark:opacity-40 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 via-45% to-transparent dark:from-slate-950 dark:via-slate-950/75 dark:via-45% dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 dark:from-slate-950/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us & Instant Quote Desk</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Connect with Our Central Malaysia Operations Desk
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Direct access to freight specialists, customs brokers, and distribution coordinators. We review and answer all B2B inquiries within 24 hours during business hours.
            </p>
          </div>

          {/* Right Image Showcase Card (Desktop - strictly bounded height to ensure 0 height increase) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <div className="relative h-44 xl:h-48 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group">
              <img
                src="/images/hub-operations.jpg"
                alt="Central Malaysia Dispatch Desk"
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
                  Operations Command
                </span>
                <span className="text-[10px] font-mono-tech text-amber-400 font-semibold bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded-lg border border-amber-500/20">
                  24h Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT & FORM SECTION */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full space-y-8 lg:space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Fast Commercial Quotation Request */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl relative flex flex-col justify-between h-full">
            <div className="mb-5 pb-5 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Fast Commercial Quotation Request
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Single-page streamlined quote submission. Select your topic below to customize the request.
              </p>
            </div>

              {submitted ? (
                /* Thank You View */
                <div className="py-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 dark:text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                    Your details have been logged with our Central Malaysia operations coordinator.
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 max-w-md mx-auto mb-8 text-left space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-bold uppercase">Reference Code:</span>
                      <span className="font-mono-tech font-extrabold text-amber-600 dark:text-amber-400 text-sm">{referenceId}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-bold uppercase">Selected Topic:</span>
                      <span className="text-slate-800 dark:text-slate-200">{formData.serviceNeeded}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-emerald-600 dark:text-emerald-400 font-semibold pt-1 border-t border-slate-200 dark:border-slate-800">
                      <span>Response Commitment:</span>
                      <span>Within 24 Hours (Business Days)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/60123899128?text=${encodeURIComponent(`Hello Ramsydex Logistics, I submitted Quote Request ${referenceId} for ${formData.serviceNeeded} (${formData.company}). Can you assist?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Follow Up on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
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
                      }}
                      className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Simple Single-Page Form */
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Topic Selector Pills (Maersk inspired) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                        Topic Selector (Select Service Focus)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((topic) => {
                          const isSelected = selectedTopic === topic;
                          return (
                            <button
                              key={topic}
                              type="button"
                              onClick={() => handleTopicClick(topic)}
                              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                isSelected
                                  ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md shadow-red-600/30 ring-2 ring-red-500/50'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                              }`}
                            >
                              {topic}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Jason Lim"
                          className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Precision Manufacturing Sdn Bhd"
                          className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jason@company.com"
                          className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+60 12-987 6543"
                          className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Origin & Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Origin (City / Port / Country)
                        </label>
                        <input
                          type="text"
                          name="origin"
                          value={formData.origin}
                          onChange={handleChange}
                          placeholder="e.g. Port Klang or Shah Alam"
                          className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Destination (City / Port / Country)
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g. Singapore or Rotterdam"
                          className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Cargo Details / Pallet Count */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Cargo Details / Pallet Count / Special Instructions
                      </label>
                      <textarea
                        name="cargoDetails"
                        rows={2}
                        value={formData.cargoDetails}
                        onChange={handleChange}
                        placeholder="e.g. 6 standard pallets, 2,400 kg automotive parts, requires K1 customs import clearance and inbound carton QC report"
                        className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-red-500 focus:bg-white resize-none"
                      />
                    </div>

                    {/* Spam Protection Honeypot (Hidden) */}
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

                    {/* PDPA Checkbox */}
                    <div className="flex items-start gap-2.5 pt-0.5">
                      <input
                        type="checkbox"
                        id="contactPdpa"
                        name="pdpaConsent"
                        checked={formData.pdpaConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-red-600 focus:ring-red-500"
                      />
                      <label htmlFor="contactPdpa" className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                        I agree to be contacted about my enquiry in compliance with Malaysia's Personal Data Protection Act (PDPA 2010). See our <span className="text-red-500 underline">Privacy Policy</span>.
                      </label>
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-500/40 text-red-700 dark:text-red-300 text-xs">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}
                  </div>

                  {/* Left Bottom Action Section */}
                  <div className="space-y-3 pt-4">
                    {/* Response Time Promise Note from Brief */}
                    <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">
                          <strong>Response Commitment:</strong> Inquiries reviewed & answered within 24h during business hours.
                        </span>
                      </div>
                      <span className="text-amber-600 dark:text-amber-400 font-mono-tech shrink-0 font-semibold">
                        Mon–Fri 08:30–18:00 (GMT+8)
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-sm rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting to Central Desk...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiries Directly to Desk</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
          </div>

          {/* Right Column: Operational Headquarters Hub Details Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full">
            <div className="space-y-4">
              {/* Header */}
              <div className="pb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 font-mono-tech">
                  <Building className="w-4 h-4 text-amber-500" />
                  <span>Operational Headquarters</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Central Malaysia Logistics Hub
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Bukit Jelutong / Shah Alam Tri-Axis Logistics Corridor
                </p>
              </div>

              {/* Hub Facility Visual Snapshot */}
              <div className="relative h-40 sm:h-44 w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-md group">
                <img
                  src="/images/supply-chain.jpg"
                  alt="Ramsydex Central Malaysia Staging & High-Bay Warehouse"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white rounded-lg text-[10px] font-bold uppercase tracking-wide shadow">
                  Tri-Axis Gateway
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                  <span className="font-semibold bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    150,000+ sq ft Facility
                  </span>
                  <span className="font-mono-tech text-amber-400 font-semibold bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded-lg border border-amber-500/20">
                    Port Klang 28m
                  </span>
                </div>
              </div>

              {/* Contact & Hours Details */}
              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Facility Address:</span>
                    <span>
                      Ramsydex Global Logistics Sdn Bhd<br />
                      Central Logistics Park, Seksyen U8, Bukit Jelutong,<br />
                      40150 Shah Alam, Selangor Darul Ehsan, Malaysia
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white inline mr-1.5">Dispatch Hotline:</span>
                    <a href="tel:+60378901288" className="text-slate-800 dark:text-slate-200 hover:text-red-500 transition-colors font-semibold">
                      +60 3-7890 1288
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white inline mr-1.5">Commercial Desk:</span>
                    <a href="mailto:dispatch@ramsydex.com" className="text-slate-800 dark:text-slate-200 hover:text-red-500 transition-colors font-semibold">
                      dispatch@ramsydex.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Operating Hours (GMT+8):</span>
                    <span>Mon – Fri: 08:30 – 18:00 • Sat: 08:30 – 13:00</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">24/7 Monitored Port Drayage & Emergency Charters</span>
                  </div>
                </div>
              </div>

              {/* Key Facility Capabilities Badges - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Bonded K1/K2 Staging</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">100% Carton QC Audits</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">28-Min Port Feeder</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Daily ASEAN Linehaul</span>
                </div>
              </div>
            </div>

            {/* Right Bottom Action Section (Mirrors Left Column Action Structure) */}
            <div className="space-y-3 pt-4">
              {/* WhatsApp Duty Dispatcher Commitment */}
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Direct Dispatch Desk:</strong> WhatsApp fast routing & emergency charters.
                  </span>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono-tech shrink-0 font-semibold">
                  Typical Reply &lt; 15 mins
                </span>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href="https://wa.me/60123899128?text=Hello%20Ramsydex%20Logistics%2C%20I%20would%20like%20to%20connect%20with%20your%20Central%20Malaysia%20desk."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:shadow-2xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect with Dispatch via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map Card (Placed below the two cards) */}
        <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col">
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white">
              <Navigation className="w-4 h-4 text-red-500" />
              <span className="text-sm font-extrabold">Central Malaysia Tri-Axis Location</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono-tech text-slate-500 dark:text-slate-400">
              <span className="bg-red-500/10 text-red-600 dark:text-red-400 px-3 py-1 rounded-full font-semibold">Port Klang &lt; 28 min</span>
              <span className="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full font-semibold">KLIA &lt; 35 min</span>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full font-semibold hidden md:inline">Shah Alam Highway Interchanges (NKVE / ELITE / GCE)</span>
            </div>
          </div>

          {/* Interactive Google Map iframe representation */}
          <div className="relative w-full h-[320px] sm:h-[400px] bg-slate-100 dark:bg-slate-950">
            <iframe
              title="Central Malaysia Logistics Hub Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63737.51475730419!2d101.50502158867451!3d3.1042502390886566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d7d9f9cfbf1%3A0xe54d6fa7c90e66e7!2sBukit%20Jelutong%2C%2040150%20Shah%20Alam%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
              className="w-full h-full border-0 opacity-90 dark:filter dark:invert dark:contrast-125 dark:opacity-80 absolute inset-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

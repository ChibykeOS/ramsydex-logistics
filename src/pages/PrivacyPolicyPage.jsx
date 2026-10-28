import React from 'react';
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage({ setActivePage }) {
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen py-16 px-4 sm:px-8 transition-colors">
      <div className="max-w-4xl mx-auto w-full">
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Operational Gateway</span>
        </button>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-12 shadow-xl space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Malaysia PDPA 2010 Compliance</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Privacy Policy & Personal Data Notice
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Last updated: October 2026 • Ramsydex Global Logistics Sdn Bhd [SSM: 202401048291 (1584132-K)]
            </p>
          </div>

          <section className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">1. Statement of Compliance</h2>
            <p>
              Ramsydex Global Logistics Sdn Bhd ("Ramsydex", "we", "us", or "our") is committed to protecting your personal and corporate commercial data in compliance with the Personal Data Protection Act 2010 of Malaysia ("PDPA"). This Privacy Notice explains how we collect, process, manage, and safeguard the information you provide when using our website and B2B quote services.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-white pt-4">2. Nature of Data Collected</h2>
            <p>
              In providing logistics, freight forwarding, customs clearance, and quality control services, we may collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Contact Details: Full name, business email address, corporate telephone number, and company name.</li>
              <li>Operational Shipping Data: Cargo origin, destination, cargo descriptions, pallet counts, weights, harmonized system (HS) codes, and consignee / consignor details.</li>
              <li>Technical Identifiers: IP addresses, browser types, and session timestamps used solely to maintain form security and prevent automated bot spam.</li>
            </ul>

            <h2 className="text-base sm:text-lg font-bold text-white pt-4">3. Purpose of Data Processing</h2>
            <p>
              Your personal and corporate data is collected and processed exclusively for legitimate commercial supply chain purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Generating accurate freight rate quotations, transit schedules, and customs feasibility assessments.</li>
              <li>Direct electronic data interchange (EDI) customs declarations with the Royal Malaysian Customs Department (SMK).</li>
              <li>Communicating delivery milestones, electronic Proof of Delivery (e-POD), and digital QC inspection reports.</li>
              <li>Internal operational records and compliance with Malaysian statutory tax and transport obligations.</li>
            </ul>

            <h2 className="text-base sm:text-lg font-bold text-white pt-4">4. Disclosure & Confidentiality</h2>
            <p>
              We do not sell, rent, or trade your data to third-party advertisers. Information is only disclosed to authorized regulatory bodies (e.g. Royal Malaysian Customs Department, Port Authorities), certified terminal operators, and verified transport partners strictly as required to fulfill carriage and customs mandates.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-white pt-4">5. Security & Storage</h2>
            <p>
              All digital form submissions are transmitted using encrypted SSL/HTTPS protocols and stored in protected databases behind modern firewalls with restricted administrative access.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-white pt-4">6. Your Rights & Contact Details</h2>
            <p>
              Under the PDPA 2010, you have the right to request access to and correction of your personal data, or to limit the processing of your data. For inquiries regarding your data, please contact our Data Protection Liaison:
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
              <strong className="text-white block">Data Protection Desk</strong>
              <span className="text-slate-400">Ramsydex Global Logistics Sdn Bhd</span><br />
              <span className="text-slate-400">Email: pdpa@ramsydex.com / dispatch@ramsydex.com</span><br />
              <span className="text-slate-400">Telephone: +60 3-7890 1288</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

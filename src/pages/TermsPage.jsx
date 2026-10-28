import React from 'react';
import { FileText, ShieldAlert, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function TermsPage({ setActivePage }) {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Standard Trading Conditions</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Terms of Use & Standard Trading Conditions (MFFA STC)
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Applicable to all freight forwarding, warehousing, QC inspection, and customs clearance contracts entered into with Ramsydex Global Logistics Sdn Bhd.
            </p>
          </div>

          <section className="space-y-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">1. Incorporation of Standard Trading Conditions</h2>
            <p>
              All business conducted, services provided, or quotations issued by Ramsydex Global Logistics Sdn Bhd ("Company") are governed strictly by the Standard Trading Conditions adopted by the Federation of Malaysia Freight Forwarders (FMFF / MFFA), except where superseded by mandatory provisions of national legislation or international conventions (such as the Hague-Visby Rules, Montreal Convention, or CMR).
            </p>

            <h2 className="text-base sm:text-lg font-bold text-white pt-3">2. Customer Warranties & Cargo Integrity</h2>
            <p>
              The customer warrants that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>All descriptions, values, weights, carton counts, and Harmonized System (HS) classifications provided are accurate, complete, and true.</li>
              <li>Consignments are securely packed, sealed, and marked to withstand normal transport risks, ocean transit motion, and cross-border trucking.</li>
              <li>No dangerous goods (DG), hazardous substances, contraband, or undeclared restricted articles are presented without prior written disclosure and statutory permits.</li>
            </ul>

            <h2 className="text-base sm:text-lg font-bold text-white pt-3">3. Customs Clearance & Regulatory Filings</h2>
            <p>
              The Company acts as an authorized agent on behalf of the customer before the Royal Malaysian Customs Department and foreign border authorities. All duties, taxes, demurrage, terminal storage charges, and statutory penalties assessed as a result of improper customer documentation or misdeclaration remain the absolute liability of the customer.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-white pt-3">4. Quality Control (QC) & Inspection Mandate</h2>
            <p>
              Where the customer contracts the Company for inbound QC inspection or barcode verification, the Company’s scope is strictly confined to external visual carton integrity, piece count verification, barcode readability, and photographic recording. The Company does not perform laboratory chemical analysis or internal engineering tests unless explicitly contracted under a separate technical service agreement.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-white pt-3">5. Limitation of Liability & Cargo Insurance</h2>
            <p>
              In accordance with standard international logistics practice, the Company's liability for loss, damage, or misdirection of cargo is limited to standard statutory SDR limits per kilogram unless a higher declared value is submitted in writing and covered under comprehensive Marine Cargo Transit Insurance arranged prior to shipment dispatch.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-white pt-3">6. Governing Law & Jurisdiction</h2>
            <p>
              These conditions and any contract arising hereunder shall be governed by and construed in accordance with the Laws of Malaysia, and the parties submit to the exclusive jurisdiction of the Courts of Malaysia.
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs mt-6">
              <strong className="text-white block mb-1">Commercial Desk Contact</strong>
              <p className="text-slate-400">
                For complete copies of the MFFA Standard Trading Conditions or specific carriage agreements, contact: <a href="mailto:dispatch@ramsydex.com" className="text-amber-400 underline">dispatch@ramsydex.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

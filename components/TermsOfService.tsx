import React from 'react';
import { Scale, FileText, AlertTriangle, ShieldCheck } from 'lucide-react';

export const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Terms of <span className="text-primary">Service</span></h1>
          <p className="text-slate-400 text-lg">Last Updated: May 20, 2025</p>
        </div>

        <div className="bg-surface/30 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-12">
          
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              By accessing or using Whisk Automation (the "Service"), you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section>
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Scale size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">2. License</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Whisk Automation grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the extension strictly in accordance with the terms of this Agreement.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>You may not reverse engineer, decompile, or disassemble the software.</li>
                <li>You may not modify, adapt, or create derivative works from the software.</li>
            </ul>
          </section>

           <section>
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                <AlertTriangle size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Disclaimers</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Whisk Automation makes no warranties, expressed or implied, regarding the reliability or availability of the Google Whisk/Labs platform which this extension interacts with.
            </p>
            <p className="text-slate-300 leading-relaxed">
              You are responsible for maintaining the safety of your own Google account. Whisk Automation is not responsible for bans or suspensions resulting from misuse of the automation features.
            </p>
          </section>

           <section>
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Limitation of Liability</h2>
            </div>
             <p className="text-slate-300 leading-relaxed">
               In no event shall Whisk Automation be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
             </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Questions about the Terms of Service should be sent to us at support.
            </p>
            <a href="mailto:support@whiskautomation.com" className="text-primary font-bold hover:underline">support@whiskautomation.com</a>
          </section>

        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Privacy <span className="text-primary">Policy</span></h1>
          <p className="text-slate-400 text-lg">Last Updated: May 20, 2025</p>
        </div>

        <div className="bg-surface/30 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-12">
          
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Whisk Automation ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website (whiskautomation.com) and our Chrome Extension. 
              We are committed to ensuring that your personal information is protected and never misused.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Eye size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>We believe in data minimization. We only collect what is strictly necessary:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Local Data:</strong> Your generated prompts, history, and settings are stored locally on your device using Chrome's <code>local.storage</code> API. We do not transmit this data to our servers.</li>
                <li><strong>Account Information:</strong> If you purchase a premium license, we collect your email address and payment confirmation via our payment processor (Stripe/LemonSqueezy) to validate your license.</li>
                <li><strong>AI Interaction:</strong> When using the "Smart Prompts" feature, your keywords are sent to Google Gemini APIs to generate text. This data is not stored by us.</li>
              </ul>
            </div>
          </section>

          {/* Data Usage */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <Server size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>To provide and maintain the functionality of the Whisk Automation extension.</li>
              <li>To verify your premium license status.</li>
              <li>To provide customer support when you contact us.</li>
              <li>To detect and prevent fraudulent use of our software.</li>
            </ul>
          </section>

          {/* Third Party */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">4. Third-Party Services</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We may employ third-party companies and individuals to facilitate our Service. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
               <div className="p-4 rounded-xl bg-black border border-white/5">
                 <h4 className="font-bold text-white mb-1">Google Gemini API</h4>
                 <p className="text-xs text-slate-500">Used for generating smart prompts. Data is processed according to Google's AI Principles.</p>
               </div>
               <div className="p-4 rounded-xl bg-black border border-white/5">
                 <h4 className="font-bold text-white mb-1">Stripe / LemonSqueezy</h4>
                 <p className="text-xs text-slate-500">Used for secure payment processing. We do not store credit card details.</p>
               </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                <Lock size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
            <a href="mailto:privacy@whiskautomation.com" className="text-primary font-bold hover:underline">privacy@whiskautomation.com</a>
          </section>

        </div>
      </div>
    </div>
  );
};
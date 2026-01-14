import React from 'react';
import { Cookie, Settings, Shield, Info } from 'lucide-react';

export const CookiePolicy = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Cookie <span className="text-primary">Policy</span></h1>
          <p className="text-slate-400 text-lg">Last Updated: May 20, 2025</p>
        </div>

        <div className="bg-surface/30 border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-12">
          
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Cookie size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">1. What Are Cookies?</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
            <p className="text-slate-300 leading-relaxed">
              At Whisk Automation, we prioritize local processing. Most of your data is stored in your browser's <strong>Local Storage</strong> rather than traditional tracking cookies.
            </p>
          </section>

          {/* How We Use Them */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Settings size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">2. How We Use Cookies & Local Storage</h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-black border border-white/5">
                <h3 className="font-bold text-white mb-2 text-lg">Strictly Necessary</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  These are essential for the website and extension to function. For example, we use Local Storage to save your:
                </p>
                <ul className="list-disc list-inside mt-2 text-slate-400 text-sm">
                  <li>API Key configurations (stored locally on your device)</li>
                  <li>Extension settings (delay timers, download paths)</li>
                  <li>Theme preferences</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-white/5">
                <h3 className="font-bold text-white mb-2 text-lg">Functionality</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  These allow us to remember choices you make. We do not use these to track your browsing activity on other websites.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-white/5">
                <h3 className="font-bold text-white mb-2 text-lg">Analytics</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We may use privacy-focused analytics (non-identifiable) to understand how users interact with our documentation and landing pages to improve the user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Third Party */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                <Shield size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Third-Party Technologies</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              We may use third-party services that set their own cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong>Stripe / LemonSqueezy:</strong> Used during the checkout process to securely handle payments and prevent fraud.</li>
              <li><strong>Google Gemini API:</strong> When you generate prompts, data is transmitted to Google's servers, but no tracking cookies are set by us for this interaction.</li>
            </ul>
          </section>

          {/* Management */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <Info size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Managing Cookies</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
            <p className="text-slate-300 leading-relaxed">
              To clear Whisk Automation data, simply uninstall the extension or clear your browser's "Local Storage" for <code>whiskautomation.com</code>.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Questions?</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions about our Cookie Policy, please contact us.
            </p>
            <a href="mailto:privacy@whiskautomation.com" className="text-primary font-bold hover:underline">privacy@whiskautomation.com</a>
          </section>

        </div>
      </div>
    </div>
  );
};
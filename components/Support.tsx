import React from 'react';
import { Mail, MessageCircle, FileText } from 'lucide-react';
import { Button } from './Button';

export const Support = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-6">How can we <span className="text-primary">help?</span></h1>
          <p className="text-slate-400 text-xl">We are here to support your automation journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-surface border border-white/10 text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Email Support</h3>
            <p className="text-slate-400 text-sm mb-6">Get a response within 24 hours.</p>
            <a href="mailto:support@whiskautomation.com" className="text-primary font-bold hover:underline">support@whisk.com</a>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-white/10 text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Live Chat</h3>
            <p className="text-slate-400 text-sm mb-6">Available Mon-Fri, 9am-5pm EST.</p>
            <span className="text-slate-500 font-bold cursor-not-allowed">Offline</span>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-white/10 text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <FileText size={24} />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Documentation</h3>
            <p className="text-slate-400 text-sm mb-6">Step-by-step guides and API refs.</p>
            <span className="text-primary font-bold hover:underline cursor-pointer">View Docs</span>
          </div>
        </div>

        <div className="bg-surface/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12">
           <h2 className="text-3xl font-bold text-white mb-8 text-center">Send us a message</h2>
           <form className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Name</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Email</label>
                    <input type="email" className="w-full px-5 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
                 </div>
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Subject</label>
                   <select className="w-full px-5 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-primary outline-none transition-colors">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Billing</option>
                      <option>Feature Request</option>
                   </select>
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Message</label>
                  <textarea className="w-full px-5 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-primary outline-none transition-colors min-h-[150px]" placeholder="How can we help you today?"></textarea>
              </div>
              <div className="text-center pt-4">
                 <Button className="w-full md:w-auto">Send Message</Button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
};
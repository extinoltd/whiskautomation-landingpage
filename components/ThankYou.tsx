import React from 'react';
import { CheckCircle, Download, BookOpen, MessageSquare } from 'lucide-react';
import { Button } from './Button';

export const ThankYou = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        
        <div className="mb-12 relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full animate-pulse"></div>
            <CheckCircle size={120} className="text-primary relative z-10" fill="black" />
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
          Thank <span className="text-primary">You!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          You're all set. Your purchase was successful and you have joined the ranks of power users automating their creativity.
        </p>

        <div className="bg-surface/30 border border-white/10 rounded-[2.5rem] p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-white mb-8">What happens next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-black border border-white/5 hover:border-primary/30 transition-all group cursor-pointer" onClick={() => window.open('https://chromewebstore.google.com/detail/oahcpmhnmcfjciaehfijhfjofjddjjij', '_blank')}>
                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-slate-300 mx-auto mb-4 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                        <Download size={24} />
                    </div>
                    <h3 className="font-bold text-white mb-2">1. Install</h3>
                    <p className="text-sm text-slate-400">Get the extension from the Chrome Web Store if you haven't yet.</p>
                </div>

                <div className="p-6 rounded-2xl bg-black border border-white/5 hover:border-primary/30 transition-all group cursor-pointer" onClick={() => window.location.href = '/?view=docs'}>
                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-slate-300 mx-auto mb-4 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="font-bold text-white mb-2">2. Read Docs</h3>
                    <p className="text-sm text-slate-400">Learn how to setup your API keys and configure the delay timers.</p>
                </div>

                <div className="p-6 rounded-2xl bg-black border border-white/5 hover:border-primary/30 transition-all group cursor-pointer" onClick={() => window.location.href = 'mailto:support@whiskautomation.com'}>
                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-slate-300 mx-auto mb-4 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                        <MessageSquare size={24} />
                    </div>
                    <h3 className="font-bold text-white mb-2">3. Support</h3>
                    <p className="text-sm text-slate-400">Questions? Our support team is ready to help you optimize.</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = '/?view=home'}>
                Back to Home
            </Button>
        </div>

      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { ChevronRight, Book, Terminal, Settings, AlertCircle } from 'lucide-react';

export const Documentation = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabs = [
    { id: 'getting-started', label: 'Getting Started', icon: Book },
    { id: 'installation', label: 'Installation', icon: Terminal },
    { id: 'configuration', label: 'Configuration', icon: Settings },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: AlertCircle },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <div className="lg:col-span-3">
           <div className="sticky top-32 space-y-2">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 px-4">Docs Navigation</h3>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-primary text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                  {activeTab === tab.id && <ChevronRight size={14} className="ml-auto" />}
                </button>
              ))}
           </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-9">
           <div className="bg-surface/30 border border-white/10 rounded-[2.5rem] p-8 md:p-12 min-h-[600px]">
              {activeTab === 'getting-started' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <h1 className="text-4xl font-black text-white mb-8">Getting Started with Whisk</h1>
                   <p className="text-slate-300 text-lg leading-relaxed">
                     Whisk Automation is a powerful Chrome Extension designed to streamline your AI image generation workflow. 
                     Whether you are using Midjourney, Stable Diffusion, or other web-based generators, Whisk helps you scale from dozens to thousands of images effortlessly.
                   </p>
                   <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                      <h4 className="font-bold text-primary mb-2">Key Concepts</h4>
                      <ul className="list-disc list-inside text-slate-300 space-y-2">
                        <li><strong className="text-white">Batch Processing:</strong> Upload CSVs of prompts.</li>
                        <li><strong className="text-white">Smart Personas:</strong> Let AI rewrite your prompts.</li>
                        <li><strong className="text-white">Auto-Capture:</strong> Automatically download generated images.</li>
                      </ul>
                   </div>
                </div>
              )}

              {activeTab === 'installation' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <h1 className="text-4xl font-black text-white mb-8">Installation Guide</h1>
                   <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Step 1: Download Extension</h3>
                        <p className="text-slate-300 mb-4">You can install Whisk Automation directly from the Chrome Web Store or manually via Developer Mode.</p>
                        <div className="bg-black p-4 rounded-xl font-mono text-sm text-slate-400 border border-white/10 break-all">
                           https://chromewebstore.google.com/detail/oahcpmhnmcfjciaehfijhfjofjddjjij
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Step 2: Pin to Toolbar</h3>
                        <p className="text-slate-300">Click the puzzle piece icon in Chrome and pin Whisk Automation for easy access.</p>
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold text-white mb-4">Step 3: Login</h3>
                         <p className="text-slate-300">Open the extension and log in with your account credentials to sync your license.</p>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'configuration' && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <h1 className="text-4xl font-black text-white mb-8">Configuration</h1>
                   <p className="text-slate-300">Learn how to tweak the Human-Flow algorithm settings for maximum safety and speed.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                       <div className="p-6 rounded-2xl bg-black border border-white/10">
                          <h4 className="font-bold text-white mb-2">Delay Settings</h4>
                          <p className="text-sm text-slate-400">Adjust the min/max delay between actions to mimic human behavior.</p>
                       </div>
                       <div className="p-6 rounded-2xl bg-black border border-white/10">
                          <h4 className="font-bold text-white mb-2">Download Path</h4>
                          <p className="text-sm text-slate-400">Set the default folder where all generated assets will be saved.</p>
                       </div>
                    </div>
                 </div>
              )}

              {activeTab === 'troubleshooting' && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <h1 className="text-4xl font-black text-white mb-8">Troubleshooting</h1>
                   <div className="space-y-4">
                      <details className="bg-black rounded-xl p-4 border border-white/10 cursor-pointer">
                         <summary className="font-bold text-white">Extension not loading?</summary>
                         <p className="mt-4 text-slate-400 text-sm">Ensure you are on a supported website (e.g. Midjourney.com or Discord web). Refresh the page.</p>
                      </details>
                      <details className="bg-black rounded-xl p-4 border border-white/10 cursor-pointer">
                         <summary className="font-bold text-white">Images not downloading?</summary>
                         <p className="mt-4 text-slate-400 text-sm">Check your browser permission settings. Chrome must allow automatic downloads for the site.</p>
                      </details>
                   </div>
                 </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Users, Heart, Coffee, ShieldCheck, Target, Globe } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-6">About <span className="text-primary">Whisk Automation</span></h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            We build tools that bridge the gap between human creativity and AI scalability.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="p-10 rounded-[2.5rem] bg-surface/50 border border-white/10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Target size={200} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Our Mission</h2>
            <p className="text-slate-300 text-lg leading-relaxed relative z-10">
              At Whisk Automation, we believe that <span className="text-primary font-bold">creativity should flow, not click</span>. 
              Google Labs' Whisk (formerly ImageFX) is an incredible tool for generation, but its interface wasn't built for professional, high-volume workflows. 
              We created this tool to help designers, agencies, and power users reclaim their time by automating the repetitive parts of the creative process.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Safety First</h3>
            <p className="text-slate-400 leading-relaxed">
              We prioritize account safety above all else. Our "Human-Flow" algorithms mimic natural interaction patterns to keep your Google account secure while you automate.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
            <p className="text-slate-400 leading-relaxed">
              Whisk Automation started as a community script. We listen to our users' feedback daily to add features like auto-downloading and persona rewriting.
            </p>
          </div>
          
           <div className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
              <Coffee size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Built for Efficiency</h3>
            <p className="text-slate-400 leading-relaxed">
              We optimize for speed without compromising quality. Our tools are designed to run in the background so you can focus on other tasks while your images generate.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Accessibility</h3>
            <p className="text-slate-400 leading-relaxed">
              Creativity knows no borders. We are committed to making automation accessible to creators worldwide, supporting standard browser environments.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 bg-surface/30 p-10 rounded-[3rem] border border-white/5">
           <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6">The Story</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                It began late one night in 2024. Our founder was working on a project that required 500 variations of a specific sci-fi aesthetic. 
                After clicking "Generate" for the 50th time manually, they realized there had to be a better way.
              </p>
              <p className="text-slate-300 leading-relaxed">
                What started as a rough Python script for personal use quickly evolved into a robust Chrome Extension used by thousands of creators. 
                Today, Whisk Automation is the standard for workflow efficiency in the AI art space.
              </p>
           </div>
           <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-white/10 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/800')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
                 <Users size={64} className="text-white relative z-10" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw, ExternalLink } from 'lucide-react';
import { generateSmartPrompts } from '../services/geminiService';
import { PersonaOption, LoadingState, GeneratedPrompt } from '../types';

const PERSONAS: PersonaOption[] = [
  { id: 'general', label: 'General', description: 'Balanced style', systemInstruction: 'Create well-balanced, high-quality prompts suitable for general purpose generation.' },
  { id: 'photo', label: 'Pro Photographer', description: 'Photorealistic', systemInstruction: 'Focus on camera gear, lighting, depth of field, and realistic textures (Sony A7R, 85mm).' },
  { id: 'graphic', label: 'Graphic Designer', description: 'Vector style', systemInstruction: 'Focus on clean lines, vector art style, flat design, and commercial aesthetics.' },
  { id: 'fashion', label: 'Fashion Designer', description: 'Apparel focus', systemInstruction: 'Focus on fabric textures, draping, lighting on materials, and haute couture styling.' },
  { id: '3d', label: '3D Designer', description: 'Render style', systemInstruction: 'Focus on Octane Render, Unreal Engine 5, ray tracing, subsurface scattering, and 3D assets.' },
  { id: 'arch', label: 'Architect', description: 'Structure focus', systemInstruction: 'Focus on architectural details, lighting, brutalism or modernism, and realistic materials.' },
  { id: 'abstract', label: 'Abstract Art', description: 'Creative', systemInstruction: 'Focus on shapes, colors, emotions, non-representational forms, and artistic composition.' },
  { id: 'elements', label: 'Graphic Elements', description: 'Assets', systemInstruction: 'Focus on isolated elements, stickers, UI assets, and transparent backgrounds.' },
];

export const PersonaDemo: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [keywords, setKeywords] = useState('');
  const [selectedPersona, setSelectedPersona] = useState<PersonaOption>(PERSONAS[0]);
  const [count, setCount] = useState(5);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [results, setResults] = useState<GeneratedPrompt[]>([]);

  const handleGenerate = async () => {
    if (!keywords.trim()) return;
    setStatus(LoadingState.LOADING);
    try {
      // Split keywords by comma
      const keywordList = keywords.split(',').map(k => k.trim()).filter(k => k.length > 0);
      const prompts = await generateSmartPrompts(keywordList, selectedPersona, count, apiKey);
      setResults(prompts);
      setStatus(LoadingState.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="neon-border rounded-[3rem] bg-background/50 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_50px_rgba(250,204,21,0.15)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Input Form */}
        <div className="lg:col-span-5 space-y-8">
          <div className="border-b border-white/10 pb-4 mb-4">
             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">GEMINI INTEGRATION</h3>
          </div>

          {/* API Key */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
               <label className="block text-sm font-bold text-slate-300">API Key</label>
               <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-xs text-primary font-bold flex items-center gap-1 hover:underline">
                 Get Free Key <ExternalLink size={10} />
               </a>
            </div>
            <input 
              type="password" 
              placeholder="Paste Gemini Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-surface border border-white/10 text-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600"
            />
          </div>

          {/* Persona Grid */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-300">Persona (Style)</label>
            <div className="grid grid-cols-2 gap-3">
              {PERSONAS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPersona(p)}
                  className={`px-3 py-3 rounded-xl text-xs font-bold transition-all border
                    ${selectedPersona.id === p.id 
                      ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(250,204,21,0.4)]' 
                      : 'bg-surface text-slate-400 border-white/5 hover:bg-white/5 hover:text-slate-200'}`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-300">Keywords</label>
            <textarea
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full p-5 rounded-2xl bg-surface border border-white/10 text-slate-300 font-medium min-h-[120px] focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none placeholder:text-slate-600 transition-all text-sm"
              placeholder="e.g. futuristic city, cyber cat"
            />
          </div>

          {/* Quick Guide */}
          <div className="p-4 rounded-2xl border border-dashed border-white/10 bg-white/5 text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Quick Guide:</strong> Enter multiple keywords separated by commas (e.g. "sunset, beach, waves"). The AI will generate <span className="text-primary font-bold">{count} unique prompts</span> for <span className="underline decoration-slate-600">each</span> keyword, tailored to the selected persona.
          </div>

          {/* Count */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-300">Count per Keyword</label>
            <input 
              type="number" 
              min="1" 
              max="20"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="w-full px-5 py-3 rounded-2xl bg-surface border border-white/10 text-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          {/* Generate Button */}
          <button 
            onClick={handleGenerate}
            disabled={status === LoadingState.LOADING || !keywords.trim()}
            className="w-full py-4 bg-primary text-black font-black text-lg rounded-full hover:scale-105 transition-transform cta-glow flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(250,204,21,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === LoadingState.LOADING ? (
              <RefreshCw className="animate-spin" />
            ) : (
              'Generate Prompts'
            )}
          </button>
        </div>

        {/* Right Column: Output */}
        <div className="lg:col-span-7 h-full min-h-[600px] flex flex-col">
          <div className="relative h-full flex flex-col bg-surface/30 rounded-[2.5rem] border border-white/5 p-6 md:p-8">
            <div className="absolute -top-6 -right-4 font-handwriting text-primary text-4xl -rotate-12 z-20 select-none drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">Automated!</div>
            
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Output Console</h3>
               {results.length > 0 && (
                 <span className="text-xs font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full">{results.length} prompts generated</span>
               )}
            </div>
            
            <div className="grid grid-cols-1 gap-4 overflow-y-auto pr-2 custom-scrollbar grow max-h-[800px]">
              {results.length > 0 ? (
                results.map((prompt, idx) => (
                  <div key={idx} className="group relative p-6 rounded-2xl bg-background border border-white/10 text-slate-300 shadow-sm hover:border-primary/50 transition-colors animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="text-[10px] font-bold text-slate-600 uppercase mb-2 flex justify-between">
                      <span>Prompt #{idx + 1}</span>
                      <span className="text-primary/50">{selectedPersona.label}</span>
                    </div>
                    <p className="text-sm leading-relaxed font-medium">"{prompt.text}"</p>
                    <button 
                      className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 text-primary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-black"
                      onClick={() => navigator.clipboard.writeText(prompt.text)}
                      title="Copy"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                ))
              ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                    <Sparkles size={48} className="mb-4 text-slate-500" />
                    <p className="text-slate-400 font-medium">Ready to generate.</p>
                    <p className="text-slate-600 text-sm mt-2">Configure the settings on the left and hit Generate.</p>
                 </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
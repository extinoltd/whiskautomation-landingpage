import React from 'react';
    import { LucideIcon } from 'lucide-react';
    
    interface FeatureCardProps {
      icon: LucideIcon;
      title: string;
      description: string;
    }
    
    export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
      return (
        <div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 group relative overflow-hidden">
          {/* Hover Glow Effect */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-[80px] group-hover:bg-yellow-400/20 transition-all duration-500" />
          
          <div className="w-14 h-14 bg-zinc-900/80 rounded-2xl flex items-center justify-center mb-6 text-[#FFD600] border border-white/5 shadow-inner">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
          <p className="text-zinc-400 leading-relaxed font-light text-sm">{description}</p>
        </div>
      );
    };

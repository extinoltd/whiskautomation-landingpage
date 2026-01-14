import React, { useContext } from 'react';
import {
  Play,
  Clock,
  Check,
  Zap,
  Shield,
  ArrowRight,
  ArrowLeft,
  X,
  Star,
  ChevronDown
} from 'lucide-react';
import { Button } from './Button';
import { PersonaDemo } from './PersonaDemo';
import { LangContext } from '../LangContext';
import { FEATURE_LIST } from '../translations';

const EXTENSION_URL = 'https://chromewebstore.google.com/detail/oahcpmhnmcfjciaehfijhfjofjddjjij';

// Reusable Red Circle Component
export const RedCircleSVG = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 300 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute pointer-events-none select-none ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M20 50 C20 20 80 10 150 10 C240 10 280 30 280 50 C280 80 220 90 150 90 C70 90 20 70 20 50 Z"
      stroke="#EF4444"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-90"
    />
  </svg>
);

const TESTIMONIALS = [
  {
    rating: 5,
    quote: "I was looking for how to download all images from Google Whisk and found this. It turned a 40-hour work week into a 4-hour monitoring task.",
    name: "Marcus Sterling",
    role: "Creative Director @ Nexa",
    img: "https://picsum.photos/100/100?random=1"
  },
  {
    rating: 5,
    quote: "The best Google Whisk extensions usually crash, but this one is rock solid. Whisk AI batch processing is a game changer.",
    name: "Sarah Chen",
    role: "Independent AI Artist",
    img: "https://picsum.photos/100/100?random=2",
    highlight: true
  },
  {
    rating: 5,
    quote: "Finally, I can automate Google Whisk prompts without getting banned. The human-like pacing is incredibly smart.",
    name: "David Thorne",
    role: "Stock Media Producer",
    img: "https://picsum.photos/100/100?random=3"
  },
  {
    rating: 5,
    quote: "Whisk AI for power users is right. I've scaled my agency's output by 10x using the Google Whisk multiple images at once feature.",
    name: "Elena Rodriguez",
    role: "Agency Owner",
    img: "https://picsum.photos/100/100?random=4"
  },
  {
    rating: 5,
    quote: "Compared to other free Whisk automation tools, this pays for itself in one day. The auto downloader saves my wrist.",
    name: "James Kim",
    role: "Freelance Designer",
    img: "https://picsum.photos/100/100?random=5"
  }
];

export const Home = () => {
  const { t, isRTL } = useContext(LangContext);
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 reveal">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold mb-8 text-primary tracking-widest uppercase animate-fade-in-up shadow-[0_0_20px_rgba(250,204,21,0.2)]">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-8 text-white drop-shadow-[0_0_25px_rgba(0,0,0,0.5)] reveal reveal-delay-100">
            {t.hero.titlePrefix} <br />
            {t.hero.titleMiddle} <span className="relative inline-block mt-2">
              <span className="yellow-gradient-text relative z-10 px-4">{t.hero.titleSuffix}</span>
              <RedCircleSVG className="-left-6 -top-4 w-[140%] h-[160%] rotate-1" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-medium leading-relaxed reveal reveal-delay-200">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal reveal-delay-300">
            <Button size="lg" className="flex items-center gap-2" onClick={() => window.open(EXTENSION_URL, '_blank')}>
              {t.hero.ctaPrimary} <Zap size={20} fill="currentColor" />
            </Button>
            <Button variant="secondary" size="lg" className="flex items-center gap-2">
              <Play size={20} className={isRTL ? 'scale-x-[-1]' : ''} /> {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </header>

      {/* Video / Action Section */}
      <section id="video" className="py-24 relative overflow-hidden section-glow scroll-mt-32">
        <div className="max-w-5xl mx-auto px-6 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase italic text-white">Streamline <span className="text-primary">Google Labs Whisk</span></h2>
            <p className="text-slate-400">See Whisk AI batch processing in action. Generate 1000s of images hands-free.</p>
          </div>
          <div className="relative group cursor-pointer reveal reveal-delay-200">
            <div className="absolute -inset-1 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/40 transition duration-500" />
            <div className="relative bg-surface/80 backdrop-blur-sm rounded-[2.5rem] border-2 border-primary overflow-hidden aspect-video shadow-[0_0_60px_rgba(250,204,21,0.25)]">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.6)] group-hover:scale-110 transition-transform">
                  <Play size={40} className={`text-black ${isRTL ? 'mr-1 scale-x-[-1]' : 'ml-1'}`} fill="currentColor" />
                </div>
              </div>
              <img
                alt="Google Whisk workflow automation dashboard showing bulk generation"
                className="w-full h-full object-cover opacity-60"
                src="https://picsum.photos/seed/cyber/1200/800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tension Builder Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <div className="relative group">
            {/* Glow effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-[3rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative rounded-[3rem] bg-[#080808] border border-white/10 p-12 md:p-20 text-center overflow-hidden shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold mb-8 mx-auto reveal reveal-delay-100">
                <Zap size={14} fill="currentColor" /> Whisk AI for Power Users
              </div>

              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight reveal reveal-delay-200">
                Stop Manually <span className="text-primary">Clicking</span>
              </h2>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed reveal reveal-delay-300">
                Every hour you spend manually generating is wasted. Use our Google Whisk auto downloader and prompt automator to reclaim your time.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-sm font-bold text-slate-300 reveal reveal-delay-300">
                <div className="flex items-center justify-center gap-2">
                  <Clock size={18} className="text-primary" /> Save 20+ hours/mo
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap size={18} className="text-primary" /> Bulk Generate 10k+
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield size={18} className="text-primary" /> Safe Automation
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 reveal reveal-delay-300">
                <Button size="lg" className="w-full md:w-auto shadow-[0_0_40px_rgba(250,204,21,0.3)] !text-xl !py-5" onClick={() => window.open(EXTENSION_URL, '_blank')}>
                  {t.cta.title} <Arrow className="mx-2" size={24} />
                </Button>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                  Best Google Whisk Extensions • Lifetime updates • 30-day money-back
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 relative section-glow scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 relative reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase italic inline-block relative text-white">
              {t.comparison.title} <span className="text-primary">Whisk Automation</span>
              <svg className="absolute -bottom-4 left-0 w-full" fill="none" height="12" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C30 3 170 3 198 10" stroke="#FACC15" strokeLinecap="round" strokeWidth="4"></path>
              </svg>
            </h2>
            <p className="text-slate-400 mt-6">Why we are the premium WhiskAutomator alternative.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old Way */}
            <div className="p-10 rounded-[3rem] border border-white/5 bg-surface/40 backdrop-blur-md relative overflow-hidden group shadow-lg reveal reveal-delay-100">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Clock size={120} />
              </div>
              <div className="text-rose-500 font-black text-xl mb-8 flex items-center gap-2">
                <X size={28} /> {t.comparison.manual}
              </div>
              <div className="space-y-8">
                {[
                  { t: "One by One Generation", d: "Manually typing prompts. No Google Whisk multiple images at once capability." },
                  { t: "Right-Click Save", d: "No Google Whisk auto downloader. Saving files takes hours." },
                  { t: "Risk of Bans", d: "Spam clicking triggers bot detection quickly." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                      <X size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-200">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 rounded-[2rem] bg-rose-500/5 border border-rose-500/20 text-center">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-1">Total Effort</div>
                <div className="text-3xl font-black text-rose-500">{t.comparison.manualEffort}</div>
              </div>
            </div>

            {/* Whisk Way */}
            <div className="p-10 rounded-[3rem] neon-border bg-primary/5 backdrop-blur-md relative overflow-hidden group shadow-[0_0_30px_rgba(250,204,21,0.15)] reveal reveal-delay-300">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <Zap size={120} className="text-primary" />
              </div>
              <div className="text-primary font-black text-xl mb-8 flex items-center gap-2">
                <Check size={28} /> {t.comparison.automated}
              </div>
              <div className="space-y-8">
                {[
                  { t: "Whisk AI Batch Processing", d: "Upload 10,000 prompts. We automate Google Whisk prompts entirely." },
                  { t: "Auto Downloader Included", d: "We answer 'how to download all images from Google Whisk' automatically." },
                  { t: "Smart Pacing Engine", d: "Proprietary algorithm stays under the radar. The safe Whisk AI for power users." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{item.t}</h4>
                      <p className="text-slate-400 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 rounded-[2rem] bg-primary/20 border border-primary/40 text-center shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Total Effort</div>
                <div className="text-3xl font-black text-primary">{t.comparison.autoEffort}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-black relative scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Best Google Whisk <span className="text-primary">Extensions</span> Features
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built for those asking "How to bulk generate images in Google Whisk?". Every feature is designed for scale.
            </p>
          </div>

          {/* Flex Layout for Centered Tiles */}
          <div className="flex flex-wrap justify-center gap-6">
            {FEATURE_LIST.map((feature, idx) => (
              <div
                key={idx}
                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-primary border border-primary/50 rounded-[2.5rem] p-8 hover:scale-105 transition-all duration-300 group shadow-lg flex flex-col reveal reveal-delay-${(idx % 4) * 100}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-black text-primary flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-xl">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-extrabold text-black mb-3 text-lg leading-tight">{feature.title}</h3>
                <p className="text-zinc-800 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator / Persona Section */}
      <section id="generator" className="py-24 relative section-glow scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase text-white leading-tight">
              Automate Google Whisk <br />
              <span className="relative inline-block mt-3">
                <span className="font-handwriting absolute -top-5 -left-8 text-white text-2xl md:text-3xl -rotate-12 drop-shadow-md">
                  Smart
                </span>
                <span className="yellow-gradient-text relative z-10 px-6">Prompts</span>
                <RedCircleSVG className="-left-1 -top-2 w-[110%] h-[120%] -rotate-1" />
              </span>
            </h2>
            <p className="text-slate-400 mt-8">Experience Google Whisk workflow automation. See how we transform keywords into prompts.</p>
          </div>

          <PersonaDemo />

        </div>
      </section>

      {/* Testimonials Slider */}
      <section id="testimonials" className="py-24 relative section-glow overflow-hidden scroll-mt-32 reveal">
        <div className="text-center mb-16 relative px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold italic inline-block relative text-white">
            Rated #1 of <span className="text-primary">Best Google Whisk Extensions</span>
            <svg className="absolute -bottom-4 left-0 w-full" fill="none" height="12" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10C40 2 160 2 195 10" stroke="#FACC15" strokeLinecap="round" strokeWidth="4"></path>
            </svg>
          </h2>
        </div>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll hover:pause">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <li key={idx} className="w-[350px] md:w-[450px] flex-shrink-0">
                <div className={`h-full p-8 rounded-[2.5rem] bg-surface/50 backdrop-blur-sm border border-white/5 hover:border-primary/40 transition-all group shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] ${testimonial.highlight ? 'border-primary bg-surface/80' : ''}`}>
                  <div className="flex gap-1 text-primary mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className={`mb-8 italic leading-relaxed ${testimonial.highlight ? 'text-white font-medium' : 'text-slate-300'}`}>"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img alt={testimonial.name} className={`w-12 h-12 rounded-full object-cover ${testimonial.highlight ? 'border-2 border-primary shadow-[0_0_10px_rgba(250,204,21,0.5)]' : 'border border-primary/30'}`} src={testimonial.img} />
                    <div>
                      <div className={`font-bold ${testimonial.highlight ? 'text-primary' : 'text-white'}`}>{testimonial.name}</div>
                      <div className="text-xs text-slate-500 font-bold uppercase">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative section-glow scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-lg md:text-xl font-bold mb-8 animate-pulse shadow-[0_0_30px_rgba(244,63,94,0.2)]">
              <Zap size={24} fill="currentColor" />
              <span>Limited: Export Whisk AI Images in Bulk <span className="underline decoration-wavy">50% OFF</span></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase text-white">
              {t.pricing.title} <span className="text-primary">Now</span>
            </h2>
            <p className="text-slate-400">Better than free Whisk automation tools. Professional support included.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            <div className="p-8 rounded-[2rem] bg-surface/40 border border-white/5 hover:border-white/10 transition-all text-center group relative reveal reveal-delay-200">
              <h3 className="font-bold text-xl text-slate-300 mb-2">{t.pricing.monthly}</h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-slate-500 line-through text-lg">$3.99</span>
                <span className="text-4xl font-black text-white">$1.99</span>
                <span className="text-sm text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-left text-sm text-slate-300">
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Whisk AI batch processing</li>
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Auto Downloader</li>
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Auto-Save to Disk</li>
              </ul>
              <Button variant="secondary" className="w-full">{t.pricing.monthly}</Button>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-surface/80 border-2 border-primary shadow-[0_0_50px_rgba(250,204,21,0.15)] text-center relative transform md:-translate-y-4 z-10 reveal reveal-delay-100">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
                {t.pricing.mostPopular}
              </div>
              <h3 className="font-bold text-primary mb-2">{t.pricing.yearly}</h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-slate-500 line-through text-lg">$29.99</span>
                <span className="text-5xl font-black text-white">$14.99</span>
                <span className="text-sm text-slate-500">/yr</span>
              </div>
              <p className="text-xs text-green-400 font-bold mb-6">{t.pricing.save}</p>
              <ul className="space-y-4 mb-8 text-left text-sm text-slate-200">
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Google Whisk auto downloader</li>
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Priority Support</li>
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Whisk AI multiple images</li>
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Cancel Anytime</li>
              </ul>
              <Button className="w-full py-4 text-lg">{t.pricing.yearly}</Button>
            </div>

            <div className="p-8 rounded-[2rem] bg-surface/40 border border-white/5 hover:border-white/10 transition-all text-center group relative reveal reveal-delay-300">
              <h3 className="font-bold text-xl text-slate-300 mb-2">{t.pricing.lifetime}</h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-slate-500 line-through text-lg">$59.99</span>
                <span className="text-4xl font-black text-white">$29.99</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{t.pricing.oneTime}</p>
              <ul className="space-y-4 mb-8 text-left text-sm text-slate-300">
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Lifetime Updates</li>
                <li className="flex gap-2"><Check size={16} className="text-primary" /> No Recurring Fees</li>
                <li className="flex gap-2"><Check size={16} className="text-primary" /> Commercial License</li>
              </ul>
              <Button variant="secondary" className="w-full">{t.pricing.lifetime}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 relative section-glow scroll-mt-32">
        <div className="max-w-3xl mx-auto px-6 reveal">
          <h2 className="text-4xl font-extrabold text-center mb-16 italic text-white">Google Whisk <span className="text-primary">{t.faq.title}</span></h2>
          <div className="space-y-4">
            {t.faq.items.map((faq: any, idx: number) => (
              <div key={idx} className="group reveal reveal-delay-100">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 rounded-[2rem] bg-surface/50 backdrop-blur-sm border border-white/10 cursor-pointer hover:border-primary/40 transition-all hover:bg-surface/70"
                >
                  <span className="font-bold text-lg text-left text-white pl-4 rtl:pr-4 rtl:pl-0">{faq.q}</span>
                  <ChevronDown className={`transition-transform text-primary ${openFaqIndex === idx ? 'rotate-180' : ''} mx-2`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 text-slate-400 bg-surface/30 rounded-b-[2rem] border-x border-b border-white/10 mx-2 mb-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center reveal">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none text-white tracking-tighter">
            {t.cta.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="px-10 py-5 text-xl" onClick={() => window.open(EXTENSION_URL, '_blank')}>
              Automate Google Whisk <Arrow className="mx-2" />
            </Button>
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> No credit card required</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Chrome extensions for Google Labs</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Rocket,
  Globe
} from 'lucide-react';
import { Button } from './components/Button';
import { translations, Language } from './translations';
import { LangContext } from './LangContext';

// Import Pages
import { Home } from './components/Home';
import { Support } from './components/Support';
import { Documentation } from './components/Documentation';
import { Blog } from './components/Blog';
import { About } from './components/About';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CookiePolicy } from './components/CookiePolicy';
import { ThankYou } from './components/ThankYou';
import { TermsOfService } from './components/TermsOfService';

type View = 'home' | 'support' | 'docs' | 'blog' | 'about' | 'privacy_policy' | 'cookie-policy' | 'thank-you' | 'terms-of-service';

const SUPPORTED_LANGS: Language[] = ['en', 'zh', 'es', 'ar', 'pt', 'de', 'ja', 'ko', 'nl', 'vi', 'tr', 'bn', 'th', 'pl', 'ru'];
const EXTENSION_URL = 'https://chromewebstore.google.com/detail/oahcpmhnmcfjciaehfijhfjofjddjjij';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [lang, setLangState] = useState<Language>('en');

  // Initialize State from URL (SEO Support)
  useEffect(() => {
    // 1. Language
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Language;
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) {
      setLangState(urlLang);
    } else {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (SUPPORTED_LANGS.includes(browserLang)) {
        setLangState(browserLang);
      }
    }

    // 2. View/Route (Simulated Router)
    // We check purely based on query param '?view=' or path for simple hosting
    // This allows https://whiskautomation.com/?view=blog to work
    const viewParam = params.get('view') as View;

    // Also check pathname (e.g. /blog) if server rewrites are enabled
    const path = window.location.pathname.replace(/^\/|\/$/g, '');

    const validViews = ['home', 'support', 'docs', 'blog', 'about', 'privacy_policy', 'cookie-policy', 'thank-you', 'terms-of-service'];

    if (viewParam && validViews.includes(viewParam)) {
      setCurrentView(viewParam);
    } else if (path && validViews.includes(path)) {
      setCurrentView(path as View);
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const newParams = new URLSearchParams(window.location.search);
      const newView = newParams.get('view') as View || 'home';
      setCurrentView(newView);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('lang', newLang);
    window.history.pushState({}, '', newUrl);
  };

  const isRTL = lang === 'ar';
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    // Dynamic Title Logic
    let pageTitle = t.meta.title;
    if (currentView !== 'home') {
      const formattedTitle = currentView
        .replace(/_/g, ' ')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      pageTitle = `${formattedTitle} - Whisk Automation`;
    }
    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
  }, [lang, isRTL, t, currentView]);

  // Scroll Animation Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const handleMutation = () => {
      const hiddenElements = document.querySelectorAll('.reveal:not(.active)');
      hiddenElements.forEach((el) => observer.observe(el));
    };

    // Initial check
    handleMutation();

    // Watch for new elements (route changes)
    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Enhanced Navigation with URL updates
  const navigateTo = (view: View, sectionId?: string) => {
    setMobileMenuOpen(false);

    // Update URL state
    if (view !== currentView) {
      const newUrl = new URL(window.location.href);
      // We use query param '?view=' for compatibility with static hosting (GitHub Pages/S3)
      // that might not support clean URL rewrites easily. 
      newUrl.searchParams.set('view', view);

      // Remove section hash if switching pages
      if (!sectionId) {
        newUrl.hash = '';
      }

      window.history.pushState({}, '', newUrl);
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (!sectionId) {
      // If staying on same view and no section specified, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t, isRTL }}>
      <div className={`min-h-screen bg-background text-slate-100 font-display selection:bg-primary selection:text-black relative overflow-x-hidden ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>

        {/* --- GLOBAL BACKGROUND DYNAMIC --- */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #808080 1px, transparent 1px),
                linear-gradient(to bottom, #808080 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}
          />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 mix-blend-screen filter blur-[100px] animate-liquid" />
          <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-rose-500/5 mix-blend-screen filter blur-[100px] animate-liquid animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-primary/5 mix-blend-screen filter blur-[120px] animate-liquid animation-delay-4000" />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
              <img
                alt="Whisk Automation Logo"
                className="w-10 h-10 rounded-xl shadow-[0_0_15px_rgba(250,204,21,0.5)] object-cover"
                src="/logo.png"
              />
              <span className="font-extrabold text-xl tracking-tight text-white">Whisk <span className="text-primary">Automation</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium text-sm">
              <button className={`hover:text-primary transition-colors ${currentView === 'home' ? 'text-white' : 'text-slate-400'}`} onClick={() => navigateTo('home')}>{t.nav.home}</button>
              <button className="hover:text-primary transition-colors text-slate-400" onClick={() => navigateTo('home', 'features')}>{t.nav.features}</button>
              <button className="hover:text-primary transition-colors text-slate-400" onClick={() => navigateTo('home', 'pricing')}>{t.nav.pricing}</button>
              <button className={`hover:text-primary transition-colors ${currentView === 'docs' ? 'text-white' : 'text-slate-400'}`} onClick={() => navigateTo('docs')}>{t.nav.docs}</button>
              <button className={`hover:text-primary transition-colors ${currentView === 'blog' ? 'text-white' : 'text-slate-400'}`} onClick={() => navigateTo('blog')}>{t.nav.blog}</button>

              {/* Language Switcher */}
              <div className="relative group ml-4">
                <button className="flex items-center gap-1 text-slate-400 hover:text-white uppercase font-bold text-xs">
                  <Globe size={14} /> {lang}
                </button>
                <div className="absolute top-full right-0 mt-2 bg-surface border border-white/10 rounded-xl p-2 hidden group-hover:block w-32 max-h-64 overflow-y-auto custom-scrollbar shadow-xl">
                  {SUPPORTED_LANGS.map(l => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-white/5 ${lang === l ? 'text-primary font-bold' : 'text-slate-400'}`}
                    >
                      {l === 'en' && 'English'}
                      {l === 'zh' && '中文'}
                      {l === 'es' && 'Español'}
                      {l === 'ar' && 'العربية'}
                      {l === 'pt' && 'Português'}
                      {l === 'de' && 'Deutsch'}
                      {l === 'ja' && '日本語'}
                      {l === 'ko' && '한국어'}
                      {l === 'nl' && 'Nederlands'}
                      {l === 'vi' && 'Tiếng Việt'}
                      {l === 'tr' && 'Türkçe'}
                      {l === 'bn' && 'বাংলা'}
                      {l === 'th' && 'ไทย'}
                      {l === 'pl' && 'Polski'}
                      {l === 'ru' && 'Русский'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <Button size="sm" onClick={() => window.open(EXTENSION_URL, '_blank')}>{t.nav.install}</Button>
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-primary/10 p-4 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('home')}>{t.nav.home}</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('home', 'features')}>{t.nav.features}</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('home', 'pricing')}>{t.nav.pricing}</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('docs')}>{t.nav.docs}</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('blog')}>{t.nav.blog}</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('support')}>{t.nav.support}</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('about')}>{t.nav.about}</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('privacy_policy')}>{t.nav.privacy}</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('cookie-policy')}>Cookie Policy</button>
              <button className="block w-full text-left text-slate-300 hover:text-primary p-2" onClick={() => navigateTo('terms-of-service')}>Terms of Service</button>

              <div className="flex gap-2 flex-wrap border-t border-white/10 pt-4 mt-2">
                {SUPPORTED_LANGS.map(l => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                    className={`px-3 py-1 rounded border border-white/10 text-xs uppercase ${lang === l ? 'bg-primary text-black' : 'text-slate-400'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <Button className="w-full" onClick={() => window.open(EXTENSION_URL, '_blank')}>{t.nav.install}</Button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content Wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <main className="flex-grow">
            {currentView === 'home' && <Home />}
            {currentView === 'support' && <Support />}
            {currentView === 'docs' && <Documentation />}
            {currentView === 'blog' && <Blog />}
            {currentView === 'about' && <About />}
            {currentView === 'privacy_policy' && <PrivacyPolicy />}
            {currentView === 'cookie-policy' && <CookiePolicy />}
            {currentView === 'terms-of-service' && <TermsOfService />}
            {currentView === 'thank-you' && <ThankYou />}
          </main>

          {/* Footer */}
          <footer className="bg-black/50 backdrop-blur-md border-t border-white/5 pt-20 pb-10 mt-auto">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigateTo('home')}>
                    <img alt="Whisk Automation Logo" className="w-8 h-8 rounded-lg object-cover" src="/logo.png" />
                    <span className="font-extrabold text-xl text-white">Whisk <span className="text-primary">Automation</span></span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-6">
                    {t.hero.subtitle}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">Product</h4>
                  <ul className="space-y-4 text-slate-500">
                    <li><button className="hover:text-primary transition-colors text-left" onClick={() => navigateTo('home', 'features')}>{t.nav.features}</button></li>
                    <li><button className="hover:text-primary transition-colors text-left" onClick={() => navigateTo('home', 'generator')}>Generator</button></li>
                    <li><button className="hover:text-primary transition-colors text-left" onClick={() => navigateTo('home', 'pricing')}>{t.nav.pricing}</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">Resources</h4>
                  <ul className="space-y-4 text-slate-500">
                    <li><button className="hover:text-primary transition-colors text-left" onClick={() => navigateTo('support')}>{t.nav.support}</button></li>
                    <li><button className="hover:text-primary transition-colors text-left" onClick={() => navigateTo('docs')}>{t.nav.docs}</button></li>
                    <li><button className="hover:text-primary transition-colors text-left" onClick={() => navigateTo('blog')}>{t.nav.blog}</button></li>
                    <li><button className="hover:text-primary transition-colors text-left" onClick={() => navigateTo('about')}>{t.nav.about}</button></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-500">
                <div className="flex gap-8">
                  <button className="hover:text-white transition-colors" onClick={() => navigateTo('privacy_policy')}>{t.nav.privacy}</button>
                  <button className="hover:text-white transition-colors" onClick={() => navigateTo('cookie-policy')}>Cookie Policy</button>
                  <button className="hover:text-white transition-colors" onClick={() => navigateTo('terms-of-service')}>Terms of Service</button>
                </div>
                <p>© 2026 Whisk Automation. All rights reserved.</p>
              </div>
            </div>
          </footer>


        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
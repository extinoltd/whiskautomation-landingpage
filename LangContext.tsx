import { createContext } from 'react';
import { translations, Language } from './translations';

export interface LangContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations['en'];
  isRTL: boolean;
}

export const LangContext = createContext<LangContextType>({ 
  lang: 'en', 
  setLang: () => {}, 
  t: translations['en'], 
  isRTL: false 
});
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PersonaOption {
  id: string;
  label: string;
  description: string;
  systemInstruction: string;
}

export interface GeneratedPrompt {
  text: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

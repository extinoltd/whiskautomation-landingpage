import { GoogleGenAI, Type } from "@google/genai";
import { PersonaOption, GeneratedPrompt } from "../types";

// Default client (uses environment variable if available)
const defaultAi = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateSmartPrompts = async (
  keywords: string[],
  persona: PersonaOption,
  count: number,
  userApiKey?: string
): Promise<GeneratedPrompt[]> => {
  
  // Use user provided key if available, otherwise default
  let aiClient = defaultAi;
  if (userApiKey && userApiKey.trim() !== '') {
    aiClient = new GoogleGenAI({ apiKey: userApiKey });
  } else if (!process.env.API_KEY) {
     // Fallback for demo purposes if no key is present in environment AND no user key
    console.warn("API Key missing. Returning mock data.");
    const mockResults: GeneratedPrompt[] = [];
    keywords.forEach(topic => {
        for(let i=0; i<count; i++) {
            mockResults.push({ text: `[${persona.label} Mock] A detailed prompt about ${topic} #${i+1}` });
        }
    });
    return mockResults;
  }

  try {
    const topicListString = keywords.join(', ');
    const response = await aiClient.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate exactly ${count} distinct, high-quality AI image generation prompts for EACH of the following subjects: "${topicListString}".`,
      config: {
        systemInstruction: `You are a ${persona.label}. ${persona.systemInstruction}. Your task is to write high-fidelity image generation prompts (Midjourney/Stable Diffusion style). Return a flat list of all prompts.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            prompts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const jsonResponse = JSON.parse(response.text || '{"prompts": []}');
    return jsonResponse.prompts;
  } catch (error) {
    console.error("Error generating prompts:", error);
    throw error;
  }
};
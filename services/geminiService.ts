import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDesignAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are an expert interior design consultant for 'Janjua Furniture House'. 
              We specialize in premium handmade furniture, antique restoration, and modern upholstery.
              Keep your answer concise (under 100 words), helpful, and polite. 
              Suggest specific furniture types or styles based on the user's query.
              
              User Query: ${userQuery}`
            }
          ]
        }
      ],
    });

    return response.text || "I'm sorry, I couldn't generate a suggestion right now.";
  } catch (error) {
    console.error("Error fetching design advice:", error);
    return "Our design systems are currently offline. Please try again later or contact our showroom directly.";
  }
};

import { GoogleGenAI } from "@google/genai";

// API Key is expected to be set in the environment.
// The instructions specify `process.env.API_KEY` directly.
const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.error("API_KEY environment variable is not set. Image generation will fail.");
}

export const generateImageFromPrompt = async (prompt: string): Promise<string> => {
  if (!ai) {
    throw new Error("Gemini API client is not initialized. Check API_KEY configuration.");
  }

  try {
    // Use the correct method for image generation with Gemini 2.0 Flash
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: prompt,
      config: {
        responseModalities: ['Text', 'Image']
      }
    });

    // Process the response to find the image data
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            // The API returns a raw base64 string. We need to prepend the data URL scheme.
            const mimeType = part.inlineData.mimeType || 'image/jpeg';
            return `data:${mimeType};base64,${part.inlineData.data}`;
          }
        }
      }
    }
    
    console.error("Unexpected API response structure:", response);
    throw new Error("No image data received from API or unexpected response structure.");
  } catch (error) {
    console.error("Error generating image via Gemini API:", error);
    if (error instanceof Error) {
      // Check for specific Gemini API error messages if available, or re-throw generic one
      if (error.message.includes("API key not valid") || error.message.includes("Invalid API key")) {
         throw new Error("Invalid API Key. Please check your configuration.");
      }
      throw new Error(`Failed to generate image: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the image.");
  }
};
    
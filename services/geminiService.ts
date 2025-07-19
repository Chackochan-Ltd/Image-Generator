
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
    // Use 'imagen-3.0-generate-002' for image generation
    const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: prompt,
        config: { 
          numberOfImages: 1, 
          outputMimeType: 'image/jpeg' // Request JPEG for broad compatibility and good quality
        },
    });

    if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image?.imageBytes) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      // The API returns a raw base64 string. We need to prepend the data URL scheme.
      // The outputMimeType requested was 'image/jpeg'.
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    } else {
      console.error("Unexpected API response structure:", response);
      throw new Error("No image data received from API or unexpected response structure.");
    }
  } catch (error) {
    console.error("Error generating image via Gemini API:", error);
    if (error instanceof Error) {
      // Check for specific Gemini API error messages if available, or re-throw generic one
      if (error.message.includes("API key not valid")) {
         throw new Error("Invalid API Key. Please check your configuration.");
      }
      throw new Error(`Failed to generate image: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the image.");
  }
};
    
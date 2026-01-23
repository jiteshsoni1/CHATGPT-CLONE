import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const getGeminiAPIResponse = async (message) => {
  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: message }]
        }
      ]
    });

    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Gemini API Error";
  }
};

export default getGeminiAPIResponse;

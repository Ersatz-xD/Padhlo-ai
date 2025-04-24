import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const genAi = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateSummary = async (req, res) => {
  try {
    const { topic, notes } = req.body;

    console.log("Received on backend:", { topic, notes });

    if (!topic || !notes) {
      return res.status(400).json({ error: "Topic and notes are required." });
    }

    const prompt = `You are a study assistant. Format and improve the following rough notes into clean, structured notes based on the topic.
Topic: ${topic}
Rough Notes: ${notes}
Return a clear explanation with headings, bullet points, and simple language.`;

    // ✅ Using your exact syntax:
    const response = await genAi.models.generateContent({
      model: "gemini-2.0-flash", // or "gemini-1.5-pro", etc.
      contents: prompt,
    });

    const text = response.text;
    res.json({ summary: text });

  } catch (e) {
    console.error("Gemini API Error:", e);
    res.status(500).json({ error: e.message });
  }
};

export { generateSummary };

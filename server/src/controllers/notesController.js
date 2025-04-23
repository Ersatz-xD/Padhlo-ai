import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateSummary = async (req, res) => {
  try {
    const { topic, notes } = req.body;
    const model = genAi.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are a study assistant. Format and improve the following rough notes into clean, structured notes based on the topic.
Topic: ${topic}
Rough Notes: ${notes}
Return a clear explanation with headings, bullet points, and simple language.
     `;

     const result = await model.generateContent(prompt);
     const response = await result.response;
     const text = response.text();

     res.json({ summary:text })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
};

export { generateSummary };

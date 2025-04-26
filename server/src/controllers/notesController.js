import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import Note from '../models/Note.js';

dotenv.config();

const genAi = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateSummary = async (req, res) => {
  try {
    const { topic, notes, userId } = req.body;

    console.log("Received on backend:", { topic, notes, userId });

    
    if (!topic || !notes) {
      return res.status(400).json({ error: "Topic and notes are required." });
    }

    
    const finalUserId = userId || null;  

    const prompt = `You are a study assistant. Format and improve the following rough notes into clean, structured notes based on the topic.
Topic: ${topic}
Rough Notes: ${notes}
Return a clear explanation with headings, bullet points, and simple language.`;

    const response = await genAi.models.generateContent({
      model: "gemini-2.0-flash", 
      contents: prompt,
    });

    const text = response.text;

    // Save to MongoDB 
    const newNote = new Note({
      userId: finalUserId,
      topic: topic,
      content: text,
    });

    const savedNote = await newNote.save();

    res.status(201).json({ summary: text });
  } catch (e) {
    console.error("Gemini API Error:", e);
    res.status(500).json({ error: e.message });
  }
};



const getAllNotes = async (req, res) => {
  try {
    const userId = req.user._id; 

    if (!userId) {
      return res.status(400).json({ error: "UserId is required." });
    }

    const notes = await Note.find({ userId });

    res.status(200).json(notes);
  } catch (e) {
    console.error("Error fetching notes:", e);
    res.status(500).json({ error: e.message });
  }
};


export { generateSummary , getAllNotes };

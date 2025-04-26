import React, { useState, useEffect } from "react";
import "./notespage.css";
import NotesGeneratorBox from "../modules/notes-helper/components/NotesGeneratorBox";
import GeneratedNotes from "../modules/notes-helper/components/GeneratedNotes";
import { getNotesFromAI } from "../api/notesHelper";
import axios from "axios";

const NotesPage = () => {
  const [generatedNotes, setGeneratedNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGeneratedNotes = async (topic, roughNotes) => {
    setLoading(true);
    const explanation = await getNotesFromAI(topic, roughNotes);

    const newNote = { topic, explanation };
    setGeneratedNotes((prev) => [newNote, ...prev]);
    setLoading(false);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token found. Skipping API call.");
          return;
        }
        
      try {
        
        const response = await axios.get(
          "http://localhost:5000/api/get-all-notes",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const notes = response.data;

        const formattedNotes = notes.map((note) => ({
          topic: note.topic,
          explanation: note.content,
        }));

        setGeneratedNotes(formattedNotes);
      } catch (error) {
        console.error("Error fetching user notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="parent-div">
      <div className="main-heading">
        <h1 className="text">Notes Helper</h1>
        <h6 className="text slogan">
          Turn Rough Notes into Perfect Study Material
        </h6>
      </div>

      <div className="notes-generator-box">
        <NotesGeneratorBox onGenerate={handleGeneratedNotes} />
      </div>

      {loading && <div className="loader"></div>}

      <div className="generated-notes-box">
        {generatedNotes.map((note, index) => (
          <GeneratedNotes
            key={index}
            topic={note.topic}
            explanation={note.explanation}
          />
        ))}
      </div>
    </div>
  );
};
export default NotesPage;
